import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Music, 
  Snowflake, 
  Plane, 
  Users, 
  PhoneCall,
  Star,
  Clock,
  ExternalLink
} from 'lucide-react';

// This section will be replaced by your Vercel API fetch logic later.
// For now, it defines the structure your API images and data will plug into.
const UPCOMING_EVENTS = [
  {
    id: 1,
    artist: "Artist Name",
    date: "June 15, 2026",
    time: "7:00 PM",
    guests: "Special Guest",
    image: "/api/image-fetch?id=1", // This represents your Vercel API image route
    listenLink: "#",
    bookingLink: "#"
  },
  // Add more event objects here
];

export default function ShuttleHomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/hero123.jpg" 
          alt="Party @ Red Rocks Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" /> 
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 italic">
            Party @ <span className="text-blue-500">Red Rocks!</span>
          </h1>
          <p className="text-xl md:text-3xl font-bold mb-10 text-slate-100 uppercase tracking-widest">
            Colorado's Premier Private Transport
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl uppercase tracking-tighter transition-all">
              Book A Ride
            </button>
            <a href="tel:3035550123" className="bg-white hover:bg-slate-100 text-slate-900 px-12 py-5 rounded-full font-black text-xl shadow-2xl flex items-center justify-center uppercase tracking-tighter transition-all">
              <PhoneCall className="mr-3 w-6 h-6" /> (303) 555-0123
            </a>
          </div>
        </div>
      </header>

      {/* --- DYNAMIC EVENT LINEUP (API DRIVEN) --- */}
      <section className="bg-slate-950 py-32 px-6 text-white border-y border-blue-900/50">
        <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-blue-500 font-black tracking-[0.3em] uppercase text-sm mb-4">Event Logistics</h3>
            <h4 className="text-6xl font-black uppercase italic tracking-tighter mb-16">The Summer Lineup</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.id} className="group flex flex-col bg-slate-900/40 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500 transition-all duration-500 shadow-2xl">
                {/* Image handled by Vercel API */}
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.artist}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                    onError={(e) => { e.currentTarget.src = "/hi.jpg" }} 
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {event.date}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow text-left">
                  <h5 className="text-2xl font-black uppercase italic tracking-tighter mb-1">{event.artist}</h5>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-4">Special Guest: {event.guests}</p>
                  
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-8">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span>Doors: {event.time}</span>
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-3">
                    <a href={event.listenLink} className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl text-[10px] font-black uppercase transition-colors">
                      <Music className="w-3 h-3" /> Listen
                    </a>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-[10px] font-black uppercase transition-colors">
                      Book Shuttle
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FLEET SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-sm mb-3">Professional Assets</h2>
          <h3 className="text-5xl font-black text-slate-900 uppercase italic">The 2026 Fleet</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Suburban Card */}
          <div className="group overflow-hidden rounded-[2rem] border-2 border-slate-100 shadow-xl hover:border-blue-500 transition-all duration-500">
            <div className="h-[400px] overflow-hidden bg-slate-200">
              <img src="/suburban123.jpg" alt="Luxury Suburban" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-10 bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-3xl font-black uppercase italic tracking-tighter">Luxury Suburbans</h4>
                  <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-1 text-left">Mountain Spec AWD</p>
                </div>
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase">6 Units</span>
              </div>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed text-left font-medium">Professional-grade transit for families and small groups. Ideal for ski resort links and airport drop-offs.</p>
              <div className="flex gap-4">
                <div className="bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-black uppercase text-slate-500">
                  <Users className="w-4 h-4" /> 7 Pax
                </div>
                <div className="bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-black uppercase text-slate-500">
                  <ShieldCheck className="w-4 h-4" /> Winter Rated
                </div>
              </div>
            </div>
          </div>

          {/* Transit Van */}
          <div className="group overflow-hidden rounded-[2rem] border-2 border-slate-100 shadow-xl hover:border-blue-500 transition-all duration-500">
            <div className="h-[400px] overflow-hidden bg-slate-200">
              <img src="/shuttle123.jpg" alt="Transit Van" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-10 bg-white">
              <div className="flex justify-between items-start mb-4 text-left">
                <div>
                  <h4 className="text-3xl font-black uppercase italic tracking-tighter">High-Roof Transit</h4>
                  <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-1">Group Logistics</p>
                </div>
                <span className="bg-slate-900 text-white px-4 py-1 rounded-full text-xs font-black uppercase">1 Unit</span>
              </div>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed text-left font-medium">Maximum capacity for wedding parties, large groups, and custom event routes.</p>
              <div className="flex gap-4">
                <div className="bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-black uppercase text-slate-500">
                  <Users className="w-4 h-4" /> 14 Pax
                </div>
                <div className="bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-black uppercase text-slate-500">
                  <Star className="w-4 h-4" /> Standing Room
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t border-slate-100 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
        <p>© 2026 Party @ Red Rocks! | 6 Suburbans, 1 Van</p>
      </footer>
    </div>
  );
}
