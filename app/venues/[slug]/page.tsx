import { venues } from "@/data/venues";
import { fetchSeatGeekEventsByVenue } from "@/lib/seatgeek";
import VenueEventsGrid from "@/components/VenueEventsGrid";
import { notFound } from "next/navigation";

type Params = { slug: string };

export default async function VenuePage({ params }: { params: Params }) {
const venue = venues[params.slug as keyof typeof venues];
  if (!venue) notFound();

  const events = await fetchSeatGeekEventsByVenue(venue.seatgeekId);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-black uppercase tracking-tight mb-2">
        {venue.name}
      </h1>
      <p className="text-sm text-zinc-400 mb-10">{venue.city}</p>

      <VenueEventsGrid events={events} />
    </main>
  );
}
