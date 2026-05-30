import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyMidtransSignature } from "@/lib/midtrans";
import { sendDownloadEmail } from "@/lib/mailer";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      order_id,
      transaction_status,
      fraud_status,
      status_code,
      gross_amount,
      signature_key,
      transaction_id,
    } = body;

    // Verify signature
    const isValid = verifyMidtransSignature(
      order_id,
      status_code,
      gross_amount,
      process.env.MIDTRANS_SERVER_KEY!,
      signature_key
    );

    if (!isValid) {
      console.error("Invalid Midtrans signature for order:", order_id);
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    // Find order
    const order = await prisma.order.findUnique({
      where: { orderId: order_id },
      include: { product: true },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // Determine payment result
    const isPaid =
      (transaction_status === "capture" && fraud_status === "accept") ||
      transaction_status === "settlement";

    const isFailed =
      transaction_status === "cancel" ||
      transaction_status === "deny" ||
      transaction_status === "expire";

    if (isPaid && order.status === "PENDING") {
      // Generate secure download token
      const downloadToken = uuidv4();
      const downloadExpiry = new Date();
      downloadExpiry.setDate(downloadExpiry.getDate() + 7); // 7 days

      // Update order
      await prisma.order.update({
        where: { id: order.id },
        data: {
          status: "PAID",
          midtransTxnId: transaction_id,
          downloadToken,
          downloadExpiry,
        },
      });

      // Send download email
      const downloadUrl = `${process.env.NEXT_PUBLIC_APP_URL}/download/${downloadToken}`;
      try {
        await sendDownloadEmail({
          to: order.customerEmail,
          customerName: order.customerName,
          productName: order.product.name,
          downloadUrl,
          expiryDate: downloadExpiry,
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the webhook, email is secondary
      }
    }

    if (isFailed) {
      await prisma.order.update({
        where: { id: order.id },
        data: { status: "FAILED" },
      });
    }

    return NextResponse.json({ status: "OK" });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
