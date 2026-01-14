"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ShowPage() {
  const { slug } = useParams();
  
  return (
    <div className="min-h-screen bg-black text-white font-mono p-8 flex items-center justify-center">
      <div className="max-w-xl w-full border border-zinc-800 p-12 rounded-3xl bg-zinc-900/40 text-center space-y-8">
        <p className="text-neon-blue text-xs font-black tracking-[0.4em] uppercase animate-pulse">// ACCESSING_TACTICAL_DATA</p>
        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
          EVENT_ID: {slug}
        </h1>
        <div className="h-px bg-zinc-800 w-full" />
        <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">
          Operational Status: PRE-DEPLOYMENT
        </p>
        <Link href="/" className="inline-block bg-white text-black px-8 py-4 rounded-full font-black text-xs uppercase hover:bg-neon-blue transition-all">
          Back to Command Center
        </Link>
      </div>
    </div>
  );
}
