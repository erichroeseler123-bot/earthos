"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchRedRocksWeather } from "@/lib/weather";
import Link from 'next/link';

export default function ShowTacticalPage() {
  const { slug } = useParams();
  const [weather, setWeather] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'denver' | 'golden' | 'suburban'>('denver');
  const artistName = (slug as string).replace(/-/g, ' ').toUpperCase();

  useEffect(() => {
    async function activate() {
      const weatherData = await fetchRedRocksWeather();
      setWeather(weatherData);
    }
    activate();
  }, [slug]);

  // 🎒 TACTICAL PACKING LOGIC
  const packingList = [
    "Comfortable Walking Shoes",
    "Empty Water Bottle",
    weather?.tonight?.precip > 30 ? "RAIN PONCHO (REQUIRED)" : "Sunglasses",
    weather?.tonight?.low < 55 ? "WARM LAYERS / HOODIE" : "Light Jacket"
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono p-6 md:p-12 selection:bg-neon-blue selection:text-black">
      {/* NAVIGATION */}
      <Link href="/" className="text-neon-blue text-[10px] mb-12 block font-black uppercase tracking-widest hover:pl-2 transition-all">
        {"< "}RETURN_TO_COMMAND_CENTER
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* 🛰️ LEFT: TACTICAL INTEL & GEAR */}
        <div className="lg:col-span-4 space-y-8">
          <header className="border-b border-zinc-800 pb-8">
            <p className="text-neon-blue text-[10px] font-black tracking-[0.3em] uppercase mb-4">// SHOW_TACTICAL_NODE: {slug}</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">{artistName}</h1>
          </header>

          {/* PACKING LIST */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
            <h2 className="text-xl font-black italic uppercase tracking-tighter mb-6 border-b border-zinc-800 pb-4">
              Tactical_Packing_List
            </h2>
            <div className="space-y-4">
              {packingList.map((item, i) => (
                <p key={i} className="text-sm font-black uppercase italic tracking-tighter flex items-center gap-3">
                  <span className="h-2 w-2 bg-neon-blue rounded-full shadow-[0_0_8px_#00f2ff]" /> {item}
                </p>
              ))}
            </div>
          </div>

          {/* WEATHER INTEL */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
            <h2 className="text-xl font-black italic uppercase tracking-tighter mb-6 border-b border-zinc-800 pb-4">
              Environmental_Intel
            </h2>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest mb-1">// CURRENT_TEMP</p>
                <p className="text-5xl font-black italic text-neon-blue">{weather?.current?.temp || "--"}°F</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest mb-1">// PRECIP_PROB</p>
                <p className="text-2xl font-black italic text-zinc-400">{weather?.tonight?.precip || "0"}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* 🚐 RIGHT: BOOKING CONSOLE (ALL MODES) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveTab('denver')}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'denver' ? 'bg-white text-black' : 'bg-zinc-900 text-zinc-500 border border-zinc-800 hover:border-zinc-500'}`}
            >
              DENVER_SHUTTLE
            </button>
            <button 
              onClick={() => setActiveTab('golden')}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'golden' ? 'bg-white text-black' : 'bg-zinc-900 text-zinc-500 border border-zinc-800 hover:border-zinc-500'}`}
            >
              GOLDEN_SHUTTLE
            </button>
            <button 
              onClick={() => setActiveTab('suburban')}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'suburban' ? 'bg-neon-blue text-black' : 'bg-zinc-900 text-zinc-500 border border-zinc-800 hover:border-zinc-500'}`}
            >
              PRIVATE_SUBURBAN
            </button>
          </div>

          {/* BOOKING IFRAME CONTAINER */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-neon-blue/10 min-h-[800px]">
            {activeTab === 'denver' && (
              <iframe seamless width="100%" height="800px" frameBorder="0" className="rezdy" src="https://gosnotransportation58.rezdy.com/714441/shuttle-from-denver-to-red-rocks?iframe=true" />
            )}
            {activeTab === 'golden' && (
              <iframe seamless width="100%" height="800px" frameBorder="0" className="rezdy" src="https://gosnotransportation58.rezdy.com/714885/golden-shuttle-to-red-rocks?iframe=true" />
            )}
            {activeTab === 'suburban' && (
              <iframe seamless width="100%" height="800px" frameBorder="0" className="rezdy" src="https://gosnotransportation58.rezdy.com/596193/suburban?iframe=true" />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
