import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/60 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-50/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors font-semibold text-sm">
              <span>←</span> Kembali ke Beranda
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 font-black text-xs">
                AC
              </div>
              <span className="text-slate-800 font-bold text-sm tracking-tight">AhlinyaCuan</span>
            </div>
          </div>

          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 tracking-tight leading-tight">
            Syarat & Ketentuan Penggunaan
          </h1>
          <p className="text-slate-400 text-sm font-medium mb-8">
            Terakhir diperbarui: 27 Mei 2026
          </p>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Selamat datang di <strong>AhlinyaCuan.pro</strong>. Layanan ini disediakan, dioperasikan, dan dikelola oleh AhlinyaCuan (selanjutnya disebut sebagai "Kami", "Kami", atau "Layanan").
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">1. SYARAT PENGGUNAAN</h2>
            <p>
              Dengan mengakses situs web ini dan/atau membeli produk digital Kami, Anda dianggap telah menyetujui, menerima, dan terikat oleh seluruh Syarat & Ketentuan ini, serta kebijakan privasi Kami. Jika Anda tidak menyetujui bagian apa pun dari ketentuan ini, Anda wajib segera menghentikan penggunaan situs web dan layanan kami.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">2. DESKRIPSI PRODUK & LAYANAN</h2>
            <p>
              Kami menyediakan produk digital berupa template workflow n8n (n8n Youtube Automation), dokumen panduan format PDF, serta video tutorial pendukung. Seluruh harga produk dicantumkan secara jelas menggunakan mata uang resmi <strong>Rupiah (IDR)</strong>. Kami berhak melakukan perubahan harga atau menarik produk kapan pun tanpa pemberitahuan sebelumnya.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">3. LISENSI PENGGUNAAN (GRANT OF LICENSE)</h2>
            <p>
              Setelah melakukan pembayaran yang sah, Kami memberikan lisensi yang bersifat non-eksklusif, tidak dapat dipindahtangankan, terbatas, dan dapat ditarik kembali kepada Anda untuk mengunduh dan menggunakan produk digital tersebut hanya untuk keperluan internal bisnis atau penggunaan pribadi Anda. Anda **dilarang keras** untuk:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mendistribusikan ulang, menyewakan, menjual kembali, atau memberikan akses file digital kepada pihak ketiga mana pun tanpa persetujuan tertulis dari Kami.</li>
              <li>Melakukan rekayasa balik (reverse engineer), membongkar, atau memodifikasi file mentah produk untuk dipaketkan ulang dan dijual sebagai produk saingan.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">4. BIAYA DAN PEMBAYARAN</h2>
            <p>
              Semua transaksi diproses secara aman melalui gerbang pembayaran resmi **Midtrans Verified** menggunakan metode pembayaran yang tersedia (Transfer Bank, E-Wallet, QRIS, dll.). Transaksi Anda akan diproses di dalam halaman checkout website kami secara aman tanpa dialihkan ke website luar yang tidak dikenal.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">5. KEBIJAKAN PENGEMBALIAN DANA & PRODUK (REFUND POLICY)</h2>
            <p>
              Mengingat sifat produk Kami yang berupa **produk digital instan yang dapat diunduh (digital download)**, semua pembelian bersifat final dan **tidak dapat dikembalikan (non-refundable)**. Kami tidak melayani pengembalian uang atau pembatalan transaksi dengan alasan apa pun setelah link download telah dikirimkan ke email Anda. 
            </p>
            <p>
              Pengecualian hanya berlaku jika terjadi kesalahan teknis pada file produk yang rusak/corrupted saat pertama kali diunduh dan tim support Kami tidak dapat memberikan file pengganti yang berfungsi dalam waktu 7 (tujuh) hari kerja setelah Anda melaporkan kendala tersebut melalui saluran kontak resmi kami.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">6. BATAS KADALUARSA DOWNLOAD & KETENTUAN PENGGUNAAN FILE</h2>
            <p>
              Link download produk digital Anda akan dikirimkan secara otomatis via email setelah status pembayaran Anda dikonfirmasi sukses oleh Midtrans.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Link download aktif maksimal selama **7 (tujuh) hari** terhitung dari waktu pembayaran sukses.</li>
              <li>Jumlah maksimal download adalah sebanyak **3x (tiga kali)** untuk menghindari penyalahgunaan link oleh pihak lain.</li>
              <li>Pengguna wajib segera menyimpan berkas yang diunduh ke penyimpanan lokal/aman setelah berhasil mendownloadnya. Kami tidak bertanggung jawab apabila file Anda hilang setelah masa aktif link download berakhir.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">7. DUKUNGAN LAYANAN (SUPPORT)</h2>
            <p>
              Kami menyediakan layanan dukungan teknis melalui saluran komunikasi WhatsApp dan email resmi yang tercantum di bagian bawah halaman ini. Dukungan mencakup panduan integrasi dasar dan penyelesaian masalah terkait file produk. Kami tidak berkewajiban memberikan bantuan kustomisasi logika program di luar paket bawaan template n8n.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">8. HAK KEKAYAAN INTELEKTUAL</h2>
            <p>
              Semua konten, logo, merek, kode program, video, gambar, dan teks yang ada pada situs ini sepenuhnya merupakan hak milik intelektual AhlinyaCuan dan dilindungi oleh undang-undang hak cipta Republik Indonesia serta konvensi internasional.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">9. BATASAN TANGGUNG JAWAB</h2>
            <p>
              Layanan Kami disediakan "sebagaimana adanya" tanpa jaminan tersurat maupun tersirat. Kami tidak bertanggung jawab atas kerugian finansial, reputasi channel YouTube Anda, penurunan performa trafik, atau pemblokiran akun dari platform pihak ketiga (seperti Google/YouTube API) yang disebabkan oleh kelalaian penggunaan atau modifikasi tidak tepat dari workflow n8n yang Kami berikan.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">10. HUKUM YANG BERLAKU</h2>
            <p>
              Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku di negara **Republik Indonesia**. Segala perselisihan yang timbul dari atau terkait dengan penggunaan produk ini akan diselesaikan secara musyawarah untuk mufakat, atau melalui yurisdiksi pengadilan di Indonesia.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">11. HUBUNGI KAMI</h2>
            <p>
              Jika Anda memiliki pertanyaan, umpan balik, atau klaim garansi file terkait Syarat & Ketentuan ini, silakan hubungi tim kami di:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mt-4 space-y-2">
              <p className="font-bold text-slate-800">AhlinyaCuan Customer Care</p>
              <p>💬 **WhatsApp:** <a href="https://wa.me/6282231500053" className="text-amber-600 font-semibold">wa.me/6282231500053</a></p>
              <p>📧 **Email:** <a href="mailto:support@ahlinyacuan.pro" className="text-amber-600 font-semibold">support@ahlinyacuan.pro</a></p>
              <p>🏠 **Alamat Bisnis:** Surabaya, Jawa Timur, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
