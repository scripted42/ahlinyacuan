"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Sandi tidak boleh kosong");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.error || "Gagal masuk");
      }
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan jaringan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 relative overflow-hidden font-sans">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-md w-full z-10">
        <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-2xl shadow-slate-950">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg shadow-amber-500/20 mx-auto mb-4">
              AC
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
              Dashboard Admin
            </h1>
            <p className="text-slate-400 text-xs mt-2 font-medium">
              Masukkan sandi rahasia untuk mengakses panel kontrol.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-slate-300 text-xs font-bold mb-2">
                Sandi Keamanan
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500 focus:ring-amber-500/10 text-white rounded-xl px-4 py-3.5 outline-none transition-all placeholder-slate-600 font-medium text-sm focus:ring-4"
              />
            </div>

            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-xl p-3 font-semibold text-center">
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 disabled:opacity-70 disabled:cursor-not-allowed text-slate-950 font-bold text-sm py-4 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/10 active:scale-[0.98]"
            >
              {loading ? "Memproses..." : "Masuk Ke Dashboard 🔒"}
            </button>
          </form>

          {/* Back button */}
          <div className="text-center mt-6">
            <a href="/" className="text-slate-500 hover:text-slate-300 text-xs font-semibold transition-colors">
              ← Kembali ke Beranda
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
