'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { shows } from '../data/shows'; 
import GlobalSearch from '../components/GlobalSearch';

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
        
        {/* THIS IS THE MISSING IMAGE BLOCK */}
        <div className="w-full h-64 overflow-hidden border border-zinc-800 mb-8 bg-zinc-900">
          <img src="/fleet.jpg" alt="Red Rocks Fleet" className="w-full h-full object-cover opacity-80" />
        </div>

        <GlobalSearch />
      </header>

      {/* SERVICE_EXECUTION_NODES */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group">
          <div className="w-full h-48 overflow-hidden border border-zinc-800 mb-4 bg-zinc-900">
            <img src="/sprintershuttle.jpg" alt="Sprinter Shuttle" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="p-8 border-2 border-neon-blue bg-neon-blue/5 rounded-2xl group-hover:bg-neon-blue group-hover:text-black transition-all">
            <h4 className="text-4xl font-black italic uppercase mb-4">$59 SHUTTLE</h4>
            <a href="/book?type=shuttle" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm">EXECUTE_BOOKING</a>
          </div>
        </div>

        <div className="group">
          <div className="w-full h-48 overflow-hidden border border-zinc-800 mb-4 bg-zinc-900">
            <img src="/redrockssuburban.jpg" alt="VIP Suburban" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="p-8 border-2 border-matrix-green bg-matrix-green/5 rounded-2xl group-hover:bg-matrix-green group-hover:text-black transition-all">
            <h4 className="text-4xl font-black italic uppercase mb-4">VIP SUV</h4>
            <a href="/book?type=suv" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm">REQUEST_VIP_SYNC</a>
          </div>
        </div>
      </section>

      {/* CONCERT_LIST */}
      <section className="border-t border-zinc-800 pt-16">
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-500 italic mb-8 underline">Resolved_Intelligence_Nodes</p>
        <div className="grid grid-cols-1 gap-6">
          {filteredShows.map((node) => (
            <div key={node.slug} className="p-4 border border-zinc-800 bg-zinc-900/30 flex flex-col md:flex-row items-center gap-6 group hover:border-neon-blue transition-all mb-4">
              {node.image && (
                <div className="w-32 h-20 overflow-hidden border border-zinc-700 bg-zinc-800 flex-shrink-0">
                  <img src={node.image} alt={node.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
              )}
              <div className="flex-1">
                <a href={`/shows/${node.slug}`} className="block">
                  <h5 className="font-black italic uppercase text-xl text-white group-hover:text-neon-blue transition-colors">{node.title}</h5>
                </a>
                <p className="text-[10px] text-zinc-400 uppercase border-l-2 border-neon-blue pl-4 mt-1 font-bold italic">Node_ID: {node.slug}</p>
              </div>
              <div className="text-right text-white font-mono">
                <p className="text-lg font-black italic">{node.date}</p>
                <p className="text-[9px] text-zinc-500 font-bold uppercase">{node.time}</p>
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
      <main className="p-8 lg:p-12 max-w-7xl mx-auto">
        <Suspense fallback={<div className="text-neon-blue animate-pulse uppercase tracking-widest">Syncing_Intelligence_Layer...</div>}>
          <HomeContent />
        </Suspense>
      </main>
    </div>
  );
}
