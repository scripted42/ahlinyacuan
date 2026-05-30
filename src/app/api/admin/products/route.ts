import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { id: "asc" },
    });
    
    // Map decimals to numbers for JSON delivery
    const serialized = products.map((p) => ({
      ...p,
      price: Number(p.price),
      normalPrice: Number(p.normalPrice),
    }));

    return NextResponse.json(serialized);
  } catch (error) {
    console.error("Admin products fetch error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, price, normalPrice, features, badge, popular, filePath, tutorialUrl, isActive } = body;

    if (!name || price === undefined || !filePath) {
      return NextResponse.json({ error: "Nama, Harga, dan File Path wajib diisi" }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: Number(price),
        normalPrice: Number(normalPrice || 0),
        features: Array.isArray(features) ? JSON.stringify(features) : (features || "[]"),
        badge: badge || null,
        popular: Boolean(popular),
        filePath,
        tutorialUrl: tutorialUrl || null,
        isActive: isActive !== undefined ? Boolean(isActive) : true,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("Admin product create error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
