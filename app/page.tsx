'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { shows } from '@/data/shows'; 
import EventTicker from '@/components/EventTicker';
import GlobalSearch from '@/components/GlobalSearch';

function HomeContent() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search')?.toLowerCase() || '';

  const filteredShows = shows.filter(show => 
    show.title.toLowerCase().includes(searchTerm) || 
    show.artist.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <header className="mb-12 border-b border-zinc-800 pb-8">
        <p className="text-[10px] text-neon-blue mb-2 tracking-[0.4em] uppercase font-black italic">Intelligence Layer // System_Active</p>
        <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-8 text-white">TRANSPORT <span className="text-neon-blue not-italic">INTEL</span></h1>
        <GlobalSearch />
      </header>

      {/* SERVICE_EXECUTION_NODES */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 border-2 border-neon-blue bg-neon-blue/5 rounded-2xl group hover:bg-neon-blue hover:text-black transition-all">
          <h4 className="text-4xl font-black italic uppercase mb-4">$59 SHUTTLE</h4>
          <a href="/book?type=shuttle" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm">EXECUTE_BOOKING</a>
        </div>
        <div className="p-8 border-2 border-matrix-green bg-matrix-green/5 rounded-2xl group hover:bg-matrix-green hover:text-black transition-all">
          <h4 className="text-4xl font-black italic uppercase mb-4">VIP SUV</h4>
          <a href="/book?type=suv" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm">REQUEST_VIP_SYNC</a>
        </div>
      </section>

      {/* CONCERT_INTELLIGENCE_NODES */}
      <section className="border-t border-zinc-800 pt-16">
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-500 italic mb-8 underline">Resolved_Intelligence_Nodes</p>
        <div className="grid grid-cols-1 gap-6">
          {filteredShows.map((node) => (
            <div key={node.slug} className="p-6 border border-zinc-800 bg-zinc-900/30 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-neon-blue transition-all">
              <div>
                <a href={`/shows/${node.slug}`} className="block">
                  <h5 className="font-black italic uppercase text-2xl text-white group-hover:text-neon-blue transition-colors">{node.title}</h5>
                </a>
                <p className="text-[11px] text-zinc-400 uppercase border-l-2 border-neon-blue pl-4 mt-2 font-bold italic">
                  Node_ID: {node.slug} // 
                  <a href={`https://musicbrainz.org/search?query=${encodeURIComponent(node.artist)}&type=artist`} target="_blank" className="ml-2 text-neon-blue hover:underline">
                    RESOLVE_ARTIST_INTEL: {node.artist}
                  </a>
                </p>
              </div>
              <div className="text-right text-white font-mono">
                <p className="text-xl font-black italic">{node.date}</p>
                <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">{node.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono w-full pb-20">
      <EventTicker />
      <main className="p-8 lg:p-12 max-w-7xl mx-auto">
        <Suspense fallback={<div className="text-neon-blue animate-pulse uppercase">Syncing_Intelligence_Layer...</div>}>
          <HomeContent />
        </Suspense>
      </main>
    </div>
  );
}
