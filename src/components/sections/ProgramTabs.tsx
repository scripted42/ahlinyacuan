"use client";

import { useState } from "react";

const tabData = [
  {
    id: "desktop",
    title: "n8n Desktop",
    subtitle: "Gratis & Mudah",
    desc: "Metode paling cocok untuk pemula yang ingin belajar cara kerja Youtube Automation tanpa modal server tambahan. Workflow dijalankan langsung dari PC atau Laptop Anda secara lokal.",
    bestFor: "Pemula, Konten Kreator Solo, Tahap Belajar",
    setupTime: "30 Menit",
    serverCost: "Gratis Total (Rp 0)",
    difficulty: "Mudah 🟢",
    requirements: "Laptop/PC (Windows/Mac) yang menyala saat proses automation berjalan.",
    benefits: [
      "Tidak ada biaya bulanan sama sekali",
      "Setup sangat cepat menggunakan aplikasi resmi n8n desktop",
      "Sempurna untuk menguji workflow dan belajar manipulasi API",
    ],
  },
  {
    id: "vps",
    title: "VPS Cloud Hosting",
    subtitle: "Autopilot 24/7 (Rekomendasi)",
    desc: "Solusi profesional seutuhnya. Workflow di-deploy di server Virtual Private Server (VPS) pribadi Anda, sehingga server berjalan 24 jam nonstop secara autopilot tanpa membebani komputer Anda.",
    bestFor: "Profesional, Channel Scaler, Ingin Running Non-stop",
    setupTime: "1-2 Jam (Dipandu Video)",
    serverCost: "Sekitar Rp 50.000 - Rp 80.000 / bulan",
    difficulty: "Menengah (Dipandu Step-by-Step) 🟡",
    requirements: "Koneksi internet untuk setup awal, VPS kecil (misal: DigitalOcean, Vultr, Biznet).",
    benefits: [
      "Otomasi berjalan 24/7 meskipun laptop Anda dimatikan",
      "Koneksi server super cepat dan IP stabil",
      "Bisa mengotomasi banyak channel sekaligus secara paralel",
    ],
  },
  {
    id: "cloud",
    title: "n8n Cloud Official",
    subtitle: "Instan & Praktis",
    desc: "Menghubungkan workflow langsung ke platform cloud resmi n8n. Anda tidak perlu menyewa VPS maupun mematikan/menyalakan PC. Cukup login ke dashboard awan resmi n8n dan import file JSON.",
    bestFor: "Agensi, Pemilik Bisnis yang tidak mau pusing teknis VPS",
    setupTime: "10 Menit",
    serverCost: "Langganan n8n Cloud (Mulai €20/bulan)",
    difficulty: "Sangat Mudah 🟢",
    requirements: "Akun berbayar di n8n.cloud.",
    benefits: [
      "Sistem cloud dikelola langsung oleh tim developer n8n",
      "Siap pakai dalam hitungan menit tanpa instalasi server",
      "Keamanan tingkat enterprise dan backup otomatis",
    ],
  },
];

export default function ProgramTabs() {
  const [activeTab, setActiveTab] = useState("vps");

  const activeData = tabData.find((t) => t.id === activeTab) || tabData[0];

  return (
    <section id="study-methods" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 text-sm font-bold px-4 py-2 rounded-full mb-6">
            🛠️ Metode Implementasi
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Pilih Cara Menjalankan <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
              Workflow n8n Anda
            </span>
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">
            Sama seperti di Purwadhika, kami menyediakan berbagai cara belajar dan implementasi sesuai dengan kebutuhan dan budget Anda.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-col sm:flex-row bg-slate-50 border border-slate-200/60 p-2 rounded-3xl gap-2 mb-12 shadow-inner">
          {tabData.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 text-center py-4 px-6 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-amber-500 text-slate-950 font-black shadow-md scale-[1.02]"
                    : "text-slate-500 hover:text-slate-800 font-semibold hover:bg-slate-100"
                }`}
              >
                <div className="text-base tracking-tight">{tab.title}</div>
                <div className={`text-xs mt-0.5 font-medium ${isActive ? "text-slate-800" : "text-slate-400"}`}>
                  {tab.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-slate-50/50 border border-slate-200/60 rounded-[2.5rem] p-8 sm:p-12 shadow-sm relative overflow-hidden transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Col: Info */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-lg mb-4">
                  {activeData.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Menjalankan via {activeData.title}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {activeData.desc}
              </p>

              {/* Benefits checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-slate-900 font-bold text-sm">Keuntungan Utama:</h4>
                {activeData.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-slate-600 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Details Specs */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-[2rem] p-6 sm:p-8 space-y-6 shadow-sm">
              <h4 className="text-slate-900 font-black text-lg border-b border-slate-100 pb-4">
                Spesifikasi & Kebutuhan
              </h4>
              
              <div className="space-y-4">
                {[
                  { label: "Cocok Untuk", value: activeData.bestFor },
                  { label: "Waktu Setup", value: activeData.setupTime },
                  { label: "Biaya Server", value: activeData.serverCost },
                  { label: "Tingkat Kesulitan", value: activeData.difficulty },
                ].map((spec) => (
                  <div key={spec.label} className="border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                    <span className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      {spec.label}
                    </span>
                    <span className="text-slate-800 font-bold text-sm leading-relaxed">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-4">
                <span className="block text-slate-500 text-xs font-bold mb-1">💻 Kebutuhan Perangkat:</span>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">{activeData.requirements}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
