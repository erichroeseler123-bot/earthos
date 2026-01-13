'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import EventTicker from '@/components/EventTicker';
import GlobalSearch from '@/components/GlobalSearch';

export default function HomePage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search')?.toLowerCase() || '';

  const carriers = [
    { name: "Bus to Show", url: "https://bustoshow.org", rate: "$35", intel: "Non-profit // School buses // BYOB" },
    { name: "Bus Party Colorado", url: "https://buspartyco.com", rate: "$55", intel: "21+ Only // RiNo Pre-Party" },
    { name: "RM Event Shuttles", url: "https://rmeshuttles.com", rate: "$57.50", intel: "Hotel Pickup // All ages" },
    { name: "On Location (RRX)", url: "https://rrxshuttles.com", rate: "$65", intel: "55-Pax // Bathrooms" },
    { name: "Red Rocks Shuttle", url: "https://redrocksshuttle.com", rate: "$65-69", intel: "AC Transit // Union Station" }
  ];

  const filteredCarriers = carriers.filter(c => 
    c.name.toLowerCase().includes(searchTerm) || 
    c.intel.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-matrix-green/30 w-full pb-20">
      <EventTicker />
      <main className="p-8 lg:p-12 max-w-7xl mx-auto">
        
        <header className="mb-12 border-b border-zinc-800 pb-8">
          <p className="text-[10px] text-neon-blue mb-2 tracking-[0.4em] uppercase italic font-black italic">Global Intelligence // System_Active</p>
          <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-8 text-white">TRANSPORT <span className="text-neon-blue not-italic">INTEL</span></h1>
          
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <GlobalSearch />
            <a href="/schedule" className="group flex items-center gap-3 px-6 py-4 border border-zinc-800 bg-zinc-900/40 hover:border-red-600 transition-all">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-red-500 transition-colors">
                Resolve_Concert_Schedule // <span className="underline italic">System_Calendar</span>
              </span>
            </a>
          </div>
        </header>

        {/* NATIVE_FLEET // YOUR SERVICES */}
        <section className="mb-24">
          <div className="mb-12">
            <h3 className="text-3xl font-black uppercase italic tracking-widest text-white tracking-tighter">NATIVE_FLEET // <span className="text-neon-blue">BOOK_NOW</span></h3>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.4em] italic font-mono">// Direct_Sync_Booking_Active</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border-2 border-neon-blue bg-neon-blue/5 rounded-2xl group hover:bg-neon-blue hover:text-black transition-all shadow-2xl shadow-blue-900/20">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-4xl font-black italic uppercase tracking-tighter">$59 SHUTTLE</h4>
                <span className="text-[10px] font-mono font-black border border-current px-2 py-1 uppercase italic">Shared_Vector</span>
              </div>
              <p className="text-xs font-mono tracking-widest uppercase mb-8 opacity-70 italic font-bold">Union Station ↔ Red Rocks // High-Roof Transit Van</p>
              <a href="/book?type=shuttle" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-colors">EXECUTE_BOOKING</a>
            </div>

            <div className="p-8 border-2 border-matrix-green bg-matrix-green/5 rounded-2xl group hover:bg-matrix-green hover:text-black transition-all shadow-2xl shadow-green-900/20">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-4xl font-black italic uppercase tracking-tighter">VIP SUV</h4>
                <span className="text-[10px] font-mono font-black border border-current px-2 py-1 uppercase italic">Private_Vector</span>
              </div>
              <p className="text-xs font-mono tracking-widest uppercase mb-8 opacity-70 italic font-bold">Door-to-Door Service // Chevrolet Suburban LTZ</p>
              <a href="/book?type=suv" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-colors">REQUEST_VIP_SYNC</a>
            </div>
          </div>
        </section>

        {/* VISUAL_SYNC_PORTAL */}
        <section className="relative w-full aspect-video lg:aspect-[21/9] bg-zinc-900 border border-zinc-800 rounded-xl mb-24 overflow-hidden shadow-2xl">
          <img src="/fleet.jpg" alt="DCC Fleet" className="absolute inset-0 w-full h-full object-cover z-0 opacity-100" />
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-10">
            <div className="w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
          </div>
          <div className="absolute top-4 left-4 z-30 font-mono text-[10px] text-neon-blue uppercase tracking-widest bg-black/60 px-2 py-1 border border-neon-blue/20 font-bold italic">REC ● LIVE_FEED // FLEET_SYNC_ACTIVE</div>
        </section>

        {/* CARRIER NETWORK */}
        <section className="border-t border-zinc-800 pt-16">
          <div className="mb-12">
            <h3 className="text-2xl font-black uppercase italic tracking-widest mb-2 text-white italic underline">Carrier Network // Intelligence</h3>
            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest italic font-mono">// Intelligence summaries for external vectors</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCarriers.map((node) => (
              <a key={node.name} href={node.url} target="_blank" rel="noopener noreferrer" className="p-6 border border-zinc-800 bg-zinc-900/30 hover:border-neon-blue transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <h5 className="font-black italic uppercase text-xl group-hover:text-neon-blue transition-colors tracking-widest italic">{node.name}</h5>
                  <span className="text-xs text-neon-blue font-black underline italic tracking-widest">{node.rate}</span>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono tracking-widest leading-relaxed uppercase border-l-2 border-zinc-800 pl-4">
                  <span className="text-zinc-600 font-bold">SitRep:</span> {node.intel}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
