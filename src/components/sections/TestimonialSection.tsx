"use client";

const testimonials = [
  {
    name: "Rizky Pratama",
    handle: "@rizkycreator",
    avatar: "RP",
    rating: 5,
    text: "Gila sih ini template. Channel gue sekarang jalan autopilot. Upload 7 video seminggu tanpa gue harus buka laptop. Subscriber naik 3x dalam 2 bulan!",
    niche: "Niche: Tech & Gaming 🎮",
    achievement: "+45.000 Subscribers",
  },
  {
    name: "Dewi Anggraini",
    handle: "@dewibeauty",
    avatar: "DA",
    rating: 5,
    text: "Awalnya skeptis karena gue gak ngerti n8n sama sekali. Tapi dokumentasinya super lengkap dan support-nya fast response. Worth it banget!",
    niche: "Niche: Beauty & Life 💄",
    achievement: "128K Subs (100% Autopilot)",
  },
  {
    name: "Budi Santoso",
    handle: "@budibisnis",
    avatar: "BS",
    rating: 5,
    text: "ROI-nya gila. Gue bayar sekali, terus hemat budget VA Rp 3jt/bulan. Dalam 1 bulan udah balik modal berkali-kali lipat.",
    niche: "Niche: Finansial & Bisnis 📈",
    achievement: "Adsense: Rp 15jt/bulan",
  },
  {
    name: "Sinta Maharani",
    handle: "@sintaedukasi",
    avatar: "SM",
    rating: 5,
    text: "Sebagai educator, gue fokus bikin konten. Semua urusan teknis upload, scheduling, SEO — semuanya auto. Ini yang selama ini gue cari!",
    niche: "Niche: Edukasi Anak 📚",
    achievement: "Hemat 20+ Jam Kerja/Minggu",
  },
  {
    name: "Andi Kurniawan",
    handle: "@anditech",
    avatar: "AK",
    rating: 5,
    text: "Setup-nya cuma 2 jam, setelah itu tinggal duduk dan lihat channel berkembang. Template n8n-nya rapih banget, bisa dikustomisasi sesuka hati.",
    niche: "Niche: Gadget Review 📱",
    achievement: "+56.000 Subscribers",
  },
  {
    name: "Rini Wulandari",
    handle: "@rinivlog",
    avatar: "RW",
    rating: 5,
    text: "Update-nya selalu free dan tim support-nya responsif banget. Kalau ada workflow baru langsung dikasih. Komunitas-nya juga super aktif.",
    niche: "Niche: Daily Travel Vlog ✈️",
    achievement: "Eksklusif Group Circle Member",
  },
];

export default function TestimonialSection() {
  const colors = [
    "from-amber-400 to-amber-600",
    "from-yellow-400 to-amber-500",
    "from-orange-400 to-amber-500",
    "from-yellow-500 to-orange-500",
    "from-amber-500 to-orange-600",
    "from-amber-400 to-orange-500",
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 text-sm font-bold px-4 py-2 rounded-full mb-6">
            💬 Kisah Sukses Creators
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            500+ YouTuber Telah <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
              Membuktikannya Sendiri
            </span>
          </h2>
          <p className="text-slate-500 mt-6 text-lg">
            Hasil nyata dari para alumni yang berhasil mengotomasi bisnis media YouTube mereka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 flex flex-col justify-between"
            >
              <div>
                {/* Badge tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {t.niche}
                  </span>
                  <span className="bg-slate-900 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    🏆 {t.achievement}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-amber-500 text-base">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 leading-relaxed mb-6 text-sm italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-slate-200/60 pt-4 mt-2">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center text-slate-950 font-bold text-xs flex-shrink-0 shadow-inner`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    {t.handle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
