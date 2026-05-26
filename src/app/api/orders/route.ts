import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { snap } from "@/lib/midtrans";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, customerName, customerEmail, customerPhone } = body;

    // Validate input
    if (!productId || !customerName || !customerEmail || !customerPhone) {
      return NextResponse.json(
        { error: "Semua field wajib diisi" },
        { status: 400 }
      );
    }

    // Get product
    const product = await prisma.product.findUnique({
      where: { id: productId, isActive: true },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Produk tidak ditemukan" },
        { status: 404 }
      );
    }

    // Generate unique order ID
    const orderId = `ORDER-${uuidv4().split("-")[0].toUpperCase()}-${Date.now()}`;

    // Create order in DB (PENDING)
    const order = await prisma.order.create({
      data: {
        orderId,
        productId: product.id,
        customerName,
        customerEmail,
        customerPhone,
        amount: product.price,
        status: "PENDING",
      },
    });

    // Create Midtrans transaction
    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: Number(product.price),
      },
      customer_details: {
        first_name: customerName,
        email: customerEmail,
        phone: customerPhone,
      },
      item_details: [
        {
          id: product.id.toString(),
          price: Number(product.price),
          quantity: 1,
          name: product.name,
        },
      ],
      callbacks: {
        finish: `${process.env.NEXT_PUBLIC_APP_URL}/thank-you`,
      },
    };

    const snapTransaction = await snap.createTransaction(parameter);

    // Save snap token
    await prisma.order.update({
      where: { id: order.id },
      data: { snapToken: snapTransaction.token },
    });

    return NextResponse.json({
      token: snapTransaction.token,
      orderId,
    });
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan, silakan coba lagi" },
      { status: 500 }
    );
  }
}
