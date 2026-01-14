"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchArtistIntel } from "@/lib/musicbrainz";

export default function ArtistNode() {
  const { slug } = useParams();
  const [intel, setIntel] = useState<any>(null);
  const artistName = (slug as string).replace(/-/g, ' ');

  useEffect(() => {
    async function activate() {
      const data = await fetchArtistIntel(artistName);
      setIntel(data);
    }
    activate();
  }, [artistName]);

  return (
    <div className="min-h-screen bg-black text-white font-mono p-6 md:p-12 lg:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <header className="border-b border-zinc-800 pb-8">
             <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
               {intel?.name || artistName}
             </h1>
          </header>

          {/* 🎵 FIXED SPOTIFY PLAYER */}
          <div className="bg-zinc-900/60 border border-zinc-800 p-2 rounded-3xl overflow-hidden">
             <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest p-3">// LIVE_STREAMING_NODE</p>
             {intel?.spotifyId ? (
               <iframe 
                 src={`https://open.spotify.com/embed/artist/${intel.spotifyId}?utm_source=generator&theme=0`} 
                 width="100%" height="232" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                 className="rounded-2xl grayscale"
               />
             ) : (
               <div className="h-[232px] flex items-center justify-center text-[10px] text-zinc-700 font-black uppercase tracking-widest bg-black rounded-2xl">
                 Searching for Secure Audio Feed...
               </div>
             )}
          </div>
        </div>

        <div className="space-y-12">
          {/* 📸 AUTO-LOADING LOCAL IMAGE */}
          <div className="relative aspect-square w-full rounded-3xl border border-zinc-800 overflow-hidden bg-zinc-900">
            <img 
              src={`/artists/${slug}.jpg`} 
              alt={artistName}
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                // If local image is missing, show a tactical fallback
                e.currentTarget.src = "https://placehold.co/800x800/000000/00f2ff?text=INTEL_MISSING";
              }}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-8 border-t border-zinc-800 pt-8">
            <div className="space-y-2">
               <p className="text-[9px] text-zinc-600 uppercase font-black tracking-widest">// ORIGIN_POINT</p>
               <p className="text-sm font-bold uppercase italic text-neon-blue">{intel?.origin || "ANALYZING..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
