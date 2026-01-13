import Link from 'next/link';
// Assuming you have this helper; if not, you can use the fetch logic from previous steps
import { getMorrisonWeather } from '@/data/weather';

export default async function DCCSidebar() {
  const weather = await getMorrisonWeather();

  return (
    <aside className="w-full md:w-[300px] md:h-screen bg-black border-r border-slate-900 flex flex-col shrink-0">
      {/* BRANDING HEADER */}
      <div className="p-6 border-b border-slate-900 shrink-0">
        <p className="text-[9px] uppercase tracking-[0.3em] text-blue-500 font-mono italic underline decoration-blue-500/30">
          Intelligence Layer
        </p>
        <h1 className="text-xl font-mono font-bold text-white uppercase tracking-tighter mt-1">
          EarthOS <span className="text-blue-500">DCC</span>
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 font-mono">
        {/* MORRISON_SITREP */}
        <section className="bg-slate-900/30 border border-slate-800 p-4 rounded-sm shadow-[0_0_10px_rgba(30,41,59,0.5)]">
          <h3 className="text-blue-400 font-bold mb-3 uppercase tracking-widest text-[10px]">
            // Morrison_SitRep
          </h3>
          {weather ? (
            <div className="space-y-2">
              <p className="text-white text-3xl font-black italic tracking-tighter">
                {Math.round(weather.temperature)}°F
              </p>
              <p className="text-emerald-400 font-bold uppercase tracking-tighter text-[10px]">
                STATUS: OPTIMAL // WIND: {weather.windspeed} MPH
              </p>
            </div>
          ) : (
            <p className="text-red-500 animate-pulse uppercase text-[10px] font-bold">
              Sensor_Offline // Retrying...
            </p>
          )}
        </section>

        {/* NAVIGATION NODES */}
        <nav className="pt-2 space-y-2 font-sans">
          <Link href="/shuttles" className="block bg-blue-600 p-3 rounded-md text-white text-center font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
            $59 SHUTTLE
          </Link>
          <Link href="/guide" className="block border border-slate-800 p-3 rounded-md text-zinc-400 text-center font-bold text-xs uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all">
            SHUTTLE GUIDE
          </Link>
        </nav>
      </div>
    </aside>
  );
}
