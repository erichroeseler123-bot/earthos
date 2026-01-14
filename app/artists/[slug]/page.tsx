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
    <div className="min-h-screen bg-black text-white font-mono p-6 md:p-12 lg:p-24">
      {/* 🛠️ NAVIGATION FIXED */}
      <Link href="/" className="text-neon-blue text-[10px] mb-12 block font-black uppercase tracking-widest hover:pl-2 transition-all">
        {"< "}RETURN_TO_COMMAND_CENTER
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-10">
          <header className="border-b border-zinc-800 pb-8">
            <p className="text-neon-blue text-[10px] font-black tracking-[0.3em] uppercase mb-4">// TACTICAL_NODE: {slug}</p>
            <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">{artistName}</h1>
          </header>

          {/* 🕒 OPERATIONAL WINDOWS (Doors & Show) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl">
              <p className="text-[9px] text-zinc-500 uppercase font-bold mb-1">Doors_Open</p>
              <p className="text-xl font-black italic text-white">17:30 MST</p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl">
              <p className="text-[9px] text-zinc-500 uppercase font-bold mb-1">Show_Start</p>
              <p className="text-xl font-black italic text-neon-blue">19:00 MST</p>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-black italic uppercase tracking-tight">Deployment_Status: <span className="text-neon-blue">ACTIVE</span></h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-bold uppercase">
              Shuttle routes verified from Sheraton Downtown Denver (Court St). 
              Private SUV nodes available for door-to-door deployment.
            </p>
            
            <div className="pt-4 space-y-4">
              <Link 
                href={getBookingUrl('shuttle')} 
                className="block w-full bg-neon-blue text-center py-5 rounded-2xl text-xs font-black uppercase text-white hover:bg-white hover:text-black transition-all"
              >
                BOOK SHUTTLE DEPLOYMENT ($59.00)
              </Link>
              <Link 
                href={getBookingUrl('suv')} 
                className="block w-full border border-zinc-800 text-center py-5 rounded-2xl text-xs font-black uppercase text-zinc-500 hover:bg-white hover:text-black transition-all"
              >
                REQUEST PRIVATE SUV NODE ($499.00)
              </Link>
            </div>
          </div>
        </div>

        {/* 📸 ASSET FRAME */}
        <div className="relative aspect-square w-full max-w-2xl mx-auto rounded-3xl border border-zinc-800 overflow-hidden group">
          <img 
            src={imagePath} 
            alt={artistName}
            className="relative z-10 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/600x600/000000/00f2ff?text=INTEL_MISSING";
            }}
          />
        </div>
      </div>
    </div>
  );
}
