"use client";

import { useState, useEffect } from "react";

interface PaymentFormProps {
  productId: number;
}

declare global {
  interface Window {
    snap: {
      pay: (token: string, options: object) => void;
    };
  }
}

export default function PaymentForm({ productId }: PaymentFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const name = params.get("name") || params.get("customerName") || "";
      const email = params.get("email") || params.get("customerEmail") || "";
      const phone = params.get("phone") || params.get("customerPhone") || params.get("whatsapp") || params.get("tel") || "";

      if (name || email || phone) {
        setForm((prev) => ({
          name: name || prev.name,
          email: email || prev.email,
          phone: phone || prev.phone,
        }));
      }
    }
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim() || form.name.length < 2) {
      newErrors.name = "Nama minimal 2 karakter";
    }
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Email tidak valid";
    }
    if (!form.phone.match(/^(\+62|62|0)[0-9]{8,13}$/)) {
      newErrors.phone = "Nomor HP tidak valid (contoh: 08123456789)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          customerName: form.name,
          customerEmail: form.email,
          customerPhone: form.phone,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Terjadi kesalahan");
      }

      if (window.snap) {
        window.snap.pay(data.token, {
          onSuccess: (result: unknown) => {
            console.log("Payment success:", result);
            window.location.href = `/thank-you?order=${data.orderId}`;
          },
          onPending: (result: unknown) => {
            console.log("Payment pending:", result);
            window.location.href = `/thank-you?order=${data.orderId}&status=pending`;
          },
          onError: (result: unknown) => {
            console.error("Payment error:", result);
            setLoading(false);
            alert("Pembayaran gagal. Silakan coba lagi.");
          },
          onClose: () => {
            console.log("Snap closed");
            setLoading(false);
          },
        });
      }
    } catch (error) {
      console.error("Order error:", error);
      alert(error instanceof Error ? error.message : "Terjadi kesalahan. Silakan coba lagi.");
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-slate-50 border ${
      errors[field] ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200" : "border-slate-200 focus:border-amber-500 focus:ring-amber-100"
    } text-slate-900 rounded-xl px-4 py-3.5 outline-none transition-all placeholder-slate-400 font-medium text-sm focus:ring-4`;

  return (
    <form onSubmit={handleSubmit} id="payment-form" noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-slate-700 text-sm font-bold mb-1.5">
          Nama Lengkap <span className="text-rose-500">*</span>
        </label>
        <input
          id="input-name"
          type="text"
          placeholder="Masukkan nama lengkap kamu"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass("name")}
        />
        {errors.name && (
          <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-slate-700 text-sm font-bold mb-1.5">
          Email <span className="text-rose-500">*</span>
        </label>
        <input
          id="input-email"
          type="email"
          placeholder="email@kamu.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass("email")}
        />
        {errors.email && (
          <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-slate-700 text-sm font-bold mb-1.5">
          Nomor WhatsApp <span className="text-rose-500">*</span>
        </label>
        <input
          id="input-phone"
          type="tel"
          placeholder="08123456789"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass("phone")}
        />
        {errors.phone && (
          <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.phone}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        id="btn-buy-now"
        type="submit"
        disabled={loading}
        className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-70 disabled:cursor-not-allowed text-slate-950 font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.98] mt-2"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Memproses...
          </span>
        ) : (
          "⚡ Lanjut ke Pembayaran"
        )}
      </button>

      <p className="text-center text-slate-500 text-xs font-medium">
        Informasi kamu dilindungi secara aman.
      </p>
    </form>
  );
}
