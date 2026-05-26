"use client";

import { useState } from "react";

interface Order {
  id: number;
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  amount: number;
  status: string;
  downloadCount: number;
  maxDownloads: number;
  createdAt: string;
  product: {
    name: string;
  };
}

export default function OrdersClient({ initialOrders }: { initialOrders: Order[] }) {
  const [orders] = useState<Order[]>(initialOrders);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const getWhatsAppLink = (phone: string) => {
    let clean = phone.replace(/[^0-9]/g, "");
    if (clean.startsWith("0")) {
      clean = "62" + clean.substring(1);
    }
    return `https://wa.me/${clean}`;
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customerName.toLowerCase().includes(search.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(search.toLowerCase()) ||
      order.customerPhone.includes(search) ||
      order.orderId.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "ALL" || 
      order.status === statusFilter || 
      (statusFilter === "FAILED" && (order.status === "FAILED" || order.status === "EXPIRED"));

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Cari nama, email, WA, atau ID order..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-sm bg-slate-900 border border-slate-800 focus:border-amber-500 focus:ring-amber-500/10 text-white rounded-xl px-4 py-2.5 outline-none transition-all placeholder-slate-500 text-xs font-semibold"
        />

        {/* Filter Status */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-slate-900 border border-slate-800 text-slate-300 rounded-xl px-4 py-2.5 outline-none text-xs font-semibold focus:border-amber-500 focus:ring-amber-500/10"
        >
          <option value="ALL">Semua Status</option>
          <option value="PAID">PAID (Sukses)</option>
          <option value="PENDING">PENDING</option>
          <option value="FAILED">FAILED / EXPIRED</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-bold text-xs uppercase tracking-wider">
                <th className="pb-4 font-semibold">Order ID & Tanggal</th>
                <th className="pb-4 font-semibold">Pelanggan</th>
                <th className="pb-4 font-semibold">Produk</th>
                <th className="pb-4 font-semibold">Nominal</th>
                <th className="pb-4 font-semibold text-center">Unduhan</th>
                <th className="pb-4 font-semibold text-center">Status</th>
                <th className="pb-4 font-semibold text-center">Hubungi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-500 font-medium">
                    Tidak ada transaksi ditemukan.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-800/10 transition-colors">
                    <td className="py-4">
                      <div className="font-mono text-xs text-slate-300 font-semibold">{order.orderId}</div>
                      <div className="text-[10px] text-slate-500 mt-1 font-semibold">
                        {new Date(order.createdAt).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="font-bold text-slate-200">{order.customerName}</div>
                      <div className="text-xs text-slate-500 font-medium">{order.customerEmail}</div>
                      <div className="text-[10px] text-slate-400 font-semibold mt-0.5">{order.customerPhone}</div>
                    </td>
                    <td className="py-4 text-xs text-slate-300 font-medium">{order.product.name}</td>
                    <td className="py-4 font-extrabold text-slate-200">
                      Rp {order.amount.toLocaleString("id-ID")}
                    </td>
                    <td className="py-4 text-center">
                      <span className="font-semibold text-xs text-slate-300">
                        {order.downloadCount} <span className="text-slate-500">/ {order.maxDownloads}x</span>
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider ${
                          order.status === "PAID"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25"
                            : order.status === "PENDING"
                            ? "bg-amber-500/10 text-amber-400 border border-amber-500/25"
                            : "bg-rose-500/10 text-rose-400 border border-rose-500/25"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <a
                        href={getWhatsAppLink(order.customerPhone)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 border border-emerald-500/20 font-bold px-3 py-1.5 rounded-lg text-xs transition-all"
                      >
                        💬 WA
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
