// lib/musicbrainz.ts
/**
 * PARR v1.5 Music Intelligence Layer
 * Canonical MBID lookup and automated Cover Art recovery.
 */

const BASE_URL = "https://musicbrainz.org/ws/2";

export async function fetchArtistIntel(artistName: string) {
  try {
    // 1. Resolve Artist Identity (MBID)
    const searchRes = await fetch(
      `${BASE_URL}/artist/?query=artist:${artistName}&fmt=json`,
      { headers: { 'User-Agent': 'PARR-Command-Center/1.5.0 (erich@partyatredrocks.com)' } }
    );
    const searchData = await searchRes.json();
    const artist = searchData.artists[0];

    if (!artist) return null;

    // 2. Scan for historical Discography
    const releaseRes = await fetch(
      `${BASE_URL}/release-group?artist=${artist.id}&type=album&fmt=json`,
      { headers: { 'User-Agent': 'PARR-Command-Center/1.5.0' } }
    );
    const releaseData = await releaseRes.json();

    return {
      mbid: artist.id,
      name: artist.name,
      origin: artist.area?.name || "Global Node",
      // Map every album to its front-facing tactical asset
      albums: releaseData['release-groups'].map((rg: any) => ({
        title: rg.title,
        coverUrl: `https://coverartarchive.org/release-group/${rg.id}/front-500`
      })).slice(0, 16) // Load up to 16 pictures
    };
  } catch (err) {
    console.error("INTEL_FETCH_FAILURE:", err);
    return null;
  }
}
