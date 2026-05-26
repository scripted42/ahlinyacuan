import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "n8n Youtube Automation | Otomasi Channel YouTube 100% Auto — AhlinyaCuan",
  description:
    "Template workflow n8n siap pakai untuk upload otomatis, riset konten, dan scheduling posting YouTube. Bayar sekali, channel jalan selamanya. Dipakai 500+ YouTuber Indonesia.",
  keywords: [
    "n8n youtube automation",
    "otomasi youtube",
    "template n8n",
    "youtube automation indonesia",
    "ahlinyacuan",
  ],
  openGraph: {
    title: "n8n Youtube Automation — Channel YouTube Jalan Autopilot",
    description:
      "Template workflow n8n untuk upload otomatis, riset konten, dan scheduling. Setup 2 jam, channel jalan selamanya.",
    url: "https://ahlinyacuan.pro",
    siteName: "AhlinyaCuan",
    type: "website",
    images: [
      {
        url: "https://ahlinyacuan.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "AhlinyaCuan n8n YouTube Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Youtube Automation — AhlinyaCuan",
    description: "Otomasi channel YouTube kamu 100% autopilot dengan n8n",
    images: ["https://ahlinyacuan.pro/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}

        {/* Midtrans Snap Script */}
        <Script
          src={
            process.env.NEXT_PUBLIC_MIDTRANS_IS_PRODUCTION === "true"
              ? "https://app.midtrans.com/snap/snap.js"
              : "https://app.sandbox.midtrans.com/snap/snap.js"
          }
          data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
          strategy="beforeInteractive"
        />

        {/* Mautic Tracking Pixel */}
        <Script id="mautic-tracking" strategy="afterInteractive">
          {`
            (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
                w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
                m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://crm.ahlinyacuan.pro/mtc.js','mt');
            mt('send', 'pageview');
          `}
        </Script>
      </body>
    </html>
  );
}
