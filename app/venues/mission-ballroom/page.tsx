// app/venues/mission-ballroom/page.tsx

import { fetchMissionBallroomShows } from "@/lib/seatgeek";

export const metadata = {
  title: "Mission Ballroom – Denver Concert Venue",
  description:
    "Mission Ballroom is Denver’s flagship indoor concert venue, known for immersive sound, unobstructed sightlines, and high-capacity shows.",
};

export default async function MissionBallroomPage() {
  const shows = await fetchMissionBallroomShows();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-mono mb-6">
          Mission Ballroom
        </h1>

        <p className="text-zinc-400 max-w-2xl mb-12">
          Denver’s flagship indoor concert venue, designed for immersive sound,
          unobstructed sightlines, and high-capacity shows.
        </p>

        {/* Venue Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="border border-zinc-800 p-4">
            <div className="text-xs text-zinc-500 mb-2">LOCATION</div>
            <div className="font-mono">
              4242 Wynkoop St
              <br />
              Denver, CO 80216
            </div>
          </div>

          <div className="border border-zinc-800 p-4">
            <div className="text-xs text-zinc-500 mb-2">CAPACITY</div>
            <div className="font-mono">~3,950 guests</div>
          </div>

          <div className="border border-zinc-800 p-4">
            <div className="text-xs text-zinc-500 mb-2">VENUE TYPE</div>
            <div className="font-mono">Indoor / General Admission</div>
          </div>
        </div>

        {/* Actions */}
        <h2 className="text-2xl font-mono mb-6">What do you need?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="border border-zinc-800 p-6">
            <div className="font-bold mb-2">Upcoming Shows</div>
            <p className="text-sm text-zinc-400">
              Browse concerts scheduled at Mission Ballroom.
            </p>
          </div>

          <div className="border border-zinc-800 p-6">
            <div className="font-bold mb-2">Transportation</div>
            <p className="text-sm text-zinc-400">
              Plan rides, shuttles, and group transport.
            </p>
          </div>

          <div className="border border-zinc-800 p-6">
            <div className="font-bold mb-2">Photos & Media</div>
            <p className="text-sm text-zinc-400">
              Venue visuals and past show imagery.
            </p>
          </div>
        </div>

        {/* Upcoming Shows */}
        {shows.length > 0 && (
          <section>
            <h2 className="text-2xl font-mono mb-6">Upcoming Shows</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {shows.map((show: any) => (
                <div
                  key={show.id}
                  className="border border-zinc-800 p-4 hover:border-white transition"
                >
                  <div className="font-bold">{show.title}</div>
                  <div className="text-sm text-zinc-400">
                    {new Date(show.datetime_local).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <div className="mt-24 text-xs text-zinc-600">
          This venue page is part of the Party at Red Rocks & DCC network.
        </div>
      </div>
    </main>
  );
}
