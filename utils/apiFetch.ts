import { cache } from 'react';

export const getArtistImage = cache(async (artist: string) => {
  try {
    // SYSTEM 1: SEATGEEK (Official Performance Imagery)
    const sgRes = await fetch(`https://api.seatgeek.com/2/performers?q=${encodeURIComponent(artist)}&client_id=${process.env.seatgeekclientid}`);
    const sgData = await sgRes.json();
    if (sgData.performers?.[0]?.image) return sgData.performers[0].image;

    // SYSTEM 2: BANDSINTOWN (Official Artist Visuals)
    const bitRes = await fetch(`https://rest.bandsintown.com/artists/${encodeURIComponent(artist)}?app_id=${process.env.bandsintownid}`);
    const bitData = await bitRes.json();
    if (bitData.image_url) return bitData.image_url;

    // FALLBACK: UNSPLASH (Contextual Stage Visuals)
    return `https://source.unsplash.com/featured/800x450/?${encodeURIComponent(artist)},concert,band`;
  } catch (err) {
    return `https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800`;
  }
});
