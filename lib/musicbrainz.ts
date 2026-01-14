// lib/musicbrainz.ts
const BASE_URL = "https://musicbrainz.org/ws/2";

export async function fetchArtistIntel(artistName: string) {
  try {
    // 1. Search for Artist and include "url-rels" to find Spotify/Social links
    const searchRes = await fetch(
      `${BASE_URL}/artist/?query=artist:${artistName}&fmt=json&limit=1`,
      { headers: { 'User-Agent': 'PARR-Command-Center/1.5.0 (erich@partyatredrocks.com)' } }
    );
    const searchData = await searchRes.json();
    const artist = searchData.artists[0];

    if (!artist) return null;

    // 2. Fetch specific relations to find the Spotify ID
    const relRes = await fetch(
      `${BASE_URL}/artist/${artist.id}?inc=url-rels&fmt=json`,
      { headers: { 'User-Agent': 'PARR-Command-Center/1.5.0' } }
    );
    const relData = await relRes.json();
    
    // Find the Spotify link in the relations array
    const spotifyRel = relData.relations?.find((r: any) => r.type === 'streaming music');
    const spotifyUrl = spotifyRel?.url?.resource || "";
    const spotifyId = spotifyUrl.split('/').pop(); // Extracts the ID from the URL

    return {
      mbid: artist.id,
      name: artist.name,
      origin: artist.area?.name || "Global Node",
      spotifyId: spotifyId || null, 
      albums: [] // Keep your existing album logic here
    };
  } catch (err) {
    return null;
  }
}
