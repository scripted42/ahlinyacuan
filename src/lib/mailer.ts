import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface SendDownloadEmailParams {
  to: string;
  customerName: string;
  productName: string;
  downloadUrl: string;
  expiryDate: Date;
}

export async function sendDownloadEmail({
  to,
  customerName,
  productName,
  downloadUrl,
  expiryDate,
}: SendDownloadEmailParams) {
  const expiryStr = expiryDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject: `✅ Pembayaran Berhasil - Link Download ${productName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; background: #0f0f0f; color: #fff; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background: #1a1a1a; border-radius: 16px; overflow: hidden; }
          .header { background: linear-gradient(135deg, #f97316, #eab308); padding: 40px; text-align: center; }
          .header h1 { color: #fff; margin: 0; font-size: 24px; }
          .body { padding: 40px; }
          .body p { color: #ccc; line-height: 1.6; }
          .btn { display: inline-block; background: linear-gradient(135deg, #f97316, #eab308); color: #fff; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; margin: 20px 0; }
          .features { background: #2a2a2a; border-radius: 8px; padding: 16px; margin-top: 20px; }
          .features p { color: #ddd; font-size: 14px; margin: 8px 0; }
          .features .icon { margin-right: 8px; }
          .note { background: #2a2a2a; border-radius: 8px; padding: 16px; margin-top: 20px; }
          .note p { color: #999; font-size: 14px; margin: 0; }
          .footer { text-align: center; padding: 20px; color: #555; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Pembayaran Berhasil!</h1>
          </div>
          <div class="body">
            <p>Halo <strong>${customerName}</strong>,</p>
            <p>Terima kasih telah membeli <strong>${productName}</strong>. Pembayaran kamu telah berhasil diproses.</p>
            <p>Klik tombol di bawah untuk mengakses halaman download dan video tutorial:</p>
            <a href="${downloadUrl}" class="btn">📦 Akses Download & Tutorial</a>
            <div class="features">
              <p><span class="icon">⬇️</span> <strong>Download File</strong> — Unduh workflow n8n langsung dari halaman</p>
              <p><span class="icon">🎬</span> <strong>Video Tutorial</strong> — Panduan setup langkah-demi-langkah</p>
              <p><span class="icon">📋</span> <strong>Langkah Selanjutnya</strong> — Instruksi lengkap untuk memulai</p>
            </div>
            <div class="note">
              <p>⚠️ <strong>Penting:</strong> Link ini aktif hingga <strong>${expiryStr}</strong> dan maksimal <strong>3x download</strong>. Simpan file setelah didownload.</p>
            </div>
          </div>
          <div class="footer">
            <p>© 2024 AhlinyaCuan.pro — n8n Youtube Automation</p>
          </div>
        </div>
      </body>
      </html>
    `,
  });
}
