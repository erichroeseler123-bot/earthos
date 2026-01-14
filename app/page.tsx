'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { shows } from '../data/shows'; 
import GlobalSearch from '../components/GlobalSearch';

// INDIVIDUAL BAND NODE COMPONENT
function BandImage({ artist }: { artist: string }) {
  const [imgUrl, setImgUrl] = useState<string>('');

  useEffect(() => {
    async function fetchImage() {
      const res = await fetch(`/api/resolve-image?artist=${encodeURIComponent(artist)}`);
      const data = await res.json();
      setImgUrl(data.url);
    }
    fetchImage();
  }, [artist]);

  return (
    <div className="w-48 h-28 overflow-hidden border border-zinc-700 bg-zinc-800 flex-shrink-0 relative">
      {imgUrl ? (
        <img src={imgUrl} alt={artist} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full animate-pulse bg-zinc-900" />
      )}
    </div>
  );
}

function HomeContent() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search')?.toLowerCase() || '';
  const filteredShows = shows.filter(s => s.title.toLowerCase().includes(searchTerm) || s.artist.toLowerCase().includes(searchTerm));

  return (
    <>
      <header className="mb-12 border-b border-zinc-800 pb-8">
        <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-4 text-white">RED ROCKS <span className="text-neon-blue not-italic">TRANSPORT</span></h1>
        <p className="text-xs font-black uppercase tracking-widest text-zinc-500 italic mb-8 border-l-2 border-neon-blue pl-4">Shuttles from Denver & Golden // Door-to-Door Private SUV</p>
        <div className="w-full h-64 overflow-hidden border border-zinc-800 mb-8 bg-zinc-900 relative">
          <Image src="/fleet.jpg" alt="Fleet" fill className="object-cover" priority />
        </div>
        <GlobalSearch />
      </header>

      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group border-2 border-neon-blue bg-neon-blue/5 rounded-2xl overflow-hidden shadow-2xl">
          <div className="w-full h-[300px] overflow-hidden relative border-b border-neon-blue">
            <div className="absolute inset-0 -top-[100px] w-full h-[400px]">
              <Image src="/sprintershuttle.jpg" alt="Sprinter" fill className="object-cover" />
            </div>
          </div>
          <div className="p-8">
            <h4 className="text-4xl font-black italic uppercase mb-2 text-white">$59 SHUTTLE</h4>
            <a href="/book?type=shuttle" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm hover:bg-neon-blue hover:text-black transition-all">EXECUTE_BOOKING</a>
          </div>
        </div>

        <div className="group border-2 border-matrix-green bg-matrix-green/5 rounded-2xl overflow-hidden shadow-2xl">
          <div className="w-full h-[300px] overflow-hidden relative border-b border-matrix-green">
            <div className="absolute inset-0 -top-[100px] w-full h-[400px]">
              <Image src="/redrockssuburban.jpg" alt="Suburban" fill className="object-cover" />
            </div>
          </div>
          <div className="p-8">
            <h4 className="text-4xl font-black italic uppercase mb-2 text-white">PRIVATE SUV</h4>
            <a href="/book?type=suv" className="block w-full py-4 border-2 border-current text-center font-black uppercase text-sm hover:bg-matrix-green hover:text-black transition-all">REQUEST_PRIVATE_SYNC</a>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 pt-16">
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-500 italic mb-8 underline">Upcoming_Red_Rocks_Intelligence</p>
        <div className="grid grid-cols-1 gap-6">
          {filteredShows.map((node) => (
            <div key={node.slug} className="p-4 border border-zinc-800 bg-zinc-900/30 flex flex-col md:flex-row items-center gap-6 group hover:border-neon-blue transition-all mb-4">
              <BandImage artist={node.artist} />
              <div className="flex-1">
                <a href={`/artists/${encodeURIComponent(node.artist)}`} className="block group-hover:text-neon-blue">
                  <h5 className="font-black italic uppercase text-xl text-white">{node.title}</h5>
                  <p className="text-[10px] text-neon-blue underline mt-1 italic uppercase font-bold tracking-widest">Artist_Intel: {node.artist}</p>
                </a>
              </div>
              <div className="text-right text-white font-mono font-black italic">{node.date}</div>
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
        <Suspense fallback={<div className="text-neon-blue animate-pulse uppercase">Resolving_Visual_Nodes...</div>}>
          <HomeContent />
        </Suspense>
      </main>
    </div>
  );
}
