// app/gallery/page.tsx
export default async function RedRocksGallery() {
  const CLIENT_ID = "NTUyMjcyMDV8MTc2NzU1MDc0Ni41MDEyNjgx";
  const VENUE_ID = "196";

  const res = await fetch(
    `https://api.seatgeek.com/2/events?client_id=${CLIENT_ID}&venue.id=${VENUE_ID}&per_page=24`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-6">
          <div>
            <h1 className="text-5xl font-black tracking-tighter uppercase">Venue 196 Intel</h1>
            <p className="text-zinc-500 font-mono mt-2">REAL-TIME VISUAL FEED // MORRISON, CO</p>
          </div>
          <a href="/shuttle" className="text-sm font-bold border border-white px-4 py-2 hover:bg-white hover:text-black transition-all">
            RETURN TO COMMAND
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.events?.map((event: any) => (
            <div key={event.id} className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-800">
              <img 
                src={event.performers[0].image || '/placeholder.jpg'} 
                alt={event.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80" />
              <div className="absolute bottom-0 p-4 w-full">
                <p className="text-[10px] font-mono text-red-600 mb-1">{new Date(event.datetime_local).toLocaleDateString()}</p>
                <h3 className="font-bold text-lg leading-tight uppercase mb-3">{event.title}</h3>
                <a href="/shuttle" className="block w-full text-center py-2 bg-white text-black text-xs font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Deploy Shuttle
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
