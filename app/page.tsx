"use client";

import React, { useMemo, useState } from "react";
import DCCSidebar from "@/components/DCCSidebar";
import HeroMap from "@/components/HeroMap";
import FleetGrid from "@/components/FleetGrid";
import SidebarSatMap from "@/components/SidebarSatMap";
// Near the top of EarthOSConsole in app/page.tsx
export default function EarthOSConsole() {
  const [search, setSearch] = useState("");

  // ... (keep the groupedShows useMemo logic)

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white font-mono">
      {/* SIDEBAR */}
      <aside className="w-full md:w-80 bg-black border-r border-zinc-800 p-6 flex flex-col gap-8 md:sticky md:top-0 md:h-screen shrink-0 overflow-y-auto">
        <DCCSidebar setSearch={setSearch} searchValue={search} />
        {/* Hide satellite map on mobile if desired */}
        <div className="hidden md:block space-y-4">
          <p className="text-[9px] text-neon-blue uppercase font-black tracking-widest border-l-2 border-neon-blue pl-2">// LIVE_SITE_INTEL</p>
          <SidebarSatMap />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 lg:p-12 space-y-20 overflow-y-visible max-w-7xl">
        {/* ... (Keep Brand Header) */}

        {/* HERO MAP (HIDDEN ON MOBILE) */}
        <section className="hidden md:block space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic uppercase tracking-tighter">Mission_Control_Map</h2>
          </div>
          <HeroMap />
        </section>

        {/* ... (Keep Fleet Grid and Schedule) */}
      </main>
    </div>
  );
}
// THE DATA: FULL 2026 TACTICAL SCHEDULE
const SHOWS = [
  { date: "May 1, 2026", time: "7:00 PM", artist: "Two Friends", details: "" },
  { date: "May 2, 2026", time: "7:00 PM", artist: "Jason Isbell and the 400 Unit", details: "With Gillian Welch & David Rawlings" },
  { date: "May 3, 2026", time: "7:30 PM", artist: "Puscifer", details: "With Dave Hill" },
  { date: "May 6, 2026", time: "7:00 PM", artist: "Bright Eyes", details: "21 Years of Wide Awake & Digital Ash" },
  { date: "May 7, 2026", time: "8:00 PM", artist: "Alejandro Fernández", details: "de Rey a Rey w/ Camila Fernández" },
  { date: "May 9, 2026", time: "7:00 PM", artist: "Cloonee", details: "With KETTAMA, Omar+, Cole Knight" },
  { date: "May 10, 2026", time: "7:00 PM", artist: "Hippie Sabotage", details: "With Danny Brown" },
  { date: "May 11, 2026", time: "8:00 PM", artist: "YUNGBLUD", details: "IDOLS – THE WORLD TOUR" },
  { date: "May 13, 2026", time: "7:00 PM", artist: "Russell Dickerson", details: "With Niko Moon" },
  { date: "May 16, 2026", time: "9:30 AM", artist: "LIGHTCODE BY LSDREAM", details: "Morning Set" },
  { date: "May 16, 2026", time: "6:00 PM", artist: "LSDREAM: DREAMROCKS II", details: "With Elohim, Steller, Seth David" },
  { date: "May 17, 2026", time: "5:00 PM", artist: "THE ELOVATERS", details: "With Collie Buddz, Protoje" },
  { date: "May 18, 2026", time: "7:30 PM", artist: "Khalid", details: "With Lauv" },
  { date: "May 19, 2026", time: "7:00 PM", artist: "Kevin Gates", details: "With Ty Dolla $ign, Shoreline Mafia" },
  { date: "May 21, 2026", time: "6:00 PM", artist: "flipturn", details: "With Richy Mitch & The Coal Miners" },
  { date: "May 22, 2026", time: "6:00 PM", artist: "Seven Lions", details: "" },
  { date: "May 23, 2026", time: "7:00 PM", artist: "FISHER", details: "" },
  { date: "May 24, 2026", time: "7:00 PM", artist: "Alabama Shakes", details: "With JJ Grey & Mofro" },
  { date: "May 25, 2026", time: "7:00 PM", artist: "Alabama Shakes", details: "Night Two" },
  { date: "May 29, 2026", time: "7:00 PM", artist: "Michael Franti & Spearhead", details: "With The Original Wailers" },
  { date: "May 30, 2026", time: "6:00 PM", artist: "Alan Walker", details: "" },
  { date: "Jun 2, 2026", time: "7:30 PM", artist: "Alex Warren", details: "" },
  { date: "Jun 4, 2026", time: "8:00 PM", artist: "Brit Floyd – THE WALL", details: "" },
  { date: "Jun 5, 2026", time: "8:00 PM", artist: "Brit Floyd – DARK SIDE", details: "" },
  { date: "Jun 6, 2026", time: "7:00 PM", artist: "Big Head Todd & Monsters", details: "With 4 Non Blondes" },
  { date: "Jun 10, 2026", time: "7:30 PM", artist: "Lord Huron", details: "" },
  { date: "Jun 14, 2026", time: "5:30 PM", artist: "Trevor Hall & Thievery Corp", details: "With Dirtwire" },
  { date: "Jun 15, 2026", time: "7:30 PM", artist: "Rod Stewart", details: "With Richard Marx" },
  { date: "Jun 16, 2026", time: "7:30 PM", artist: "Rod Stewart", details: "Night Two" },
  { date: "Jun 17, 2026", time: "8:00 PM", artist: "Amyl and The Sniffers", details: "With L7" },
  { date: "Jun 18, 2026", time: "7:00 PM", artist: "THIRD DAY 30th", details: "With Michael W. Smith" },
  { date: "Jun 19, 2026", time: "7:00 PM", artist: "Louis Tomlinson", details: "With The Aces" },
  { date: "Jun 20, 2026", time: "6:30 PM", artist: "O.A.R.", details: "With Gavin DeGraw" },
  { date: "Jun 23, 2026", time: "7:30 PM", artist: "Weird Al Yankovic", details: "With Puddles Pity Party" },
  { date: "Jul 1, 2026", time: "7:00 PM", artist: "Treaty Oak Revival", details: "" },
  { date: "Jul 2, 2026", time: "4:30 PM", artist: "DEADROCKS XII (Zeds Dead)", details: "" },
  { date: "Jul 3, 2026", time: "5:00 PM", artist: "DEADROCKS XII (Zeds Dead)", details: "" },
  { date: "Jul 10, 2026", time: "7:30 PM", artist: "The Avett Brothers", details: "With The Lemonheads" },
  { date: "Jul 11, 2026", time: "7:30 PM", artist: "The Avett Brothers", details: "With Asleep At The Wheel" },
  { date: "Jul 12, 2026", time: "6:30 PM", artist: "The Avett Brothers", details: "With Graham Nash" },
  { date: "Jul 14, 2026", time: "7:30 PM", artist: "KALEO", details: "With Elle King" },
  { date: "Jul 15, 2026", time: "7:30 PM", artist: "The Head And The Heart", details: "With CO Symphony" },
  { date: "Jul 16, 2026", time: "7:30 PM", artist: "The Head And The Heart", details: "With Wilderado" },
  { date: "Jul 17, 2026", time: "6:00 PM", artist: "The String Cheese Incident", details: "" },
  { date: "Jul 18, 2026", time: "7:00 PM", artist: "The String Cheese Incident", details: "" },
  { date: "Jul 29, 2026", time: "7:30 PM", artist: "Parker McCollum", details: "With Gary Allan" },
  { date: "Jul 30, 2026", time: "8:00 PM", artist: "Killer Queen", details: "" },
  { date: "Aug 13, 2026", time: "7:00 PM", artist: "Mt. Joy", details: "" },
  { date: "Aug 14, 2026", time: "7:00 PM", artist: "Mt. Joy", details: "" },
  { date: "Aug 17, 2026", time: "6:45 PM", artist: "Train", details: "25 Years of Drops of Jupiter" },
  { date: "Aug 23, 2026", time: "7:00 PM", artist: "Joe Bonamassa", details: "" },
  { date: "Aug 26, 2026", time: "7:00 PM", artist: "Ray LaMontagne", details: "With The Weather Station" },
  { date: "Sep 4, 2026", time: "8:30 PM", artist: "Maná", details: "" },
  { date: "Sep 5, 2026", time: "8:30 PM", artist: "Maná", details: "" },
  { date: "Sep 6, 2026", time: "8:00 PM", artist: "Gregory Alan Isakov", details: "With CO Symphony" },
  { date: "Sep 7, 2026", time: "8:00 PM", artist: "Gregory Alan Isakov", details: "With CO Symphony" },
  { date: "Sep 8, 2026", time: "6:45 PM", artist: "Five Finger Death Punch", details: "With Cody Jinks" },
  { date: "Sep 17, 2026", time: "7:30 PM", artist: "Get The Led Out", details: "" },
  { date: "Oct 18, 2026", time: "7:00 PM", artist: "Matt Rife", details: "" },
  { date: "Oct 23, 2026", time: "5:00 PM", artist: "Mersiv", details: "Two Sets" },
  { date: "Oct 26, 2026", time: "7:00 PM", artist: "Evanescence", details: "With K. Flay" },
  { date: "Oct 29, 2026", time: "6:00 PM", artist: "Cypress Hill / Method Man", details: "Haunted Rocks" },
  { date: "Nov 14, 2026", time: "5:30 PM", artist: "mike.", details: "" },
  { date: "Nov 15, 2026", time: "2:30 PM", artist: "mike.", details: "" },
];

