"use client";
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import DCCSidebar from '@/components/DCCSidebar';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXdyZXdyMTIiLCJhIjoiY21rZTlkZGdyMDRtYjNkb2pidWllYnRubCJ9.xswpddGPQQYFWQpj2aRYFg';

export default function EarthOSConsole() {
  const mapContainer1 = useRef<HTMLDivElement>(null);
  const mapContainer2 = useRef<HTMLDivElement>(null);
  const map1 = useRef<mapboxgl.Map | null>(null);
  const map2 = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!map1.current && mapContainer1.current) {
      map1.current = new mapboxgl.Map({
        container: mapContainer1.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-105.2103, 39.6647], 
        zoom: 9,
      });
    }
    if (!map2.current && mapContainer2.current) {
      map2.current = new mapboxgl.Map({
        container: mapContainer2.current,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [-105.2054, 39.6654], 
        zoom: 15,
      });
    }
    return () => {
      map1.current?.remove();
      map2.current?.remove();
    };
  }, []);

  const handleSearch = (query: string) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxgl.accessToken}`)
      .then(res => res.json())
      .then(data => {
        if (data.features?.length > 0) {
          const [lng, lat] = data.features[0].center;
          map1.current?.flyTo({ center: [lng, lat], zoom: 12, duration: 2000 });
        }
      });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white font-mono">
      {/* SIDEBAR WITH DUAL MAPS */}
      <aside className="w-full md:w-80 bg-black border-r border-zinc-800 p-6 flex flex-col gap-6">
        <DCCSidebar onSearch={handleSearch} />
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <p className="text-[9px] text-neon-blue uppercase font-black tracking-widest">// REGIONAL_TACTICAL</p>
            <div ref={mapContainer1} className="h-40 w-full border border-zinc-800 bg-zinc-900 shadow-2xl" />
          </div>
          <div className="space-y-1">
            <p className="text-[9px] text-neon-blue uppercase font-black tracking-widest">// SITE_INTEL_SAT</p>
            <div ref={mapContainer2} className="h-40 w-full border border-zinc-800 bg-zinc-900 shadow-2xl" />
          </div>
        </div>
      </aside>

      {/* RESTORED MARKETING CONTENT */}
      <main className="flex-1 overflow-y-auto p-8 lg:p-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <section className="text-center space-y-4">
            <h1 className="text-6xl font-black uppercase italic tracking-tighter">
              RED ROCKS <span className="text-neon-blue">TRANSPORT</span>
            </h1>
            <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase font-bold">Shuttles from Denver & Golden // Door-to-Door Private SUV</p>
            <img src="https://partyatredrocks.com/hero/transport.jpg" className="w-full h-[450px] object-cover border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700" alt="Fleet Hero" />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 hover:border-neon-blue transition-colors group">
              <img src="https://partyatredrocks.com/images/shuttle.jpg" className="w-full h-56 object-cover mb-6 border border-zinc-800" alt="Shuttle" />
              <h3 className="text-2xl font-black italic uppercase italic tracking-tighter">9 SHUTTLE EXEC</h3>
              <p className="text-zinc-500 text-[10px] my-4 leading-relaxed uppercase font-bold">Scheduled service from key Denver hubs directly to the stage.</p>
              <a href="/book?type=shuttle" className="block w-full bg-neon-blue text-center py-4 text-[11px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">Secure Spot</a>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-8 hover:border-neon-blue transition-colors group">
              <img src="https://partyatredrocks.com/images/suv.jpg" className="w-full h-56 object-cover mb-6 border border-zinc-800" alt="SUV" />
              <h3 className="text-2xl font-black italic uppercase italic tracking-tighter">PRIVATE SUV NODE</h3>
              <p className="text-zinc-500 text-[10px] my-4 leading-relaxed uppercase font-bold">VIP door-to-door transport for groups up to 7 in premium Suburbans.</p>
              <a href="/book?type=suv" className="block w-full border border-zinc-800 text-center py-4 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:bg-white hover:text-black transition-all">Request Deployment</a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
