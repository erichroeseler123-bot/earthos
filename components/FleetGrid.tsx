import React from 'react';
import { getBookingUrl } from "@/lib/rezdy";

export default function FleetGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* SHUTTLE CARD */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 hover:border-neon-blue transition-all group overflow-hidden">
        <div className="relative w-full aspect-square mb-6 rounded-2xl border border-zinc-800 overflow-hidden">
          <img 
            src="/fleet/shuttle.jpg" 
            alt="Red Rocks Shuttle" 
            className="object-cover w-full h-full mt-[-100px]" 
          />
          <div className="absolute top-4 right-4 bg-neon-blue px-4 py-2 rounded-full shadow-xl">
             <p className="text-white font-black text-xs">$59.00</p>
          </div>
        </div>
        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-center italic">SHUTTLE EXEC</h3>
        <p className="text-zinc-500 text-[9px] text-center uppercase font-bold mt-2">Pickup: Sheraton Downtown (Court St)</p>
        <a 
          href={getBookingUrl('shuttle')} 
          className="mt-6 block w-full bg-neon-blue text-center py-4 rounded-xl text-[11px] font-black uppercase text-white hover:bg-white hover:text-black transition-all"
        >
          Secure Spot
        </a>
      </div>

      {/* SUV CARD */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 hover:border-neon-blue transition-all group overflow-hidden">
        <div className="relative w-full aspect-square mb-6 rounded-2xl border border-zinc-800 overflow-hidden">
          <img 
            src="/fleet/suv.jpg" 
            alt="Private SUV" 
            className="object-cover w-full h-full mt-[-100px]"
          />
          <div className="absolute top-4 right-4 bg-zinc-100 px-4 py-2 rounded-full shadow-xl">
             <p className="text-black font-black text-xs">$499.00</p>
          </div>
        </div>
        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-center italic">PRIVATE SUV NODE</h3>
        <p className="text-zinc-500 text-[9px] text-center uppercase font-bold mt-2">Door-to-Door Service</p>
        <a 
          href={getBookingUrl('suv')} 
          className="mt-6 block w-full border border-zinc-800 text-center py-4 rounded-xl text-[11px] font-black uppercase text-zinc-400 hover:bg-white hover:text-black transition-all"
        >
          Request Deployment
        </a>
      </div>
    </section>
  );
}
