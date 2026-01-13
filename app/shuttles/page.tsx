import React from 'react';
import EventTicker from '@/components/EventTicker';

export default function ShuttlesPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-matrix-green/30 w-full">
      
      {/* SECTION A: DATA_TICKER_LAYER */}
      {/* Purpose: Real-time scrolling event feed from SeatGeek API */}
      <EventTicker />

      <main className="p-8 lg:p-12 max-w-7xl">
        
        {/* SECTION B: INTEL_HEADER */}
        {/* Purpose: Identity and Directory Synchronization */}
        <header className="mb-12">
          <p className="text-xs text-neon-blue mb-2 tracking-[0.3em] uppercase underline decoration-matrix-green/30 font-bold">
            Directory // Network_Sync_2026
          </p>
          <h1 className="text-6xl font-black uppercase italic tracking-tighter">
            TRANSPORT <span className="text-neon-blue not-italic">INTEL</span>
          </h1>
        </header>

        {/* SECTION C: VISUAL_SYNC_PORTAL (THE HERO SECTION) */}
        {/* Purpose: Forced venue survey visual. THIS IS WHERE THE IMAGE LIVES. */}
        <section className="relative w-full aspect-video lg:aspect-[21/9] bg-zinc-900 border border-zinc-800 rounded-xl mb-12 flex flex-col items-center justify-center group overflow-hidden shadow-2xl">
          
          {/* THE ASSET: If this is black, the URL is being blocked or the cache is stale. */}
          <img 
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/red-rocks-amphitheater-morrison-colorado-cascadia-stock.jpg" 
            alt="SURVEY_FEED_VENUE_196"
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100 z-0"
          />
          
          {/* OVERLAY: Intel Scanlines */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-25">
            <div className="w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
          </div>

          {/* OVERLAY: Coordinates HUD */}
          <div className="absolute top-4 left-4 z-30 font-mono text-[10px] text-neon-blue uppercase tracking-widest bg-black/60 px-2 py-1 border border-neon-blue/20">
            REC ● LIVE_FEED // 39.6654° N, 105.2057° W
          </div>

          {/* ACTION_VECTOR: Link to Full Gallery */}
          <div className="relative z-30 text-center bg-black/70 backdrop-blur-xl p-8 border border-white/5 rounded-sm">
            <p className="text-neon-blue font-mono text-[10px] mb-4 tracking-[0.4em] uppercase italic underline decoration-neon-blue/30">
              Node: Venue_196 // Site_Sync_Active
            </p>
            <a href="/gallery" className="group inline-flex items-center gap-4 px-8 py-3 border border-zinc-700 hover:border-neon-blue transition-all bg-black/40">
              <span className="text-zinc-200 font-mono text-xs tracking-[0.2em] uppercase group-hover:text-white">
                Execute_Visual_Sync // <span className="text-neon-blue underline italic font-bold tracking-widest">Open_Intel_Gallery</span>
              </span>
              <span className="text-zinc-500 group-hover:translate-x-2 transition-transform">{'>'}</span>
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
