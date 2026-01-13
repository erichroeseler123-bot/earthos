import React from 'react';
import EventTicker from '@/components/EventTicker';
import SitRep from '@/components/SitRep';

export default function ShuttlesPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      <EventTicker />

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-40px)]">
        
        {/* SIDEBAR */}
        <aside className="w-full lg:w-64 border-r border-zinc-900 p-6 flex flex-col gap-8 bg-zinc-950/20">
          <div>
            <p className="text-[10px] text-zinc-500 font-mono tracking-[0.2em] mb-1">INTELLIGENCE LAYER</p>
            <h2 className="text-xl font-black tracking-tighter">EARTHOS <span className="text-blue-500">DCC</span></h2>
          </div>

          <SitRep />

          <nav className="flex flex-col gap-2">
            <button className="w-full py-3 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest rounded-sm">
              $59 SHUTTLE
            </button>
            <button className="w-full py-3 bg-zinc-900 text-zinc-400 font-bold text-xs uppercase tracking-widest rounded-sm border border-zinc-800">
              SHUTTLE GUIDE
            </button>
          </nav>
        </aside>

        {/* MAIN COMMAND CENTER */}
        <main className="flex-1 p-8 lg:p-12">
          <header className="mb-12">
            <p className="text-xs font-mono text-zinc-500 mb-2 tracking-[0.3em]">DIRECTORY // NETWORK_SYNC_2026</p>
            <h1 className="text-6xl font-black uppercase italic tracking-tighter">
              TRANSPORT <span className="text-blue-500 not-italic">INTEL</span>
            </h1>
          </header>

          {/* VISUAL SYNC PORTAL */}
          <section className="relative w-full aspect-video lg:aspect-[21/9] bg-zinc-900/30 border border-zinc-800 rounded-xl mb-12 flex flex-col items-center justify-center group">
            <div className="text-center">
              <p className="text-zinc-600 font-mono text-[10px] mb-4 tracking-widest uppercase">Red Rocks Official Feed</p>
              
              <a 
                href="/gallery" 
                className="group inline-flex items-center gap-3 px-6 py-3 border border-zinc-800 bg-black/40 backdrop-blur-md hover:border-blue-500 transition-all rounded-full"
              >
                <span className="text-blue-500 font-bold">|</span>
                <span className="text-zinc-300 font-mono text-xs tracking-[0.2em] uppercase">
                  Execute_Visual_Sync // <span className="text-blue-500 underline decoration-blue-500/30">View_Venue_Photos</span>
                </span>
                <span className="text-zinc-500 group-hover:translate-x-1 transition-transform">{'>'}</span>
              </a>
            </div>
          </section>

          {/* SERVICES */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-blue-900/30 bg-blue-950/5 p-8 rounded-2xl">
              <p className="text-[10px] text-blue-500 font-mono mb-2 uppercase">Node: Shared_Shuttle</p>
              <h4 className="text-4xl font-black italic">$59 SHUTTLE</h4>
              <button className="mt-6 w-full py-4 bg-blue-600 text-white font-black uppercase text-sm rounded-xl">
                BOOK NATIVE
              </button>
            </div>

            <div className="border border-green-900/30 bg-green-950/5 p-8 rounded-2xl">
              <p className="text-[10px] text-green-500 font-mono mb-2 uppercase">Node: Private_Suburban</p>
              <h4 className="text-4xl font-black italic uppercase">VIP Tailgate SUV</h4>
              <button className="mt-6 w-full py-4 bg-green-600/20 border border-green-600 text-green-500 font-black uppercase text-sm rounded-xl">
                RESERVE VIP
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
