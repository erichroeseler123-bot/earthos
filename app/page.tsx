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

  const RED_ROCKS_COORDS: [number, number] = [-105.2054, 39.6654];

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
        center: RED_ROCKS_COORDS, 
        zoom: 15.5,
        pitch: 65,
        bearing: 0,
        interactive: false
      });

      new mapboxgl.Marker({ color: '#3b82f6' }).setLngLat(RED_ROCKS_COORDS).addTo(map2.current);

      const rotateCamera = () => {
        if (map2.current) {
          map2.current.rotateTo((map2.current.getBearing() + 0.15) % 360, { duration: 0 });
          requestAnimationFrame(rotateCamera);
        }
      };
      map2.current.on('load', rotateCamera);
    }
    return () => { map1.current?.remove(); map2.current?.remove(); };
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
      {/* SIDEBAR */}
      <aside className="w-full md:w-80 bg-black border-r border-zinc-800 p-6 flex flex-col gap-6 sticky top-0 h-screen overflow-y-auto">
        <DCCSidebar onSearch={handleSearch} />
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <p className="text-[9px] text-neon-blue uppercase font-black tracking-widest border-l-2 border-neon-blue pl-2">// REGIONAL_TACTICAL</p>
            <div ref={mapContainer1} className="h-44 w-full border border-zinc-800 bg-zinc-900" />
          </div>
          <div className="space-y-2">
            <p className="text-[9px] text-neon-blue uppercase font-black tracking-widest border-l-2 border-neon-blue pl-2">// SITE_INTEL_ROTATING</p>
            <div ref={mapContainer2} className="h-44 w-full border border-zinc-800 bg-zinc-900" />
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* HERO SECTION */}
          <section className="text-center space-y-4">
            <h1 className="text-6xl font-black uppercase italic tracking-tighter">RED ROCKS <span className="text-neon-blue">TRANSPORT</span></h1>
            <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase font-bold">Denver // Golden // Door-to-Door Private SUV</p>
            <img src="/hero/transport.jpg" className="w-full h-[450px] object-cover border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700" alt="Fleet Hero" />
          </section>

          {/* FLEET GRID */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 hover:border-neon-blue transition-colors group">
              <img src="/images/shuttle.jpg" className="w-full h-56 object-cover mb-6 border border-zinc-800" alt="Shuttle" />
              <h3 className="text-2xl font-black italic uppercase italic tracking-tighter">$59 SHUTTLE EXEC</h3>
              <p className="text-zinc-500 text-[10px] my-4 leading-relaxed uppercase">Scheduled service from key Denver hubs directly to the stage.</p>
              <a href="/book?type=shuttle" className="block w-full bg-neon-blue text-center py-4 text-[11px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">Secure Spot</a>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-8 hover:border-neon-blue transition-colors group">
              <img src="/images/suv.jpg" className="w-full h-56 object-cover mb-6 border border-zinc-800" alt="SUV" />
              <h3 className="text-2xl font-black italic uppercase italic tracking-tighter">PRIVATE SUV NODE</h3>
              <p className="text-zinc-500 text-[10px] my-4 leading-relaxed uppercase">VIP door-to-door transport for groups up to 7 in premium Suburbans.</p>
              <a href="/book?type=suv" className="block w-full border border-zinc-800 text-center py-4 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:bg-white hover:text-black transition-all">Request Deployment</a>
            </div>
          </section>

          {/* CONCERT SCHEDULE */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black italic uppercase border-b border-zinc-800 pb-4 tracking-tighter">UPCOMING // INTEL_FEED</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Two Friends", "Jason Isbell", "Puscifer", "Illenium", "LCD Soundsystem", "Seven Lions"].map((artist) => (
                <a key={artist} href={`/artists/${artist.toLowerCase().replace(/ /g, '-')}`} className="p-4 border border-zinc-800 bg-zinc-900/20 hover:border-neon-blue transition-all group">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Artist_Node</p>
                  <h4 className="font-black uppercase italic group-hover:text-neon-blue">{artist}</h4>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
