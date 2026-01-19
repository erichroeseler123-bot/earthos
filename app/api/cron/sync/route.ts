import { NextResponse } from "next/server";
import { venues } from "@/data/venues";

/**
 * Midnight Sync Cron
 * - Pulls shows (mock for now)
 * - Enriches artists (Gemini)
 * - Writes to Vercel Blob
 * - Enforces 180-day sliding window
 */

export async function GET(request: Request) {
  try {
    /* ─────────────────────────────
       🔐 AUTH (HARD GATE)
    ───────────────────────────── */
    const headerSecret = request.headers.get("x-cron-secret");
    const envSecret = process.env.CRON_SECRET;

    if (!envSecret || headerSecret !== envSecret) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    /* ─────────────────────────────
       🧪 DRY RUN FLAG
    ───────────────────────────── */
    const { searchParams } = new URL(request.url);
    const dryRun = searchParams.get("dryRun") === "true";

    /* ─────────────────────────────
       🪟 TIME WINDOW (90 / 90)
    ───────────────────────────── */
    const today = new Date();
    const past = new Date(today);
    past.setDate(today.getDate() - 90);

    const future = new Date(today);
    future.setDate(today.getDate() + 90);

    const windowLabel = `${past.toISOString().slice(0, 10)} → ${future
      .toISOString()
      .slice(0, 10)}`;

    console.log("CRON SYNC START", { dryRun, window: windowLabel });

    /* ─────────────────────────────
       ⏭️ DRY RUN SHORT CIRCUIT
    ───────────────────────────── */
    if (dryRun) {
      return NextResponse.json({
        ok: true,
        dryRun: true,
        message: "Midnight sync complete (dry run)",
        window: windowLabel,
      });
    }

    /* ─────────────────────────────
       📦 LAZY LOAD HEAVY MODULES
    ───────────────────────────── */
    const { put, list, del } = await import("@vercel/blob");
    const { geminiEnrichArtist } = await import("@/lib/gemini");

    let showsWritten = 0;
    let artistsWritten = 0;
    let purged = 0;

    /* ─────────────────────────────
       🎤 INGEST (MOCK SHOWS FOR NOW)
       (Replace with Ticketmaster later)
    ───────────────────────────── */
for (const venue of Object.values(venues)) {
      const mockShow = {
        id: `${today.toISOString().slice(0, 10)}-${venue.slug}`,
        date: today.toISOString().slice(0, 10),
        venue: venue.slug,
        artist: "Example Artist",
      };

      const showPath = `shows/${mockShow.id}.json`;

      await put(showPath, JSON.stringify(mockShow, null, 2), {
        access: "public",
        contentType: "application/json",
      });

      showsWritten++;

      /* ─────────────────────────────
         🎵 ARTIST ENRICH (ONCE)
      ───────────────────────────── */
      const artistSlug = "example-artist";
      const artistPath = `artists/${artistSlug}.json`;

      try {
        await list({ prefix: artistPath });
      } catch {
        const artistData = await geminiEnrichArtist("Example Artist");

        await put(artistPath, JSON.stringify(artistData, null, 2), {
          access: "public",
          contentType: "application/json",
        });

        artistsWritten++;
      }
    }

    /* ─────────────────────────────
       🧹 PURGE OLD SHOWS
    ───────────────────────────── */
    const allShows = await list({ prefix: "shows/" });

    for (const file of allShows.blobs) {
      const match = file.pathname.match(/^shows\/(\d{4}-\d{2}-\d{2})-/);
      if (!match) continue;

      const showDate = new Date(match[1]);
      if (showDate < past || showDate > future) {
        await del(file.pathname);
        purged++;
      }
    }

    /* ─────────────────────────────
       ✅ DONE
    ───────────────────────────── */
    return NextResponse.json({
      ok: true,
      dryRun: false,
      message: "Midnight sync complete",
      window: windowLabel,
      shows_written: showsWritten,
      artists_written: artistsWritten,
      purged,
    });
  } catch (err: any) {
    console.error("CRON SYNC ERROR", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
