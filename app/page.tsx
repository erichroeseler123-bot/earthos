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
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Using your hi.jpg for the background */}
        <img 
          src="/hi.jpg" 
          alt="Destination Command Center Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" /> 
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic">
            Destination <span className="text-blue-500">Command Center</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 text-slate-200">
            Colorado's Premier Private Transport: Suburbans & Vans
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
              Book a Shuttle
            </button>
            <a href="tel:3035550123" className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl flex items-center justify-center">
              <PhoneCall className="mr-2 w-5 h-5" /> (303) 555-0123
            </a>
          </div>
        </div>
      </header>

      {/* --- THE FLEET --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 italic">Our Assets</h2>
            <h3 className="text-4xl font-black text-slate-900 uppercase">The Professional Fleet</h3>
          </div>
          <p className="text-slate-500 max-w-md mt-4 md:mt-0">
            Maintaining a premium fleet of 6 luxury Suburbans and our high-capacity Transit Van.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Suburban Card - Using suburban123.jpg */}
          <div className="group overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all">
            <div className="h-80 overflow-hidden">
              <img 
                src="/suburban123.jpg" 
                alt="Luxury Suburban"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-2xl font-bold uppercase">Luxury Suburbans</h4>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase">6 Available</span>
              </div>
              <p className="text-slate-600 mb-6 font-medium">Perfect for families and small groups heading to ski resorts or airport transfers.</p>
              <div className="flex items-center text-slate-400 gap-4 text-sm font-bold uppercase">
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 6-7 Pax</span>
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> 4WD / Winter Tires</span>
              </div>
            </div>
          </div>

          {/* Van Card - Using shuttle123.jpg */}
          <div className="group overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all">
            <div className="h-80 overflow-hidden">
              <img 
                src="/shuttle123.jpg" 
                alt="Transit Van"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-2xl font-bold uppercase">Transit Shuttle Van</h4>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold uppercase">1 Available</span>
              </div>
              <p className="text-slate-600 mb-6 font-medium">Ideal for large groups, weddings, and heavy luggage requirements.</p>
              <div className="flex items-center text-slate-400 gap-4 text-sm font-bold uppercase">
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 14 Pax</span>
                <span className="flex items-center gap-1"><Star className="w-4 h-4" /> High Roof</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ARTIST LINEUP / RED ROCKS SECTION --- */}
      <section className="bg-slate-900 py-24 px-6 text-white border-y border-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Upcoming Logistics</h2>
            <h3 className="text-5xl font-black uppercase italic">Party at Red Rocks</h3>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">Book your seat for the biggest shows of the season. Direct door-to-door shuttle service.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* These assume you have artist1.jpg, artist2.jpg, etc in your /public folder */}
            <div className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-slate-700">
                <img src="/artist1.jpg" alt="Artist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <p className="text-center font-bold uppercase tracking-tighter">Season Opener</p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-slate-700">
                <img src="/artist2.jpg" alt="Artist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <p className="text-center font-bold uppercase tracking-tighter">Electronic Series</p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-slate-700">
                <img src="/artist3.jpg" alt="Artist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <p className="text-center font-bold uppercase tracking-tighter">Rock & Soul</p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-slate-700">
                <img src="/artist4.jpg" alt="Artist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <p className="text-center font-bold uppercase tracking-tighter">Summer Finale</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Snowflake className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">Ski Resorts</h4>
              <p className="text-slate-600 mb-6">Breckenridge, Vail, and Summit County specialists. Experienced mountain drivers only.</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mb-6">
                <Plane className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">DIA Airport</h4>
              <p className="text-slate-600 mb-6">Skip the wait. Direct door-to-door private service to and from Denver International.</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">Custom Routes</h4>
              <p className="text-slate-600 mb-6">Weddings, corporate events, and private mountain tours tailored to your group.</p>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-12 border-t border-slate-100 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Destination Command Center | Fleet: 6 Suburbans, 1 Van</p>
      </footer>
    </div>
  );
}
