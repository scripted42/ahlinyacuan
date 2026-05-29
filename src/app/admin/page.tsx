import { prisma } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const successOrders = await prisma.order.findMany({
    where: { status: "PAID" },
  });

  const totalRevenue = successOrders.reduce((sum, order) => sum + Number(order.amount), 0);
  const totalPaidCount = successOrders.length;

  const totalPendingCount = await prisma.order.count({
    where: { status: "PENDING" },
  });

  const totalFailedCount = await prisma.order.count({
    where: { status: { in: ["FAILED", "EXPIRED"] } },
  });

  const productCount = await prisma.product.count({
    where: { isActive: true },
  });

  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: { product: true },
  });

  return (
    <div className="space-y-10 font-sans text-slate-100">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white">Ringkasan Statistik</h1>
        <p className="text-slate-400 text-sm mt-1.5 font-medium">
          Pantau performa bisnis dan penjualan otomasi n8n Anda secara real-time.
        </p>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Revenue */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden shadow-sm">
          <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider block">
            Total Pendapatan
          </span>
          <span className="text-2xl font-black text-amber-400 block mt-2">
            Rp {totalRevenue.toLocaleString("id-ID")}
          </span>
          <span className="text-xs text-emerald-400 font-semibold mt-2 inline-flex items-center gap-1">
            🟢 Real-time dari Midtrans
          </span>
        </div>

        {/* Card 2: Successful Orders */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden shadow-sm">
          <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider block">
            Transaksi Sukses
          </span>
          <span className="text-2xl font-black text-white block mt-2">
            {totalPaidCount} <span className="text-xs text-slate-500 font-medium">Pembayaran</span>
          </span>
          <span className="text-xs text-slate-400 font-semibold mt-2 block">
            Konversi langsung link download
          </span>
        </div>

        {/* Card 3: Pending/Failed */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden shadow-sm">
          <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider block">
            Menunggu / Gagal
          </span>
          <span className="text-2xl font-black text-white block mt-2">
            {totalPendingCount} <span className="text-xs text-amber-500 font-medium">Pending</span>
            <span className="text-slate-600 mx-2">/</span>
            <span className="text-slate-300 font-bold">{totalFailedCount}</span> <span className="text-xs text-rose-500 font-medium">Gagal</span>
          </span>
          <span className="text-xs text-slate-400 font-semibold mt-2 block">
            Termasuk transaksi kedaluwarsa
          </span>
        </div>

        {/* Card 4: Products */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden shadow-sm">
          <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider block">
            Produk Aktif
          </span>
          <span className="text-2xl font-black text-white block mt-2">
            {productCount} <span className="text-xs text-slate-500 font-medium">Item Terdaftar</span>
          </span>
          <Link
            href="/admin/products"
            className="text-xs text-amber-400 hover:text-amber-300 font-bold mt-2 inline-block transition-colors"
          >
            Kelola Produk →
          </Link>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white tracking-tight">Transaksi Terbaru</h2>
          <Link
            href="/admin/orders"
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-4 py-2 rounded-xl transition-all"
          >
            Lihat Semua Order →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-bold text-xs uppercase tracking-wider">
                <th className="pb-4 font-semibold">ID Order</th>
                <th className="pb-4 font-semibold">Tanggal</th>
                <th className="pb-4 font-semibold">Pelanggan</th>
                <th className="pb-4 font-semibold">Produk</th>
                <th className="pb-4 font-semibold">Nominal</th>
                <th className="pb-4 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {recentOrders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500 font-medium">
                    Belum ada transaksi masuk.
                  </td>
                </tr>
              ) : (
                recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="py-4 font-mono text-xs text-slate-300">{order.orderId}</td>
                    <td className="py-4 text-xs text-slate-400">
                      {new Date(order.createdAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="py-4">
                      <div className="font-bold text-slate-200">{order.customerName}</div>
                      <div className="text-xs text-slate-500 font-medium">{order.customerEmail}</div>
                    </td>
                    <td className="py-4 text-xs text-slate-300 font-medium">{order.product.name}</td>
                    <td className="py-4 font-extrabold text-slate-200">
                      Rp {Number(order.amount).toLocaleString("id-ID")}
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
