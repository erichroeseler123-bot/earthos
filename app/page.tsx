'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  ShieldCheck, 
  Users, 
  PhoneCall,
  Star,
  Clock,
  Ticket,
  ChevronRight
} from 'lucide-react';

// Simplified Show List as requested
const UPCOMING_SHOWS = [
  { id: 1, artist: "Artist Name 1", date: "June 20, 2026", time: "7:00 PM" },
  { id: 2, artist: "Artist Name 2", date: "July 04, 2026", time: "6:30 PM" },
  { id: 3, artist: "Artist Name 3", date: "August 15, 2026", time: "8:00 PM" },
  { id: 4, artist: "Artist Name 4", date: "Sept 10, 2026", time: "7:30 PM" }
];

export default function ShuttleHomePage() {
  const router = useRouter();

  // Function to handle navigation to the widget/booking page
  const goToBooking = () => {
    router.push('/booking'); // Ensure you have a /booking/page.tsx with your widget
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/hero123.jpg" 
          alt="Party @ Red Rocks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/60" /> 
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 italic leading-none">
            Party @ <span className="text-blue-500">Red Rocks!</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-10 text-slate-100 uppercase tracking-[0.3em]">
            Colorado's Premier Private Transport
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Functional Book a Ride Button */}
            <button 
              onClick={goToBooking}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-black text-lg shadow-2xl uppercase tracking-widest transition-all"
            >
              Book A Ride
            </button>
            {/* UPDATED PHONE NUMBER: Replace 000-000-0000 with your actual Google Voice number */}
            <a href="tel:720-369-6292" className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-4 rounded-full font-black text-lg shadow-2xl flex items-center justify-center uppercase tracking-widest transition-all">
              <PhoneCall className="mr-2 w-5 h-5" /> (303) 000-0000
            </a>
          </div>
        </div>
      </header>

      {/* --- SECTION 1: PROFESSIONAL FLEET (NOW AT TOP) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-sm mb-3 italic">Our Assets</h2>
          <h3 className="text-5xl font-black text-slate-900 uppercase">The Professional Fleet</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Suburban Box - Clickable */}
          <div 
            onClick={goToBooking}
            className="group cursor-pointer overflow-hidden rounded-[2.5rem] border-2 border-slate-50 shadow-xl hover:border-blue-500 transition-all duration-500"
          >
            <div className="h-[400px] overflow-hidden bg-slate-100">
              <img src="/suburban123.jpg" alt="Luxury Suburban" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10 bg-white text-left">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-3xl font-black uppercase italic tracking-tighter">Luxury Suburbans</h4>
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase italic text-center">6 Units</span>
              </div>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">Mountain-spec AWD for private resort transfers and airport logistics.</p>
              <div className="mt-6 flex items-center text-blue-600 font-black uppercase text-sm">
                Book This Vehicle <ChevronRight className="ml-1 w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Transit Van Box - Clickable (Updated to 5 Units, No Standing Room) */}
          <div 
            onClick={goToBooking}
            className="group cursor-pointer overflow-hidden rounded-[2.5rem] border-2 border-slate-50 shadow-xl hover:border-blue-500 transition-all duration-500"
          >
            <div className="h-[400px] overflow-hidden bg-slate-100">
              <img src="/shuttle123.jpg" alt="Transit Van" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10 bg-white text-left">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-3xl font-black uppercase italic tracking-tighter text-left">High-Roof Transit</h4>
                <span className="bg-slate-900 text-white px-4 py-1 rounded-full text-xs font-black uppercase italic text-center">5 Units</span>
              </div>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">Premium group logistics for wedding parties and large concert groups.</p>
              <div className="mt-6 flex items-center text-blue-600 font-black uppercase text-sm">
                Book This Vehicle <ChevronRight className="ml-1 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: LIVE LOGISTICS (SIMPLE LIST) --- */}
      <section className="bg-slate-950 py-24 px-6 text-white border-y border-blue-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-blue-500 font-black tracking-[0.3em] uppercase text-sm mb-4 italic">Upcoming Schedule</h3>
            <h4 className="text-6xl font-black uppercase italic tracking-tighter leading-none">Live Logistics</h4>
          </div>

          <div className="space-y-4">
            {UPCOMING_SHOWS.map((show) => (
              <div 
                key={show.id} 
                onClick={goToBooking}
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-slate-900/50 rounded-3xl border border-white/5 hover:border-blue-500 hover:bg-slate-900 transition-all cursor-pointer"
              >
                <div>
                  <h5 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-1">{show.artist}</h5>
                  <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-500" /> {show.date}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" /> {show.time}</span>
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <span className="bg-blue-600 group-hover:bg-blue-700 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-colors">
                    Request Transport
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-12 border-t border-slate-100 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
        <p>© 2026 Party @ Red Rocks! | 6 Suburbans, 5 Transit Vans</p>
      </footer>
    </div>
  );
}

// Minimal placeholder icons to prevent import errors if they aren't used elsewhere
function Calendar({ className }: { className?: string }) {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>;
}
