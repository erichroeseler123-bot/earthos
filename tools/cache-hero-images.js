import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { RED_ROCKS_2026 } from '../shows-2026.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.join(__dirname, '../public/cache/heroes');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function download(url, filePath) {
  const res = await fetch(url);

  if (!res.ok) {
    console.error('❌ Failed:', url);
    return;
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(filePath, buffer);
}

async function run() {
  for (const event of RED_ROCKS_2026) {
    const slug = event.slug || event.id;
    if (!slug) continue;

    const imageUrl =
      event?.ticketmaster?.images?.find(i => i.ratio === '16_9')?.url ||
      event?.seatgeek?.performers?.[0]?.image ||
      event?.artist?.image_url;

    if (!imageUrl) {
      console.log('⚠️  No image for', slug);
      continue;
    }

    const outPath = path.join(OUT_DIR, `${slug}.jpg`);

    if (fs.existsSync(outPath)) {
      console.log('✔️  cached:', slug);
      continue;
    }

    console.log('📸 downloading:', slug);
    await download(imageUrl, outPath);
  }
}

run();
