import React from 'react';

export default function DCCSidebar() {
  return (
    <div className="w-64 min-h-screen bg-black border-r border-zinc-800 p-6 flex flex-col gap-8 font-mono">
      
      {/* SECTION A: SYSTEM_IDENTITY */}
      <a href="/" className="group block">
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-500 italic mb-1 group-hover:text-neon-blue transition-colors">
          Intelligence Layer
        </p>
        <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">
          EARTHOS <span className="text-neon-blue not-italic">DCC</span>
        </h1>
      </a>

      {/* SECTION B: MISSION_CONTROLS */}
      <nav className="flex flex-col gap-3">
        <div className="mb-4">
          <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest mb-4">// System_Navigation</p>
          
          {/* HOME NODE: The primary Transport Intel console */}
          <a href="/" className="w-full flex items-center justify-between py-3 px-4 bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all text-[10px] font-black uppercase tracking-widest italic mb-2">
            Home // Console <span>→</span>
          </a>

          {/* SCHEDULE NODE: Internal concert schedule with red sync pulse */}
          <a href="/schedule" className="w-full flex items-center justify-between py-3 px-4 bg-zinc-900/50 border border-zinc-800 text-red-600 hover:text-white hover:border-red-600 transition-all text-[10px] font-black uppercase tracking-widest italic mb-2">
            Concert Schedule <span className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
          </a>

          {/* BOOKING NODE: Direct execution for the $59 Shared Vector */}
          <a href="/book?type=shuttle" className="w-full flex items-center justify-between py-3 px-4 bg-neon-blue text-white text-[10px] font-black uppercase tracking-widest italic hover:bg-white hover:text-black transition-all mb-2">
            $59 Shuttle <span>EXEC</span>
          </a>

          {/* INFO NODE: Links to the Shuttle Guide / Gallery */}
          <a href="/gallery" className="w-full flex items-center justify-between py-3 px-4 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-400 transition-all text-[10px] font-black uppercase tracking-widest italic">
            Shuttle Guide <span>INFO</span>
          </a>
        </div>

        {/* SECTION C: OPERATIONAL_STATUS // SYSTEM_ONLINE_MODE */}
        <div className="mt-auto border-t border-zinc-900 pt-8">
          <div className="p-4 bg-neon-blue/5 border border-neon-blue/20 rounded-lg">
            <p className="text-[9px] text-neon-blue font-bold uppercase tracking-widest mb-2 italic">// Morrison_SitRep</p>
            <div className="text-xl font-black italic tracking-tighter text-white mb-1 uppercase">SYSTEM_ONLINE</div>
            <p className="text-[8px] text-neon-blue uppercase tracking-widest font-bold">Data_Sync_Optimal // 100%</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
