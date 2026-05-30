"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const orderParam = searchParams.get("order");
  const statusParam = searchParams.get("status");
  const [isPending] = useState(statusParam === "pending");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderParam && !isPending) {
      const checkOrder = async () => {
        try {
          const res = await fetch(`/api/orders/status?orderId=${orderParam}`);
          if (res.ok) {
            const data = await res.json();
            if (data.downloadToken) {
              setDownloadUrl(`/download/${data.downloadToken}`);
            }
          }
        } catch (error) {
          console.error("Error checking order:", error);
        } finally {
          setLoading(false);
        }
      };

      let attempts = 0;
      const interval = setInterval(async () => {
        attempts++;
        await checkOrder();
        if (attempts >= 10) clearInterval(interval);
      }, 2000);

      return () => clearInterval(interval);
    } else {
      setLoading(false);
    }
  }, [orderParam, isPending]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-50/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-lg w-full text-center z-10">
        {/* Icon */}
        <div className={`w-28 h-28 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-xl animate-bounce ${isPending ? 'bg-amber-100 shadow-amber-200/50' : 'bg-gradient-to-br from-yellow-400 to-amber-500 shadow-amber-500/30'}`}>
          {isPending ? "⏳" : "🎉"}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          {isPending ? "Menunggu Pembayaran" : "Pembayaran Sukses!"}
        </h1>
        <p className="text-slate-500 text-lg mb-10 font-medium">
          {isPending
            ? "Kami sedang memverifikasi pembayaranmu. Jika berhasil, link download akan langsung dikirim ke email."
            : "Terima kasih atas pesananmu! Link download sudah kami kirim ke email, atau kamu bisa klik tombol di bawah."}
        </p>

        {!isPending && (
          <div className="bg-white border-2 border-amber-100 rounded-3xl p-8 mb-8 shadow-[0_10px_40px_rgba(245,158,11,0.04)]">
            {loading ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-amber-100 border-t-amber-500 rounded-full animate-spin" />
                <p className="text-slate-500 font-medium">
                  Sedang menyiapkan file kamu...
                </p>
              </div>
            ) : downloadUrl ? (
              <>
                <div className="inline-block bg-emerald-100 text-emerald-700 font-bold px-4 py-1.5 rounded-full text-sm mb-6">
                  ✨ File Siap Didownload
                </div>
                <a
                  href={downloadUrl}
                  id="download-btn"
                  className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-1 text-lg w-full"
                >
                  <span>⬇️</span> Download Produk Sekarang
                </a>
                <p className="text-slate-400 text-xs mt-4 font-medium">
                  Link aktif selama 7 hari · Maksimal 3x download
                </p>
              </>
            ) : (
              <p className="text-slate-500">
                Silakan cek kotak masuk email kamu (atau folder spam) untuk link download.
              </p>
            )}
          </div>
        )}

        {/* Next steps */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 text-left mb-8 shadow-sm">
          <h3 className="text-slate-900 font-bold text-lg mb-5 flex items-center gap-2">
            <span>📋</span> Langkah Berikutnya
          </h3>
          <ol className="space-y-4">
            {[
              "Download file workflow n8n",
              "Install n8n (cek PDF panduan)",
              "Import workflow ke n8n",
              "Ikuti tutorial video untuk integrasi",
              "Join grup WhatsApp untuk support",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/62xxxxxxxxxxxx?text=Halo,%20saya%20baru%20beli%20n8n%20Youtube%20Automation"
            target="_blank"
            rel="noopener noreferrer"
            id="thankyou-whatsapp"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-700 hover:bg-emerald-200 font-bold px-6 py-3.5 rounded-xl transition-all"
          >
            💬 Join Grup WA
          </a>
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold px-6 py-3.5 rounded-xl transition-all shadow-sm"
          >
            🏠 Ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin" />
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
