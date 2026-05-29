"use client";

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 animate-pulse">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8.01" y2="16" />
        <line x1="16" y1="16" x2="16.01" y2="16" />
      </svg>
    ),
    title: "100% Upload Otomatis",
    desc: "Workflow n8n otomatis mengunggah video ke YouTube sesuai jadwal posting yang ditentukan. Anda bisa fokus ke hal lain.",
    color: "from-amber-400 to-amber-600"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M12 7v1" />
        <path d="M7 11h1" />
        <path d="M12 15v1" />
        <path d="M15 11h1" />
      </svg>
    ),
    title: "Riset Konten Cerdas",
    desc: "Menganalisis ide video trending, mencari kompetitor utama, dan menyusun ide konten secara otomatis menggunakan kecerdasan buatan.",
    color: "from-yellow-400 to-amber-500"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
    title: "Jadwal Posting Instan",
    desc: "Atur posting video untuk satu bulan penuh hanya dalam waktu 30 menit. Sistem kami berjalan di cloud nonstop.",
    color: "from-orange-400 to-amber-500"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Laporan Performa Berkala",
    desc: "Menerima laporan metrik dan perkembangan performa channel Anda secara terjadwal langsung to WhatsApp atau email.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Optimasi SEO Otomatis",
    desc: "Secara otomatis memproduksi judul video dengan CTR tinggi, meta deskripsi lengkap, serta kata kunci (tags) relevan.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <path d="M16 8H12a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H10" />
      </svg>
    ),
    title: "Hemat Ratusan Juta Rupiah",
    desc: "Tidak perlu merekrut video editor atau virtual assistant yang mahal. Bayar sekali untuk otomasi tak terbatas seumur hidup.",
    color: "from-amber-400 to-orange-500"
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-50/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-amber-50/40 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-sm">
            💡 Mengapa AhlinyaCuan?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Solusi Cerdas Mengembangkan Channel <br className="hidden sm:block"/>
            Tanpa Ribet Mengurusnya Manual
          </h2>
          <p className="text-slate-500 mt-6 text-lg">
            Template workflow n8n dirancang khusus agar mudah digunakan oleh pembuat konten di Indonesia. Cukup pasang sekali, rasakan keuntungannya selamanya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-8 border border-slate-200/50 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2 relative overflow-hidden z-10"
            >
              {/* Hover gradient background transition */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-2xl text-white mb-6 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                {benefit.icon}
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
