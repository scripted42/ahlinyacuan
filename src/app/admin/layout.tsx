"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If on the login page, do not render the sidebar or admin dashboard layout
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const menuItems = [
    { label: "📊 Statistik", href: "/admin" },
    { label: "📦 Daftar Produk", href: "/admin/products" },
    { label: "💳 Daftar Transaksi", href: "/admin/orders" },
  ];

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/auth", {
        method: "DELETE",
      });
      if (res.ok) {
        router.push("/admin/login");
        router.refresh();
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row font-sans">
      {/* Mobile Topbar */}
      <div className="flex md:hidden items-center justify-between bg-slate-900 border-b border-slate-800 px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 font-black text-xs">
            AC
          </div>
          <span className="font-extrabold text-sm tracking-tight text-white">AhlinyaCuan Admin</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-slate-400 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Sidebar - Desktop & Mobile overlay */}
      <aside
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:block md:w-64 bg-slate-900 border-r border-slate-800 flex-shrink-0 flex flex-col justify-between p-6 z-30 transition-all`}
      >
        <div className="space-y-8">
          {/* Logo */}
          <div className="hidden md:flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 font-black text-sm shadow-md shadow-amber-500/10">
              AC
            </div>
            <span className="font-black text-base tracking-tight text-white">AhlinyaCuan</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-1.5">
            <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-3 px-3">
              Menu Utama
            </span>
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                    isActive
                      ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/5"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Sidebar */}
        <div className="pt-6 border-t border-slate-800 space-y-4">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-400 hover:text-white transition-colors"
          >
            🌐 Lihat Website
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-all text-left"
          >
            🚪 Keluar
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 bg-slate-950 overflow-y-auto p-6 md:p-10">
        {children}
      </main>
    </div>
  );
}
