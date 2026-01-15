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
  ChevronRight
} from 'lucide-react';

export default function ShuttleHomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Using hero123.jpg as the background image */}
        <img 
          src="/hero123.jpg" 
          alt="Party @ Red Rocks Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" /> 
        
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

      {/* --- FLEET SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-sm mb-3">Professional Assets</h2>
          <h3 className="text-5xl font-black text-slate-900 uppercase italic">The 2026 Fleet</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Suburban Card - Using suburban123.jpg */}
          <div className="group overflow-hidden rounded-[2rem] border-2 border-slate-100 shadow-xl hover:border-blue-500 transition-all duration-500">
            <div className="h-[400px] overflow-hidden bg-slate-200">
              <img 
                src="/suburban123.jpg" 
                alt="Luxury Suburban"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-10 bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-3xl font-black uppercase italic tracking-tighter">Luxury Suburbans</h4>
                  <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-1 text-left">Mountain Spec AWD</p>
                </div>
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase">6 Units</span>
              </div>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed text-left">The gold standard for Colorado mountain travel. Perfect for families and private resort transfers.</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-black uppercase text-slate-500">
                  <Users className="w-4 h-4" /> 7 Pax
                </div>
                <div className="bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-black uppercase text-slate-500">
                  <ShieldCheck className="w-4 h-4" /> Winter Rated
                </div>
              </div>
            </div>
          </div>

          {/* Transit Van - Using shuttle123.jpg */}
          <div className="group overflow-hidden rounded-[2rem] border-2 border-slate-100 shadow-xl hover:border-blue-500 transition-all duration-500">
            <div className="h-[400px] overflow-hidden bg-slate-200">
              <img 
                src="/shuttle123.jpg" 
                alt="High-Roof Transit Van"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-10 bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-3xl font-black uppercase italic tracking-tighter">High-Roof Transit</h4>
                  <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-1 text-left">Group Logistics</p>
                </div>
                <span className="bg-slate-900 text-white px-4 py-1 rounded-full text-xs font-black uppercase">1 Unit</span>
              </div>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed text-left">Maximum capacity for large groups, wedding parties, and corporate events.</p>
              <div className="flex flex-wrap gap-4">
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

      {/* --- RED ROCKS SECTION --- */}
      <section className="bg-slate-950 py-32 px-6 text-white overflow-hidden border-t border-blue-900">
        <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-blue-500 font-black tracking-widest uppercase text-sm mb-4">Live Event Logistics</h3>
            <h4 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-12">Party @ Red Rocks!</h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-4 border border-white/10 bg-slate-800 flex items-center justify-center">
                  <Music className="w-12 h-12 text-slate-700 group-hover:text-blue-500 transition-colors" />
                </div>
                <p className="font-black uppercase tracking-tighter">Upcoming Show {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t border-slate-100 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Party @ Red Rocks! | 6 Suburbans, 1 Van</p>
      </footer>
    </div>
  );
}
