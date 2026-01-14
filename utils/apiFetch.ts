import { cache } from 'react';

export const getMusicBrainzInfo = cache(async (artist: string) => {
  try {
    const headers = { 'User-Agent': process.env.musicbrainsid || 'PartyAtRedRocks/1.0' };
    
    // Step A: Resolve the MBID (MusicBrainz ID)
    const searchRes = await fetch(`https://musicbrainz.org/ws/2/artist/?query=artist:${encodeURIComponent(artist)}&fmt=json`, { headers });
    const searchData = await searchRes.json();
    const mbid = searchData.artists?.[0]?.id;
    if (!mbid) return null;

    // Step B: Fetch EVERYTHING (Bio, Genres, Releases, Links)
    const detailRes = await fetch(`https://musicbrainz.org/ws/2/artist/${mbid}?inc=aliases+genres+ratings+url-rels+release-groups&fmt=json`, { headers });
    return await detailRes.json();
  } catch (err) {
    return null;
  }
});
