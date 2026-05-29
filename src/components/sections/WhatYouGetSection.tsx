"use client";

const items = [
  {
    icon: "📦",
    title: "1x Template Workflow n8n",
    desc: "File .json workflow yang langsung bisa di-import ke n8n kamu. Terintegrasi penuh dengan YouTube API.",
    value: "Rp 199.000",
  },
  {
    icon: "📚",
    title: "Dokumentasi Step-by-Step",
    desc: "Panduan PDF 50+ halaman bergambar dari install n8n hingga workflow berjalan.",
    value: "Rp 49.000",
  },
  {
    icon: "🎥",
    title: "Video Tutorial Full",
    desc: "Rekaman layar proses setup lengkap (3+ jam). Bisa di-rewatch kapan saja jika bingung.",
    value: "Rp 79.000",
  },
  {
    icon: "🔄",
    title: "Free Update Seumur Hidup",
    desc: "Jika YouTube merubah API, kami akan update workflow-nya dan kamu dapatkan secara gratis.",
    value: "Rp 99.000",
  },
  {
    icon: "👥",
    title: "Grup Komunitas Eksklusif",
    desc: "Join circle WhatsApp 500+ YouTuber. Tempat saling share trik, insight, dan diskusi.",
    value: "Rp 49.000",
  },
  {
    icon: "🎁",
    title: "Template Prompt AI YouTube",
    desc: "50+ prompt rahasia untuk generate judul CTR tinggi, deskripsi, dan script via ChatGPT.",
    value: "Rp 49.000",
  },
];

interface WhatYouGetSectionProps {
  cheapestPrice?: number;
}

export default function WhatYouGetSection({ cheapestPrice }: WhatYouGetSectionProps) {
  const totalValue = "Rp 524.000";
  const salePrice = cheapestPrice
    ? `Mulai Rp ${cheapestPrice.toLocaleString("id-ID")}`
    : "Rp 149.000";

  return (
    <section id="what-you-get" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 text-sm font-bold px-4 py-2 rounded-full mb-6">
            📦 Yang Kamu Dapatkan
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Paket Lengkap,{" "}
            <span className="text-amber-600">Semua Termasuk</span>
          </h2>
        </div>

        <div className="space-y-4 mb-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-300 group hover:border-amber-200 hover:shadow-md"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex-1 pt-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                  <h3 className="text-slate-900 font-bold text-lg">{item.title}</h3>
                  <span className="text-amber-600 font-bold text-sm bg-amber-50 px-3 py-1 rounded-lg w-fit">
                    Senilai {item.value}
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="hidden sm:flex text-amber-500 text-xl pt-2 px-2">✓</div>
            </div>
          ))}
        </div>

        {/* Value summary */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/20 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden shadow-xl shadow-amber-950/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <p className="text-slate-400 mb-2 font-medium">Total nilai seluruh paket:</p>
          <p className="text-3xl font-bold text-slate-500 line-through decoration-amber-500/60 decoration-2">
            {totalValue}
          </p>
          
          <div className="bg-amber-500/10 backdrop-blur-md rounded-2xl p-6 mt-6 max-w-sm mx-auto border border-amber-500/20">
            <p className="text-amber-400 font-medium mb-1">
              Harga Spesial Hari Ini
            </p>
            <p className="text-5xl font-black text-white">
              {salePrice}
            </p>
          </div>
          
          <p className="text-amber-400 text-sm mt-6 font-semibold animate-pulse">
            ✨ Hemat lebih dari 70% dari harga normal
          </p>
        </div>
      </div>
    </section>
  );
}
