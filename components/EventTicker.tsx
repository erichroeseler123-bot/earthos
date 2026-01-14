'use client';
import React from 'react';
import { shows } from '@/data/shows';

export default function EventTicker() {
  const tickerText = shows.map(show => `${show.title.toUpperCase()} — ${show.date}`).join(' // ');

  return (
    <div className="w-full bg-neon-blue text-black overflow-hidden py-2 border-y border-black flex">
      <div className="whitespace-nowrap flex animate-[marquee_30s_linear_infinite] font-mono text-sm font-bold">
        <span className="px-4">{tickerText} //</span>
        <span className="px-4">{tickerText} //</span>
      </div>
    </div>
  );
}
