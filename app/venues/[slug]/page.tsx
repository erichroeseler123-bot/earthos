import { venues } from "@/data/venues";
import { fetchSeatGeekEventsByVenue } from "@/lib/seatgeek";
import VenueEventsGrid from "@/components/VenueEventsGrid";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function VenuePage({
  params,
}: {
  params: { slug: string };
}) {
  console.log("VENUE SLUG:", params.slug);
  console.log("AVAILABLE SLUGS:", Object.keys(venues));

  const venue = venues[params.slug as keyof typeof venues];

  if (!venue) {
    console.error("❌ VENUE NOT FOUND:", params.slug);
    notFound();
  }

  const events = await fetchSeatGeekEventsByVenue(venue.seatgeekId);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-black mb-2">{venue.name}</h1>
      <p className="text-zinc-400 mb-8">{venue.city}</p>
      <VenueEventsGrid events={events} />
    </main>
  );
}
