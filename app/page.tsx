import Link from 'next/link';
import { VENUES } from '@/data/venues';

export default function HomePage() {
  // Sector 3: All-Venue Shuttle Nodes (Excluding Red Rocks and Mishawaka)
  const allVenueNodes = Object.values(VENUES).filter(v => 
    !['red-rocks-amphitheatre', 'mishawaka-amphitheatre', 'ford-amphitheater'].includes(v.slug)
  );

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-red-600">
      
      {/* SECTION 1: RED ROCKS HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.partyatredrocks.com/Shuttle_jpg')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center px-6">
          <div className="text-red-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-6 font-mono animate-pulse">
            Premium Dispatch // 2026 Season
          </div>
          <h1 className="text-8xl md:text-[12rem] font-black italic uppercase tracking-tighter leading-none mb-8">
            Red Rocks
          </h1>
          <Link href="/venues/red-rocks-amphitheatre" className="inline-block bg-red-600 text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-red-500 transition-all shadow-[0_0_50px_rgba(220,38,38,0.3)]">
            Book Red Rocks Shuttle
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-32">
        
        {/* SECTION 2: SERVICE ROUTING NODES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* Mishawaka Dispatch */}
          <Link href="/venues/mishawaka-amphitheatre" className="group p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/50 transition-all">
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest font-mono block mb-4">Specific Service // Poudre Canyon</span>
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-6 group-hover:text-blue-400">Mishawaka</h2>
            <div className="text-xs text-zinc-400 uppercase font-mono tracking-widest">Access Private Mountain Shuttle →</div>
          </Link>

          {/* Ford Theater Dispatch */}
          <Link href="/venues/ford-amphitheater" className="group p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/50 transition-all">
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest font-mono block mb-4">Specific Service // Colorado Springs</span>
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-6 group-hover:text-blue-400">Ford Theater</h2>
            <div className="text-xs text-zinc-400 uppercase font-mono tracking-widest">Access Springs Logistics →</div>
          </Link>
        </div>

        {/* SECTION 3: ALL-VENUE SHUTTLE SERVICE */}
        <div className="mb-20">
          <header className="mb-12 border-l-4 border-blue-600 pl-8">
            <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-4">All-Venue Shuttle</h2>
            <p className="text-zinc-400 text-lg italic max-w-2xl leading-relaxed">
              Our standardized $50.00 per person round-trip service. We pick you up anywhere in Denver and handle the logistics for the city's premier indoor venues.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allVenueNodes.map((v) => (
              <Link key={v.slug} href={`/venues/${v.slug}`} className="group p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all">
                <div className="text-[9px] text-blue-500 font-bold uppercase mb-2 font-mono">Mission_Node_0{v.seatgeekVenueId}</div>
                <h3 className="text-2xl font-black italic uppercase tracking-tight group-hover:text-blue-400">{v.name}</h3>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">${v.price}.00 RT // {v.city}</div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/book-all-venues" className="inline-block border border-white/10 px-16 py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] hover:bg-white hover:text-black transition-all">
              View All Venue Shuttle Page
            </Link>
          </div>
        </div>

        {/* SECTION 4: FLEET LOGISTICS SUMMARY */}
        <footer className="p-16 rounded-[4rem] bg-gradient-to-br from-blue-700/80 to-blue-900 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6">Dispatch Logistics</h3>
              <div className="space-y-2 text-[11px] text-blue-100 uppercase font-bold font-mono">
                <p>Standard Rate: $50.00 / Person</p>
                <p>Min. Activation: $250.00 Round Trip</p>
                <p>Fleet: 6 Suburbans // 1 Van</p>
              </div>
            </div>
            <div className="text-right">
              <a href="tel:7203696292" className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white hover:text-blue-200 transition-colors">
                (720) 369-6292
              </a>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}
