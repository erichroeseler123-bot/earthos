"use client";
export const dynamic = "force-dynamic"; // ⚡ BYPASSES VERCEL CACHE

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchRedRocksWeather } from "@/lib/weather";
import Link from 'next/link';

export default function ShowTacticalPage() {
  const { slug } = useParams();
  const [weather, setWeather] = useState<any>(null);
  
  // ✅ SUBURBAN IS NOW THE DEFAULT CHOICE
  const [activeTab, setActiveTab] = useState<'denver' | 'golden' | 'suburban'>('suburban');
  
  const artistName = (slug as string).replace(/-/g, ' ').toUpperCase();

  useEffect(() => {
    async function activate() {
      const weatherData = await fetchRedRocksWeather();
      setWeather(weatherData);
    }
    activate();
  }, [slug]);

  return (
    <div className="min-h-screen bg-black text-white font-mono p-6 md:p-12 selection:bg-neon-blue selection:text-black">
      <Link href="/" className="text-neon-blue text-[10px] mb-12 block font-black uppercase tracking-widest hover:pl-2 transition-all">
        {"< "}RETURN_TO_COMMAND_CENTER
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT: TACTICAL INTEL */}
        <div className="lg:col-span-4 space-y-8">
          <header className="border-b border-zinc-800 pb-8">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">{artistName}</h1>
          </header>
          <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
            <h2 className="text-xl font-black italic uppercase tracking-tighter mb-6 border-b border-zinc-800 pb-4">Gear_Intel</h2>
            <p className="text-sm font-black uppercase italic tracking-tighter flex items-center gap-3">
              <span className="h-2 w-2 bg-neon-blue rounded-full shadow-[0_0_12px_#00f2ff]" /> COMFORTABLE WALKING SHOES
            </p>
          </div>
        </div>

        {/* RIGHT: THE SELECTION CONSOLE */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* 📡 NEW INSTRUCTIONAL HEADER */}
          <div className="space-y-2 mb-4">
            <p className="text-[10px] text-neon-blue font-black tracking-[0.4em] uppercase font-bold tracking-widest animate-pulse">// SYSTEM_READY</p>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter">CHOOSE_FROM_3_OPTIONS</h2>
          </div>

          {/* ⚡ TABS: FORCED NEON BLUE UPDATE */}
          <div className="flex flex-col sm:flex-row gap-4">
            {[
              { id: 'suburban', label: 'PRIVATE_SUBURBAN' },
              { id: 'denver', label: 'DENVER_SHUTTLE' },
              { id: 'golden', label: 'GOLDEN_SHUTTLE' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`
                  flex-1 px-6 py-5 rounded-2xl font-black uppercase italic tracking-tighter text-base transition-all duration-300
                  ${activeTab === tab.id 
                    ? 'bg-neon-blue text-black shadow-[0_0_55px_#00f2ff] scale-105 border-2 border-white/30' 
                    : 'bg-zinc-900 text-zinc-500 border border-zinc-800 hover:border-neon-blue hover:text-white'
                  }
                `}
              >
                {activeTab === tab.id && <span className="mr-2 animate-pulse text-[14px]">●</span>}
                {tab.label}
              </button>
            ))}
          </div>

          {/* IFRAME CONTAINER */}
          <div className="bg-white rounded-3xl overflow-hidden min-h-[800px] shadow-2xl shadow-neon-blue/20">
            {activeTab === 'denver' && <iframe width="100%" height="1000px" frameBorder="0" src="https://gosnotransportation58.rezdy.com/714441/shuttle-from-denver-to-red-rocks?iframe=true" />}
            {activeTab === 'golden' && <iframe width="100%" height="1000px" frameBorder="0" src="https://gosnotransportation58.rezdy.com/714885/golden-shuttle-to-red-rocks?iframe=true" />}
            {activeTab === 'suburban' && <iframe width="100%" height="1000px" frameBorder="0" src="https://gosnotransportation58.rezdy.com/596193/suburban?iframe=true" />}
          </div>
        </div>
      </div>
    </div>
  );
}
