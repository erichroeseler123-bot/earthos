// lib/musicbrainz.ts
const BASE_URL = "https://musicbrainz.org/ws/2";

// ✅ ADD 'export' TO EVERY FUNCTION
export async function fetchArtistIntel(artistName: string) {
  try {
    const res = await fetch(`${BASE_URL}/artist/?query=artist:${artistName}&fmt=json&limit=1`, {
      headers: { 'User-Agent': 'PARR-Command-Center/1.5.0 (erich@partyatredrocks.com)' }
    });
    const data = await res.json();
    const artist = data.artists[0];
    if (!artist) return null;

    const relRes = await fetch(`${BASE_URL}/artist/${artist.id}?inc=url-rels+release-groups&fmt=json`, {
      headers: { 'User-Agent': 'PARR-Command-Center/1.5.0' }
    });
    const relData = await relRes.json();
    
    const spotifyRel = relData.relations?.find((r: any) => r.type === 'streaming music');
    const spotifyId = spotifyRel?.url?.resource?.split('/').pop() || null;

    return {
      name: artist.name,
      origin: artist.area?.name || "Global Node",
      spotifyId,
      albums: relData['release-groups']?.map((rg: any) => ({
        title: rg.title,
        coverUrl: `https://coverartarchive.org/release-group/${rg.id}/front-500`
      })).slice(0, 12) || []
    };
  } catch (err) {
    return null;
  }
}

export async function fetchArtistNews(artistName: string) {
  // ... News logic here
}
