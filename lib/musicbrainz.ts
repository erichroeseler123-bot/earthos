// lib/musicbrainz.ts
const BASE_URL = "https://musicbrainz.org/ws/2";

export async function fetchArtistIntel(artistName: string) {
  try {
    // 1. Fetch Artist MBID and URL Relations in a single tactical sweep
    const searchRes = await fetch(
      `${BASE_URL}/artist/?query=artist:${artistName}&fmt=json&limit=1`,
      { headers: { 'User-Agent': 'PARR-Command-Center/1.5.0 (erich@partyatredrocks.com)' } }
    );
    const searchData = await searchRes.json();
    const artist = searchData.artists[0];

    if (!artist) return null;

    // 2. Deep scan for Spotify Streaming Authority
    const relRes = await fetch(
      `${BASE_URL}/artist/${artist.id}?inc=url-rels+release-groups&fmt=json`,
      { headers: { 'User-Agent': 'PARR-Command-Center/1.5.0' } }
    );
    const relData = await relRes.json();
    
    // Extract Spotify ID directly from the authoritative relations array
    const spotifyRel = relData.relations?.find((r: any) => 
      r.type === 'streaming music' && r.url.resource.includes('spotify.com/artist/')
    );
    
    const spotifyId = spotifyRel?.url?.resource ? 
      spotifyRel.url.resource.split('artist/').pop().split('?')[0] : null;

    return {
      mbid: artist.id,
      name: artist.name,
      origin: artist.area?.name || "Global Node",
      spotifyId: spotifyId,
      // Map release groups to canonical Cover Art front-plates
      albums: relData['release-groups']?.map((rg: any) => ({
        title: rg.title,
        coverUrl: `https://coverartarchive.org/release-group/${rg.id}/front-500`
      })).slice(0, 12) || []
    };
  } catch (err) {
    console.error("TACTICAL_RECON_ERROR:", err);
    return null;
  }
}
