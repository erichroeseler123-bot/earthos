import { get } from '@vercel/edge-config';

export async function getEarthOSConfig() {
  try {
    return await get("earthos");
  } catch (err) {
    console.error("EDGE CONFIG ERROR:", err);
    return null;
  }
}
