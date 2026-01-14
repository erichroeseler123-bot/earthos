import React from 'react';
import { getBookingUrl } from "@/rezdy";

export default function FleetGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
      {/* SHUTTLE CARD */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-4 hover:border-neon-blue transition-all group overflow-hidden">
        <div className="relative aspect-[4/3] w-full mb-4 rounded-2xl border border-zinc-800 overflow-hidden">
          <img 
            src="/fleet/shuttle.jpg" 
            alt="Red Rocks Shuttle" 
            className="object-cover w-full h-full" 
          />
          <div className="absolute top-4 right-4 bg-neon-blue px-4 py-2 rounded-full shadow-xl">
             <p className="text-white font-black text-xs">$59.00</p>
          </div>
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-black italic uppercase tracking-tighter italic">SHUTTLE EXEC</h3>
          <p className="text-zinc-500 text-[9px] uppercase font-bold">PICKUP: SHERATON DOWNTOWN (COURT ST)</p>
          <a 
            href={getBookingUrl('shuttle')} 
            className="mt-4 block w-full bg-neon-blue text-center py-3 rounded-xl text-[11px] font-black uppercase text-white hover:bg-white hover:text-black transition-all"
          >
            SECURE SPOT
          </a>
        </div>
      </div>

      {/* SUV CARD */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-4 hover:border-neon-blue transition-all group overflow-hidden">
        <div className="relative aspect-[4/3] w-full mb-4 rounded-2xl border border-zinc-800 overflow-hidden">
          <img 
            src="/fleet/suv.jpg" 
            alt="Private SUV" 
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 right-4 bg-zinc-100 px-4 py-2 rounded-full shadow-xl">
             <p className="text-black font-black text-xs">$499.00</p>
          </div>
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-black italic uppercase tracking-tighter italic">PRIVATE SUV NODE</h3>
          <p className="text-zinc-500 text-[9px] uppercase font-bold">DOOR-TO-DOOR SERVICE</p>
          <a 
            href={getBookingUrl('suv')} 
            className="mt-4 block w-full border border-zinc-800 text-center py-3 rounded-xl text-[11px] font-black uppercase text-zinc-400 hover:bg-white hover:text-black transition-all"
          >
            REQUEST DEPLOYMENT
          </a>
        </div>
      </div>
    </section>
  );
}
