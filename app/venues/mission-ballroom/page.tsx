// app/venues/mission-ballroom/page.tsx

import Link from "next/link";

export const metadata = {
  title: "Mission Ballroom – Denver Concert Venue",
  description:
    "Mission Ballroom is Denver’s premier indoor concert venue. View upcoming shows, venue details, and transportation options.",
};

export default function MissionBallroomPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* HERO */}
        <section className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Mission Ballroom
          </h1>
          <p className="text-zinc-400 max-w-2xl">
            Denver’s flagship indoor concert venue, designed for immersive sound,
            unobstructed sightlines, and high-capacity shows.
          </p>
        </section>

        {/* VENUE INTEL */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-zinc-800 p-6 bg-zinc-950/50">
            <h3 className="text-sm uppercase tracking-widest text-zinc-400">
              Location
            </h3>
            <p className="mt-2 font-semibold">
              4242 Wynkoop St<br />
              Denver, CO 80216
            </p>
          </div>

          <div className="border border-zinc-800 p-6 bg-zinc-950/50">
            <h3 className="text-sm uppercase tracking-widest text-zinc-400">
              Capacity
            </h3>
            <p className="mt-2 font-semibold">~3,950 guests</p>
          </div>

          <div className="border border-zinc-800 p-6 bg-zinc-950/50">
            <h3 className="text-sm uppercase tracking-widest text-zinc-400">
              Venue Type
            </h3>
            <p className="mt-2 font-semibold">Indoor / General Admission</p>
          </div>
        </section>

        {/* ACTIONS */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">What do you need?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/shows"
              className="border border-zinc-800 p-6 hover:bg-zinc-900 transition"
            >
              <h3 className="font-bold">Upcoming Shows</h3>
              <p className="text-zinc-400 text-sm mt-1">
                Browse concerts scheduled at Mission Ballroom.
              </p>
            </Link>

            <Link
              href="/shuttles"
              className="border border-zinc-800 p-6 hover:bg-zinc-900 transition"
            >
              <h3 className="font-bold">Transportation</h3>
              <p className="text-zinc-400 text-sm mt-1">
                Plan rides, shuttles, and group transport.
              </p>
            </Link>

            <Link
              href="/gallery"
              className="border border-zinc-800 p-6 hover:bg-zinc-900 transition"
            >
              <h3 className="font-bold">Photos & Media</h3>
              <p className="text-zinc-400 text-sm mt-1">
                Venue visuals and past show imagery.
              </p>
            </Link>
          </div>
        </section>

        {/* FOOTER NOTE */}
        <section className="pt-12 border-t border-zinc-800 text-zinc-500 text-sm">
          This venue page is part of the Party at Red Rocks & DCC network.
        </section>

      </div>
    </main>
  );
}
