import { notFound } from "next/navigation";
import { venues } from "@/data/venues";
import { fetchSeatGeekEventsByVenue } from "@/lib/seatgeek";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function VenuePage({ params }: Props) {
  const { slug } = await params;
  const venue = venues[slug];

  if (!venue) notFound();

  const events =
    venue.seatgeekVenueId
      ? await fetchSeatGeekEventsByVenue(venue.seatgeekVenueId)
      : [];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-5xl font-black mb-2">{venue.name}</h1>
      <p className="text-zinc-400 mb-8">
        {venue.city}, {venue.state}
      </p>

      <section className="mb-12">
        <p className="text-lg">
          <strong>$50 per person round-trip shuttle</strong>  
          <br />
          $250 trip minimum · Pay cash at pickup
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Upcoming Shows (90 Days)</h2>

        {events.length === 0 && (
          <p className="text-zinc-500">No upcoming events listed.</p>
        )}

        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event.id}
              className="border border-zinc-800 rounded-lg p-4 hover:border-white transition"
            >
              <div className="font-semibold">{event.title}</div>
              <div className="text-sm text-zinc-400">
                {new Date(event.datetime_local).toLocaleString()}
              </div>
              <a
                href={event.url}
                target="_blank"
                className="text-sm underline mt-1 inline-block"
              >
                View Tickets
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
