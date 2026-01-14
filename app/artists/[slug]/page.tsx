"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchArtistIntel } from "@/lib/musicbrainz";
import Link from 'next/link';

export default function ArtistPage() {
  const { slug } = useParams();
  const [intel, setIntel] = useState<any>(null);
  const artistName = (slug as string).replace(/-/g, ' ');

  useEffect(() => {
    async function getIntel() {
      const data = await fetchArtistIntel(artistName);
      setIntel(data);
    }
    getIntel();
  }, [artistName]);

  return (
    <div className="min-h-screen bg-black text-white font-mono p-6 md:p-12">
      {/* ... (Keep your Header and Booking UI from previous step) ... */}

      <div className="lg:col-span-7 space-y-8">
        <h2 className="text-2xl font-black italic uppercase tracking-tighter">// DISCOGRAPHY_RECON</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {intel?.albums?.map((album: any) => (
            <div key={album.id} className="group relative aspect-square border border-zinc-800 bg-zinc-900 overflow-hidden">
              <img 
                src={album.coverUrl} 
                alt={album.title}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-2 flex items-end">
                <p className="text-[8px] font-bold uppercase truncate">{album.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🧠 DYNAMIC INTEL PANEL */}
        <div className="grid grid-cols-2 gap-4 border-t border-zinc-800 pt-8">
          <div>
            <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest">// ORIGIN_NODE</p>
            <p className="text-sm font-bold uppercase italic text-neon-blue">{intel?.origin || "FETCHING..."}</p>
          </div>
          <div>
            <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest">// ARTIST_MBID</p>
            <p className="text-[9px] font-mono text-zinc-400 truncate">{intel?.mbid || "UNVERIFIED"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
