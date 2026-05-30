import { prisma } from "@/lib/db";
import ProductsClient from "./ProductsClient";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { id: "asc" },
  });

  // Map to simple JSON-serializable structure
  const serializedProducts = products.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: Number(p.price),
    normalPrice: Number(p.normalPrice),
    features: p.features,
    badge: p.badge,
    popular: p.popular,
    filePath: p.filePath,
    tutorialUrl: p.tutorialUrl,
    isActive: p.isActive,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white">Daftar Produk</h1>
        <p className="text-slate-400 text-sm mt-1.5 font-medium">
          Tambah, edit, hapus, atau kelola opsi tampilan produk di landing page Anda.
        </p>
      </div>

      <ProductsClient initialProducts={serializedProducts} />
    </div>
  );
}
