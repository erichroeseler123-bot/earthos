"use client";
import React, { useState, useRef } from 'react';
import Map, { MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import DCCSidebar from '@/components/DCCSidebar';

export default function EarthOSConsole() {
  const mapRef = useRef<MapRef>(null);

  // The "Fly To" function for your search bar
  const handleSearch = async (query: string) => {
    try {
      const token = "pk.eyJ1IjoiZXdyZXdyMTIiLCJhIjoiY21rZTlkZGdyMDRtYjNkb2pidWllYnRubCJ9.xswpddGPQQYFWQpj2aRYFg";
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${token}`
      );
      const data = await res.json();
      
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        mapRef.current?.flyTo({
          center: [lng, lat],
          zoom: 12,
          duration: 3000,
          essential: true
        });
      }
    } catch (err) {
      console.error("DCC_SEARCH_ERROR:", err);
    }
  };

  return (
    <main className="flex h-screen w-full bg-black overflow-hidden font-mono text-white">
      {/* SIDEBAR: Pass the handleSearch function to the component */}
      <DCCSidebar onSearch={handleSearch} />

      {/* MAP VIEWPORT: The Intelligence Layer */}
      <section className="flex-1 relative bg-zinc-900 border-l border-zinc-800">
        <Map
          ref={mapRef}
          initialViewState={{
            longitude: -105.2103, // Red Rocks Longitude
            latitude: 39.6647,   // Red Rocks Latitude
            zoom: 11
          }}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/dark-v11"
          mapboxAccessToken="pk.eyJ1IjoiZXdyZXdyMTIiLCJhIjoiY21rZTlkZGdyMDRtYjNkb2pidWllYnRubCJ9.xswpddGPQQYFWQpj2aRYFg" 
        />

        {/* HUD OVERLAY: Visual data for the Command Center feel */}
        <div className="absolute top-6 right-6 flex flex-col gap-2 items-end pointer-events-none">
          <div className="bg-black/90 border border-neon-blue/30 p-4 backdrop-blur-md">
            <p className="text-[10px] text-neon-blue font-black tracking-widest uppercase mb-2">
              // ACTIVE_SECTOR_SCAN
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              <p className="text-[8px] text-zinc-500 uppercase">Status</p>
              <p className="text-[8px] text-zinc-500 uppercase">Sync</p>
              <p className="text-[10px] text-green-500 font-bold uppercase">Optimal</p>
              <p className="text-[10px] text-white font-bold uppercase">100%</p>
            </div>
          </div>
        </div>

        {/* SCANNER ANIMATION: A subtle horizontal scanning bar at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-900/50">
          <div className="h-full bg-neon-blue/40 w-1/4 animate-[scan_4s_infinite_linear]" />
        </div>
      </section>

      {/* Keyframe for the scanner bar */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </main>
  );
}
