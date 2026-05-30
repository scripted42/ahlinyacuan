import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

// Helper to extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  // Find order by download token
  const order = await prisma.order.findUnique({
    where: { downloadToken: token },
    include: { product: true },
  });

  // Validate token
  if (!order) {
    notFound();
  }

  if (order.status !== "PAID") {
    return (
      <ErrorState
        icon="⏳"
        title="Pembayaran Belum Terverifikasi"
        message="Order ini belum berstatus PAID. Silakan selesaikan pembayaran terlebih dahulu."
      />
    );
  }

  const isExpired = !order.downloadExpiry || new Date() > order.downloadExpiry;
  const isMaxed = order.downloadCount >= order.maxDownloads;

  const expiryStr = order.downloadExpiry
    ? new Date(order.downloadExpiry).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "-";

  const remainingDownloads = order.maxDownloads - order.downloadCount;

  // Parse product features
  let features: string[] = [];
  try {
    features = JSON.parse(order.product.features || "[]");
  } catch {
    features = [];
  }

  // YouTube embed
  const tutorialUrl = order.product.tutorialUrl;
  const videoId = tutorialUrl ? getYouTubeVideoId(tutorialUrl) : null;

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-yellow-100/30 rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Top nav bar */}
      <nav className="relative z-20 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 font-black text-xs shadow-md shadow-amber-500/25">
              AC
            </div>
            <span className="text-slate-800 font-bold text-sm tracking-tight">
              AhlinyaCuan
            </span>
          </Link>
          <span className="text-xs text-slate-400 font-medium hidden sm:block">
            Area Download Produk
          </span>
        </div>
      </nav>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Success badge */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl shadow-amber-500/20">
            🎉
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Terima Kasih atas Pembelianmu!
          </h1>
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-lg mx-auto">
            Produk digital kamu siap diakses. Download file dan ikuti tutorial
            video di bawah untuk memulai.
          </p>
        </div>

        {/* Main content grid */}
        <div className="space-y-8">
          {/* Card 1: Product Info + Download */}
          <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40">
            {/* Header strip */}
            <div className="bg-gradient-to-r from-slate-950 to-slate-900 px-8 py-6 text-white">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <span className="bg-amber-400/20 text-amber-300 font-extrabold text-[10px] tracking-wider px-3 py-1 rounded-full uppercase">
                    Produk Anda
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black mt-3 tracking-tight">
                    {order.product.name}
                  </h2>
                  {order.product.description && (
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 font-medium max-w-md">
                      {order.product.description}
                    </p>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-slate-500 font-semibold block uppercase tracking-wider">
                    Telah Dibayar
                  </span>
                  <span className="text-xl font-black text-amber-400">
                    Rp {Number(order.amount).toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            </div>

            {/* Download section */}
            <div className="p-8">
              {isExpired ? (
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 text-center">
                  <span className="text-3xl block mb-3">⏰</span>
                  <h3 className="text-rose-800 font-bold text-lg">
                    Link Download Kedaluwarsa
                  </h3>
                  <p className="text-rose-600 text-sm mt-1">
                    Link download ini sudah melewati batas waktu. Hubungi
                    support untuk mendapatkan link baru.
                  </p>
                </div>
              ) : isMaxed ? (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
                  <span className="text-3xl block mb-3">📦</span>
                  <h3 className="text-amber-800 font-bold text-lg">
                    Batas Download Tercapai
                  </h3>
                  <p className="text-amber-700 text-sm mt-1">
                    Anda telah menggunakan {order.maxDownloads}x kesempatan
                    download. Hubungi support jika butuh link baru.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <a
                      href={`/api/download/${token}`}
                      id="download-product-btn"
                      className="flex-1 w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-bold px-8 py-5 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-0.5 text-lg"
                    >
                      <span className="text-2xl">⬇️</span>
                      Download File Sekarang
                    </a>
                  </div>

                  {/* Download stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                        Sisa Download
                      </span>
                      <span className="text-xl font-black text-slate-900 mt-1 block">
                        {remainingDownloads}x
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium block">
                        dari {order.maxDownloads}x maks
                      </span>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                        Berlaku Hingga
                      </span>
                      <span className="text-sm font-bold text-slate-900 mt-1 block">
                        {expiryStr}
                      </span>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                        Order ID
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-600 mt-1 block truncate">
                        {order.orderId}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Features list */}
              {features.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-slate-900 font-bold text-sm mb-4">
                    📦 Yang Anda Dapatkan:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-slate-600 text-sm font-medium"
                      >
                        <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-bold shrink-0">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Video Tutorial (only if tutorialUrl exists) */}
          {videoId && (
            <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40">
              <div className="px-8 pt-8 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-rose-100 text-rose-600 font-bold text-xs px-3 py-1.5 rounded-full">
                    🎬 Video Tutorial
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Panduan Setup & Integrasi
                </h3>
                <p className="text-slate-500 text-sm font-medium mt-1">
                  Ikuti video tutorial langkah-demi-langkah untuk menginstal dan
                  menjalankan workflow n8n Anda.
                </p>
              </div>

              {/* YouTube Embed */}
              <div className="px-8 pb-8">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                    title="Video Tutorial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Card 3: Next Steps */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-md">
            <h3 className="text-slate-900 font-bold text-lg mb-5 flex items-center gap-2">
              <span>📋</span> Langkah Selanjutnya
            </h3>
            <ol className="space-y-4">
              {[
                "Download file workflow n8n (klik tombol di atas)",
                "Install n8n di desktop/VPS Anda",
                "Import file workflow JSON ke n8n",
                "Ikuti video tutorial di atas untuk konfigurasi API",
                "Jalankan workflow dan nikmati otomatisasi!",
              ].map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-600 font-medium"
                >
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Support links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/62xxxxxxxxxxxx?text=Halo,%20saya%20baru%20beli%20n8n%20Youtube%20Automation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-700 hover:bg-emerald-200 font-bold px-6 py-3.5 rounded-xl transition-all"
            >
              💬 Hubungi Support via WA
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold px-6 py-3.5 rounded-xl transition-all shadow-sm"
            >
              🏠 Ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Error state component
function ErrorState({
  icon,
  title,
  message,
}: {
  icon: string;
  title: string;
  message: string;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center text-5xl mx-auto mb-6 shadow-lg">
          {icon}
        </div>
        <h1 className="text-2xl font-black text-slate-900 mb-3">{title}</h1>
        <p className="text-slate-500 font-medium mb-8">{message}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all"
        >
          🏠 Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
