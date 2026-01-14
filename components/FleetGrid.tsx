import React from 'react';

export default function FleetGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* SHUTTLE CARD */}
      <div className="bg-zinc-900/40 border border-zinc-800 p-8 hover:border-neon-blue transition-colors group">
        <div className="relative h-56 w-full mb-6 border border-zinc-800 overflow-hidden">
          <img 
            src="/fleet/shuttle.jpg" 
            alt="Red Rocks Shuttle" 
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <h3 className="text-2xl font-black italic uppercase tracking-tighter">9 SHUTTLE EXEC</h3>
        <p className="text-zinc-500 text-[10px] my-4 leading-relaxed uppercase font-bold">
          Scheduled service from Union Station and Golden directly to the Trading Post.
        </p>
        <a href="/book?type=shuttle" className="block w-full bg-neon-blue text-center py-4 text-[11px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">
          Secure Spot
        </a>
      </div>

      {/* SUV CARD */}
      <div className="bg-zinc-900/40 border border-zinc-800 p-8 hover:border-neon-blue transition-colors group">
        <div className="relative h-56 w-full mb-6 border border-zinc-800 overflow-hidden">
          <img 
            src="/fleet/suv.jpg" 
            alt="Private SUV" 
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <h3 className="text-2xl font-black italic uppercase tracking-tighter">PRIVATE SUV NODE</h3>
        <p className="text-zinc-500 text-[10px] my-4 leading-relaxed uppercase font-bold">
          VIP door-to-door transport for groups up to 7 in premium Suburbans.
        </p>
        <a href="/book?type=suv" className="block w-full border border-zinc-800 text-center py-4 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:bg-white hover:text-black transition-all">
          Request Deployment
        </a>
      </div>
    </section>
  );
}
