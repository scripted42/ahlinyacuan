import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import PainPointSection from "@/components/sections/PainPointSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ProgramTabs from "@/components/sections/ProgramTabs";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhatYouGetSection from "@/components/sections/WhatYouGetSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

// Floating navbar
function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl px-6 py-3 flex items-center justify-between gap-8 w-[calc(100%-2rem)] max-w-4xl shadow-sm shadow-slate-200/50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 font-black text-xs shadow-md shadow-amber-500/25">
          AC
        </div>
        <span className="text-slate-800 font-bold text-sm tracking-tight">AhlinyaCuan</span>
      </div>
      <div className="hidden sm:flex items-center gap-8">
        {[
          { label: "Fitur", href: "#solution" },
          { label: "Metode", href: "#study-methods" },
          { label: "Testimoni", href: "#testimonials" },
          { label: "FAQ", href: "#faq" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-slate-600 hover:text-amber-600 font-medium text-sm transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href="#pricing"
        id="nav-cta"
        className="bg-slate-900 hover:bg-slate-800 text-white hover:text-yellow-400 font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 whitespace-nowrap shadow-md"
      >
        Beli Sekarang
      </a>
    </nav>
  );
}

export default async function Home() {
  // Fetch active products from DB
  const productsFromDb = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: { id: "asc" },
  });

  // Serialize Decimal objects to numbers for safe Next.js hydration props
  const serializedProducts = productsFromDb.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description || "",
    price: Number(p.price),
    normalPrice: Number(p.normalPrice),
    features: (() => {
      try {
        return JSON.parse(p.features || "[]");
      } catch {
        return [];
      }
    })(),
    badge: p.badge,
    popular: p.popular,
  }));

  // Default fallback if database is not seeded yet
  const displayProducts = serializedProducts.length > 0 ? serializedProducts : [
    {
      id: 1,
      name: "n8n YouTube Automation",
      description: "Workflow otomatis lengkap untuk riset konten, scheduling, dan upload YouTube otomatis.",
      price: 149000,
      normalPrice: 299000,
      features: ["Template n8n YouTube Lengkap", "Dokumentasi PDF", "Video Tutorial", "Update Gratis"],
      badge: "TERPOPULER",
      popular: false
    }
  ];

  // Calculate cheapest price
  const prices = displayProducts.map((p) => p.price);
  const cheapestPrice = prices.length > 0 ? Math.min(...prices) : 149000;

  return (
    <main>
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <PainPointSection />
      <SolutionSection />
      <ProgramTabs />
      <TestimonialSection />
      <WhatYouGetSection cheapestPrice={cheapestPrice} />
      <PricingSection products={displayProducts} />
      <FaqSection />
      <FooterSection />

      {/* Sticky bottom CTA for mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200 p-4 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <a
          href="#pricing"
          id="sticky-cta"
          className="block w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-bold text-center py-4 rounded-xl shadow-lg shadow-amber-500/25"
        >
          ⚡ Beli Sekarang — Mulai Rp {cheapestPrice.toLocaleString("id-ID")}
        </a>
      </div>
    </main>
  );
}
