import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

import { prisma } from "../src/lib/db";

async function main() {
  console.log("🌱 Seeding database...");

  // Create initial product
  const product = await prisma.product.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "n8n Youtube Automation",
      description:
        "Template workflow n8n lengkap untuk mengotomasi channel YouTube kamu. Termasuk upload otomatis, riset konten, scheduling, dan SEO YouTube.",
      price: 149000,
      filePath: "n8n-youtube-automation.zip", // File harus ada di private/files/
      isActive: true,
    },
  });

  console.log(`✅ Product created: ${product.name} (ID: ${product.id})`);
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
