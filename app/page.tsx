"use client";

import React, { useMemo, useState } from "react";
import DCCSidebar from "@/components/DCCSidebar";
import HeroMap from "@/components/HeroMap";
import FleetGrid from "@/components/FleetGrid";
import SidebarSatMap from "@/components/SidebarSatMap";

/** * PARR v1.3.1 - EXHAUSTIVE 2026 TACTICAL SCHEDULE
 * Compiled from all current 2026 announcements.
 */
const SHOWS = [
  { date: "May 1", artist: "Two Friends", time: "7:00 PM", details: "" },
  { date: "May 2", artist: "Jason Isbell and the 400 Unit", time: "7:00 PM", details: "w/ Gillian Welch & David Rawlings" },
  { date: "May 3", artist: "Puscifer", time: "7:30 PM", details: "With Dave Hill" },
  { date: "May 6", artist: "Bright Eyes", time: "7:00 PM", details: "21 Years of Wide Awake & Digital Ash" },
  { date: "May 7", artist: "Alejandro Fernández", time: "8:00 PM", details: "de Rey a Rey w/ Camila Fernández" },
  { date: "May 9", artist: "Cloonee", time: "7:00 PM", details: "w/ KETTAMA, Omar+, Cole Knight" },
  { date: "May 10", artist: "Hippie Sabotage", time: "7:00 PM", details: "With Danny Brown" },
  { date: "May 11", artist: "YUNGBLUD", time: "8:00 PM", details: "IDOLS – THE WORLD TOUR" },
  { date: "May 13", artist: "Russell Dickerson", time: "7:00 PM", details: "With Niko Moon" },
  { date: "May 16", artist: "LIGHTCODE BY LSDREAM", time: "9:30 AM", details: "Morning Set" },
  { date: "May 16", artist: "LSDREAM presents: DREAMROCKS II", time: "6:00 PM", details: "w/ Elohim, Steller, Seth David" },
  { date: "May 17", artist: "THE ELOVATERS", time: "5:00 PM", details: "w/ Collie Buddz, Protoje" },
  { date: "May 18", artist: "Khalid", time: "7:30 PM", details: "It’s Always Summer Somewhere Tour w/ Lauv" },
  { date: "May 19", artist: "Kevin Gates", time: "7:00 PM", details: "w/ Ty Dolla $ign, Shoreline Mafia" },
  { date: "May 21", artist: "flipturn", time: "6:00 PM", details: "w/ Richy Mitch & The Coal Miners" },
  { date: "May 22", artist: "Seven Lions", time: "6:00 PM", details: "" },
  { date: "May 23", artist: "FISHER", time: "7:00 PM", details: "" },
  { date: "May 24", artist: "Alabama Shakes", time: "7:00 PM", details: "w/ JJ Grey & Mofro" },
  { date: "May 25", artist: "Alabama Shakes", time: "7:00 PM", details: "w/ JJ Grey & Mofro" },
  { date: "May 29", artist: "Michael Franti & Spearhead", time: "7:00 PM", details: "w/ The Original Wailers" },
  { date: "May 30", artist: "Alan Walker", time: "6:00 PM", details: "" },
  { date: "Jun 2", artist: "Alex Warren", time: "7:30 PM", details: "Little Orphan Alex Live" },
  { date: "Jun 4", artist: "Brit Floyd", time: "8:00 PM", details: "“THE WALL”" },
  { date: "Jun 5", artist: "Brit Floyd", time: "8:00 PM", details: "“DARK SIDE OF THE MOON”" },
  { date: "Jun 6", artist: "Big Head Todd and the Monsters", time: "7:00 PM", details: "w/ 4 Non Blondes" },
  { date: "Jun 10", artist: "Lord Huron", time: "7:30 PM", details: "" },
  { date: "Jun 14", artist: "Trevor Hall, Thievery Corp & Dirtwire", time: "5:30 PM", details: "w/ Poranguí" },
  { date: "Jun 15", artist: "Rod Stewart", time: "7:30 PM", details: "One Last Time w/ Richard Marx" },
  { date: "Jun 16", artist: "Rod Stewart", time: "7:30 PM", details: "One Last Time w/ Richard Marx" },
  { date: "Jun 17", artist: "Amyl and The Sniffers", time: "8:00 PM", details: "w/ L7, PARTY DOZEN" },
  { date: "Jun 18", artist: "THIRD DAY 30th Anniversary", time: "7:00 PM", details: "w/ Michael W. Smith & Friends" },
  { date: "Jun 19", artist: "Louis Tomlinson", time: "7:00 PM", details: "How Did We Get Here? w/ The Aces" },
  { date: "Jun 20", artist: "O.A.R.", time: "6:30 PM", details: "w/ Gavin DeGraw, Phantom Planet" },
  { date: "Jun 23", artist: "“Weird Al” Yankovic", time: "7:30 PM", details: "w/ Puddles Pity Party" },
  { date: "Jul 1", artist: "Treaty Oak Revival", time: "7:00 PM", details: "w/ William Clark Green" },
  { date: "Jul 2", artist: "DEADROCKS XII: Zeds Dead", time: "4:30 PM", details: "" },
  { date: "Jul 3", artist: "DEADROCKS XII: Zeds Dead", time: "5:00 PM", details: "" },
  { date: "Jul 10", artist: "The Avett Brothers", time: "7:30 PM", details: "w/ The Lemonheads" },
  { date: "Jul 11", artist: "The Avett Brothers", time: "7:30 PM", details: "w/ Asleep At The Wheel" },
  { date: "Jul 12", artist: "The Avett Brothers", time: "6:30 PM", details: "w/ Graham Nash" },
  { date: "Jul 14", artist: "KALEO", time: "7:30 PM", details: "w/ very special guest Elle King" },
  { date: "Jul 15", artist: "The Head And The Heart", time: "7:30 PM", details: "w/ Colorado Symphony" },
  { date: "Jul 16", artist: "The Head And The Heart", time: "7:30 PM", details: "w/ Wilderado" },
  { date: "Jul 17", artist: "The String Cheese Incident", time: "6:00 PM", details: "w/ Clay Street Unit" },
  { date: "Jul 18", artist: "The String Cheese Incident", time: "7:00 PM", details: "" },
  { date: "Jul 29", artist: "Parker McCollum", time: "7:30 PM", details: "w/ Gary Allan" },
  { date: "Jul 30", artist: "Killer Queen", time: "8:00 PM", details: "" },
  { date: "Aug 13", artist: "Mt. Joy", time: "7:00 PM", details: "" },
  { date: "Aug 14", artist: "Mt. Joy", time: "7:00 PM", details: "" },
  { date: "Aug 17", artist: "Train", time: "6:45 PM", details: "Drops of Jupiter: 25th Anniversary" },
  { date: "Aug 23", artist: "Joe Bonamassa", time: "7:00 PM", details: "" },
  { date: "Aug 26", artist: "Ray LaMontagne", time: "7:00 PM", details: "w/ The Weather Station" },
  { date: "Sep 4", artist: "Maná", time: "8:00 PM", details: "VIVIR SIN AIRE TOUR" },
  { date: "Sep 5", artist: "Maná", time: "8:00 PM", details: "VIVIR SIN AIRE TOUR" },
  { date: "Sep 6", artist: "Gregory Alan Isakov", time: "8:00 PM", details: "w/ Colorado Symphony" },
  { date: "Sep 7", artist: "Gregory Alan Isakov", time: "8:00 PM", details: "w/ Colorado Symphony" },
  { date: "Sep 8", artist: "Five Finger Death Punch", time: "6:45 PM", details: "w/ Cody Jinks" },
  { date: "Sep 17", artist: "Get The Led Out", time: "7:30 PM", details: "" },
  { date: "Oct 18", artist: "Matt Rife", time: "7:00 PM", details: "Stay Golden World Tour" },
  { date: "Oct 23", artist: "Mersiv", time: "5:00 PM", details: "Two Sets" },
  { date: "Oct 26", artist: "Evanescence", time: "6:30 PM", details: "w/ K. Flay" },
  { date: "Oct 29", artist: "Cypress Hill & Method Man", time: "6:00 PM", details: "Haunted Rocks" },
  { date: "Nov 14", artist: "mike.", time: "5:30 PM", details: "w/ Stevie Daniels" },
  { date: "Nov 15", artist: "mike.", time: "2:30 PM", details: "w/ Stevie Daniels" },
];

