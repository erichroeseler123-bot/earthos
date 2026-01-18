import { notFound } from "next/navigation";
import { venues } from "@/data/venues";
import { fetchSeatGeekEventsByVenue } from "@/lib/seatgeek";
import VenueEventsGrid from "@/components/VenueEventsGrid";

/**
 * Tell Next.js which venue pages exist at build time
 */
export async function generateStaticParams() {
  return Object.keys(venues).map(slug => ({
    slug,
  }));
}

type Params = {
  slug: string;
};

export default async function VenuePage({ params }: { params: Params }) {
  const venue = venues[params.slug as keyof typeof venues];

  if (!venue) {
    notFound();
  }

  const events = await fetchSeatGeekEventsByVenue(venue.seatgeekId);

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-5xl font-black uppercase tracking-tight">
          {venue.name}
        </h1>

        <p className="mt-2 text-zinc-400 uppercase tracking-wide text-sm">
          {venue.city}
        </p>

        <div className="mt-12">
          <VenueEventsGrid events={events} />
        </div>
      </div>
    </main>
  );
}
