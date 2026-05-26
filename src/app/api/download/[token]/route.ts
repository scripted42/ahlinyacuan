import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import path from "path";
import fs from "fs";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  try {
    // Find order by download token
    const order = await prisma.order.findUnique({
      where: { downloadToken: token },
      include: { product: true },
    });

    // Validate token
    if (!order) {
      return new NextResponse("Link download tidak valid", { status: 404 });
    }

    if (order.status !== "PAID") {
      return new NextResponse("Pembayaran belum terverifikasi", { status: 403 });
    }

    if (!order.downloadExpiry || new Date() > order.downloadExpiry) {
      return new NextResponse("Link download sudah kadaluarsa", { status: 410 });
    }

    if (order.downloadCount >= order.maxDownloads) {
      return new NextResponse(
        `Batas download tercapai (maks ${order.maxDownloads}x)`,
        { status: 429 }
      );
    }

    // Get file path
    const storagePath = process.env.FILE_STORAGE_PATH || "./private/files";
    const filePath = path.join(
      process.cwd(),
      storagePath,
      order.product.filePath
    );

    if (!fs.existsSync(filePath)) {
      console.error("File not found:", filePath);
      return new NextResponse("File tidak ditemukan, hubungi support", {
        status: 404,
      });
    }

    // Increment download count
    await prisma.order.update({
      where: { id: order.id },
      data: { downloadCount: { increment: 1 } },
    });

    // Stream file to user
    const fileBuffer = fs.readFileSync(filePath);
    const fileName = path.basename(order.product.filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Content-Type": "application/octet-stream",
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return new NextResponse("Terjadi kesalahan server", { status: 500 });
  }
}
