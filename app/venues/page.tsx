import Link from 'next/link';
import { VENUES } from '@/data/venues'; // Fixed Import

export default function VenuesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 font-mono">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl font-black italic uppercase tracking-tighter mb-12 border-b border-white/10 pb-6">DESTINATION_NODES</h1>
        <div className="grid gap-1 md:grid-cols-3">
          {Object.entries(VENUES).map(([slug, venue]: [string, any]) => (
            <Link key={slug} href={`/venues/${slug}`} className="group border border-zinc-800 p-8 hover:bg-zinc-900/50 hover:border-blue-500 transition-all">
              <div className="text-[10px] text-zinc-600 mb-4 tracking-widest uppercase">ID: NODE_{venue.seatgeekVenueId}</div>
              <div className="text-3xl font-black italic uppercase group-hover:text-blue-400 transition-colors">{venue.name}</div>
              <div className="text-[10px] text-zinc-500 mt-2 uppercase tracking-tighter">{venue.city}, {venue.state} // ${venue.price}.00 RT</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
