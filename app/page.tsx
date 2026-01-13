'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { shows } from '@/data/shows'; // Direct import of the authoritative data
import EventTicker from '@/components/EventTicker';
import GlobalSearch from '@/components/GlobalSearch';

/**
 * HomeContent - The execution layer for the DCC Console.
 * This component handles the search logic and renders the filtered reality.
 */
function HomeContent() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search')?.toLowerCase() || '';

  // Filter the static shows array based on search input
  const filteredShows = shows.filter(show => 
    show.title.toLowerCase().includes(searchTerm) || 
    show.artist.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      {/* HEADER & GLOBAL_SEARCH */}
      <header className="mb-12 border-b border-zinc-800 pb-8">
        <p className="text-[10px] text-neon-blue mb-2 tracking-[0.4em] uppercase font-black italic">
          Intelligence Layer // System_Active
        </p>
        <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-8 text-white">
          TRANSPORT <span className="text-neon-blue not-italic">INTEL</span>
        </h1>
        
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* $59 SHUTTLE VECTOR */}
          <div className="p-8 border-2 border-neon-blue bg-neon-blue/5 rounded-2xl group hover:bg-neon-blue hover:text-black transition-all shadow-2xl shadow-blue-900/20">
             <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">Shared_Vector // Shuttle</span>
                <span className="text-[10px] font-bold tracking-widest uppercase bg-white/10 px-2 py-1">AVAILABLE</span>
             </div>
             <h4 className="text-4xl font-black italic uppercase tracking-tighter mb-4">$59 SHUTTLE</h4>
             <a href="/book?type=shuttle" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-colors">EXECUTE_BOOKING</a>
          </div>

          {/* VIP SUV VECTOR */}
          <div className="p-8 border-2 border-matrix-green bg-matrix-green/5 rounded-2xl group hover:bg-matrix-green hover:text-black transition-all shadow-2xl shadow-green-900/20">
             <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">Private_Vector // SUV</span>
                <span className="text-[10px] font-bold tracking-widest uppercase bg-white/10 px-2 py-1">ON_CALL</span>
             </div>
             <h4 className="text-4xl font-black italic uppercase tracking-tighter mb-4">VIP SUV</h4>
             <a href="/book?type=suv" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-colors">REQUEST_VIP_SYNC</a>
          </div>
        </div>
      </section>

      {/* RESOLVED_CONCERT_NODES */}
      <section className="border-t border-zinc-800 pt-16">
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-500 italic mb-8 underline">Resolved_Intelligence_Nodes</p>
        <div className="grid grid-cols-1 gap-6">
          {filteredShows.length > 0 ? (
            filteredShows.map((node) => (
              <div key={node.slug} className="p-6 border border-zinc-800 bg-zinc-900/30 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-neon-blue transition-all">
                <div>
                  {/* INTERNAL SHOW PAGE LINK */}
                  <a href={`/shows/${node.slug}`} className="block">
                    <h5 className="font-black italic uppercase text-2xl text-white group-hover:text-neon-blue transition-colors">
                      {node.title}
                    </h5>
                  </a>
                  
                  <p className="text-[11px] text-zinc-400 uppercase border-l-2 border-neon-blue pl-4 mt-2 font-bold italic">
                    Node_ID: {node.slug} // 
                    {/* MUSICBRAINZ ARTIST INTEL LINK */}
                    <a 
                      href={`https://musicbrainz.org/search?query=${encodeURIComponent(node.artist)}&type=artist`} 
                      target="_blank" 
                      className="ml-2 text-neon-blue hover:underline decoration-matrix-green underline-offset-4"
                    >
                      RESOLVE_ARTIST_INTEL: {node.artist}
                    </a>
                  </p>
                </div>
                <div className="text-right text-white">
                  <p className="text-xl font-black italic">{node.date}</p>
                  <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Launch_Time: {node.time}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 border border-dashed border-zinc-800 text-center">
              <p className="text-zinc-600 text-xs font-black uppercase tracking-[0.3em]">No_Matching_Signals_Found</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/**
 * HomePage - The root landing zone.
 * Wraps the console in a Suspense boundary for stability.
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-matrix-green/30 w-full pb-20">
      <EventTicker />
      <main className="p-8 lg:p-12 max-w-7xl mx-auto">
        <Suspense fallback={<div className="text-neon-blue font-mono animate-pulse uppercase tracking-widest">Syncing_Intelligence_Layer...</div>}>
          <HomeContent />
        </Suspense>
      </main>
    </div>
  );
}
