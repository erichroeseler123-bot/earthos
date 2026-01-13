'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Show } from '@/data/shows';

export default function EventsBrowser({ shows }: { shows: Show[] }) {
  if (!shows?.length) return <div className="p-10 font-mono text-slate-500 animate-pulse text-xs">SCANNING...</div>;

  const grouped = shows.reduce((acc: any, show) => {
    const month = new Date(show.date).toLocaleString('en-US', { month: 'long', year: 'numeric' });
    if (!acc[month]) acc[month] = [];
    acc[month].push(show);
    return acc;
  }, {});

  return (
    <div className="p-8 space-y-12 w-full bg-black">
      <header className="border-b border-slate-800 pb-8">
        <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-2 font-bold italic">Node Intel // Sync_Active</p>
        <h2 className="text-6xl font-black text-white uppercase italic tracking-tighter leading-none select-none">
          RED ROCKS <span className="text-blue-600">SCHEDULE</span>
        </h2>
      </header>

      {Object.keys(grouped).map((month) => (
        <section key={month} className="space-y-6">
          <h3 className="text-slate-500 font-mono text-2xl font-black uppercase tracking-[0.4em] border-l-8 border-slate-800 pl-6 py-2 italic">{month}</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-6">
            {grouped[month].map((show: Show) => (
              <Link key={show.slug} href={`/events/${show.slug}`} className="group flex items-center bg-slate-900/20 border border-slate-800/40 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all h-32">
                {/* Scaled Date Block */}
                <div className="w-24 shrink-0 flex flex-col items-center justify-center bg-slate-900 border-r border-slate-800 h-full text-center group-hover:bg-blue-600/10 transition-colors">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">{new Date(show.date).toLocaleString('en-US', { month: 'short' })}</span>
                  <span className="text-4xl font-black text-white leading-none my-1 tracking-tighter">{new Date(show.date).getDate()}</span>
                  <span className="text-[9px] font-mono text-emerald-500 font-bold uppercase">{new Date(show.date).toLocaleString('en-US', { weekday: 'short' })}</span>
                </div>
                
                <div className="relative h-full w-28 shrink-0 overflow-hidden grayscale group-hover:grayscale-0 transition-all border-r border-slate-800">
                  <Image src={show.image} alt={show.title} fill className="object-cover" sizes="120px" unoptimized />
                </div>

                <div className="p-6 flex-1 min-w-0">
                  <h4 className="text-lg font-black text-white uppercase tracking-tighter group-hover:text-blue-400 leading-tight transition-colors line-clamp-2 italic">{show.title}</h4>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mt-2 italic font-bold">Doors: {show.time} // {show.artist}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
