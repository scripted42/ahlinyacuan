"use client";

export default function FooterSection() {
  return (
    <footer id="footer" className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 font-black text-sm shadow-md">
                AC
              </div>
              <span className="text-slate-900 font-black text-xl tracking-tight">AhlinyaCuan.</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
              Platform digital tools terbaik untuk YouTuber Indonesia yang ingin scaling channel mereka secara cerdas, otomatis, dan minim budget.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-slate-900 font-bold mb-4">Navigasi</h4>
            <ul className="space-y-3">
              {[
                { label: "Fitur Automasi", href: "#solution" },
                { label: "Paket & Harga", href: "#pricing" },
                { label: "Kisah Sukses", href: "#testimonials" },
                { label: "Pusat Bantuan", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-amber-600 font-medium text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-slate-900 font-bold mb-4">Layanan Pelanggan</h4>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://wa.me/62xxxxxxxxxxxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                      💬
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold text-sm">WhatsApp Support</p>
                      <p className="text-slate-500 text-xs font-medium">Fast response 09.00 - 17.00</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
                      📧
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold text-sm">Email Bantuan</p>
                      <p className="text-slate-500 text-xs font-medium">support@ahlinyacuan.pro</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} AhlinyaCuan.pro — Hak Cipta Dilindungi
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-slate-400 hover:text-slate-600 font-medium text-sm transition-colors">
              Kebijakan Privasi
            </a>
            <a href="/terms" className="text-slate-400 hover:text-slate-600 font-medium text-sm transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
