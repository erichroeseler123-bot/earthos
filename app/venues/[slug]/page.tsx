import { notFound } from "next/navigation";
import { venues } from "@/data/venues";
import VenueEventsGrid from "@/components/VenueEventsGrid";
import { fetchSeatGeekEventsByVenue } from "@/lib/seatgeek";

type Props = {
  params: { slug: string };
};

export default async function VenuePage({ params }: Props) {
  const slug = params.slug;

  // 🔒 CANONICAL LOOKUP — NO TRANSFORMS
  const venue = venues[slug as keyof typeof venues];

  if (!venue) {
    console.error("VENUE NOT FOUND:", slug, Object.keys(venues));
    notFound();
  }

  const events = await fetchSeatGeekEventsByVenue(venue.seatgeekId);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-black mb-2">{venue.name}</h1>
      <p className="text-zinc-400 mb-10">{venue.city}</p>

      <VenueEventsGrid events={events} />
    </main>
  );
}
