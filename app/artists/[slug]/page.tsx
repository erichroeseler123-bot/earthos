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
    <div className="min-h-screen bg-black text-white font-mono p-6 md:p-12">
      <Link href="/" className="text-neon-blue text-[10px] mb-12 block font-black uppercase tracking-widest hover:pl-2 transition-all">
        {"< "}RETURN_TO_COMMAND_CENTER
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <header className="border-b border-zinc-800 pb-8">
             <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
               {intel?.name || artistName.toUpperCase()}
             </h1>
          </header>

          {/* 🎵 COLOR-LOCKED AUDIO PLAYER */}
          <div className="bg-zinc-900/60 border border-zinc-800 p-2 rounded-3xl overflow-hidden min-h-[380px]">
             <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest p-3">// LIVE_STREAMING_NODE</p>
             {intel?.spotifyId ? (
               <iframe 
                 src={`https://open.spotify.com/embed/artist/${intel.spotifyId}?utm_source=generator&theme=0`} 
                 width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                 className="rounded-2xl"
               />
             ) : (
               <div className="h-[380px] flex items-center justify-center text-[10px] text-zinc-700 font-black uppercase tracking-widest bg-black rounded-2xl animate-pulse">
                 // SCANNING_FOR_SECURE_AUDIO_FEED...
               </div>
             )}
          </div>

          {/* 🧠 ARTIST INTELLIGENCE PANEL */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl space-y-6">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <h3 className="text-xl font-black italic uppercase tracking-tight">Artist_Intelligence</h3>
              <p className="text-[9px] text-neon-blue font-bold uppercase">FOUNDED: {intel?.founded}</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {intel?.members?.length > 0 ? (
                intel.members.map((member: any, i: number) => (
                  <div key={i} className="flex justify-between items-center border-b border-zinc-900 pb-2 last:border-0">
                    <div>
                      <p className="text-sm font-black uppercase italic tracking-tighter">{member.name}</p>
                      <p className="text-[8px] text-zinc-500 uppercase font-bold">{member.role}</p>
                    </div>
                    <span className={`h-2 w-2 rounded-full ${member.active ? 'bg-green-500' : 'bg-zinc-800'}`} title={member.active ? 'ACTIVE' : 'FORMER'} />
                  </div>
                ))
              ) : (
                <p className="text-[9px] text-zinc-600 uppercase italic">// NO_PERSONNEL_DATA_RECORDED</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* 📸 FULL COLOR DISCOGRAPHY */}
          <h2 className="text-2xl font-black italic uppercase tracking-tighter border-b border-zinc-800 pb-4">// DISCOGRAPHY_RECON</h2>
          <div className="grid grid-cols-3 gap-2">
            {intel?.albums?.map((album: any, i: number) => (
              <div key={i} className="group relative aspect-square border border-zinc-800 bg-zinc-900 overflow-hidden rounded-lg">
                <img src={album.coverUrl} alt={album.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
