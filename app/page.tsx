'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
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
        <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-8 text-white">TRANSPORT <span className="text-neon-blue not-italic">INTEL</span></h1>
        
        <div className="w-full h-64 overflow-hidden border border-zinc-800 mb-8 bg-zinc-900 relative">
          <Image src="/fleet.jpg" alt="Fleet" fill className="object-cover" priority />
        </div>
        <GlobalSearch />
      </header>

      {/* SERVICE_NODES: COLOR ALWAYS */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group border-2 border-neon-blue bg-neon-blue/5 rounded-2xl overflow-hidden shadow-2xl">
          <div className="w-full h-48 relative">
            <Image src="/sprintershuttle.jpg" alt="Sprinter" fill className="object-cover" />
          </div>
          <div className="p-8">
            <h4 className="text-4xl font-black italic uppercase mb-4 text-white">$59 SHUTTLE</h4>
            <a href="/book?type=shuttle" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm hover:bg-neon-blue hover:text-black transition-all">EXECUTE_BOOKING</a>
          </div>
        </div>

        <div className="group border-2 border-matrix-green bg-matrix-green/5 rounded-2xl overflow-hidden shadow-2xl">
          <div className="w-full h-48 relative">
            <Image src="/redrockssuburban.jpg" alt="Suburban" fill className="object-cover" />
          </div>
          <div className="p-8">
            <h4 className="text-4xl font-black italic uppercase mb-4 text-white">VIP SUV</h4>
            <a href="/book?type=suv" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm hover:bg-matrix-green hover:text-black transition-all">REQUEST_VIP_SYNC</a>
          </div>
        </div>
      </section>

      {/* CONCERT_LIST: REAL BAND LINKS */}
      <section className="border-t border-zinc-800 pt-16">
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-500 italic mb-8 underline">Resolved_Intelligence_Nodes</p>
        <div className="grid grid-cols-1 gap-6">
          {filteredShows.map((node) => (
            <div key={node.slug} className="p-4 border border-zinc-800 bg-zinc-900/30 flex flex-col md:flex-row items-center gap-6 group hover:border-neon-blue transition-all mb-4">
              <div className="w-32 h-20 overflow-hidden border border-zinc-700 bg-zinc-800 flex-shrink-0 relative">
                <Image src={`https://source.unsplash.com/featured/400x300/?${encodeURIComponent(node.artist)},concert`} alt={node.artist} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <a href={`/artists/${encodeURIComponent(node.artist)}`} className="block group-hover:text-neon-blue transition-colors">
                  <h5 className="font-black italic uppercase text-xl text-white">{node.title}</h5>
                  <p className="text-xs text-neon-blue underline mt-1 italic">Pull_Artist_Intel: {node.artist}</p>
                </a>
              </div>
              <div className="text-right text-white font-mono"><p className="text-lg font-black italic">{node.date}</p></div>
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
