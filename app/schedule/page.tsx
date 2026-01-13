'use client';
import React from 'react';
import EventTicker from '@/components/EventTicker';

export default function SchedulePage() {
  const events = [
    { date: "02.07.26", artist: "ICELANTIC'S WINTER ON THE ROCKS", url: "https://www.redrocksonline.com/events/winter-on-the-rocks-2026" },
    { date: "03.27.26", artist: "CRANKDAT W/ DR. FRESCH", url: "https://www.redrocksonline.com/events/crankdat" },
    { date: "03.28.26", artist: "RAVENSCOON W/ JANTSEN", url: "https://www.redrocksonline.com/events/ravenscoon" },
    { date: "04.11.26", artist: "LIQUID STRANGER", url: "https://www.redrocksonline.com/events/liquid-stranger" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono p-8 lg:p-12 pb-32">
      <EventTicker />
      <main className="max-w-4xl mx-auto mt-12">
        <header className="mb-16 border-b border-zinc-800 pb-8">
          <p className="text-[10px] text-red-600 mb-2 tracking-[0.4em] uppercase italic font-black">// Intelligence_Node: Global_Schedule</p>
          <h1 className="text-6xl font-black uppercase italic tracking-tighter text-white">SYSTEM <span className="text-red-600 not-italic font-black">CALENDAR</span></h1>
        </header>

        <div className="space-y-1">
          {events.map((event) => (
            <a key={event.date} href={event.url} target="_blank" className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 px-8 border-b border-zinc-900 hover:bg-zinc-900/50 transition-all group">
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start md:items-center">
                <span className="text-xs text-red-600 font-black tracking-widest">{event.date}</span>
                <span className="text-xl font-black uppercase italic tracking-widest group-hover:text-red-500">{event.artist}</span>
              </div>
              <span className="mt-4 md:mt-0 text-[9px] text-zinc-700 font-bold group-hover:text-red-600 tracking-[0.4em] font-mono">RESOLVE_SHOW_INTEL →</span>
            </a>
          ))}
        </div>
        
        <div className="mt-20">
          <a href="/" className="text-[10px] text-zinc-600 uppercase font-black tracking-widest hover:text-white">← ABORT_TO_MAIN_CONSOLE</a>
        </div>
      </main>
    </div>
  );
}
