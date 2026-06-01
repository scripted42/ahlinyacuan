"use client";

const faqs = [
  {
    q: "Apakah saya perlu punya pengalaman coding?",
    a: "Tidak sama sekali! Template ini dirancang khusus untuk pemula. Kamu hanya perlu ikuti video tutorial step-by-step. Jika stuck, tim support WA siap bantu.",
  },
  {
    q: "Apa itu n8n? Harus langganan bulanan?",
    a: "n8n adalah tool automation open-source (seperti Zapier tapi gratis). Kamu bisa host sendiri di VPS (sekitar Rp50rb/bulan) atau pakai versi Desktop yang gratis total.",
  },
  {
    q: "Aman dari banned YouTube?",
    a: "100% Aman. Workflow ini menggunakan official API resmi dari Google/YouTube. Tidak ada metode bypass atau ilegal. Sudah dipakai 500+ channel tanpa masalah.",
  },
  {
    q: "Berapa lama proses setup-nya?",
    a: "Jika mengikuti video tutorial, rata-rata hanya butuh waktu 1-2 jam untuk setup pertama kali. Setelah itu, sistem berjalan otomatis tanpa perlu disetup ulang.",
  },
  {
    q: "Kalau YouTube ubah aturan / API?",
    a: "Tenang, kamu dapat update workflow seumur hidup secara gratis! Update akan diinfokan secara berkala via WhatsApp / Email.",
  },
  {
    q: "Bisa untuk berapa akun YouTube?",
    a: "Unlimited! Sekali setup, kamu bisa duplicate workflow-nya untuk sebanyak mungkin channel YouTube yang kamu miliki tanpa biaya tambahan.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-14 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 text-sm font-bold px-4 py-2 rounded-full mb-6">
            ❓ Punya Pertanyaan?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-300 shadow-sm"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                <span className="text-slate-800 font-bold pr-4 group-hover:text-amber-600 transition-colors">{faq.q}</span>
                <span className="text-amber-500 text-xl font-bold flex-shrink-0 group-open:rotate-45 transition-transform duration-300 bg-amber-50 w-8 h-8 rounded-full flex items-center justify-center">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="text-slate-600 leading-relaxed font-medium">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 font-medium mb-4">Masih ada pertanyaan yang belum terjawab?</p>
          <a
            href="https://wa.me/62xxxxxxxxxxxx?text=Halo,%20saya%20ingin%20bertanya%20tentang%20n8n%20Youtube%20Automation"
            target="_blank"
            rel="noopener noreferrer"
            id="faq-whatsapp"
            className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-md"
          >
            <span className="text-xl">💬</span> Tanya Tim Support via WA
          </a>
        </div>
      </div>
    </section>
  );
}
