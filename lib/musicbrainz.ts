/**
 * PARR v1.4 Music Intelligence Layer
 * Fetches canonical artist data and cover art references.
 */

const BASE_URL = "https://musicbrainz.org/ws/2";

export async function fetchArtistIntel(artistName: string) {
  try {
    // 1. Search for the Artist to get their MBID (MusicBrainz ID)
    const searchRes = await fetch(
      `${BASE_URL}/artist/?query=artist:${artistName}&fmt=json`,
      { headers: { 'User-Agent': 'PARR-Command-Center/1.0.0 (erich@partyatredrocks.com)' } }
    );
    const searchData = await searchRes.json();
    const artist = searchData.artists[0];

    if (!artist) return null;

    // 2. Fetch their Release Groups (Albums) for the Visual Gallery
    const releaseRes = await fetch(
      `${BASE_URL}/release-group?artist=${artist.id}&type=album&fmt=json`,
      { headers: { 'User-Agent': 'PARR-Command-Center/1.0.0' } }
    );
    const releaseData = await releaseRes.json();

    return {
      mbid: artist.id,
      name: artist.name,
      origin: artist.area?.name || "Unknown",
      type: artist.type || "Group",
      // Map release IDs to the Cover Art Archive URL
      albums: releaseData['release-groups'].map((rg: any) => ({
        title: rg.title,
        id: rg.id,
        coverUrl: `https://coverartarchive.org/release-group/${rg.id}/front-250`
      })).slice(0, 12) // Limit to top 12 assets for performance
    };
  } catch (error) {
    console.error("MusicBrainz Recon Failure:", error);
    return null;
  }
}
