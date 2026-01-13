'use client';
import React, { Suspense } from 'react';
import { shows } from '@/data/shows'; // Direct authority import
import EventTicker from '@/components/EventTicker';
import GlobalSearch from '@/components/GlobalSearch';

function HomeContent() {
  return (
    <>
      <header className="mb-12 border-b border-zinc-800 pb-8">
        <p className="text-[10px] text-neon-blue mb-2 tracking-[0.4em] uppercase font-black italic">Intelligence Layer // System_Active</p>
        <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-8 text-white">TRANSPORT <span className="text-neon-blue not-italic">INTEL</span></h1>
        <GlobalSearch />
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <div className="p-8 border-2 border-neon-blue bg-neon-blue/5 rounded-2xl group hover:bg-neon-blue hover:text-black transition-all">
          <h4 className="text-4xl font-black italic uppercase mb-4">$59 SHUTTLE</h4>
          <a href="/book?type=shuttle" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm">EXECUTE_BOOKING</a>
        </div>
        <div className="p-8 border-2 border-matrix-green bg-matrix-green/5 rounded-2xl group hover:bg-matrix-green hover:text-black transition-all">
          <h4 className="text-4xl font-black italic uppercase mb-4">VIP SUV</h4>
          <a href="/book?type=suv" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm">REQUEST_VIP_SYNC</a>
        </div>
      </section>

      <section className="border-t border-zinc-800 pt-16">
        {shows.map((node) => (
          <div key={node.slug} className="p-6 border border-zinc-800 bg-zinc-900/30 flex justify-between items-center group hover:border-neon-blue mb-4">
            <div>
              <h5 className="font-black italic uppercase text-2xl text-white group-hover:text-neon-blue">{node.title}</h5>
              <p className="text-[11px] text-zinc-400 uppercase border-l-2 border-neon-blue pl-4 mt-2">Node_ID: {node.slug}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-black text-white italic">{node.date}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono w-full pb-20">
      <EventTicker />
      <main className="p-8 lg:p-12 max-w-7xl mx-auto">
        <Suspense fallback={<div className="text-neon-blue animate-pulse">SYNCING_INTELLIGENCE_LAYER...</div>}>
          <HomeContent />
        </Suspense>
      </main>
    </div>
  );
}