export default function EarthOSConsole() {
  const [search, setSearch] = useState("");

  // Grouping logic for month-based layout buckets
  const groupedShows = useMemo(() => {
    const filtered = SHOWS.filter((s) =>
      s.artist.toLowerCase().includes(search.toLowerCase())
    );
    const groups: Record<string, typeof SHOWS> = {};
    filtered.forEach((show) => {
      const month = show.date.split(" ").slice(0, 1).join("");
      if (!groups[month]) groups[month] = [];
      groups[month].push(show);
    });
    return groups;
  }, [search]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white font-mono selection:bg-neon-blue selection:text-black">
      
      {/* 🛠️ SIDEBAR (Locked on Desktop) */}
      <aside className="w-full md:w-80 bg-black border-r border-zinc-800 p-6 flex flex-col gap-8 md:sticky md:top-0 md:h-screen shrink-0 overflow-y-auto">
        <DCCSidebar setSearch={setSearch} searchValue={search} />
        
        {/* Hide satellite maps on mobile */}
        <div className="hidden md:block space-y-4">
          <p className="text-[9px] text-neon-blue uppercase font-black tracking-widest border-l-2 border-neon-blue pl-2">// LIVE_SITE_INTEL</p>
          <SidebarSatMap />
        </div>
      </aside>

      {/* 🚀 MAIN PANEL */}
      <main className="flex-1 p-8 lg:p-12 space-y-20 overflow-y-visible max-w-7xl">
        
        {/* BRANDING */}
        <section className="space-y-4 border-b border-zinc-800 pb-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
            RED ROCKS <span className="text-neon-blue">TRANSPORT</span>
          </h1>
          <p className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase font-bold">
            Denver // Golden // Morrison // 2026 Season
          </p>
        </section>

        {/* HERO MAP (HIDDEN ON MOBILE) */}
        <section className="hidden md:block space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic uppercase tracking-tighter">Tactical_Mission_Map</h2>
            <span className="text-[9px] text-zinc-600 uppercase font-bold tracking-widest animate-pulse">● Live_Feed</span>
          </div>
          <HeroMap />
        </section>

        {/* FLEET GRID */}
        <section className="space-y-6">
          <h2 className="text-xl font-black italic uppercase tracking-tighter border-b border-zinc-800 pb-2">Active_Deployments</h2>
          <FleetGrid />
        </section>

        {/* EXHAUSTIVE SCHEDULE */}
        <section className="space-y-12 pb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-6">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none">
              Operational_Schedule <span className="text-neon-blue">2026</span>
            </h2>
          </div>

// Inside the groupedShows map:
<div key={month} className="space-y-6">
  <div className="flex items-center gap-4">
    {/* UPDATED: text-zinc-900 -> text-white */}
    <h3 className="text-5xl font-black uppercase italic text-white leading-none">
      {month}
    </h3>
    <div className="h-[1px] flex-1 bg-zinc-900" />
  </div>
  {/* ... rest of the cards */}
</div>                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                  {monthShows.map((show, idx) => (
                    <div 
                      key={idx} 
                      className="group p-5 border border-zinc-800 bg-zinc-900/40 rounded-xl hover:border-neon-blue/50 transition-all cursor-default relative"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] text-neon-blue font-black tracking-widest uppercase">{show.date}</span>
                        <span className="text-[9px] text-zinc-700 font-mono">{show.time}</span>
                      </div>
                      <h4 className="font-black uppercase italic text-lg leading-tight group-hover:text-neon-blue transition-colors mb-2">
                        {show.artist}
                      </h4>
                      {show.details && (
                        <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-tight border-t border-zinc-800 pt-2 mt-2">
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
