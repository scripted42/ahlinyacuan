import * as dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env.local")) {
  dotenv.config({ path: ".env.local" });
} else {
  dotenv.config({ path: ".env" });
}

import { prisma } from "../src/lib/db";

async function main() {
  console.log("🌱 Seeding database...");

  // Product 1: YouTube Automation
  const p1 = await prisma.product.upsert({
    where: { id: 1 },
    update: {
      name: "n8n YouTube Automation",
      description: "Workflow otomatis lengkap untuk riset konten, scheduling, dan upload YouTube otomatis.",
      price: 149000,
      normalPrice: 299000,
      features: JSON.stringify([
        "Template n8n YouTube Lengkap",
        "Dokumentasi PDF Panduan",
        "Video Tutorial Integrasi",
        "Update Gratis Selamanya",
        "Grup Support WhatsApp"
      ]),
      badge: "TERPOPULER",
      popular: false,
      filePath: "n8n-youtube-automation.zip",
      tutorialUrl: "https://www.youtube.com/watch?v=z7jca7wYpgs",
    },
    create: {
      id: 1,
      name: "n8n YouTube Automation",
      description: "Workflow otomatis lengkap untuk riset konten, scheduling, dan upload YouTube otomatis.",
      price: 149000,
      normalPrice: 299000,
      features: JSON.stringify([
        "Template n8n YouTube Lengkap",
        "Dokumentasi PDF Panduan",
        "Video Tutorial Integrasi",
        "Update Gratis Selamanya",
        "Grup Support WhatsApp"
      ]),
      badge: "TERPOPULER",
      popular: false,
      filePath: "n8n-youtube-automation.zip",
      tutorialUrl: "https://www.youtube.com/watch?v=z7jca7wYpgs",
      isActive: true,
    },
  });
  console.log(`✅ Product 1 created/updated: ${p1.name} (ID: ${p1.id})`);

  // Product 2: TikTok Automation
  const p2 = await prisma.product.upsert({
    where: { id: 2 },
    update: {
      name: "n8n TikTok Automation",
      description: "Workflow n8n untuk otomasi pencarian ide konten dan scheduling posting TikTok.",
      price: 199000,
      normalPrice: 399000,
      features: JSON.stringify([
        "Template n8n TikTok Lengkap",
        "Dokumentasi PDF Panduan",
        "Video Tutorial Integrasi",
        "Update Gratis Selamanya",
        "Grup Support WhatsApp"
      ]),
      badge: null,
      popular: false,
      filePath: "n8n-tiktok-automation.zip",
      tutorialUrl: "https://www.youtube.com/watch?v=z7jca7wYpgs",
    },
    create: {
      id: 2,
      name: "n8n TikTok Automation",
      description: "Workflow n8n untuk otomasi pencarian ide konten dan scheduling posting TikTok.",
      price: 199000,
      normalPrice: 399000,
      features: JSON.stringify([
        "Template n8n TikTok Lengkap",
        "Dokumentasi PDF Panduan",
        "Video Tutorial Integrasi",
        "Update Gratis Selamanya",
        "Grup Support WhatsApp"
      ]),
      badge: null,
      popular: false,
      filePath: "n8n-tiktok-automation.zip",
      tutorialUrl: "https://www.youtube.com/watch?v=z7jca7wYpgs",
      isActive: true,
    },
  });
  console.log(`✅ Product 2 created/updated: ${p2.name} (ID: ${p2.id})`);

  // Product 3: Full Bundle Automation
  const p3 = await prisma.product.upsert({
    where: { id: 3 },
    update: {
      name: "n8n Full Bundle (YT + TT)",
      description: "Paket komplit seluruh workflow otomasi YouTube & TikTok. Pilihan terbaik untuk hasil maksimal.",
      price: 299000,
      normalPrice: 599000,
      features: JSON.stringify([
        "Semua Template YouTube + TikTok",
        "Grup Support Prioritas VIP",
        "Video Tutorial Lengkap",
        "Prioritas Update Fitur",
        "Lisensi Unlimited Channel"
      ]),
      badge: "PALING HEMAT",
      popular: true,
      filePath: "n8n-full-bundle-automation.zip",
      tutorialUrl: "https://www.youtube.com/watch?v=z7jca7wYpgs",
    },
    create: {
      id: 3,
      name: "n8n Full Bundle (YT + TT)",
      description: "Paket komplit seluruh workflow otomasi YouTube & TikTok. Pilihan terbaik untuk hasil maksimal.",
      price: 299000,
      normalPrice: 599000,
      features: JSON.stringify([
        "Semua Template YouTube + TikTok",
        "Grup Support Prioritas VIP",
        "Video Tutorial Lengkap",
        "Prioritas Update Fitur",
        "Lisensi Unlimited Channel"
      ]),
      badge: "PALING HEMAT",
      popular: true,
      filePath: "n8n-full-bundle-automation.zip",
      tutorialUrl: "https://www.youtube.com/watch?v=z7jca7wYpgs",
      isActive: true,
    },
  });
  console.log(`✅ Product 3 created/updated: ${p3.name} (ID: ${p3.id})`);

  console.log("🎉 Seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
