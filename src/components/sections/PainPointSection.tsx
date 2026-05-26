"use client";

export default function PainPointSection() {
  const pains = [
    {
      icon: "😩",
      title: "Upload Manual Tiap Hari",
      desc: "Buka YouTube Studio, isi judul, deskripsi, thumbnail, tag — setiap hari. Sangat menyita waktu.",
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      icon: "🕐",
      title: "Riset Konten Lambat",
      desc: "Cari ide video, cek trending, dan analisis kompetitor semuanya dilakukan manual. Bikin males mulai.",
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      icon: "📉",
      title: "Channel Susah Berkembang",
      desc: "Karena sering skip upload akibat capek, algoritma YouTube jadi tidak merekomendasikan video kamu.",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: "💸",
      title: "Hire Editor / VA Mahal",
      desc: "Mau delegasi tapi biaya bayar admin atau VA terlalu besar. Margin dari adsense habis buat operasional.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  return (
    <section id="pain-points" className="py-24 bg-white relative">
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
