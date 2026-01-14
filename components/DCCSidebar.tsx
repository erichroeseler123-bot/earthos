"use client";
import React from 'react';
import { useMap } from "@/app/context/MapContext";
import { MAP_PRESETS } from "@/lib/presets";

interface SidebarProps {
  setSearch: (val: string) => void;
  searchValue: string;
}

export default function DCCSidebar({ setSearch, searchValue }: SidebarProps) {
  const { flyTo } = useMap();

  return (
    <div className="flex flex-col gap-6 font-mono">
      {/* 🔍 ARTIST SEARCH (Primary on all devices) */}
      <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
        <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-3">// ARTIST_INTEL_SEARCH</p>
        <div className="flex gap-1">
          <input 
            type="text" 
            value={searchValue}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="SEARCH ARTISTS..."
            className="w-full bg-black border border-zinc-800 p-2 text-[10px] text-white focus:border-neon-blue outline-none rounded"
          />
        </div>
      </div>

      {/* 📍 TACTICAL PRESETS (Desktop Only) */}
      <div className="hidden md:block bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
        <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-3">// TACTICAL_PRESETS</p>
        <div className="flex flex-col gap-2">
          {Object.entries(MAP_PRESETS).map(([key, preset]) => (
            <button
              key={key}
              onClick={() => flyTo(preset)}
              className="w-full text-left p-2 border border-zinc-800 bg-black text-[9px] text-zinc-400 hover:text-neon-blue hover:border-neon-blue transition-all uppercase font-bold rounded"
            >
              > {preset.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