export default function EarthOSConsole() {
  const [search, setSearch] = useState("");

  // GROUP SHOWS BY MONTH FOR DASHBOARD CLARITY
  const groupedShows = useMemo(() => {
    const filtered = SHOWS.filter((s) =>
      s.artist.toLowerCase().includes(search.toLowerCase())
    );
    const groups: Record<string, typeof SHOWS> = {};
    filtered.forEach((show) => {
      const month = show.date.split(" ")[0];
      if (!groups[month]) groups[month] = [];
      groups[month].push(show);
    });
    return groups;
  }, [search]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white font-mono selection:bg-neon-blue selection:text-black">
      {/* 🛠️ LEFT SIDEBAR (STICKY COMMAND RAIL) */}
      <aside className="w-full md:w-80 bg-black border-r border-zinc-800 p-6 flex flex-col gap-8 md:sticky md:top-0 md:h-screen shrink-0 overflow-y-auto">
        <DCCSidebar />
        <div className="space-y-4">
          <p className="text-[9px] text-neon-blue uppercase font-black tracking-widest border-l-2 border-neon-blue pl-2">// LIVE_SITE_INTEL</p>
          <SidebarSatMap />
        </div>
      </aside>

      {/* 🚀 MAIN OPERATIONAL PANEL */}
      <main className="flex-1 p-8 lg:p-12 space-y-20 overflow-y-visible max-w-7xl">
        {/* BRAND HEADER */}
        <section className="space-y-4 border-b border-zinc-800 pb-10">
          <h1 className="text-7xl font-black uppercase italic tracking-tighter leading-none">
            RED ROCKS <span className="text-neon-blue">TRANSPORT</span>
          </h1>
          <div className="flex flex-wrap gap-4 text-zinc-500 text-[10px] tracking-[0.3em] uppercase font-bold">
            <span>Morrison, CO</span>
            <span className="text-zinc-800">|</span>
            <span>May — Nov 2026 Ops</span>
          </div>
        </section>

        {/* HERO MAP WITH TACTICAL ROUTES */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic uppercase tracking-tighter">Mission_Control_Map</h2>
            <span className="text-[9px] text-zinc-600 uppercase font-bold tracking-widest animate-pulse">● System_Active</span>
          </div>
          <HeroMap />
        </section>

        {/* FLEET GRID (400x400 OPTIMIZED) */}
        <section className="space-y-6">
          <h2 className="text-xl font-black italic uppercase tracking-tighter border-b border-zinc-800 pb-2">Active_Deployments</h2>
          <FleetGrid />
        </section>

        {/* CONCERT SCHEDULE (MONTHLY BUCKETS) */}
        <section className="space-y-10 pb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-6">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none">
              Operational_Schedule <span className="text-neon-blue">2026</span>
            </h2>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="FILTER_ARTIST..." 
                className="w-full bg-zinc-900 border border-zinc-800 p-3 text-[10px] text-white focus:border-neon-blue outline-none rounded-lg"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-16">
            {Object.entries(groupedShows).map(([month, monthShows]) => (
              <div key={month} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-5xl font-black uppercase italic text-zinc-800 leading-none">{month}</h3>
                  <div className="h-[1px] flex-1 bg-zinc-900" />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                  {monthShows.map((show, idx) => (
                    <div 
                      key={idx} 
                      className="group p-5 border border-zinc-800 bg-zinc-900/20 rounded-xl hover:border-neon-blue/50 transition-all cursor-default relative"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] text-neon-blue font-black tracking-widest uppercase">{show.date}</span>
                        <span className="text-[9px] text-zinc-600 font-mono">{show.time}</span>
                      </div>
                      <h4 className="font-black uppercase italic text-lg leading-tight group-hover:text-neon-blue transition-colors mb-2">
                        {show.artist}
                      </h4>
                      {show.details && (
                        <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-tight italic border-t border-zinc-800 pt-2">
                          {show.details}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
