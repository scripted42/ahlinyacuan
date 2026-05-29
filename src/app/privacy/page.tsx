import Link from "next/link";

export default function PrivacyPage() {
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
            Kebijakan Privasi (Privacy Policy)
          </h1>
          <p className="text-slate-400 text-sm font-medium mb-8">
            Terakhir diperbarui: 27 Mei 2026
          </p>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Di <strong>AhlinyaCuan.pro</strong>, salah satu prioritas utama Kami adalah privasi pengunjung Kami. Dokumen Kebijakan Privasi ini menjelaskan jenis informasi pribadi yang Kami kumpulkan, bagaimana Kami menggunakannya, dan bagaimana Kami melindungi data tersebut.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">1. INFORMASI YANG KAMI KUMPULKAN</h2>
            <p>
              Ketika Anda mengunjungi situs web Kami atau melakukan pembelian produk digital n8n Youtube Automation, Kami mengumpulkan beberapa informasi pribadi penting yang Anda isi secara sukarela pada form pembayaran:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nama Lengkap:</strong> Untuk keperluan validasi kepemilikan transaksi dan penulisan di email invoice.</li>
              <li><strong>Alamat Email:</strong> Untuk mengirimkan link download produk digital, invoice resmi dari pembayaran Midtrans, dan update berkas jika ada pembaruan template.</li>
              <li><strong>Nomor WhatsApp/HP:</strong> Untuk memfasilitasi komunikasi dukungan teknis secara cepat dan join grup support VIP.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">2. BAGAIMANA KAMI MENGGUNAKAN INFORMASI ANDA</h2>
            <p>
              Kami menggunakan informasi pribadi yang dikumpulkan untuk tujuan berikut:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Memproses transaksi pembayaran Anda melalui gerbang pembayaran (payment gateway) **Midtrans**.</li>
              <li>Mengirimkan email otomatis berisi link download produk digital yang sah menggunakan server email **Brevo**.</li>
              <li>Menghubungi Anda dalam rangka layanan purna jual (customer support), baik menjawab pertanyaan teknis maupun pemecahan masalah (troubleshooting) file digital.</li>
              <li>Melakukan pemantauan performa web page view secara internal menggunakan script pelacak Mautic (Mautic Tracking Pixel) guna mengoptimalkan konversi halaman tanpa menyebarkan identitas pribadi Anda.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">3. BERBAGI INFORMASI DENGAN PIHAK KETIGA</h2>
            <p>
              Kami sangat menjaga privasi Anda. Kami **tidak akan pernah menjual, memperdagangkan, menyewakan, atau menyebarluaskan** informasi pribadi Anda kepada pihak ketiga di luar layanan pendukung transaksi Kami yang sah. Informasi Anda hanya dibagikan secara aman kepada penyedia layanan terintegrasi berikut:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>PT Midtrans (Gerbang Pembayaran):</strong> Data nama, email, dan HP dikirimkan secara terenkripsi untuk kebutuhan otorisasi pembayaran (bank transfer, e-wallet, kartu kredit).</li>
              <li><strong>Brevo (Layanan SMTP Email):</strong> Data email dan nama dikirim ke server Brevo hanya untuk mengirimkan surel pengiriman link unduhan.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">4. KEAMANAN DATA</h2>
            <p>
              Kami berkomitmen untuk memastikan keamanan data Anda. Seluruh transaksi di situs Kami menggunakan protokol enkripsi **SSL (Secure Socket Layer)** sehingga informasi Anda terlindung dari akses ilegal pihak luar. Selain itu, basis data transaksi disimpan pada hosting lokal yang terlindung oleh firewall dan sistem kontrol ketat.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">5. PENGGUNAAN COOKIES</h2>
            <p>
              Situs Kami menggunakan cookies standar untuk menyimpan preferensi sesi pengunjung dan menganalisis perilaku navigasi pengunjung guna meningkatkan pengalaman pengguna. Anda dapat memilih untuk menonaktifkan cookies melalui pengaturan pada browser web Anda, namun beberapa fungsi web (terutama form pembayaran) mungkin tidak berjalan optimal.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">6. HAK-HAK PENGGUNA (DATA RIGHTS)</h2>
            <p>
              Anda berhak meminta informasi mengenai data pribadi Anda yang Kami simpan, meminta perbaikan jika terdapat kesalahan data, atau meminta penghapusan permanen riwayat data kontak Anda dari server Kami dengan mengirimkan permintaan tertulis ke tim support Kami.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">7. PERUBAHAN KEBIJAKAN PRIVASI</h2>
            <p>
              Kami berhak memperbarui Kebijakan Privasi ini dari waktu ke waktu guna menyesuaikan dengan kepatuhan hukum atau pembaruan fitur layanan. Kami menyarankan Anda untuk memeriksa halaman ini secara berkala untuk mengetahui perubahan apa pun.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">8. HUBUNGI KAMI</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi Kami, silakan hubungi tim dukungan Kami melalui:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mt-4 space-y-2">
              <p className="font-bold text-slate-800">AhlinyaCuan Customer Care</p>
              <p>💬 **WhatsApp:** <a href="https://wa.me/6282231500053" className="text-amber-600 font-semibold">wa.me/6282231500053</a></p>
              <p>📧 **Email:** <a href="mailto:support@ahlinyacuan.pro" className="text-amber-600 font-semibold">support@ahlinyacuan.pro</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
