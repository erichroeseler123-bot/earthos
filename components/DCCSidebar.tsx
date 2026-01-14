"use client";
import React, { useState } from 'react';
import { useMap } from "@/app/context/MapContext";

export default function DCCSidebar() {
  const { flyTo } = useMap();
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Example: Search triggers a flyTo Red Rocks
    // In v1.2 we will add real geocoding here
    flyTo({
      center: [-105.2054, 39.6654],
      zoom: 15,
      pitch: 65,
    });
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-4 font-mono">
      <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-3">// GLOBAL_INTEL</p>
      <form onSubmit={handleSearch} className="flex gap-1">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="ENTER COORD / ARTIST..."
          className="w-1/2 bg-black border border-zinc-800 p-2 text-[10px] text-white focus:border-neon-blue outline-none"
        />
        <button type="submit" className="flex-1 bg-neon-blue text-white text-[9px] font-black uppercase hover:bg-white hover:text-black transition-all">
          Execute Search
        </button>
      </form>
    </div>
  );
}
