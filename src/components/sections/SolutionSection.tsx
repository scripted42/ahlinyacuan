"use client";

const benefits = [
  {
    icon: "🤖",
    title: "100% Upload Otomatis",
    desc: "Workflow n8n otomatis mengunggah video ke YouTube sesuai jadwal posting yang ditentukan. Anda bisa fokus ke hal lain.",
    color: "from-amber-400 to-amber-600"
  },
  {
    icon: "🔍",
    title: "Riset Konten Cerdas",
    desc: "Menganalisis ide video trending, mencari kompetitor utama, dan menyusun ide konten secara otomatis menggunakan kecerdasan buatan.",
    color: "from-yellow-400 to-amber-500"
  },
  {
    icon: "📅",
    title: "Jadwal Posting Instan",
    desc: "Atur posting video untuk satu bulan penuh hanya dalam waktu 30 menit. Sistem kami berjalan di cloud nonstop.",
    color: "from-orange-400 to-amber-500"
  },
  {
    icon: "📊",
    title: "Laporan Performa Berkala",
    desc: "Menerima laporan metrik dan perkembangan performa channel Anda secara terjadwal langsung ke WhatsApp atau email.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: "🎯",
    title: "Optimasi SEO Otomatis",
    desc: "Secara otomatis memproduksi judul video dengan CTR tinggi, meta deskripsi lengkap, serta kata kunci (tags) relevan.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: "💰",
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
