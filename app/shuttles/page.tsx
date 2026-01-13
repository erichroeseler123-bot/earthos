import Link from 'next/link';

const externalShuttles = [
  { name: 'On Location Shuttles', type: 'Public Partner', price: '$65 RT', hub: 'Thirsty Lion / Illegal Petes', link: 'https://www.rrxshuttles.com/' },
  { name: 'Red Rocks Shuttle', type: 'Private Network', price: '$65 RT', hub: 'Union Station Flagpole', link: 'https://redrocksshuttle.com/' },
  { name: 'BusPartyCo', type: 'Social Club', price: '$60 RT', hub: 'Varies by Meetup', link: 'https://www.buspartyco.com/' },
  { name: 'Bus To Show', type: 'Non-Profit', price: '$35 RT', hub: 'Cheaper / No Restrooms', link: 'https://bustoshow.org/' },
];

export default function ShuttlesGuide() {
  return (
    <div className="p-8 space-y-12 bg-black min-h-screen text-white font-mono text-xs">
      <header className="border-b border-slate-800 pb-8">
        <p className="text-blue-500 text-[10px] uppercase tracking-[0.5em] mb-2 font-bold italic">Directory // Network_Sync_2026</p>
        <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-none select-none">
          TRANSPORT <span className="text-blue-600">INTEL</span>
        </h2>
      </header>

      {/* FIXED BANNER: Hardcoded SeatGeek Official Image */}
      <a 
        href="https://www.google.com/search?q=red+rocks+amphitheatre+photos&tbm=isch" 
        target="_blank" 
        className="block relative w-full h-48 md:h-64 overflow-hidden rounded-[3rem] border border-slate-800 group bg-slate-900"
      >
        <img 
          src="https://seatgeekimages.com/venues/196/original/huge.jpg" 
          alt="Red Rocks Official" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-10">
          <p className="text-white font-black uppercase italic tracking-[0.3em] text-sm border-l-4 border-blue-600 pl-4">
            Execute_Visual_Sync // View_Venue_Photos &gt;
          </p>
        </div>
      </a>

      {/* PRIMARY SERVICES: Standardized $59 Branding */}
      <section className="space-y-6">
        <h3 className="text-2xl font-black uppercase italic text-blue-500 tracking-widest">// DCC_PRIMARY_SERVICES</h3>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
          
          <div className="bg-blue-600/10 border-2 border-blue-500 p-10 rounded-[3rem] flex flex-col justify-between group">
            <div>
              <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">Node: Shared_Shuttle</p>
              <h4 className="text-4xl font-black italic mb-2 uppercase">$59 SHUTTLE</h4>
              <p className="text-slate-400 text-xs mb-10 uppercase tracking-tighter font-bold italic">Party At Red Rocks // Official Standard</p>
              
              <div className="space-y-6 mb-12">
                <span className="text-white font-black block text-sm tracking-widest uppercase border-b border-slate-800 pb-2 w-fit">Pickup Hubs:</span>
                <div className="flex flex-wrap gap-4">
                  <a href="https://maps.app.goo.gl/Sheraton" target="_blank" className="bg-slate-900 border border-slate-700 px-6 py-3 rounded-full hover:border-blue-500 transition-colors text-blue-400 font-bold uppercase text-[10px] tracking-widest">
                    DENVER [SHERATON]
                  </a>
                  <a href="https://maps.app.goo.gl/Trailhead" target="_blank" className="bg-slate-900 border border-slate-700 px-6 py-3 rounded-full hover:border-blue-500 transition-colors text-blue-400 font-bold uppercase text-[10px] tracking-widest">
                    GOLDEN [TRAILHEAD]
                  </a>
                </div>
              </div>
            </div>
            <Link href="/book-shuttle" className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black uppercase text-sm text-center hover:bg-blue-500 transition-all tracking-[0.2em] shadow-lg shadow-blue-900/40">
              BOOK NATIVE
            </Link>
          </div>

          <div className="bg-emerald-600/10 border-2 border-emerald-500 p-10 rounded-[3rem] flex flex-col justify-between group">
            <div>
              <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">Node: Private_Suburban</p>
              <h4 className="text-4xl font-black italic mb-2 uppercase">VIP TAILGATE SUV</h4>
              <p className="text-slate-400 text-xs mb-10 uppercase tracking-tighter italic font-bold italic">Private Trip + Tailgate Hardware (Chairs/Ice)</p>
              <div className="p-8 bg-black/60 border border-emerald-500/20 rounded-3xl mb-12">
                <span className="text-white font-black block text-3xl tracking-tighter">$499.00 FULL TRIP</span>
                <span className="text-slate-500 block uppercase text-[10px] mt-2 tracking-widest">Up to 6 Passengers // Door-to-Door</span>
              </div>
            </div>
            <Link href="/private-suburban" className="w-full bg-emerald-600 text-white py-6 rounded-2xl font-black uppercase text-sm text-center hover:bg-emerald-500 transition-all tracking-[0.2em]">
              RESERVE VIP
            </Link>
          </div>
        </div>
      </section>

      {/* EXTERNAL NETWORK SECTION */}
      <section className="border border-slate-800 p-10 rounded-[3.5rem] bg-slate-900/10 space-y-8">
        <h3 className="text-2xl font-black uppercase italic text-slate-500 tracking-widest">// ALTERNATIVE_PROVIDER_NETWORK</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {externalShuttles.map((op) => (
            <a key={op.name} href={op.link} target="_blank" className="p-6 bg-black border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-all flex flex-col justify-between group h-full">
              <div>
                <span className="text-slate-500 text-[8px] uppercase block mb-1">External_Node</span>
                <span className="text-white font-bold block mb-2">{op.name}</span>
                <span className="text-[9px] text-slate-400 uppercase leading-relaxed">{op.hub}</span>
              </div>
              <div className="mt-6 flex justify-between items-center border-t border-slate-800/50 pt-4">
                <span className="text-blue-400 font-black text-xs">{op.price}</span>
                <span className="text-[7px] text-slate-700 uppercase group-hover:text-blue-500 italic">Exit_Link &gt;</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="pt-8 opacity-20 text-[8px] uppercase tracking-[0.4em] italic border-t border-slate-900">
        Source: SeatGeek_API // NASA_Telemetry // EarthOS_Core
      </footer>
    </div>
  );
}
