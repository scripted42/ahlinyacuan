"use client";

import { useState } from "react";
import PaymentForm from "@/components/ui/PaymentForm";
import CountdownTimer from "@/components/ui/CountdownTimer";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  normalPrice: number;
  features: string[];
  badge: string | null;
  popular: boolean;
}

interface PricingSectionProps {
  products: Product[];
}

export default function PricingSection({ products }: PricingSectionProps) {
  // Default to popular product if available, otherwise the first one
  const defaultProduct = products.find((p) => p.popular) || products[0];
  const [selectedProduct, setSelectedProduct] = useState<Product>(defaultProduct);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    const formElement = document.getElementById("checkout-form-container");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-14 bg-slate-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-100/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-sm">
            🔥 Penawaran Terbatas
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Pilih Paket Automasi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
              Sesuai Kebutuhanmu
            </span>
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            Harga spesial ini akan segera berakhir. Pilih paket di bawah dan dapatkan akses instan!
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-14 max-w-md mx-auto">
          <CountdownTimer hours={24} />
        </div>

        {/* Product Cards Grid */}
        <div className={`grid grid-cols-1 ${
          products.length === 1 
            ? "max-w-md mx-auto" 
            : products.length === 2 
            ? "md:grid-cols-2 max-w-3xl mx-auto" 
            : "md:grid-cols-3"
        } gap-8 mb-16`}>
          {products.map((product) => {
            const isSelected = selectedProduct.id === product.id;
            return (
              <div
                key={product.id}
                className={`relative bg-white rounded-3xl p-8 shadow-md border-2 transition-all duration-300 flex flex-col justify-between ${
                  product.popular
                    ? "border-amber-400 shadow-[0_20px_40px_rgba(245,158,11,0.08)] scale-[1.03] z-10"
                    : isSelected
                    ? "border-amber-300 shadow-md"
                    : "border-slate-200/60 hover:border-slate-300"
                }`}
              >
                {/* Badge */}
                {product.badge && (
                  <span className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-xs px-4 py-1.5 rounded-full shadow-sm text-center tracking-wider ${
                    product.popular ? "bg-amber-400 text-slate-950" : "bg-slate-900 text-white"
                  }`}>
                    {product.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <span className="text-slate-400 text-sm line-through block font-medium">
                      Rp {product.normalPrice.toLocaleString("id-ID")}
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl font-black text-slate-900">
                        Rp {Math.floor(product.price / 1000)}
                      </span>
                      <span className="text-lg font-extrabold text-slate-900">.000</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3.5 mb-8 border-t border-slate-100 pt-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                        <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSelectProduct(product)}
                  className={`w-full font-bold text-center py-3.5 rounded-xl transition-all duration-300 ${
                    isSelected
                      ? "bg-slate-900 text-yellow-400 shadow-md scale-[1.02]"
                      : "bg-amber-400 hover:bg-amber-500 text-slate-950 hover:shadow-lg hover:shadow-amber-500/10"
                  }`}
                >
                  {isSelected ? "⚡ Paket Terpilih" : "Pilih Paket Ini"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Checkout Card Container */}
        <div
          id="checkout-form-container"
          className="bg-white border border-slate-200/80 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/30 max-w-3xl mx-auto scroll-mt-28"
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left side: Selected Info Summary */}
            <div className="md:col-span-2 bg-slate-950 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Decor blob inside */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <span className="bg-amber-400/20 text-amber-300 font-extrabold text-[10px] tracking-wider px-3 py-1.5 rounded-full uppercase">
                  Pilihan Anda
                </span>
                
                <h4 className="text-2xl font-black mt-6 mb-2 tracking-tight">
                  {selectedProduct.name}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  {selectedProduct.description}
                </p>
              </div>

              <div className="mt-12 pt-6 border-t border-slate-800 relative z-10">
                <span className="text-slate-400 text-xs font-semibold block">Total Pembayaran</span>
                <span className="text-3xl font-black text-amber-400 block mt-1">
                  Rp {selectedProduct.price.toLocaleString("id-ID")}
                </span>
                <span className="text-[10px] text-emerald-400 font-bold block mt-2">
                  ✓ Harga termasuk PPN & Biaya Transfer
                </span>
              </div>
            </div>

            {/* Right side: Payment form */}
            <div className="md:col-span-3 p-8 sm:p-10">
              <h3 className="text-slate-900 font-bold text-xl mb-1">
                Isi Data Pembayaran
              </h3>
              <p className="text-slate-400 text-xs font-medium mb-6">
                Masukkan informasi Anda dengan benar untuk pengiriman link file download digital.
              </p>
              
              <PaymentForm productId={selectedProduct.id} />

              {/* Security badges */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex justify-center gap-6 text-slate-400 text-[10px] font-semibold">
                <span className="flex items-center gap-1">🔒 SSL Secured</span>
                <span className="flex items-center gap-1">💳 Midtrans Verified</span>
                <span className="flex items-center gap-1">⚡️ Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
