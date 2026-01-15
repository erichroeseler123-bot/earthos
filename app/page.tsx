import React from 'react';
import { 
  Calendar, 
  ShieldCheck, 
  MapPin, 
  Music, 
  Snowflake, 
  Plane, 
  Users, 
  PhoneCall,
  ChevronRight,
  Star
} from 'lucide-react';

export default function ShuttleHomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Using your new hero123.jpg for the primary background */}
        <img 
          src="/hero123.jpg" 
          alt="Destination Command Center"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50" /> 
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 italic">
            DCC <span className="text-blue-500">TRANSIT</span>
          </h1>
          <p className="text-xl md:text-3xl font-bold mb-10 text-slate-100 uppercase tracking-widest">
            Premium Mountain & Concert Logistics
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full font-black text-xl transition-all shadow-2xl uppercase tracking-tighter">
              Book A Ride
            </button>
            <a href="tel:3035550123" className="bg-white hover:bg-slate-100 text-slate-900 px-12 py-5 rounded-full font-black text-xl transition-all shadow-2xl flex items-center justify-center uppercase tracking-tighter">
              <PhoneCall className="mr-3 w-6 h-6" /> Dispatch
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
          {/* Suburban Card - suburban123.jpg */}
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
                  <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-1">Mountain Spec AWD</p>
                </div>
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase">6 Units</span>
              </div>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">The standard for Colorado mountain travel. Perfect for small groups and ski resort transfers.</p>
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

          {/* Transit Van - shuttle123.jpg */}
          <div className="group overflow-hidden rounded-[2rem] border-2 border-slate-100 shadow-xl hover:border-blue-500 transition-all duration-500">
            <div className="h-[400px] overflow-hidden bg-slate-200">
              <img 
                src="/shuttle123.jpg" 
                alt="Transit Van"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-10 bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-3xl font-black uppercase italic tracking-tighter">High-Roof Transit</h4>
                  <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-1">Group Logistics</p>
                </div>
                <span className="bg-slate-900 text-white px-4 py-1 rounded-full text-xs font-black uppercase">1 Unit</span>
              </div>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">Maximum capacity for large groups, wedding parties, and corporate events.</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-black uppercase text-slate-500">
                  <Users className="w-4 h-4" /> 14 Pax
                </div>
                <div className="bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-black uppercase text-slate-500">
                  <Star className="w-4 h-4" /> Full Standing Room
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RED ROCKS LINEUP SECTION --- */}
      <section className="bg-slate-950 py-32 px-6 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h3 className="text-blue-500 font-black tracking-widest uppercase text-sm mb-4">Live Event Logistics</h3>
              <h4 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">Party at <br/>Red Rocks</h4>
              <p className="text-slate-400 text-xl font-medium">Don't settle for shared shuttles. Experience the gold standard in concert transport with DCC.</p>
            </div>
            <button className="border-2 border-white/20 hover:border-blue-500 hover:text-blue-500 px-8 py-4 rounded-full font-black uppercase text-sm transition-all">
              View All Shows
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {/* If you add artist images to public folder, replace /hi.jpg with /artist1.jpg etc */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 border border-white/10 group-hover:border-blue-500 transition-all duration-500">
                  <img 
                    src="/hi.jpg" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    alt="Event"
                  />
                </div>
                <h5 className="font-black uppercase tracking-tighter text-lg">Upcoming Event {i}</h5>
                <p className="text-blue-500 font-bold text-xs uppercase tracking-widest mt-1">Reservations Open</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- QUICK CONTACT FOOTER --- */}
      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-2">Fleet Summary</p>
                <p className="text-slate-900 font-black text-2xl uppercase italic tracking-tighter">
                    6 Suburbans • 1 Transit Van • 24/7 Dispatch
                </p>
            </div>
            <div className="text-right flex flex-col items-end">
                <p className="text-slate-400 text-xs font-bold mb-4 uppercase">© {new Date().getFullYear()} Destination Command Center</p>
                <div className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"><Snowflake className="w-5 h-5 text-slate-400" /></div>
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"><Music className="w-5 h-5 text-slate-400" /></div>
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"><Plane className="w-5 h-5 text-slate-400" /></div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
