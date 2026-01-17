export default function OgdenTheatrePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Ogden Theatre
        </h1>

        <p className="text-gray-400 max-w-2xl mb-12">
          A historic Denver concert venue known for its intimate atmosphere,
          diverse bookings, and legendary nightlife energy.
        </p>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="border border-gray-800 p-6">
            <h3 className="text-xs tracking-widest text-gray-500 mb-2">
              LOCATION
            </h3>
            <p className="font-medium">
              935 E Colfax Ave<br />
              Denver, CO 80218
            </p>
          </div>

          <div className="border border-gray-800 p-6">
            <h3 className="text-xs tracking-widest text-gray-500 mb-2">
              CAPACITY
            </h3>
            <p className="font-medium">~1,600 guests</p>
          </div>

          <div className="border border-gray-800 p-6">
            <h3 className="text-xs tracking-widest text-gray-500 mb-2">
              VENUE TYPE
            </h3>
            <p className="font-medium">Indoor / General Admission</p>
          </div>
        </div>

        {/* ACTION GRID */}
        <h2 className="text-2xl font-semibold mb-6">
          What do you need?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-800 p-6 hover:border-gray-600 transition">
            <h3 className="font-semibold mb-2">Upcoming Shows</h3>
            <p className="text-sm text-gray-400">
              Browse concerts scheduled at Ogden Theatre.
            </p>
          </div>

          <div className="border border-gray-800 p-6 hover:border-gray-600 transition">
            <h3 className="font-semibold mb-2">Transportation</h3>
            <p className="text-sm text-gray-400">
              Plan rides, shuttles, and group transport.
            </p>
          </div>

          <div className="border border-gray-800 p-6 hover:border-gray-600 transition">
            <h3 className="font-semibold mb-2">Photos & Media</h3>
            <p className="text-sm text-gray-400">
              Venue visuals and past show imagery.
            </p>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <p className="text-xs text-gray-600 mt-20">
          This venue page is part of the Party at Red Rocks & DCC network.
        </p>
      </div>
    </main>
  );
}
