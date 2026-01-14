// lib/musicbrainz.ts
const BASE_URL = "https://musicbrainz.org/ws/2";

export async function fetchArtistIntel(artistName: string) {
  try {
    // 1. Resolve Artist Identity
    const searchRes = await fetch(
      `${BASE_URL}/artist/?query=artist:${artistName}&fmt=json&limit=1`,
      { headers: { 'User-Agent': 'PARR-Command-Center/1.5.0 (erich@partyatredrocks.com)' } }
    );
    const searchData = await searchRes.json();
    const artist = searchData.artists[0];

    if (!artist) return null;

    // 2. Deep scan for Relationships (Members), Discography, and Life-span
    const relRes = await fetch(
      `${BASE_URL}/artist/${artist.id}?inc=url-rels+artist-rels+release-groups&fmt=json`,
      { headers: { 'User-Agent': 'PARR-Command-Center/1.5.0' } }
    );
    const relData = await relRes.json();
    
    // Extract Spotify ID
    const spotifyRel = relData.relations?.find((r: any) => 
      r.type === 'streaming music' && r.url.resource.includes('spotify.com')
    );
    const spotifyId = spotifyRel?.url?.resource ? 
      spotifyRel.url.resource.split('artist/').pop().split('?')[0] : null;

    // Filter for Band Members
    const members = relData.relations
      ?.filter((r: any) => r['target-type'] === 'artist' && r.type === 'member of band')
      .map((m: any) => ({
        name: m.artist.name,
        active: !m.ended,
        role: m.attributes?.join(', ') || 'Member'
      })) || [];

    return {
      mbid: artist.id,
      name: artist.name,
      origin: artist.area?.name || "Global Node",
      founded: relData['life-span']?.begin || "Unknown",
      isGroup: artist.type === 'Group',
      members: members,
      spotifyId: spotifyId,
      albums: relData['release-groups']?.map((rg: any) => ({
        title: rg.title,
        coverUrl: `https://coverartarchive.org/release-group/${rg.id}/front-500`
      })).slice(0, 12) || []
    };
  } catch (err) {
    console.error("INTEL_FETCH_ERROR:", err);
    return null;
  }
}
