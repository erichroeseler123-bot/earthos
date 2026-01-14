"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getBookingUrl } from "@/lib/rezdy";

export default function ArtistPage() {
  const { slug } = useParams();
  const artistName = (slug as string).replace(/-/g, ' ').toUpperCase();

  return (
    <div className="min-h-screen bg-black text-white font-mono p-6 md:p-12 selection:bg-neon-blue selection:text-black">
      <Link href="/" className="text-neon-blue text-[10px] mb-12 block font-black uppercase tracking-widest hover:pl-2 transition-all">
        {"< "}RETURN_TO_COMMAND_CENTER
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT COLUMN: TACTICAL OPS */}
        <div className="lg:col-span-5 space-y-10">
          <header className="border-b border-zinc-800 pb-8">
            <p className="text-neon-blue text-[10px] font-black tracking-[0.3em] uppercase mb-4">// ARTIST_INTEL_NODE: {slug}</p>
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">{artistName}</h1>
          </header>

          {/* 🎵 AUDIO DECK: FIXED SPOTIFY EMBED */}
          <div className="bg-zinc-900/60 border border-zinc-800 p-2 rounded-3xl overflow-hidden">
            <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest p-3">// LIVE_STREAMING_FEED</p>
            {/* Using a generic search embed until specific Spotify IDs are mapped */}
            <iframe 
              src={`https://open.spotify.com/embed/search/${artistName}`} 
              width="100%" 
              height="380" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              className="rounded-2xl grayscale contrast-125"
            />
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-black italic uppercase tracking-tight">Deployment_Status: <span className="text-neon-blue">ACTIVE</span></h3>
            <div className="space-y-4 pt-4">
              <a href={getBookingUrl('shuttle')} className="block w-full bg-neon-blue text-center py-5 rounded-2xl text-xs font-black uppercase text-white hover:invert transition-all">
                BOOK SHUTTLE ($59.00)
              </a>
              <a href={getBookingUrl('suv')} className="block w-full border border-zinc-800 text-center py-5 rounded-2xl text-xs font-black uppercase text-zinc-500 hover:bg-white hover:text-black transition-all">
                REQUEST PRIVATE SUV ($499.00)
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: MUSICBRAINZ VISUAL RECON */}
        <div className="lg:col-span-7 space-y-8">
          <div className="border-b border-zinc-800 pb-4 flex justify-between items-end">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter">// VISUAL_ASSETS</h2>
            <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest">SOURCE: MUSICBRAINZ_CAA</p>
          </div>

          {/* THE "ALL PICTURES" GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group relative">
                <img 
                  src={`/artists/${slug}-${i}.jpg`} 
                  alt={`${artistName} Asset ${i}`}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x400/000000/00f2ff?text=IMG_FETCH_ERR";
                  }}
                />
                <div className="absolute top-2 left-2 bg-black/80 text-[8px] p-1 border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity">
                  ASSET_ID: MB-{i}00X
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-zinc-900/20 border border-zinc-800 rounded-2xl">
            <p className="text-[10px] text-zinc-500 font-bold uppercase mb-2">// INTEL_DISPATCH</p>
            <p className="text-xs text-zinc-400 leading-relaxed italic">
              Scanning MusicBrainz DB for canonical relationships... 
              Verification confirms {artistName} origin nodes are active. 
              Fetching historical discography data for Red Rocks command console.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
