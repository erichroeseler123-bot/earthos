import React from 'react';
import EventTicker from '@/components/EventTicker';

export default function ShuttlesPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-matrix-green/30 w-full">
      <EventTicker />

      <main className="p-8 lg:p-12 max-w-7xl">
        <header className="mb-12">
          <p className="text-xs text-zinc-500 mb-2 tracking-[0.3em] uppercase underline decoration-matrix-green/30 text-neon-blue font-mono">
            Directory // Network_Sync_2026
          </p>
          <h1 className="text-6xl font-black uppercase italic tracking-tighter">
            TRANSPORT <span className="text-neon-blue not-italic">INTEL</span>
          </h1>
        </header>

        {/* VISUAL SYNC PORTAL */}
        <section className="relative w-full aspect-video lg:aspect-[21/9] bg-zinc-900/30 border border-zinc-800 rounded-xl mb-12 flex flex-col items-center justify-center group overflow-hidden">
          <div className="text-center relative z-10">
            <p className="text-zinc-600 text-[10px] mb-4 tracking-widest uppercase italic">Red Rocks Official Feed</p>
            <a href="/gallery" className="group inline-flex items-center gap-3 px-6 py-3 border border-zinc-800 bg-black/40 backdrop-blur-md hover:border-neon-blue transition-all rounded-full">
              <span className="text-neon-blue font-bold">|</span>
              <span className="text-zinc-300 text-xs tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                Execute_Visual_Sync // <span className="text-neon-blue underline decoration-neon-blue/30 italic">View_Venue_Photos</span>
              </span>
              <span className="text-zinc-500 group-hover:translate-x-1 transition-transform">{'>'}</span>
            </a>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-matrix-green/5 to-transparent h-1/2 w-full animate-pulse top-0" />
        </section>

        {/* SERVICES GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SHARED SHUTTLE CARD */}
          <div className="border border-neon-blue/20 bg-neon-blue/5 p-8 rounded-2xl">
            <p className="text-[10px] text-neon-blue mb-2 uppercase tracking-tighter italic">// Node: Shared_Shuttle</p>
            <h4 className="text-4xl font-black italic">$59 SHUTTLE</h4>
            <button className="mt-8 w-full py-4 bg-neon-blue text-white font-black uppercase text-sm tracking-widest rounded-xl transition-all">
              BOOK NATIVE
            </button>
          </div>

          {/* VIP SUV CARD */}
          <div className="border border-matrix-green/20 bg-matrix-green/5 p-8 rounded-2xl shadow-neon-glow">
            <p className="text-[10px] text-matrix-green mb-2 uppercase tracking-tighter italic">// Node: Private_Suburban</p>
            <h4 className="text-4xl font-black italic uppercase text-matrix-light">VIP Tailgate SUV</h4>
            <button className="mt-8 w-full py-4 border border-matrix-green bg-matrix-green/10 text-matrix-green hover:bg-matrix-green hover:text-black font-black uppercase text-sm tracking-widest rounded-xl transition-all">
              RESERVE VIP
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
