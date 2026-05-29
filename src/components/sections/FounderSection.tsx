"use client";

import Image from "next/image";

export default function FounderSection() {
  return (
    <section id="founder" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-yellow-100/30 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Founder Photo */}
            <div className="md:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-8 border-white shadow-lg shadow-slate-200/80 bg-gradient-to-tr from-yellow-300 to-amber-400">
                <Image
                  src="/owner-face.png"
                  alt="Wahyu Kurniawan - Founder Ahlinya Cuan"
                  fill
                  className="object-cover scale-105"
                />
              </div>
              <div className="text-center mt-4">
                <h4 className="text-slate-900 font-extrabold text-lg">Wahyu Kurniawan</h4>
                <p className="text-amber-600 text-xs font-bold uppercase tracking-wider mt-0.5">
                  Founder AhlinyaCuan
                </p>
              </div>
            </div>

            {/* Right Column: Message & Guarantee */}
            <div className="md:col-span-8 space-y-6 text-center md:text-left">
              <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 text-xs font-bold px-3.5 py-1.5 rounded-full">
                💬 Pesan dari Founder
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                "Saya Ingin Anda Memiliki Sistem Autopilot yang Bekerja untuk Anda"
              </h3>
              
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Halo, saya **Wahyu Kurniawan**, founder dari **Ahlinya Cuan**. Saya merancang template otomatisasi n8n ini karena saya sangat paham betapa melelahkannya mengelola channel YouTube secara manual setiap hari—mulai dari riset tren konten, menulis skrip video, melakukan editing, hingga mengunggah video secara berkala di YouTube Studio.
                </p>
                <p>
                  Melalui produk digital ini, tujuan saya adalah memberikan Anda **aset digital siap pakai**. Anda tidak perlu membayar jasa VA atau editor yang mahal, dan tidak perlu pusing melakukan coding. Cukup impor workflow yang sudah saya siapkan, ikuti panduan tutorialnya, dan biarkan AI & n8n bekerja di latar belakang secara autopilot.
                </p>
              </div>

              {/* Commitment/Guarantee Badge */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm flex items-start gap-4 text-left">
                <div className="text-3xl">🛡️</div>
                <div>
                  <h5 className="text-slate-900 font-bold text-sm">Komitmen & Jaminan Update</h5>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    Sistem API YouTube sering diperbarui. Kami menjamin pembaruan (*free updates*) berkala untuk template workflow n8n ini seumur hidup tanpa biaya tambahan, agar mesin otomatisasi Anda tetap berjalan lancar.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
