import { getVenueEvents } from '@/lib/seatgeek';
import VenueEventsGrid from './VenueEventsGrid';

export default async function VenueShows({ venue }: { venue: any }) {
  // Pulls up to 50 shows to maximize fleet visibility
  const events = await getVenueEvents(venue.seatgeekVenueId);

  return (
    <section>
      <h2 className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mb-8 flex items-center gap-3">
        <span className="w-8 h-[1px] bg-zinc-800"></span> Upcoming Missions
      </h2>
      <VenueEventsGrid events={events} />
    </section>
  );
}
