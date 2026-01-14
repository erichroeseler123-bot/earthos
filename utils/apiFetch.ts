import { cache } from 'react';

export const getMusicBrainzInfo = cache(async (artist: string) => {
  try {
    // MusicBrainz requires a unique User-Agent to avoid 503 throttling
    const headers = { 'User-Agent': 'PartyAtRedRocks/1.0 (erichroeseler123@gmail.com)' };
    
    // Step A: Search to find the artist MBID
    const searchRes = await fetch(
      `https://musicbrainz.org/ws/2/artist/?query=artist:${encodeURIComponent(artist)}&fmt=json`,
      { headers }
    );
    const searchData = await searchRes.json();
    const mbid = searchData.artists?.[0]?.id;

    if (!mbid) return null;

    // Step B: Direct Lookup with deep metadata inc arguments
    const detailRes = await fetch(
      `https://musicbrainz.org/ws/2/artist/${mbid}?inc=aliases+genres+release-groups+url-rels&fmt=json`,
      { headers }
    );
    return await detailRes.json();
  } catch (err) {
    console.error('DCC_SYNC_ERROR:', err);
    return null;
  }
});
