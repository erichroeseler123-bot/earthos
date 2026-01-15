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
  Play,
  Ticket
} from 'lucide-react';

// This is the data array that controls the "Live Event Logistics" section.
// Replace these placeholders with your actual API data or fetch call.
const UPCOMING_SHOWS = [
  {
    id: 1,
    artist: "Artist Name 1",
    date: "June 20, 2026",
    doors: "6:00 PM",
    guests: "Special Guest A",
    image: "https://api.partyatredrocks.com/v1/images/artist1", // API Image URL
    listenLink: "https://spotify.com/...",
  },
  {
    id: 2,
    artist: "Artist Name 2",
    date: "July 04, 2026",
    doors: "7:30 PM",
    guests: "Supporting Act B",
    image: "https://api.partyatredrocks.com/v1/images/artist2",
    listenLink: "https://music.apple.com/...",
  },
  {
    id: 3,
    artist: "Artist Name 3",
    date: "August 15, 2026",
    doors: "6:30 PM",
    guests: "Special Guest C",
    image: "https://api.partyatredrocks.com/v1/images/artist3",
    listenLink: "https://soundcloud.com/...",
  },
  {
    id: 4,
    artist: "Artist Name 4",
    date: "Sept 10, 2026",
    doors: "8:00 PM",
    guests: "With Guest D",
    image: "https://api.partyatredrocks.com/v1/images/artist4",
    listenLink: "https://spotify.com/...",
  }
];

export default function ShuttleHomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/hero123.jpg" 
          alt="Party @ Red Rocks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/60" /> 
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 italic">
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

      {/* --- FLEET SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-sm mb-3">Our Assets</h2>
          <h3 className="text-5xl font-black text-slate-900 uppercase italic">The Professional Fleet</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Suburban Card */}
          <div className="group overflow-hidden rounded-[2.5rem] border-2 border-slate-50 shadow-2xl hover:border-blue-500 transition-all duration-500">
            <div className="h-[450px] overflow-hidden bg-slate-100">
              <img src="/suburban123.jpg" alt="Luxury Suburban" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-12 bg-white text-left">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-4xl font-black uppercase italic tracking-tighter">Luxury Suburbans</h4>
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-1">AWD Mountain Logistics</p>
                </div>
                <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase italic">6 Units</span>
              </div>
              <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed">The gold standard for private travel. Perfect for families, corporate events, and direct ski resort transfers.</p>
              <div className="flex gap-4">
                <div className="bg-slate-50 px-5 py-3 rounded-2xl flex items-center gap-3 text-xs font-black uppercase text-slate-600 border border-slate-100">
                  <Users className="w-4 h-4 text-blue-500" /> 7 Pax
                </div>
                <div className="bg-slate-50 px-5 py-3 rounded-2xl flex items-center gap-3 text-xs font-black uppercase text-slate-600 border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-blue-500" /> Winter Rated
                </div>
              </div>
            </div>
          </div>

          {/* High-Roof Transit - Updated to 5 units and removed standing room */}
          <div className="group overflow-hidden rounded-[2.5rem] border-2 border-slate-50 shadow-2xl hover:border-blue-500 transition-all duration-500">
            <div className="h-[450px] overflow-hidden bg-slate-100">
              <img src="/shuttle123.jpg" alt="Transit Van" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-12 bg-white text-left">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-4xl font-black uppercase italic tracking-tighter">High-Roof Transit</h4>
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-1">Group Transit Expert</p>
                </div>
                <span className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-black uppercase italic">5 Units</span>
              </div>
              <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed">Maximum capacity for wedding parties, large groups, and custom event routes across the front range.</p>
              <div className="flex gap-4">
                <div className="bg-slate-50 px-5 py-3 rounded-2xl flex items-center gap-3 text-xs font-black uppercase text-slate-600 border border-slate-100">
                  <Users className="w-4 h-4 text-blue-500" /> 14 Pax
                </div>
                <div className="bg-slate-50 px-5 py-3 rounded-2xl flex items-center gap-3 text-xs font-black uppercase text-slate-600 border border-slate-100">
                  <Star className="w-4 h-4 text-blue-500" /> Group Logistics
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LIVE EVENT LOGISTICS SECTION --- */}
      <section className="bg-slate-950 py-32 px-6 text-white border-y border-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-blue-500 font-black tracking-[0.3em] uppercase text-sm mb-4 italic">Live Event Logistics</h3>
            <h4 className="text-6xl font-black uppercase italic tracking-tighter leading-none">Party @ <br/>Red Rocks!</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {UPCOMING_SHOWS.map((show) => (
              <div key={show.id} className="group flex flex-col bg-slate-900/50 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500 transition-all duration-500 shadow-2xl">
                {/* Show Image */}
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={show.image} 
                    alt={show.artist}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-50 group-hover:opacity-100"
                    onError={(e) => { e.currentTarget.src = "/hi.jpg" }} // Fallback image if API fails
                  />
                  <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {show.date}
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow text-left">
                  <h5 className="text-3xl font-black uppercase italic tracking-tighter mb-1 leading-none">{show.artist}</h5>
                  <p className="text-blue-500 text-[11px] font-black uppercase tracking-[0.2em] mb-6">w/ {show.guests}</p>
                  
                  <div className="flex items-center gap-3 text-slate-400 text-xs font-bold mb-10">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>Doors at {show.doors}</span>
                  </div>

                  <div className="mt-auto flex flex-col gap-3">
                    <a 
                      href={show.listenLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-white hover:bg-slate-200 text-slate-900 py-4 rounded-2xl text-xs font-black uppercase transition-all"
                    >
                      <Play className="w-4 h-4 fill-current" /> Listen Now
                    </a>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-xs font-black uppercase transition-all flex items-center justify-center gap-2">
                      <Ticket className="w-4 h-4" /> Book Shuttle
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t border-slate-100 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
        <p>© 2026 Party @ Red Rocks! | 6 Suburbans, 5 Transit Vans</p>
      </footer>
    </div>
  );
}
