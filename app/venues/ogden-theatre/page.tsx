import { fetchSeatGeekEventsByVenue } from "@/lib/seatgeek";
import VenueEventsGrid from "@/components/VenueEventsGrid";

export default async function OgdenTheatrePage() {
  const events = await fetchSeatGeekEventsByVenue(
    "Ogden Theatre"
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-black mb-8">
        Ogden Theatre
      </h1>

      <h2 className="text-2xl font-bold mb-4">
        Upcoming Shows
      </h2>

      <VenueEventsGrid events={events} />
    </main>
  );
}
