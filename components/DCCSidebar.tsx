"use client";
import React, { useState } from "react";
import { useMap } from "@/app/context/MapContext";
import { MAP_PRESETS } from "@/lib/presets";
import { geocode } from "@/lib/geocode";

export default function DCCSidebar() {
  const { flyTo } = useMap();
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setLoading(true);
    const coords = await geocode(inputValue);
    setLoading(false);

    if (coords) {
      flyTo({
        center: coords,
        zoom: 14,
        pitch: 45,
      });
    } else {
      alert("LOCATION_NOT_RESOLVED");
    }
  };

  return (
    <div className="flex flex-col gap-6 font-mono">
      {/* SEARCH COMMAND */}
      <div className="bg-zinc-900/50 border border-zinc-800 p-4">
        <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-3">
          // GLOBAL_INTEL
        </p>
        <form onSubmit={handleSearch} className="flex gap-1">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={loading ? "SEARCHING..." : "ENTER LOCATION..."}
            className="w-1/2 bg-black border border-zinc-800 p-2 text-[10px] text-white focus:border-neon-blue outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-neon-blue text-white text-[9px] font-black uppercase hover:bg-white hover:text-black transition-all disabled:opacity-50"
          >
            Execute
          </button>
        </form>
      </div>

      {/* TACTICAL PRESETS */}
      <div className="bg-zinc-900/50 border border-zinc-800 p-4">
        <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-3">
          // TACTICAL_PRESETS
        </p>
        <div className="flex flex-col gap-2">
          {Object.entries(MAP_PRESETS).map(([key, preset]) => (
            <button
              key={key}
              onClick={() => flyTo(preset)}
              className="w-full text-left p-2 border border-zinc-800 bg-black text-[9px] text-zinc-400 hover:text-neon-blue hover:border-neon-blue transition-all uppercase font-bold"
            >
              &gt; {preset.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
