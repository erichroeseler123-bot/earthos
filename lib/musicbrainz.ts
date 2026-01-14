// lib/musicbrainz.ts
const BASE_URL = "https://musicbrainz.org/ws/2";

export async function fetchArtistIntel(artistName: string) {
  try {
    // 1. Search for Artist and include URL relations to find Spotify
    const searchRes = await fetch(
      `${BASE_URL}/artist/?query=artist:${artistName}&fmt=json&limit=1`,
      { headers: { 'User-Agent': 'PARR-Command-Center/1.5.0 (erich@partyatredrocks.com)' } }
    );
    const searchData = await searchRes.json();
    const artist = searchData.artists[0];

    if (!artist) return null;

    // 2. Fetch specific relations for the Spotify ID
    const relRes = await fetch(
      `${BASE_URL}/artist/${artist.id}?inc=url-rels+release-groups\u0026fmt=json`,
      { headers: { 'User-Agent': 'PARR-Command-Center/1.5.0' } }
    );
    const relData = await relRes.json();
    
    // Extract Spotify ID from relations
    const spotifyRel = relData.relations?.find((r: any) => r.type === 'streaming music' && r.url.resource.includes('spotify'));
    const spotifyId = spotifyRel?.url?.resource ? spotifyRel.url.resource.split('/').pop().split('?')[0] : null;

    return {
      mbid: artist.id,
      name: artist.name,
      origin: artist.area?.name || "Global Node",
      spotifyId: spotifyId,
      // Map release groups to Cover Art Archive
      albums: relData['release-groups']?.map((rg: any) => ({
        title: rg.title,
        coverUrl: `https://coverartarchive.org/release-group/${rg.id}/front-500`
      })).slice(0, 12) || []
    };
  } catch (err) {
    console.error("INTEL_RECON_FAILURE:", err);
    return null;
  }
}
