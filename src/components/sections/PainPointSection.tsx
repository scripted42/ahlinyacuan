"use client";

export default function PainPointSection() {
  const pains = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      ),
      title: "Upload Manual Tiap Hari",
      desc: "Buka YouTube Studio, isi judul, deskripsi, thumbnail, tag — setiap hari. Sangat menyita waktu.",
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <circle cx="11" cy="11" r="3" />
          <path d="M11 8v3l2 1" />
        </svg>
      ),
      title: "Riset Konten Lambat",
      desc: "Cari ide video, cek trending, dan analisis kompetitor semuanya dilakukan manual. Bikin males mulai.",
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
          <polyline points="17 18 23 18 23 12" />
        </svg>
      ),
      title: "Channel Susah Berkembang",
      desc: "Karena sering skip upload akibat capek, algoritma YouTube jadi tidak merekomendasikan video kamu.",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          <path d="m19 19-4 4-4-4" />
          <path d="M15 23H9" />
        </svg>
      ),
      title: "Hire Editor / VA Mahal",
      desc: "Mau delegasi tapi biaya bayar admin atau VA terlalu besar. Margin dari adsense habis buat operasional.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  return (
    <section id="pain-points" className="py-14 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 text-sm font-bold px-4 py-2 rounded-full mb-6">
            😤 Relate Banget Kan?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Kelola YouTube Manual Itu <br className="hidden sm:block"/> 
            <span className="text-amber-600">Membosankan & Melelahkan</span>
          </h2>
          <p className="text-slate-500 mt-6 text-lg">
            Kamu punya konten bagus, tapi waktumu terbuang habis untuk hal-hal teknis yang berulang-ulang.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-100 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${pain.color} border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {pain.icon}
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">{pain.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-0.5 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
            <div className="bg-white px-8 py-4 rounded-xl">
              <p className="text-xl sm:text-2xl font-bold text-slate-800">
                Bagaimana kalau semua kerjaan itu <span className="text-amber-600 font-black">bisa diotomasi?</span> ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
