"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchRedRocksWeather } from "@/lib/weather";
import Link from 'next/link';

export default function ShowNode() {
  const { slug } = useParams();
  const [weather, setWeather] = useState<any>(null);
  const [setlist, setSetlist] = useState<any>(null);

  useEffect(() => {
    async function activate() {
      const weatherData = await fetchRedRocksWeather();
      setWeather(weatherData);
      
      // 🎵 Setlist.fm API Handshake (Requires your API Key)
      const res = await fetch(`https://api.setlist.fm/rest/1.0/artist/${slug}/setlists`, {
        headers: { 'x-api-key': 'YOUR_API_KEY', 'Accept': 'application/json' }
      });
      const data = await res.json();
      setSetlist(data.setlist?.[0]);
    }
    activate();
  }, [slug]);

  // 🎒 Tactical Packing Logic
  const getPackingList = () => {
    const list = ["Comfortable Walking Shoes", "Sunscreen", "Empty Water Bottle"]; //
    if (weather?.tonight?.precip > 30) list.push("Rain Poncho (No Umbrellas Allowed)"); //
    if (weather?.tonight?.low < 55) list.push("Warm Layers (Chilly at Night)"); //
    return list;
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono p-8 md:p-24">
      <Link href="/" className="text-neon-blue text-[10px] mb-12 block font-black uppercase tracking-widest">
        {"< "}RETURN_TO_COMMAND_CENTER
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* 🎒 TACTICAL PACKING LIST */}
        <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-6 border-b border-zinc-800 pb-4">
            Tactical_Packing_List
          </h2>
          <ul className="space-y-4">
            {getPackingList().map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase">
                <span className="h-2 w-2 bg-neon-blue rounded-full" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 🎵 SETLIST RECON */}
        <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-6 border-b border-zinc-800 pb-4">
            Recent_Setlist_Intel
          </h2>
          {setlist ? (
            <div className="space-y-2">
              <p className="text-[10px] text-zinc-500 uppercase mb-4">Venue: {setlist.venue?.name}</p>
              {setlist.sets?.set[0]?.song.map((s: any, i: number) => (
                <p key={i} className="text-xs font-black uppercase italic">{i + 1}. {s.name}</p>
              ))}
            </div>
          ) : (
            <p className="text-[9px] text-zinc-600 italic">// SCANNING_SETLIST_FM_DATABASE...</p>
          )}
        </div>
      </div>
    </div>
  );
}
