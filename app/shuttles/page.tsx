import React from 'react';
import EventTicker from '@/components/EventTicker';

export default function ShuttlesPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-matrix-green/30 w-full">
      
      {/* SECTION A: DATA_TICKER_LAYER */}
      {/* Purpose: Real-time scrolling event feed from SeatGeek API */}
      <EventTicker />

      <main className="p-8 lg:p-12 max-w-7xl">
        
{/* SECTION B: INTEL_HEADER & GLOBAL_SEARCH */}
{/* Purpose: Primary Command Interface for Location-Indexed Intelligence */}
<header className="mb-12">
  {/* LABEL: Left-aligned Global Intelligence (Replaced redundant domain name) */}
  <p className="text-[10px] text-neon-blue mb-2 tracking-[0.4em] uppercase italic font-bold">
    Global Intelligence // System_Active
  </p>

  {/* SEARCH_NODE: 50% Width with Right-Aligned Button */}
  <div className="w-full md:w-1/2 flex items-stretch gap-0 border border-zinc-800 bg-zinc-900/50 focus-within:border-neon-blue transition-all group shadow-2xl">
    <input 
      type="text" 
      placeholder="Search Venue, Performer, or Coordinate..." 
      className="flex-1 bg-transparent px-4 py-3 text-sm font-mono text-white placeholder:text-zinc-600 outline-none"
    />
    <button className="bg-neon-blue hover:bg-blue-500 text-white px-6 py-3 font-black text-xs uppercase tracking-widest transition-all group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
      Execute_Search
    </button>
  </div>

  {/* Page Identity Moved to Sub-label */}
  <div className="mt-8">
    <h1 className="text-4xl font-black uppercase italic tracking-tighter">
      TRANSPORT <span className="text-neon-blue not-italic">INTEL</span>
    </h1>
    <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest font-mono">
      Directory // Network_Sync_2026 // Venue_196
    </p>
  </div>
</header>

{/* SECTION C: VISUAL_SYNC_PORTAL (THE HERO SECTION) */}
{/* Status: Using Wikimedia source to bypass hotlink protection */}
<section className="relative w-full aspect-video lg:aspect-[21/9] bg-zinc-900 border border-zinc-800 rounded-xl mb-12 flex flex-col items-center justify-center group overflow-hidden shadow-2xl">
  
  {/* VERIFIED PUBLIC DOMAIN SOURCE: Red Rocks Amphitheatre landscape */}
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Red_Rocks_Amphitheatre_July_2015_01.jpg/1280px-Red_Rocks_Amphitheatre_July_2015_01.jpg" 
    alt="RED ROCKS SURVEY"
    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 scale-105 group-hover:scale-100"
  />
  
  {/* INTEL SCANLINE OVERLAY */}
  <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-20">
    <div className="w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
  </div>

  {/* HUD COORDINATES */}
  <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-neon-blue uppercase tracking-widest bg-black/60 px-2 py-1 border border-neon-blue/20">
    REC ● LIVE_FEED // 39.6654° N, 105.2057° W
  </div>

  <div className="relative z-30 text-center bg-black/70 backdrop-blur-xl p-8 border border-white/5 rounded-sm">
    <p className="text-neon-blue font-mono text-[10px] mb-4 tracking-[0.4em] uppercase italic underline decoration-neon-blue/30">
      Node: Venue_196 // Site_Sync_Active
    </p>
    <a href="/gallery" className="group inline-flex items-center gap-4 px-8 py-3 border border-zinc-700 hover:border-neon-blue transition-all bg-black/40">
      <span className="text-zinc-200 font-mono text-xs tracking-[0.2em] uppercase group-hover:text-white">
        Execute_Visual_Sync // <span className="text-neon-blue underline italic font-bold tracking-widest">Open_Intel_Gallery</span>
      </span>
    </a>
  </div>
</section>


        {/* SECTION D: SERVICE_VECTORS */}
        {/* Purpose: Booking triggers for Shared and VIP transportation */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CARD: SHARED_SHUTTLE */}
          <div className="border border-neon-blue/20 bg-neon-blue/5 p-8 rounded-2xl hover:border-neon-blue transition-colors">
            <p className="text-[10px] text-neon-blue mb-2 uppercase tracking-tighter italic">// Node: Shared_Shuttle</p>
            <h4 className="text-4xl font-black italic uppercase">$59 SHUTTLE</h4>
            <button className="mt-8 w-full py-4 bg-neon-blue text-white font-black uppercase text-sm tracking-widest rounded-xl transition-all shadow-lg shadow-blue-900/20">
              BOOK NATIVE
            </button>
          </div>

          {/* CARD: PRIVATE_SUBURBAN */}
          <div className="border border-matrix-green/20 bg-matrix-green/5 p-8 rounded-2xl shadow-neon-glow hover:border-matrix-green transition-colors">
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
