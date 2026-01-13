'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { shows, Show } from '@/data/shows';

export default function EventsBrowser() {
  const [hoveredShow, setHoveredShow] = useState(null);

  // Grouping shows by month
  const groupedShows = shows.reduce((acc, show) => {
    const dateObj = new Date(show.date);
    const month = dateObj.toLocaleString('default', { month: 'long', year: 'numeric' });
    if (!acc[month]) acc[month] = [];
    acc[month].push(show);
    return acc;
  }, {});

  const months = Object.keys(groupedShows).sort(
    (a, b) => new Date(groupedShows[a][0].date).getTime() - new Date(groupedShows[b][0].date).getTime()
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-10">
      {/* Header - Matching Sidebar Branding */}
      <header className="mb-12">
        <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold mb-2">Node: Red Rocks Amphitheatre</p>
        <h1 className="text-4xl font-mono font-bold tracking-tighter text-white">UPCOMING <span className="text-blue-500">EVENTS</span></h1>
        <div className="h-1 w-20 bg-blue-600 mt-4"></div>
      </header>

      {months.map((month) => (
        <section key={month} className="mb-12">
          {/* Month Heading */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-500 whitespace-nowrap">
              {month}
            </h2>
            <div className="h-[1px] w-full bg-slate-800"></div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {groupedShows[month].map((show: Show) => (
              <Link 
                key={show.slug} 
                href={`/events/${show.slug}`} 
                onMouseEnter={() => setHoveredShow(show)} 
                onMouseLeave={() => setHoveredShow(null)}
                className="group relative flex items-center bg-slate-900/40 border border-slate-800 rounded-xl p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900 shadow-lg"
              >
                {/* Event Image - Technical Frame */}
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-slate-700 bg-slate-800 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image 
                    src={show.image} 
                    alt={show.title} 
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                {/* Event Data */}
                <div className="ml-6 flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                      {show.title}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-500 group-hover:text-blue-500 transition-colors">
                      ID: {show.slug.substring(0, 8).toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-4 mt-2">
                    <p className="text-xs font-mono text-emerald-500 uppercase">
                      {new Date(show.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    </p>
                    <p className="text-xs font-mono text-slate-400 uppercase">
                      DOORS: {show.time || 'TBD'}
                    </p>
                  </div>
                  
                  <p className="text-sm text-slate-500 mt-1 line-clamp-1 italic">
                    Feat: {show.artist}
                  </p>
                </div>

                {/* Tactical Indicator */}
                <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
