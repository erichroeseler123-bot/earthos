import { NextResponse } from "next/server";
import { put, list, del, head } from "@vercel/blob";
import { venues } from "@/data/venues";
import { geminiEnrichArtist } from "@/lib/gemini";

const DAYS_PAST = 90;
const DAYS_FUTURE = 90;

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function daysFromNow(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * 🚨 IMPORTANT
 * This route MUST be protected with:
 * - Vercel Cron auth
 * - Or a secret header check
 */
export async function GET() {
  const NOW = todayISO();
  const WINDOW_START = daysFromNow(-DAYS_PAST);
  const WINDOW_END = daysFromNow(DAYS_FUTURE);

  try {
    // ─────────────────────────────
    // 1️⃣ PULL: Fetch upcoming shows
    // ─────────────────────────────
    // NOTE: Replace this with SeatGeek / Ticketmaster calls
    // This mock represents "normalized" show data
    const fetchedShows = await fetchUpcomingShowsMock();

    // ─────────────────────────────
    // 2️⃣ SAVE SHOW FILES
    // ─────────────────────────────
    const seenArtistSlugs = new Set<string>();

    for (const show of fetchedShows) {
      if (show.date < WINDOW_START || show.date > WINDOW_END) continue;

      const showId = `${show.date}-${show.venue.slug}-${slugify(show.title)}`;
      const showPath = `shows/${showId}.json`;

      for (const artist of show.artists) {
        seenArtistSlugs.add(artist.slug);
      }

      await put(
        showPath,
        JSON.stringify(
          {
            ...show,
            id: showId,
            status: show.date < NOW ? "past" : "upcoming",
            captured_at: new Date().toISOString(),
            last_synced: new Date().toISOString(),
          },
          null,
          2
        ),
        { access: "public", addRandomSuffix: false }
      );
    }

    // ─────────────────────────────
    // 3️⃣ ENRICH: Artists (Gemini)
    // ─────────────────────────────
    for (const artistSlug of seenArtistSlugs) {
      const artistPath = `artists/${artistSlug}.json`;

      try {
        await head(artistPath);
        // File exists → skip
        continue;
      } catch {
        // File does not exist → enrich
      }

      const artistData = await geminiEnrichArtist(artistSlug);

      if (!artistData) continue;

      await put(
        artistPath,
        JSON.stringify(
          {
            ...artistData,
            slug: artistSlug,
            captured_at: new Date().toISOString(),
            last_reviewed: new Date().toISOString(),
          },
          null,
          2
        ),
        { access: "public", addRandomSuffix: false }
      );
    }

    // ─────────────────────────────
    // 4️⃣ PURGE: Janitor
    // ─────────────────────────────
    const allShows = await list({ prefix: "shows/" });

    for (const file of allShows.blobs) {
      const match = file.pathname.match(/^shows\/(\d{4}-\d{2}-\d{2})-/);
      if (!match) continue;

      const showDate = match[1];

      if (showDate < WINDOW_START || showDate > WINDOW_END) {
        await del(file.pathname);
      }
    }

    return NextResponse.json({
      ok: true,
      message: "Midnight sync complete",
      window: `${WINDOW_START} → ${WINDOW_END}`,
    });
  } catch (err: any) {
    console.error("CRON SYNC ERROR", err);
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}

/**
 * 🔧 MOCK – Replace with SeatGeek/Ticketmaster
 */
async function fetchUpcomingShowsMock() {
  return [
    {
      title: "Crankdat Live",
      date: "2026-05-20",
      time: "18:00",
      timezone: "America/Denver",
      venue: {
        slug: "red-rocks",
        name: "Red Rocks Amphitheatre",
        city: "Morrison",
        state: "CO",
      },
      artists: [
        { slug: "crankdat", name: "Crankdat" }
      ],
      intelligence: {
        vibe: "party",
        shuttle_urgency: "high",
        crowd_energy: "high",
        confidence: "medium",
      },
      source: {
        provider: "seatgeek",
        provider_id: "123456",
      },
      seo: {
        title: "Crankdat at Red Rocks",
        description: "Crankdat live at Red Rocks Amphitheatre.",
      },
    },
  ];
}
