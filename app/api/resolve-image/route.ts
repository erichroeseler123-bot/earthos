import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const artist = searchParams.get('artist');

  if (!artist) return NextResponse.json({ url: null });

  try {
    // SYSTEM 1: SEATGEEK
    const sgRes = await fetch(`https://api.seatgeek.com/2/performers?q=${encodeURIComponent(artist)}&client_id=${process.env.seatgeekclientid}`);
    const sgData = await sgRes.json();
    if (sgData.performers?.[0]?.image) {
      return NextResponse.json({ url: sgData.performers[0].image });
    }

    // SYSTEM 2: BANDSINTOWN
    const bitRes = await fetch(`https://rest.bandsintown.com/artists/${encodeURIComponent(artist)}?app_id=${process.env.bandsintownid}`);
    const bitData = await bitRes.json();
    if (bitData.image_url) {
      return NextResponse.json({ url: bitData.image_url });
    }

    // FALLBACK
    return NextResponse.json({ url: `https://source.unsplash.com/featured/800x450/?${encodeURIComponent(artist)},concert` });
  } catch (err) {
    return NextResponse.json({ url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400' });
  }
}
