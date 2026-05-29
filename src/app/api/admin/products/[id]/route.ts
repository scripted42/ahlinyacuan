import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productId = parseInt(id);

    if (isNaN(productId)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json({ error: "Produk tidak ditemukan" }, { status: 404 });
    }

    // Map decimals to numbers for JSON
    const serialized = {
      ...product,
      price: Number(product.price),
      normalPrice: Number(product.normalPrice),
    };

    return NextResponse.json(serialized);
  } catch (error) {
    console.error("Admin product get error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productId = parseInt(id);

    if (isNaN(productId)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    const body = await request.json();
    const { name, description, price, normalPrice, features, badge, popular, filePath, isActive } = body;

    if (!name || price === undefined || !filePath) {
      return NextResponse.json({ error: "Nama, Harga, dan File Path wajib diisi" }, { status: 400 });
    }

    const product = await prisma.product.update({
      where: { id: productId },
      data: {
        name,
        description,
        price: Number(price),
        normalPrice: Number(normalPrice || 0),
        features: Array.isArray(features) ? JSON.stringify(features) : (features || "[]"),
        badge: badge || null,
        popular: Boolean(popular),
        filePath,
        isActive: isActive !== undefined ? Boolean(isActive) : true,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("Admin product update error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productId = parseInt(id);

    if (isNaN(productId)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    // Check if the product has orders
    const orderCount = await prisma.order.count({
      where: { productId },
    });

    if (orderCount > 0) {
      // Soft-delete: deactivate the product if it has transaction history
      await prisma.product.update({
        where: { id: productId },
        data: { isActive: false },
      });
      return NextResponse.json({ success: true, message: "Produk dinonaktifkan karena memiliki riwayat transaksi" });
    }

    await prisma.product.delete({
      where: { id: productId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin product delete error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
