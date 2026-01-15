"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchRedRocksWeather } from "@/lib/weather";
import Link from 'next/link';

export default function ShowTacticalPage() {
  const { slug } = useParams();
  const [weather, setWeather] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'shuttle' | 'suburban' | 'golden'>('shuttle');
  const artistName = (slug as string).replace(/-/g, ' ').toUpperCase();

  useEffect(() => {
    async function activate() {
      const weatherData = await fetchRedRocksWeather();
      setWeather(weatherData);
    }
    activate();
  }, [slug]);

  const packingList = [
    "Comfortable Walking Shoes",
    "Empty Water Bottle",
    weather?.tonight?.precip > 30 ? "RAIN PONCHO (REQUIRED)" : "Sunglasses",
    weather?.tonight?.low < 55 ? "WARM LAYERS / HOODIE" : "Light Jacket"
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono p-6 md:p-12 selection:bg-neon-blue selection:text-black">
      <Link href="/" className="text-neon-blue text-[10px] mb-12 block font-black uppercase tracking-widest">
        {"< "}RETURN_TO_COMMAND_CENTER
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* 🛰️ LEFT: TACTICAL OPS & PACKING */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-8 border-b border-zinc-800 pb-4">
              Tactical_Packing_List
            </h2>
            <div className="space-y-4">
              {packingList.map((item, i) => (
                <p key={i} className="text-sm font-black uppercase italic tracking-tighter flex items-center gap-3">
                  <span className="h-2 w-2 bg-neon-blue rounded-full" /> {item}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-8 border-b border-zinc-800 pb-4">
              Environmental_Intel
            </h2>
            <p className="text-4xl font-black italic text-neon-blue">{weather?.current?.temp || "--"}°F</p>
          </div>
        </div>

        {/* 🚐 RIGHT: BOOKING CONSOLE (ALL MODES) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveTab('shuttle')}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'shuttle' ? 'bg-neon-blue text-black' : 'bg-zinc-900 text-zinc-500 border border-zinc-800'}`}
            >
              DENVER_SHUTTLE
            </button>
            <button 
              onClick={() => setActiveTab('golden')}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'golden' ? 'bg-neon-blue text-black' : 'bg-zinc-900 text-zinc-500 border border-zinc-800'}`}
            >
              GOLDEN_SHUTTLE
            </button>
            <button 
              onClick={() => setActiveTab('suburban')}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'suburban' ? 'bg-neon-blue text-black' : 'bg-zinc-900 text-zinc-500 border border-zinc-800'}`}
            >
              PRIVATE_SUBURBAN
            </button>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-neon-blue/10">
            {activeTab === 'shuttle' && (
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
