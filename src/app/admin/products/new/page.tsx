import ProductForm from "../ProductForm";

export default function NewProductPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white">Tambah Produk Baru</h1>
        <p className="text-slate-400 text-sm mt-1.5 font-medium">
          Daftarkan produk digital baru dengan mengatur harga, file unduhan, dan daftar fitur.
        </p>
      </div>

      <ProductForm />
    </div>
  );
}
