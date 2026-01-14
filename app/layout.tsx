'use client';

import './globals.css';
import React, { useState } from 'react';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en" className="bg-black">
      <body className="min-h-screen bg-black text-white p-0 m-0 font-mono flex flex-col md:flex-row overflow-x-hidden">
        
        {/* MOBILE TRIGGER: Anchored Bottom-Left */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="fixed left-0 bottom-4 z-[100] bg-neon-blue p-3 border-r border-y border-white md:hidden uppercase font-black text-[10px] tracking-widest text-black shadow-2xl"
        >
          {isOpen ? '[ CLOSE_INTEL ]' : '[ OPEN_INTEL ]'}
        </button>

        {/* SIDEBAR DRAWER */}
        <div className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-black border-r border-zinc-800 p-6 flex flex-col gap-8 transition-transform duration-300
          md:relative md:translate-x-0 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <a href="https://destinationcommandcenter.com" className="group block">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-500 italic mb-1 group-hover:text-neon-blue">Intelligence Layer</p>
            <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">EARTHOS <span className="text-neon-blue not-italic">DCC</span></h1>
          </a>

          {/* REAL-TIME DATA NODES */}
          <div className="border-y border-zinc-800 py-4 space-y-2 text-[9px] uppercase font-bold text-zinc-500">
            <p className="text-neon-blue">// SITE_LAT: 39.6654° N</p>
            <p className="text-neon-blue">// SITE_LON: 105.2054° W</p>
            <p className="animate-pulse">// WEATHER: 28°F // CLEAR</p>
          </div>

          <nav className="flex flex-col gap-3 font-bold uppercase italic text-[10px]">
             <a href="/" className="w-full py-3 px-4 bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white transition-all text-left">Home // Console <span>→</span></a>
             <a href="/schedule" className="w-full py-3 px-4 border border-zinc-800 text-zinc-400 hover:text-white transition-all text-left">Concert Schedule</a>
             <a href="/faq" className="w-full py-3 px-4 border border-zinc-800 text-zinc-400 hover:text-white transition-all text-left">F.A.Q. // INTEL</a>
             <a href="/book?type=shuttle" className="w-full py-3 px-4 bg-neon-blue text-white hover:bg-white hover:text-black transition-all text-left">$59 Shuttle <span>EXEC</span></a>
          </nav>
        </div>

        <main className="flex-1 h-screen relative overflow-y-auto border-t md:border-t-0 md:border-l border-slate-800/30 bg-black flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </main>

        {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/80 z-40 md:hidden" />}
      </body>
    </html>
  );
}
