import React from 'react';
import { getBookingUrl } from "@/lib/rezdy";

export default function FleetGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* SHUTTLE CARD */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 hover:border-neon-blue transition-all group overflow-hidden">
        <div className="relative h-64 w-full mb-6 rounded-2xl border border-zinc-800 overflow-hidden">
          <img 
            src="/fleet/shuttle.jpg" 
            alt="Red Rocks Shuttle" 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-neon-blue px-4 py-2 rounded-full shadow-xl">
             <p className="text-white font-black text-xs">$59.00</p>
          </div>
        </div>
        <h3 className="text-2xl font-black italic uppercase tracking-tighter">SHUTTLE EXEC</h3>
        <p className="text-zinc-500 text-[10px] my-4 leading-relaxed uppercase font-bold">
          Scheduled service from Union Station and Golden directly to the stage.
        </p>
        <a 
          href={getBookingUrl('shuttle')} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full bg-neon-blue text-center py-4 rounded-xl text-[11px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
        >
          Secure Spot
        </a>
      </div>

      {/* SUV CARD */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 hover:border-neon-blue transition-all group overflow-hidden">
        <div className="relative h-64 w-full mb-6 rounded-2xl border border-zinc-800 overflow-hidden">
          <img 
            src="/fleet/suv.jpg" 
            alt="Private SUV" 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-zinc-100 px-4 py-2 rounded-full shadow-xl">
             <p className="text-black font-black text-xs">PRIVATE RATE</p>
          </div>
        </div>
        <h3 className="text-2xl font-black italic uppercase tracking-tighter">PRIVATE SUV NODE</h3>
        <p className="text-zinc-500 text-[10px] my-4 leading-relaxed uppercase font-bold">
          VIP door-to-door transport for groups up to 7 in premium Suburbans.
        </p>
        <a 
          href={getBookingUrl('suv')} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full border border-zinc-800 text-center py-4 rounded-xl text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:bg-white hover:text-black transition-all"
        >
          Request Deployment
        </a>
      </div>
    </section>
  );
}
