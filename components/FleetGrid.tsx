"use client";

import React from "react";
import Link from "next/link";

export default function FleetGrid() {
  // Target the first mission for the links
  const primarySlug = "two-friends";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* 🚐 SHUTTLE EXEC CARD */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col items-center text-center space-y-6">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
          <img src="/shuttle-exec.jpg" alt="Shuttle" className="object-cover w-full h-full" />
          <span className="absolute top-4 right-4 bg-neon-blue text-black font-black text-[10px] px-3 py-1 rounded-full shadow-lg">
            $59.00
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-black italic uppercase tracking-tighter">SHUTTLE_EXEC</h3>
          <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">PICKUP: SHERATON DOWNTOWN (COURT ST)</p>
        </div>
        {/* ✅ FIXED BUTTON: NEON BLUE + NEW LABEL */}
        <Link 
          href={`/shows/${primarySlug}`}
          className="w-full py-4 bg-neon-blue text-black font-black uppercase italic tracking-tighter text-sm rounded-xl hover:bg-white transition-all shadow-[0_0_20px_#00f2ff]"
        >
          BOOK_SHUTTLE
        </Link>
      </div>

      {/* 🏎️ PRIVATE SUV NODE CARD */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col items-center text-center space-y-6">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
          <img src="/private-suv.jpg" alt="Suburban" className="object-cover w-full h-full" />
          <span className="absolute top-4 right-4 bg-white text-black font-black text-[10px] px-3 py-1 rounded-full shadow-lg">
            $499.00
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-black italic uppercase tracking-tighter">PRIVATE_SUV_NODE</h3>
          <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">DOOR-TO-DOOR SERVICE</p>
        </div>
        {/* ✅ FIXED BUTTON: NEON BLUE + NEW LABEL */}
        <Link 
          href={`/shows/${primarySlug}`}
          className="w-full py-4 bg-neon-blue text-black font-black uppercase italic tracking-tighter text-sm rounded-xl hover:bg-white transition-all shadow-[0_0_20px_#00f2ff]"
        >
          BOOK_PRIVATE_SUBURBAN
        </Link>
      </div>
    </div>
  );
}
