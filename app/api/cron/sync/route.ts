import { NextResponse } from "next/server";
import { venues } from "@/data/venues";
import { put, list } from "@vercel/blob";

export async function GET(req: Request) {
  const secret = req.headers.get("x-cron-secret");
  if (secret !== process.env.PARR_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const today = new Date();
  const end = new Date();
  end.setDate(today.getDate() + 90);

  let written = 0;

  for (const venue of Object.values(venues)) {
    // MOCK FOR NOW – SeatGeek swap later
    const showDate = new Date(today);
    showDate.setDate(today.getDate() + 14);

    const show = {
      id: `${showDate.toISOString().slice(0, 10)}-${venue.slug}`,
      venueSlug: venue.slug,
      date: showDate.toISOString().slice(0, 10),
      title: `Live at ${venue.name}`,
      url: "#",
    };

    await put(`shows/${show.id}.json`, JSON.stringify(show), {
      access: "public",
      addRandomSuffix: false,
    });

    written++;
  }

  return NextResponse.json({
    ok: true,
    shows_written: written,
    window: `${today.toISOString().slice(0, 10)} → ${end.toISOString().slice(0, 10)}`,
  });
}
