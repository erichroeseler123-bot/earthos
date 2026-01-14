"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchArtistIntel } from "@/lib/musicbrainz";
import Link from 'next/link';

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
      <Link href="/" className="text-neon-blue text-[10px] mb-12 block font-black uppercase tracking-widest hover:pl-2 transition-all">
        {"< "}RETURN_TO_COMMAND_CENTER
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <header className="border-b border-zinc-800 pb-8">
             <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
               {intel?.name || artistName}
             </h1>
          </header>

          {/* 🎵 FUNCTIONAL SPOTIFY PLAYER */}
          <div className="bg-zinc-900/60 border border-zinc-800 p-2 rounded-3xl overflow-hidden min-h-[232px] flex flex-col">
             <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest p-3">// LIVE_STREAMING_NODE</p>
             {intel?.spotifyId ? (
               <iframe 
                 src={`https://open.spotify.com/embed/artist/${intel.spotifyId}?utm_source=generator&theme=0`} 
                 width="100%" height="232" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                 className="rounded-2xl grayscale flex-1"
               />
             ) : (
               <div className="flex-1 flex items-center justify-center text-[10px] text-zinc-700 font-black uppercase tracking-widest bg-black rounded-2xl">
                 Searching for Secure Audio Feed...
               </div>
             )}
          </div>
        </div>

        <div className="space-y-12">
          {/* 📸 AUTOMATED PICTURE GALLERY */}
          <h2 className="text-2xl font-black italic uppercase tracking-tighter border-b border-zinc-800 pb-4">// DISCOGRAPHY_RECON</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {intel?.albums?.map((album: any, i: number) => (
              <div key={i} className="group relative aspect-square border border-zinc-800 bg-zinc-900 overflow-hidden">
                <img src={album.coverUrl} alt={album.title} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all" />
              </div>
            ))}
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
