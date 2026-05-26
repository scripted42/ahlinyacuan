"use client";

import PaymentForm from "@/components/ui/PaymentForm";
import CountdownTimer from "@/components/ui/CountdownTimer";

// Product ID from DB (will be seeded)
const PRODUCT_ID = 1;

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-100/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-sm">
            🔥 Penawaran Terbatas
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Mulai Otomasi Channel Kamu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
              Sekarang Juga
            </span>
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            Harga spesial ini akan segera berakhir. Jangan sampai terlewat!
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-10 max-w-md mx-auto">
          <CountdownTimer hours={24} />
        </div>

        {/* Pricing Card */}
        <div className="bg-white border-2 border-amber-200/80 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(245,158,11,0.06)] relative">
          
          {/* Popular Badge */}
          <div className="absolute top-0 right-10 bg-amber-500 text-slate-950 font-bold text-xs px-4 py-1.5 rounded-b-lg shadow-sm">
            PALING LARIS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left side: Price & Features */}
            <div className="md:col-span-2 bg-slate-50 border-r border-slate-100 p-8 sm:p-10 flex flex-col justify-center">
              <p className="text-slate-500 text-sm font-medium mb-1">Harga Normal</p>
              <p className="text-2xl font-bold text-slate-400 line-through decoration-rose-400">
                Rp 299.000
              </p>
              
              <div className="mt-6 mb-2">
                <p className="text-slate-700 text-sm font-bold mb-1">Harga Hari Ini</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-amber-600">Rp 149</span>
                  <span className="text-xl font-bold text-amber-600">.000</span>
                </div>
              </div>
              
              <div className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg w-fit mb-8">
                Hemat Rp 150.000
              </div>

              <div className="space-y-3">
                {[
                  "Template n8n Lengkap",
                  "Dokumentasi PDF",
                  "Video Tutorial",
                  "Update Gratis",
                  "Grup Support WA"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs font-bold">✓</div>
                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Form */}
            <div className="md:col-span-3 p-8 sm:p-10">
              <h3 className="text-slate-900 font-bold text-xl mb-6">
                Isi Data Kamu
              </h3>
              <PaymentForm productId={PRODUCT_ID} />

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap justify-center gap-6 text-slate-400 text-xs font-medium">
                <span className="flex items-center gap-1.5"><span className="text-lg">🔒</span> SSL Secured</span>
                <span className="flex items-center gap-1.5"><span className="text-lg">💳</span> Midtrans Verified</span>
                <span className="flex items-center gap-1.5"><span className="text-lg">⚡️</span> Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
