"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchRedRocksWeather } from "@/lib/weather";
import Link from 'next/link';

export default function ShowTacticalNode() {
  const { slug } = useParams();
  const [weather, setWeather] = useState<any>(null);
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
    weather?.tonight?.precip > 30 ? "RAIN PONCHO REQUIRED" : "Sunglasses",
    weather?.tonight?.low < 55 ? "WARM LAYERS / HOODIE" : "Light Jacket"
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono p-8 md:p-24 flex flex-col gap-12">
      <Link href="/" className="text-neon-blue text-[10px] mb-8 block font-black uppercase tracking-widest">
        {"< "}RETURN_TO_COMMAND_CENTER
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b border-zinc-800 pb-4">
            Tactical_Packing_List: {artistName}
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
          <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b border-zinc-800 pb-4">Recent_Setlist_Intel</h2>
          <p className="text-xs text-zinc-600 italic animate-pulse">// SCANNING_SETLIST_FM_FOR_PREVIOUS_DEPLOYMENTS...</p>
        </div>
      </div>
    </div>
  );
}
