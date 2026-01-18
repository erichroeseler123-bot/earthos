import { notFound } from "next/navigation";
import { venues } from "@/data/venues";
import { fetchSeatGeekEventsByVenue } from "@/lib/seatgeek";

export const dynamic = "force-dynamic";

export default async function VenuePage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // ✅ PURE JS lookup — no TS lies
  const venue = (venues as Record<string, any>)[slug];

  if (!venue) {
    console.error("VENUE NOT FOUND:", slug);
    return notFound();
  }

  const events = await fetchSeatGeekEventsByVenue(venue.seatgeekId);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <h1 className="text-4xl font-black mb-2">{venue.name}</h1>
      <p className="text-zinc-400 mb-10">{venue.city}</p>

      <section className="grid gap-6">
        {events.length === 0 && (
          <p className="text-zinc-500">No upcoming events.</p>
        )}

        {events.map((event: any) => (
          <div
            key={event.id}
            className="border border-zinc-800 rounded-lg p-6"
          >
            <h2 className="font-bold">{event.title}</h2>
            <p className="text-sm text-zinc-400">
              {new Date(event.datetime_local).toLocaleDateString()}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
