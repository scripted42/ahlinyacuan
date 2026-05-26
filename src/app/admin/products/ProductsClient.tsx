"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  normalPrice: number;
  features: string;
  badge: string | null;
  popular: boolean;
  filePath: string;
  isActive: boolean;
}

export default function ProductsClient({ initialProducts }: { initialProducts: Product[] }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleToggleActive = async (id: number, currentStatus: boolean) => {
    const productToUpdate = products.find((p) => p.id === id);
    if (!productToUpdate) return;

    try {
      const res = await fetch(`/api/admin/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...productToUpdate,
          isActive: !currentStatus,
        }),
      });

      if (res.ok) {
        setProducts((prev) =>
          prev.map((p) => (p.id === id ? { ...p, isActive: !currentStatus } : p))
        );
        router.refresh();
      } else {
        alert("Gagal memperbarui status produk");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Apakah Anda yakin ingin menghapus produk ini? Jika produk memiliki riwayat transaksi, produk hanya akan dinonaktifkan secara otomatis.")) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/products/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        const data = await res.json();
        if (data.message) {
          // If deactivated instead of deleted
          alert(data.message);
          setProducts((prev) =>
            prev.map((p) => (p.id === id ? { ...p, isActive: false } : p))
          );
        } else {
          setProducts((prev) => prev.filter((p) => p.id !== id));
        }
        router.refresh();
      } else {
        alert("Gagal menghapus produk");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan");
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Cari nama produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-xs bg-slate-900 border border-slate-800 focus:border-amber-500 focus:ring-amber-500/10 text-white rounded-xl px-4 py-2.5 outline-none transition-all placeholder-slate-500 text-xs font-semibold"
        />

        {/* Add Product Button */}
        <Link
          href="/admin/products/new"
          className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/5 text-xs flex items-center gap-2 self-start"
        >
          ➕ Tambah Produk Baru
        </Link>
      </div>

      {/* Grid of cards */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-bold text-xs uppercase tracking-wider">
                <th className="pb-4 font-semibold">ID</th>
                <th className="pb-4 font-semibold">Produk</th>
                <th className="pb-4 font-semibold">Harga</th>
                <th className="pb-4 font-semibold">File Path</th>
                <th className="pb-4 font-semibold text-center">Status</th>
                <th className="pb-4 font-semibold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500 font-medium">
                    Tidak ada produk ditemukan.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => {
                  const featuresList = (() => {
                    try {
                      return JSON.parse(product.features || "[]");
                    } catch {
                      return [];
                    }
                  })();

                  return (
                    <tr key={product.id} className="hover:bg-slate-800/10 transition-colors">
                      <td className="py-4 text-xs font-mono text-slate-500">#{product.id}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-slate-200">{product.name}</span>
                          {product.badge && (
                            <span className="bg-slate-800 text-amber-400 text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-amber-400/10 uppercase tracking-wide">
                              {product.badge}
                            </span>
                          )}
                          {product.popular && (
                            <span className="bg-amber-400/10 text-amber-400 text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-amber-400/20 uppercase tracking-wide">
                              🔥 Populer
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-500 mt-1 max-w-sm truncate">
                          {product.description || "Tanpa deskripsi"}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1 font-semibold">
                          📦 {featuresList.length} checklist fitur
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="font-extrabold text-slate-200">
                          Rp {product.price.toLocaleString("id-ID")}
                        </div>
                        {product.normalPrice > 0 && (
                          <div className="text-xs text-slate-500 line-through">
                            Rp {product.normalPrice.toLocaleString("id-ID")}
                          </div>
                        )}
                      </td>
                      <td className="py-4 text-xs font-mono text-slate-400">
                        {product.filePath}
                      </td>
                      <td className="py-4 text-center">
                        <button
                          onClick={() => handleToggleActive(product.id, product.isActive)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                            product.isActive ? "bg-amber-400" : "bg-slate-800"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-slate-950 transition-transform ${
                              product.isActive ? "translate-x-6" : "translate-x-1"
                            }`}
                          />
                        </button>
                        <span className="block text-[10px] text-slate-500 mt-1 font-semibold">
                          {product.isActive ? "Aktif" : "Non-aktif"}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            href={`/admin/products/${product.id}/edit`}
                            className="bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-amber-300 font-bold px-3 py-1.5 rounded-lg text-xs transition-colors border border-amber-400/10"
                          >
                            ✏️ Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="bg-slate-900 hover:bg-rose-500/10 text-rose-400 hover:text-rose-300 font-bold px-3 py-1.5 rounded-lg text-xs transition-colors border border-rose-500/10"
                          >
                            🗑️ Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
