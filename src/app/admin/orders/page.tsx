import { prisma } from "@/lib/db";
import OrdersClient from "./OrdersClient";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: { product: true },
  });

  const serializedOrders = orders.map((o) => ({
    id: o.id,
    orderId: o.orderId,
    customerName: o.customerName,
    customerEmail: o.customerEmail,
    customerPhone: o.customerPhone,
    amount: Number(o.amount),
    status: o.status,
    downloadCount: o.downloadCount,
    maxDownloads: o.maxDownloads,
    createdAt: o.createdAt.toISOString(),
    product: {
      name: o.product.name,
    },
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white">Daftar Transaksi</h1>
        <p className="text-slate-400 text-sm mt-1.5 font-medium">
          Pantau riwayat pembayaran pelanggan, status Midtrans, dan statistik unduhan file digital.
        </p>
      </div>

      <OrdersClient initialOrders={serializedOrders} />
    </div>
  );
}
