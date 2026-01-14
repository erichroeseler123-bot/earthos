"use client";
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMap } from "@/app/context/MapContext";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function HeroMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const { registerMap } = useMap();

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/navigation-night-v1',
      center: [-105.2103, 39.6647],
      zoom: 11,
      pitch: 45,
    });

    registerMap(map.current);

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [registerMap]);

  return (
    <section className="w-full h-[450px] border border-zinc-800 relative group overflow-hidden">
      <div className="absolute top-4 left-4 z-10 bg-black/80 border border-neon-blue/30 p-2 backdrop-blur-md">
        <p className="text-[10px] text-neon-blue font-black tracking-widest uppercase">
          // LIVE_MAP_NODE
        </p>
      </div>
      <div ref={mapContainer} className="w-full h-full brightness-110 contrast-105" />
    </section>
  );
}
