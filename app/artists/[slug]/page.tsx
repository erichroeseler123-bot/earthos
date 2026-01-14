"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getBookingUrl } from "@/lib/rezdy";

export default function ArtistPage() {
  const params = useParams();
  const slug = params.slug as string;
  const artistName = slug.replace(/-/g, ' ').toUpperCase();
  const imagePath = `/artists/${slug}.jpg`;

  return (
    <div className="min-h-screen bg-black text-white font-mono p-6 md:p-12 lg:p-24 selection:bg-neon-blue selection:text-black">
      {/* NAVIGATION CONTROLS */}
      <Link href="/" className="text-neon-blue text-[10px] mb-12 block font-black uppercase tracking-widest hover:pl-2 transition-all">
        {"< "}RETURN_TO_COMMAND_CENTER
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* 🛰️ LEFT: TACTICAL OPS & STREAMING */}
        <div className="space-y-10">
          <header className="border-b border-zinc-800 pb-8">
            <p className="text-neon-blue text-[10px] font-black tracking-[0.3em] uppercase mb-4">// ARTIST_INTEL_NODE: {slug}</p>
            <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">{artistName}</h1>
          </header>

          {/* 🎵 AUDIO DECK (STREAMING INTEGRATION) */}
          <div className="bg-zinc-900/60 border border-zinc-800 p-2 rounded-3xl overflow-hidden">
            <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest p-3">// STREAMING_AUDIO_FEED</p>
            <iframe 
              src={`https://open.spotify.com/embed/artist/${slug}?utm_source=generator&theme=0`} 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="rounded-2xl"
            />
          </div>

          {/* TRANSPORT DECK */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-black italic uppercase tracking-tight">Deployment_Status: <span className="text-neon-blue">ACTIVE</span></h3>
            <div className="grid grid-cols-2 gap-4 border-y border-zinc-800 py-4">
              <div>
                <p className="text-[9px] text-zinc-600 uppercase font-bold mb-1">Doors</p>
                <p className="text-lg font-black italic">17:30 MST</p>
              </div>
              <div>
                <p className="text-[9px] text-zinc-600 uppercase font-bold mb-1">Show</p>
                <p className="text-lg font-black italic text-neon-blue">19:00 MST</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <a href={getBookingUrl('shuttle')} className="block w-full bg-neon-blue text-center py-5 rounded-2xl text-xs font-black uppercase text-white hover:bg-white hover:text-black transition-all shadow-lg shadow-neon-blue/20">
                BOOK SHUTTLE DEPLOYMENT ($59.00)
              </a>
              <a href={getBookingUrl('suv')} className="block w-full border border-zinc-800 text-center py-5 rounded-2xl text-xs font-black uppercase text-zinc-500 hover:bg-white hover:text-black transition-all">
                REQUEST PRIVATE SUV NODE ($499.00)
              </a>
            </div>
          </div>
        </div>

        {/* 📸 RIGHT: VISUAL ASSETS & MUSICBRAINZ INTEL */}
        <div className="space-y-12">
          <div className="relative aspect-square w-full rounded-3xl border border-zinc-800 overflow-hidden group">
            <img 
              src={imagePath} 
              alt={artistName}
              className="relative z-10 object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/800x800/000000/00f2ff?text=MUSICBRAINZ_ASSET_PENDING";
              }}
            />
            <div className="absolute bottom-6 left-6 z-20 bg-black/80 border border-neon-blue/30 p-4 backdrop-blur-md">
              <p className="text-[10px] text-neon-blue font-black tracking-widest uppercase">// SOURCE: MUSICBRAINZ_DATABASE</p>
            </div>
          </div>

          {/* 🧠 INTEL PANEL (MusicBrainz Enrichment) */}
          <div className="border-t border-zinc-800 pt-8 grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-[9px] text-zinc-600 uppercase font-black tracking-widest">// ORIGIN_POINT</p>
              <p className="text-sm font-bold uppercase italic tracking-tighter">DATA_FETCHING_ACTIVE...</p>
            </div>
            <div className="space-y-2">
              <p className="text-[9px] text-zinc-600 uppercase font-black tracking-widest">// GENRE_CLASSIFICATION</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-zinc-900 px-2 py-1 text-[8px] border border-zinc-800 font-bold uppercase tracking-widest">INTEL_NODE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
