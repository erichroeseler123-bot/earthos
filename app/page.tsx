'use client';
import React, { Suspense } from 'react'; // 1. Add Suspense import
import { useSearchParams } from 'next/navigation';
import EventTicker from '@/components/EventTicker';
import GlobalSearch from '@/components/GlobalSearch';

// 2. Move your main content into a sub-component
function HomeContent() {
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
    <>
      {/* HEADER & GLOBAL_SEARCH */}
      <header className="mb-12 border-b border-zinc-800 pb-8">
        <p className="text-[10px] text-neon-blue mb-2 tracking-[0.4em] uppercase font-black italic">Global Intelligence // System_Active</p>
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
        {/* ... (Your $59 Shuttle and VIP SUV code here) ... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border-2 border-neon-blue bg-neon-blue/5 rounded-2xl group hover:bg-neon-blue hover:text-black transition-all shadow-2xl shadow-blue-900/20">
             <h4 className="text-4xl font-black italic uppercase tracking-tighter mb-4">$59 SHUTTLE</h4>
             <a href="/book?type=shuttle" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm tracking-widest">EXECUTE_BOOKING</a>
          </div>
          <div className="p-8 border-2 border-matrix-green bg-matrix-green/5 rounded-2xl group hover:bg-matrix-green hover:text-black transition-all shadow-2xl shadow-green-900/20">
             <h4 className="text-4xl font-black italic uppercase tracking-tighter mb-4">VIP SUV</h4>
             <a href="/book?type=suv" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm tracking-widest">REQUEST_VIP_SYNC</a>
          </div>
        </div>
      </section>

      {/* CARRIER NETWORK */}
      <section className="border-t border-zinc-800 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCarriers.map((node) => (
            <a key={node.name} href={node.url} target="_blank" className="p-6 border border-zinc-800 bg-zinc-900/30 hover:border-neon-blue transition-all group">
               <h5 className="font-black italic uppercase text-xl group-hover:text-neon-blue">{node.name}</h5>
               <p className="text-[11px] text-zinc-400 uppercase border-l-2 border-zinc-800 pl-4 mt-2">SitRep: {node.intel}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

// 3. The main export now wraps HomeContent in a Suspense boundary
export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-matrix-green/30 w-full pb-20">
      <EventTicker />
      <main className="p-8 lg:p-12 max-w-7xl mx-auto">
        <Suspense fallback={<div className="text-neon-blue font-mono animate-pulse">SYNCING_INTELLIGENCE_LAYER...</div>}>
          <HomeContent />
        </Suspense>
      </main>
    </div>
  );
}
