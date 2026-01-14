"use client";
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMap } from "@/app/context/MapContext";
import { SHUTTLE_ROUTES } from "@/lib/routes";

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
      center: [-105.1103, 39.7147],
      zoom: 10.5,
      pitch: 45,
    });

    map.current.on('load', () => {
      // Add Route Source
      map.current?.addSource('shuttle-routes', {
        type: 'geojson',
        data: SHUTTLE_ROUTES as any
      });

      // Add Route Layer (Neon Blue Line)
      map.current?.addLayer({
        id: 'route-lines',
        type: 'line',
        source: 'shuttle-routes',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: {
          'line-color': ['get', 'color'],
          'line-width': 4,
          'line-opacity': 0.8,
          'line-blur': 1
        }
      });

      // Add Route Labels
      map.current?.addLayer({
        id: 'route-labels',
        type: 'symbol',
        source: 'shuttle-routes',
        layout: {
          'text-field': ['get', 'name'],
          'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
          'text-size': 10,
          'symbol-placement': 'point',
          'text-offset': [0, 1.5]
        },
        paint: { 'text-color': '#ffffff' }
      });
    });

    registerMap(map.current);
    return () => { map.current?.remove(); map.current = null; };
  }, [registerMap]);

  return (
    <section className="w-full h-[500px] border border-zinc-800 relative group overflow-hidden brightness-110 contrast-105">
      <div className="absolute top-4 left-4 z-10 bg-black/80 border border-neon-blue/30 p-2 backdrop-blur-md">
        <p className="text-[10px] text-neon-blue font-black tracking-widest uppercase">// TACTICAL_SHUTTLE_INTEL</p>
      </div>
      <div ref={mapContainer} className="w-full h-full" />
    </section>
  );
}
