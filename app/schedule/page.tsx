import React from 'react';
import { shows } from '../../data/shows'; // Verified relative path fix
export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-black p-8 lg:p-12 font-mono">
      <h1 className="text-4xl font-black italic uppercase text-white mb-12 border-b border-zinc-800 pb-4">
        FULL_CONCERT_SCHEDULE <span className="text-red-600 animate-pulse">// 2026</span>
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {shows.map((show) => (
          <div key={show.slug} className="p-6 border border-zinc-800 bg-zinc-900/20 flex justify-between items-center group hover:border-red-600">
            <div>
              <h2 className="text-xl font-black italic uppercase text-white group-hover:text-red-500">{show.title}</h2>
              <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest">Morrison_Node: {show.slug}</p>
            </div>
            <div className="text-right">
              <p className="text-white font-black italic">{show.date}</p>
              <a href={`/book?type=shuttle&event=${show.slug}`} className="text-[10px] text-neon-blue font-bold border border-neon-blue px-3 py-1 mt-2 inline-block hover:bg-neon-blue hover:text-black">RESERVE_SHUTTLE</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
