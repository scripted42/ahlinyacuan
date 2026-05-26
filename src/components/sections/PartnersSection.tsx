"use client";

const partners = [
  { name: "n8n", icon: "⚙️", desc: "Core Engine" },
  { name: "OpenAI ChatGPT", icon: "🧠", desc: "AI Content Creator" },
  { name: "YouTube API", icon: "📹", desc: "Official API Access" },
  { name: "Google Drive", icon: "📁", desc: "Cloud Storage" },
  { name: "Gmail", icon: "📧", desc: "Notification Dispatch" },
  { name: "WhatsApp API", icon: "💬", desc: "Instant Alerts" },
];

export default function PartnersSection() {
  return (
    <section className="py-12 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
          Ditenagai oleh Ekosistem Teknologi & API Resmi:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center bg-slate-50/50 hover:bg-amber-50/30 border border-slate-100 hover:border-amber-200 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-amber-500/5"
            >
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {partner.icon}
              </span>
              <span className="text-slate-800 font-bold text-sm group-hover:text-amber-600 transition-colors">
                {partner.name}
              </span>
              <span className="text-slate-400 text-[10px] font-semibold mt-0.5">
                {partner.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
