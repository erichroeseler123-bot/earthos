// lib/musicbrainz.ts
const BASE_URL = "https://musicbrainz.org/ws/2";

// ✅ FIXED: Explicitly export the function
export async function fetchArtistIntel(artistName: string) {
  try {
    const searchRes = await fetch(
      `${BASE_URL}/artist/?query=artist:${artistName}&fmt=json&limit=1`,
      { headers: { 'User-Agent': 'PARR-Command-Center/1.5.0 (erich@partyatredrocks.com)' } }
    );
    const searchData = await searchRes.json();
    return searchData.artists[0] || null;
  } catch (err) {
    return null;
  }
}

export async function fetchArtistNews(artistName: string) {
  // ... (Your existing news logic)
}
