import Link from "next/link";

export default function CalendarClient() {
  return (
    <div className="space-y-3">
      {events.map(event => (
        <Link
          key={event.slug}
          href={`/concert/${event.slug}`}
          className="block border border-neutral-800 rounded p-4 hover:bg-neutral-900"
        >
          <div className="flex gap-4 items-center">
            <img
              src={event.thumbnail || event.heroImage}
              className="w-20 h-20 object-cover rounded"
              alt={event.title}
            />

            <div className="flex-1">
              <div className="font-bold">{event.title}</div>
              <div className="text-sm opacity-70">{event.date}</div>
            </div>

            <div className="flex gap-2">
              <span className="bg-blue-600 px-3 py-1 text-sm rounded">
                Shuttle
              </span>
              <span className="bg-neutral-700 px-3 py-1 text-sm rounded">
                Private
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
