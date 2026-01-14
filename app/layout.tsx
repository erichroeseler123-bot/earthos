import './globals.css';
import React from 'react';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="flex flex-col md:flex-row min-h-screen bg-black text-white p-0 m-0 overflow-hidden font-mono">
        <div className="w-64 min-h-screen bg-black border-r border-zinc-800 p-6 flex flex-col gap-8">
          {/* THE LOGO AUTHORITY LINK */}
          <a href="https://destinationcommandcenter.com" className="group block">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-500 italic mb-1 group-hover:text-neon-blue transition-colors">Intelligence Layer</p>
            <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">EARTHOS <span className="text-neon-blue not-italic">DCC</span></h1>
          </a>
          <nav className="flex flex-col gap-3">
             <a href="/" className="w-full flex items-center justify-between py-3 px-4 bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white transition-all text-[10px] uppercase italic">Home // Console <span>→</span></a>
             <a href="/schedule" className="w-full flex items-center justify-between py-3 px-4 border border-zinc-800 text-zinc-400 hover:text-white transition-all text-[10px] uppercase italic">Concert Schedule</a>
             <a href="/book?type=shuttle" className="w-full flex items-center justify-between py-3 px-4 bg-neon-blue text-white text-[10px] font-black uppercase italic hover:bg-white hover:text-black transition-all">$59 Shuttle <span>EXEC</span></a>
          </nav>
        </div>
        <main className="flex-1 h-screen relative overflow-y-auto border-t md:border-t-0 md:border-l border-slate-800/30 bg-black flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
