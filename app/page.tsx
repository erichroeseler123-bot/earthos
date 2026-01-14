"use client";
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import DCCSidebar from '@/components/DCCSidebar';

// Set your token here
mapboxgl.accessToken = 'pk.eyJ1IjoiZXdyZXdyMTIiLCJhIjoiY21rZTlkZGdyMDRtYjNkb2pidWllYnRubCJ9.xswpddGPQQYFWQpj2aRYFg';

export default function EarthOSConsole() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-105.2103, 39.6647], // Red Rocks
      zoom: 11,
      pitch: 45,
    });

    // Add navigation controls (zoom/rotate)
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-left');

    return () => {
      map.current?.remove();
    };
  }, []);

  const handleSearch = async (query: string) => {
    try {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await res.json();
      
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        map.current?.flyTo({
          center: [lng, lat],
          zoom: 12,
          essential: true,
          duration: 3000
        });
      }
    } catch (err) {
      console.error("DCC_SEARCH_ERROR:", err);
    }
  };

  return (
    <main className="flex h-screen w-full bg-black overflow-hidden font-mono text-white">
      <DCCSidebar onSearch={handleSearch} />

      <section className="flex-1 relative border-l border-zinc-800">
        {/* THE ACTUAL MAP DIV */}
        <div ref={mapContainer} className="w-full h-full" />

        {/* HUD OVERLAY */}
        <div className="absolute top-6 right-6 pointer-events-none">
          <div className="bg-black/90 border border-neon-blue/30 p-4 backdrop-blur-md">
            <p className="text-[10px] text-neon-blue font-black tracking-widest uppercase mb-1">// SECTOR_SCAN</p>
            <p className="text-[10px] text-white uppercase font-bold">Status: Optimal</p>
          </div>
        </div>

        {/* SCANNER LINE */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-900/50">
          <div className="h-full bg-neon-blue/40 w-1/4 animate-[scan_4s_infinite_linear]" />
        </div>
      </section>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .mapboxgl-ctrl-logo, .mapboxgl-ctrl-attrib { display: none !important; }
      `}</style>
    </main>
  );
}
