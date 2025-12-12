import { kv } from '@vercel/kv';

export async function getTeleport(key) {
  if (!key) return null;
  return await kv.get(`teleport:${key.toLowerCase()}`);
}

export async function setTeleport(key, value) {
  return await kv.set(`teleport:${key.toLowerCase()}`, value);
}
