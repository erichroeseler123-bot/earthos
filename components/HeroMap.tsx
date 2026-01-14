"use client";
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXdyZXdyMTIiLCJhIjoiY21rZTlkZGdyMDRtYjNkb2pidWllYnRubCJ9.xswpddGPQQYFWQpj2aRYFg';

export default function HeroMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-105.2103, 39.6647],
      zoom: 11,
      pitch: 45,
    });
    return () => map.current?.remove();
  }, []);

  return (
    <section className="w-full h-[450px] border border-zinc-800 relative group overflow-hidden">
      <div className="absolute top-4 left-4 z-10 bg-black/80 border border-neon-blue/30 p-2 backdrop-blur-md">
        <p className="text-[10px] text-neon-blue font-black tracking-widest uppercase">// LIVE_MAP_NODE</p>
      </div>
      <div ref={mapContainer} className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
    </section>
  );
}
