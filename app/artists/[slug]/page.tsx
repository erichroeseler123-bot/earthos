"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchArtistIntel, fetchArtistNews } from "@/lib/musicbrainz";
import { fetchRedRocksWeather } from "@/lib/weather";
import Link from 'next/link';

export default function ArtistNode() {
  const { slug } = useParams();
  const [intel, setIntel] = useState<any>(null);
  const [weather, setWeather] = useState<any>(null);
  const artistName = (slug as string).replace(/-/g, ' ');

  useEffect(() => {
    async function activate() {
      const [intelData, weatherData] = await Promise.all([
        fetchArtistIntel(artistName),
        fetchRedRocksWeather()
      ]);
      setIntel(intelData);
      setWeather(weatherData);
    }
    activate();
  }, [artistName]);

  return (
    <div className="min-h-screen bg-black text-white font-mono p-6 md:p-12 lg:p-24 selection:bg-neon-blue selection:text-black">
      {/* ... (Keep your Header and Return link) ... */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <div className="space-y-10">
          {/* ... (Keep Audio and Transport Panels) ... */}

          {/* 🌦️ WEATHER INTEL WIDGET */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl space-y-6">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <h3 className="text-xl font-black italic uppercase tracking-tight">Environmental_Intel</h3>
              <span className="text-[9px] text-neon-blue font-bold uppercase tracking-widest">LOC: RED_ROCKS_AMPHITHEATRE</span>
            </div>
            
            {weather ? (
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest">// CURRENT_TEMP</p>
                  <p className="text-4xl font-black italic text-white">{weather.current.temp}°F</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest">// SHOW_LOW</p>
                  <p className="text-4xl font-black italic text-zinc-400">{weather.tonight.low}°F</p>
                </div>
                <div className="col-span-2 p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
                  <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mb-1">// PRECIPITATION_PROBABILITY</p>
                  <div className="w-full bg-black h-2 rounded-full overflow-hidden">
                    <div className="bg-neon-blue h-full transition-all duration-1000" style={{ width: `${weather.tonight.precip}%` }} />
                  </div>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-tighter">SIGNAL: {weather.tonight.precip}% CHANCE OF RAIN</p>
                </div>
              </div>
            ) : (
              <p className="text-[9px] text-zinc-600 uppercase italic animate-pulse">// PINGING_WEATHER_SATELLITE...</p>
            )}
          </div>
        </div>

        {/* ... (Keep Gallery and Intel Panel) ... */}
      </div>
    </div>
  );
}
