import Link from 'next/link';
import { SeatGeekEvent } from '@/lib/seatgeek';

export default function VenueEventsGrid({ events }: { events: SeatGeekEvent[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800">
      {events.map(event => {
        const performer = event.performers?.[0];
        return (
          <Link key={event.id} href={`/artists/${performer?.slug || 'unknown'}`} className="group flex bg-black p-4 gap-6 hover:bg-zinc-950 transition-all font-mono">
            <div className="w-24 h-24 flex-shrink-0 border border-zinc-800 overflow-hidden bg-zinc-950">
              {/* FULL COLOR RESTORE: Grayscale filters removed */}
              <img src={performer?.image} className="w-full h-full object-cover opacity-100" alt="Node" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-[10px] text-blue-500 mb-1">{new Date(event.datetime_local).toLocaleDateString()}</div>
              <h3 className="text-xl font-black italic uppercase tracking-tighter group-hover:text-blue-400">{event.title}</h3>
              <div className="mt-2 text-[9px] text-zinc-600 uppercase">▶ ACCESS_DOSSIER</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
