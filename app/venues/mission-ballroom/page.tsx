import { fetchSeatGeekEventsByVenue } from "@/lib/seatgeek";
import VenueEventsGrid from "@/components/VenueEventsGrid";

export default async function MissionBallroomPage() {
  const events = await fetchSeatGeekEventsByVenue(
    "Mission Ballroom"
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-black mb-8">
        Mission Ballroom
      </h1>

      <h2 className="text-2xl font-bold mb-4">
        Upcoming Shows
      </h2>

      <VenueEventsGrid events={events} />
    </main>
  );
}
