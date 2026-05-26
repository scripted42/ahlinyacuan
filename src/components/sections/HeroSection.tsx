"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-slate-50 pt-24 sm:pt-28 md:pt-32 pb-16"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Colorful gradient blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-300/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-amber-300/15 rounded-full blur-[80px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-5 py-2 mb-2 shadow-sm transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              <span className="text-slate-600 text-sm font-semibold tracking-wide">
                Mencetak 500+ Automation Creators
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Otomasi Channel YouTube <br className="hidden sm:block" />
              <span className="relative inline-block mt-1">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-500">
                  100% Autopilot
                </span>
                <svg className="absolute -bottom-2 w-full h-3 -z-10 text-amber-200/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" strokeLinecap="round" />
                </svg>
              </span>{" "}
              dengan n8n
            </h1>

            {/* Subheadline */}
            <p
              className={`text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Impor template workflow n8n siap pakai untuk otomatisasi{" "}
              <span className="font-semibold text-slate-900">riset konten</span>,{" "}
              <span className="font-semibold text-slate-900">upload otomatis</span>, dan{" "}
              <span className="font-semibold text-slate-900">scheduling</span> —
              kembangkan bisnis media Anda tanpa pusing coding.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#pricing"
                id="hero-cta"
                className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 text-white hover:text-yellow-400 font-bold text-base sm:text-lg px-8 py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-900/20 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-slate-950 transition-colors">
                  ⚡ Dapatkan Sekarang 
                </span>
              </a>
              <a
                href="#study-methods"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 hover:border-amber-300 font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl transition-all hover:bg-slate-50 hover:text-amber-600 shadow-sm w-full sm:w-auto"
              >
                Lihat Metode Setup 👀
              </a>
            </div>
            
            <p className={`text-slate-400 text-xs font-semibold transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}>
              🔒 Akses Seumur Hidup · Lisensi Unlimited Channel · Update Gratis
            </p>

            {/* Micro Stats Banner */}
            <div
              className={`pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-4 text-left transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {[
                { value: "500+", label: "Creators" },
                { value: "4.9/5", label: "Kepuasan" },
                { value: "24/7", label: "Autopilot" },
              ].map((stat, idx) => (
                <div key={idx} className="border-r border-slate-200 last:border-0 pr-4">
                  <div className="text-xl sm:text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-slate-400 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Owner Face Visual */}
          <div
            className={`lg:col-span-5 relative flex justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Ambient gold glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-yellow-300/25 rounded-full blur-3xl transform rotate-3 pointer-events-none" />
            
            {/* Circular Owner Face Frame */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl shadow-slate-200/80 animate-float bg-gradient-to-tr from-yellow-300 to-amber-400">
              <Image
                src="/owner-face.png"
                alt="Owner AhlinyaCuan"
                fill
                className="object-cover scale-105"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
