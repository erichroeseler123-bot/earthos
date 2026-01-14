"use client";
import React from 'react';
import DCCSidebar from '@/components/DCCSidebar';
import HeroMap from '@/components/HeroMap';
import FleetGrid from '@/components/FleetGrid';

export default function EarthOSConsole() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Integration logic for Map flying will go here
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white font-mono overflow-hidden">
      {/* LEFT SIDEBAR: FIXED */}
      <aside className="w-full md:w-80 bg-black border-r border-zinc-800 p-6 flex flex-col gap-6 h-screen overflow-y-auto shrink-0">
        <DCCSidebar onSearch={handleSearch} />
        
        {/* SIDEBAR INTEL STACK */}
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <p className="text-[9px] text-neon-blue uppercase font-black tracking-widest border-l-2 border-neon-blue pl-2">// REGIONAL_TACTICAL</p>
            <div className="h-44 w-full border border-zinc-800 bg-zinc-900 shadow-2xl relative">
               <div className="absolute inset-0 flex items-center justify-center text-[10px] text-zinc-700 uppercase">Aux_Map_Ready</div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT: INDEPENDENT SCROLL */}
      <main className="flex-1 overflow-y-auto h-screen scroll-smooth">
        <div className="max-w-6xl mx-auto p-8 lg:p-12 space-y-16">
          
          {/* BRANDING HERO */}
          <section className="text-center space-y-4 pt-4">
            <h1 className="text-6xl font-black uppercase italic tracking-tighter">
              RED ROCKS <span className="text-neon-blue">TRANSPORT</span>
            </h1>
            <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase font-bold">
              Denver // Golden // Door-to-Door Private SUV
            </p>
          </section>

          {/* COMPONENT: TACTICAL MAP */}
          <HeroMap />

          {/* COMPONENT: FLEET GRID */}
          <FleetGrid />

          {/* COMPONENT: CONCERT SCHEDULE */}
          <section className="space-y-6 pb-24">
            <h2 className="text-2xl font-black italic uppercase border-b border-zinc-800 pb-4 tracking-tighter">UPCOMING // INTEL_FEED</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Two Friends", "Jason Isbell", "Puscifer", "Illenium", "LCD Soundsystem", "Seven Lions"].map((artist) => (
                <a 
                  key={artist} 
                  href={`/artists/${artist.toLowerCase().replace(/ /g, '-')}`} 
                  className="p-4 border border-zinc-800 bg-zinc-900/20 hover:border-neon-blue transition-all group"
                >
                  <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Artist_Node</p>
                  <h4 className="font-black uppercase italic group-hover:text-neon-blue">{artist}</h4>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
