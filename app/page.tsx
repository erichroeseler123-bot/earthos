"use client";
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import DCCSidebar from '@/components/DCCSidebar';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXdyZXdyMTIiLCJhIjoiY21rZTlkZGdyMDRtYjNkb2pidWllYnRubCJ9.xswpddGPQQYFWQpj2aRYFg';

export default function EarthOSConsole() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-105.2103, 39.6647],
      zoom: 11,
    });
    return () => map.current?.remove();
  }, []);

  const handleSearch = (query: string) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxgl.accessToken}`)
      .then(res => res.json())
      .then(data => {
        if (data.features?.length > 0) {
          const [lng, lat] = data.features[0].center;
          map.current?.flyTo({ center: [lng, lat], zoom: 12 });
        }
      });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* YOUR ORIGINAL HEADER / HERO STAYS HERE */}
      <section className="p-8 text-center">
        <h1 className="text-4xl font-black uppercase italic">Red Rocks <span className="text-neon-blue">Transport</span></h1>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* THE MAP BOX ON THE SIDEBAR OR TOP */}
        <aside className="md:col-span-1 space-y-4">
          <DCCSidebar onSearch={handleSearch} />
          <div ref={mapContainer} className="h-64 w-full border border-zinc-800" />
        </aside>

        {/* THE REST OF YOUR SHIT (Vehicles, content, etc.) */}
        <main className="md:col-span-3">
            {/* Put your old vehicle grid code back here */}
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-zinc-900 p-4 border border-zinc-800">SUV_UNIT_01</div>
               <div className="bg-zinc-900 p-4 border border-zinc-800">VAN_UNIT_01</div>
            </div>
        </main>
      </div>
    </div>
  );
}
