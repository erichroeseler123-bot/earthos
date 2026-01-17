import Link from "next/link";
import { fetchMissionBallroomEvents } from "@/lib/seatgeek";

export const metadata = {
  title: "Mission Ballroom – Denver Concert Venue",
  description:
    "Mission Ballroom is Denver’s flagship indoor concert venue, built for immersive sound and high-capacity shows.",
};

export default async function MissionBallroomVenuePage() {
  const events = await fetchMissionBallroomEvents();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Mission Ballroom
          </h1>
          <p className="text-zinc-400 max-w-2xl">
            Denver’s flagship indoor concert venue, designed for immersive
            sound, unobstructed sightlines, and high-capacity shows.
          </p>
        </header>

        {/* FACTS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="border border-zinc-800 p-6">
            <div className="text-xs text-zinc-500 mb-2">LOCATION</div>
            <div>4242 Wynkoop St<br />Denver, CO 80216</div>
          </div>

          <div className="border border-zinc-800 p-6">
            <div className="text-xs text-zinc-500 mb-2">CAPACITY</div>
            <div>~3,950 guests</div>
          </div>

          <div className="border border-zinc-800 p-6">
            <div className="text-xs text-zinc-500 mb-2">VENUE TYPE</div>
            <div>Indoor / General Admission</div>
          </div>
        </section>

        {/* SHOWS */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-6">Upcoming Shows</h2>

          {events.length === 0 ? (
            <p className="text-zinc-500">No upcoming shows found.</p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="border border-zinc-800 p-6 hover:bg-zinc-900 transition"
                >
                  <div className="font-semibold mb-1">{event.title}</div>
                  <div className="text-sm text-zinc-400 mb-3">
                    {new Date(event.datetime_local).toLocaleString()}
                  </div>
                  <Link
                    href={event.url}
                    target="_blank"
                    className="text-sm underline text-zinc-300"
                  >
                    View tickets →
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* FOOTER */}
        <footer className="pt-12 border-t border-zinc-800 text-sm text-zinc-500">
          This venue page is part of the Party at Red Rocks & DCC network.
        </footer>
      </div>
    </main>
  );
}
