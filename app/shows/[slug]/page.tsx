"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchRedRocksWeather } from "@/lib/weather";
import Link from 'next/link';

export default function ShowExecutionNode() {
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

  return (
    <div className="min-h-screen bg-black text-white font-mono p-8 md:p-24 flex flex-col gap-12">
      <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b border-zinc-800 pb-4">
          Tactical_Packing_List: {artistName}
        </h2>
        <div className="space-y-4">
          <p className="text-sm font-black uppercase italic tracking-tighter">• Comfortable Walking Shoes</p>
          <p className="text-sm font-black uppercase italic tracking-tighter">• Empty Water Bottle</p>
          {weather?.tonight?.precip > 30 && <p className="text-neon-blue text-sm font-black uppercase italic tracking-tighter">• RAIN PONCHO REQUIRED</p>}
        </div>
      </div>
      <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 border-b border-zinc-800 pb-4">Recent_Setlist_Intel</h2>
        <p className="text-xs text-zinc-600 italic animate-pulse">// SCANNING_SETLIST_FM...</p>
      </div>
    </div>
  );
}
