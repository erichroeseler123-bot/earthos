import { cache } from 'react';

// Priority 1: SeatGeek (Uses 'seatgeekclientid')
export const getSeatGeekImage = cache(async (artist: string) => {
  try {
    const res = await fetch(`https://api.seatgeek.com/2/performers?q=${encodeURIComponent(artist)}&client_id=${process.env.seatgeekclientid}`);
    const data = await res.json();
    return data.performers?.[0]?.image || null;
  } catch { return null; }
});

// Priority 2: Bandsintown (Uses 'bandsintownid')
export const getBandsintownImage = cache(async (artist: string) => {
  try {
    const res = await fetch(`https://rest.bandsintown.com/artists/${encodeURIComponent(artist)}?app_id=${process.env.bandsintownid}`);
    const data = await res.json();
    return data.image_url || null;
  } catch { return null; }
});

// Priority 3: MusicBrainz Metadata (Uses 'musicbrainsid' as User-Agent)
export const getMusicBrainzInfo = cache(async (artist: string) => {
  try {
    const headers = { 'User-Agent': process.env.musicbrainsid || 'PartyAtRedRocks/1.0' };
    const searchRes = await fetch(`https://musicbrainz.org/ws/2/artist/?query=artist:${encodeURIComponent(artist)}&fmt=json`, { headers });
    const searchData = await searchRes.json();
    const mbid = searchData.artists?.[0]?.id;
    if (!mbid) return null;
    const detailRes = await fetch(`https://musicbrainz.org/ws/2/artist/${mbid}?inc=genres+url-rels&fmt=json`, { headers });
    return await detailRes.json();
  } catch { return null; }
});
