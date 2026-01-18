import Link from "next/link";

export const metadata = {
  title: "Mission Ballroom – Denver Concert Venue",
  description:
    "Mission Ballroom is Denver’s flagship indoor concert venue, built for immersive sound, unobstructed sightlines, and high-capacity shows.",
};

export default function MissionBallroomVenuePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Mission Ballroom
          </h1>
          <p className="text-zinc-400 max-w-2xl">
            Denver’s flagship indoor concert venue, designed for immersive
            sound, unobstructed sightlines, and high-capacity shows.
          </p>
        </header>

        {/* VENUE FACTS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="border border-zinc-800 p-6">
            <div className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
              Location
            </div>
            <div className="font-semibold">
              4242 Wynkoop St
              <br />
              Denver, CO 80216
            </div>
          </div>

          <div className="border border-zinc-800 p-6">
            <div className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
              Capacity
            </div>
            <div className="font-semibold">~3,950 guests</div>
          </div>

          <div className="border border-zinc-800 p-6">
            <div className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
              Venue Type
            </div>
            <div className="font-semibold">
              Indoor / General Admission
            </div>
          </div>
        </section>

        {/* ACTIONS */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-6">What do you need?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/shows"
              className="border border-zinc-800 p-6 hover:bg-zinc-900 transition"
            >
              <div className="font-semibold mb-2">Upcoming Shows</div>
              <div className="text-sm text-zinc-400">
                Browse concerts scheduled at Mission Ballroom.
              </div>
            </Link>

            <Link
              href="/shuttles"
              className="border border-zinc-800 p-6 hover:bg-zinc-900 transition"
            >
              <div className="font-semibold mb-2">Transportation</div>
              <div className="text-sm text-zinc-400">
                Plan rides, shuttles, and group transport.
              </div>
            </Link>

            <Link
              href="/gallery"
              className="border border-zinc-800 p-6 hover:bg-zinc-900 transition"
            >
              <div className="font-semibold mb-2">Photos & Media</div>
              <div className="text-sm text-zinc-400">
                Venue visuals and past show imagery.
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER NOTE */}
        <footer className="pt-12 border-t border-zinc-800 text-sm text-zinc-500">
          This venue page is part of the Party at Red Rocks & DCC network.
        </footer>
      </div>
    </main>
  );
}
