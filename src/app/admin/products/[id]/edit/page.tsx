import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import ProductForm from "../../ProductForm";

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const { id } = await params;
  const productId = parseInt(id);

  if (isNaN(productId)) {
    notFound();
  }

  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    notFound();
  }

  const serializedProduct = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: Number(product.price),
    normalPrice: Number(product.normalPrice),
    features: product.features,
    badge: product.badge,
    popular: product.popular,
    filePath: product.filePath,
    isActive: product.isActive,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white">Edit Produk</h1>
        <p className="text-slate-400 text-sm mt-1.5 font-medium">
          Ubah konfigurasi detail produk, harga, badge, atau file unduhan yang dikirim.
        </p>
      </div>

      <ProductForm initialData={serializedProduct} />
    </div>
  );
}
