import Link from "next/link";
import { SeatGeekEvent } from "@/lib/seatgeek";

export default function VenueEventsGrid({
  events,
}: {
  events: SeatGeekEvent[];
}) {
  if (!events.length) {
    return (
      <div className="text-zinc-400 text-sm">
        No upcoming events found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {events.map((event) => {
        const image = event.performers?.[0]?.image;

        return (
          <Link
            key={event.id}
            href={event.url}
            target="_blank"
            className="group border border-zinc-800 bg-zinc-950 hover:border-zinc-600 transition overflow-hidden"
          >
            <div className="aspect-[3/4] bg-zinc-900">
              {image && (
                <img
                  src={image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              )}
            </div>

            <div className="p-3">
              <div className="text-xs text-zinc-400">
                {new Date(event.datetime_local).toLocaleDateString()}
              </div>
              <div className="text-sm font-semibold leading-tight">
                {event.title}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
