"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProductFormData {
  name: string;
  description: string;
  price: number;
  normalPrice: number;
  badge: string;
  popular: boolean;
  filePath: string;
  tutorialUrl: string;
  isActive: boolean;
  featuresText: string;
}

interface ProductFormProps {
  initialData?: {
    id: number;
    name: string;
    description: string | null;
    price: number;
    normalPrice: number;
    features: string; // JSON string of features array
    badge: string | null;
    popular: boolean;
    filePath: string;
    tutorialUrl: string | null;
    isActive: boolean;
  };
}

export default function ProductForm({ initialData }: ProductFormProps) {
  const router = useRouter();
  const isEdit = !!initialData;

  const [form, setForm] = useState<ProductFormData>({
    name: initialData?.name || "",
    description: initialData?.description || "",
    price: initialData?.price || 0,
    normalPrice: initialData?.normalPrice || 0,
    badge: initialData?.badge || "",
    popular: initialData?.popular || false,
    filePath: initialData?.filePath || "",
    tutorialUrl: initialData?.tutorialUrl || "",
    isActive: initialData?.isActive !== undefined ? initialData.isActive : true,
    featuresText: initialData
      ? (() => {
          try {
            const arr = JSON.parse(initialData.features);
            return Array.isArray(arr) ? arr.join("\n") : "";
          } catch {
            return "";
          }
        })()
      : "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.price <= 0 || !form.filePath.trim()) {
      setError("Nama, Harga (harus > 0), dan File Path wajib diisi");
      return;
    }

    setLoading(true);
    setError("");

    const featuresArray = form.featuresText
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f.length > 0);

    const payload = {
      name: form.name,
      description: form.description,
      price: Number(form.price),
      normalPrice: Number(form.normalPrice),
      badge: form.badge.trim() || null,
      popular: form.popular,
      filePath: form.filePath,
      tutorialUrl: form.tutorialUrl.trim() || null,
      isActive: form.isActive,
      features: featuresArray,
    };

    try {
      const url = isEdit ? `/api/admin/products/${initialData.id}` : "/api/admin/products";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push("/admin/products");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Gagal menyimpan produk");
      }
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan jaringan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 shadow-sm">
      {error && (
        <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-xl p-4 font-semibold text-center">
          ⚠️ {error}
        </div>
      )}

      {/* Grid Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="md:col-span-2">
          <label className="block text-slate-300 text-xs font-bold mb-2">Nama Produk *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Contoh: n8n YouTube Automation"
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500 focus:ring-amber-500/10 text-white rounded-xl px-4 py-3.5 outline-none transition-all placeholder-slate-600 font-medium text-sm focus:ring-4"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-slate-300 text-xs font-bold mb-2">Deskripsi Singkat</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Tulis penjelasan singkat produk..."
            rows={3}
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500 focus:ring-amber-500/10 text-white rounded-xl px-4 py-3.5 outline-none transition-all placeholder-slate-600 font-medium text-sm focus:ring-4 resize-none"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-slate-300 text-xs font-bold mb-2">Harga Jual (IDR) *</label>
          <input
            type="number"
            value={form.price || ""}
            onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) || 0 })}
            placeholder="Contoh: 149000"
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500 focus:ring-amber-500/10 text-white rounded-xl px-4 py-3.5 outline-none transition-all placeholder-slate-600 font-medium text-sm focus:ring-4"
          />
        </div>

        {/* Normal Price */}
        <div>
          <label className="block text-slate-300 text-xs font-bold mb-2">Harga Coret / Normal (IDR)</label>
          <input
            type="number"
            value={form.normalPrice || ""}
            onChange={(e) => setForm({ ...form, normalPrice: parseFloat(e.target.value) || 0 })}
            placeholder="Contoh: 299000"
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500 focus:ring-amber-500/10 text-white rounded-xl px-4 py-3.5 outline-none transition-all placeholder-slate-600 font-medium text-sm focus:ring-4"
          />
        </div>

        {/* File Path */}
        <div>
          <label className="block text-slate-300 text-xs font-bold mb-2">File Path (Nama file zip) *</label>
          <input
            type="text"
            value={form.filePath}
            onChange={(e) => setForm({ ...form, filePath: e.target.value })}
            placeholder="Contoh: n8n-youtube-automation.zip"
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500 focus:ring-amber-500/10 text-white rounded-xl px-4 py-3.5 outline-none transition-all placeholder-slate-600 font-medium text-sm focus:ring-4"
          />
          <span className="text-[10px] text-slate-500 font-semibold mt-1.5 block">
            File harus diletakkan di VPS pada direktori `/private/files/`
          </span>
        </div>

        {/* Tutorial URL */}
        <div>
          <label className="block text-slate-300 text-xs font-bold mb-2">🎬 Link Tutorial YouTube (Opsional)</label>
          <input
            type="text"
            value={form.tutorialUrl}
            onChange={(e) => setForm({ ...form, tutorialUrl: e.target.value })}
            placeholder="Contoh: https://www.youtube.com/watch?v=z7jca7wYpgs"
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500 focus:ring-amber-500/10 text-white rounded-xl px-4 py-3.5 outline-none transition-all placeholder-slate-600 font-medium text-sm focus:ring-4"
          />
          <span className="text-[10px] text-slate-500 font-semibold mt-1.5 block">
            Video tutorial akan ditampilkan di halaman download pembeli
          </span>
        </div>

        {/* Badge */}
        <div>
          <label className="block text-slate-300 text-xs font-bold mb-2">Badge Tampilan (Opsional)</label>
          <input
            type="text"
            value={form.badge}
            onChange={(e) => setForm({ ...form, badge: e.target.value })}
            placeholder="Contoh: TERPOPULER atau PALING HEMAT"
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500 focus:ring-amber-500/10 text-white rounded-xl px-4 py-3.5 outline-none transition-all placeholder-slate-600 font-medium text-sm focus:ring-4"
          />
        </div>

        {/* Features Checklist */}
        <div className="md:col-span-2">
          <label className="block text-slate-300 text-xs font-bold mb-2">
            Checklist Fitur (Satu per baris)
          </label>
          <textarea
            value={form.featuresText}
            onChange={(e) => setForm({ ...form, featuresText: e.target.value })}
            placeholder="Masukkan fitur checklist, pisahkan dengan Enter...&#10;Template n8n YouTube Lengkap&#10;Dokumentasi PDF Panduan&#10;Grup Support WhatsApp"
            rows={5}
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500 focus:ring-amber-500/10 text-white rounded-xl px-4 py-3.5 outline-none transition-all placeholder-slate-600 font-medium text-sm focus:ring-4"
          />
        </div>

        {/* Toggles */}
        <div className="md:col-span-2 flex flex-col sm:flex-row gap-6 bg-slate-950/40 p-4 border border-slate-800/80 rounded-2xl">
          {/* Popular */}
          <label className="flex items-center gap-3 cursor-pointer text-slate-300 text-sm font-semibold select-none">
            <input
              type="checkbox"
              checked={form.popular}
              onChange={(e) => setForm({ ...form, popular: e.target.checked })}
              className="w-4.5 h-4.5 rounded text-amber-500 bg-slate-950 border-slate-800 focus:ring-amber-500/10 focus:ring-offset-slate-950"
            />
            🔥 Tampilkan sebagai Paket Populer (Kartu Lebih Besar)
          </label>

          {/* Active */}
          <label className="flex items-center gap-3 cursor-pointer text-slate-300 text-sm font-semibold select-none">
            <input
              type="checkbox"
              checked={form.isActive}
              onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
              className="w-4.5 h-4.5 rounded text-amber-500 bg-slate-950 border-slate-800 focus:ring-amber-500/10 focus:ring-offset-slate-950"
            />
            🟢 Aktifkan Produk (Bisa dibeli)
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-800/80">
        <Link
          href="/admin/products"
          className="text-slate-400 hover:text-slate-100 font-bold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          Batal
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="bg-amber-400 hover:bg-amber-500 disabled:opacity-70 disabled:cursor-not-allowed text-slate-950 font-bold text-sm px-8 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/5 active:scale-[0.98]"
        >
          {loading ? "Menyimpan..." : "Simpan Produk 💾"}
        </button>
      </div>
    </form>
  );
}
