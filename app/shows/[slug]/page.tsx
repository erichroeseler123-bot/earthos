"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ShowPage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div className="min-h-screen bg-black text-white font-mono p-8 md:p-24 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center space-y-8">
        <p className="text-neon-blue text-xs font-black tracking-[0.3em] uppercase animate-pulse">// ACCESSING_SHOW_DATA</p>
        <h1 className="text-5xl font-black italic uppercase tracking-tighter border-y border-zinc-800 py-10">
          EVENT_ID: {slug.toUpperCase()}
        </h1>
        <Link href="/" className="inline-block bg-white text-black px-8 py-4 rounded-full font-black text-xs uppercase hover:bg-neon-blue transition-colors">
          Return to Mission Control
        </Link>
      </div>
    </div>
  );
}
