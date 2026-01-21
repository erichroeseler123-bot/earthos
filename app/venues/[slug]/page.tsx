import { notFound } from 'next/navigation';
import { VENUES } from '@/data/venues';
import VenueShows from '@/components/VenueShows';

export default async function VenuePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  // Standardize the slug to prevent "Not Found" errors
  const slug = resolvedParams.slug.toLowerCase().trim();
  const venue = VENUES[slug];

  if (!venue) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-mono">
        <h1 className="text-4xl font-black italic mb-4">VENUE NOT FOUND</h1>
        <p className="text-zinc-500 mb-8 uppercase tracking-widest text-xs">Node: {slug} is inactive in registry</p>
        <a href="/venues" className="border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all text-xs">VIEW ALL ACTIVE NODES</a>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 font-mono">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 border-b border-white/10 pb-12">
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-4 text-blue-500">
            {venue.name}
          </h1>
          <div className="text-xs text-zinc-500 uppercase tracking-widest">
            {venue.city}, {venue.state} // Mission Rate: ${venue.price}.00 RT
          </div>
        </header>

        <section className="mb-24 p-10 bg-blue-600 rounded-3xl shadow-2xl">
           <h2 className="text-white font-black uppercase tracking-widest text-sm mb-4">DEPLOY FLEET</h2>
           <p className="text-blue-100 text-[10px] mb-8 uppercase">Direct Door-to-Door Shuttle Service. $250.00 Minimum activation fee.</p>
           <a href="/book-shuttle" className="inline-block bg-black text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs">Reserve Suburban</a>
        </section>

        <VenueShows venue={venue} />
      </div>
    </main>
  );
}
