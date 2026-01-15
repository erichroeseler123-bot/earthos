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
  ChevronRight,
  Calendar
} from 'lucide-react';

const UPCOMING_SHOWS = [
  { id: 1, artist: "Icelantic's Winter on the Rocks", date: "FEB 07, 2026", time: "6:00 PM" },
  { id: 2, artist: "Crankdat w/ Dr. Fresch", date: "MAR 27, 2026", time: "7:00 PM" },
  { id: 3, artist: "Ravenscoon & Jantsen", date: "MAR 28, 2026", time: "6:00 PM" },
  { id: 4, artist: "INZO", date: "APR 03, 2026", time: "6:00 PM" },
  { id: 5, artist: "It's Murph presents Murph Rocks", date: "APR 04, 2026", time: "8:00 PM" },
  { id: 6, artist: "Zingara & Level Up", date: "APR 10, 2026", time: "6:00 PM" },
  { id: 7, artist: "Liquid Stranger", date: "APR 11, 2026", time: "6:00 PM" },
  { id: 8, artist: "John Mulaney: Mister Whatever", date: "APR 15, 2026", time: "7:30 PM" },
  { id: 9, artist: "bbno$ w/ Oliver Tree", date: "APR 16, 2026", time: "6:30 PM" },
  { id: 10, artist: "Sublime", date: "APR 17, 2026", time: "6:30 PM" },
  { id: 11, artist: "Sublime", date: "APR 18, 2026", time: "6:30 PM" },
  { id: 12, artist: "Wiz Khalifa w/ 2 Chainz", date: "APR 19, 2026", time: "5:30 PM" },
  { id: 13, artist: "Ice Cube", date: "APR 20, 2026", time: "7:00 PM" },
  { id: 14, artist: "Ethel Cain", date: "APR 21, 2026", time: "7:00 PM" },
  { id: 15, artist: "Subtronics: Cyclops Rocks VI", date: "APR 23, 2026", time: "6:00 PM" },
  { id: 16, artist: "Subtronics: Cyclops Rocks VI", date: "APR 24, 2026", time: "6:00 PM" },
  { id: 17, artist: "Bob Moses & Cannons", date: "APR 26, 2026", time: "6:30 PM" },
  { id: 18, artist: "Lewis Capaldi", date: "APR 28, 2026", time: "7:30 PM" },
  { id: 19, artist: "Lewis Capaldi", date: "APR 29, 2026", time: "7:30 PM" },
  { id: 20, artist: "Electric Callboy: Tanzneid World Tour", date: "APR 30, 2026", time: "7:00 PM" },
  { id: 21, artist: "Two Friends", date: "MAY 01, 2026", time: "7:00 PM" },
  { id: 22, artist: "Jason Isbell and the 400 Unit", date: "MAY 02, 2026", time: "7:00 PM" },
  { id: 23, artist: "Puscifer", date: "MAY 03, 2026", time: "7:30 PM" },
  { id: 24, artist: "Bright Eyes", date: "MAY 06, 2026", time: "7:00 PM" },
  { id: 25, artist: "Alejandro Fernández", date: "MAY 07, 2026", time: "8:00 PM" },
  { id: 26, artist: "Cloonee", date: "MAY 09, 2026", time: "7:00 PM" },
  { id: 27, artist: "Hippie Sabotage", date: "MAY 10, 2026", time: "7:00 PM" },
  { id: 28, artist: "Yungblud", date: "MAY 11, 2026", time: "8:00 PM" },
  { id: 29, artist: "Russell Dickerson", date: "MAY 13, 2026", time: "7:00 PM" },
  { id: 30, artist: "LSDREAM presents: Dreamrocks II", date: "MAY 16, 2026", time: "6:00 PM" },
  { id: 31, artist: "The Elovaters", date: "MAY 17, 2026", time: "5:00 PM" },
  { id: 32, artist: "Khalid", date: "MAY 18, 2026", time: "7:30 PM" },
  { id: 33, artist: "Kevin Gates", date: "MAY 19, 2026", time: "7:00 PM" },
  { id: 34, artist: "flipturn", date: "MAY 21, 2026", time: "6:00 PM" },
  { id: 35, artist: "Seven Lions", date: "MAY 22, 2026", time: "6:00 PM" },
  { id: 36, artist: "FISHER", date: "MAY 23, 2026", time: "7:00 PM" },
  { id: 37, artist: "Alabama Shakes", date: "MAY 24, 2026", time: "7:00 PM" },
  { id: 38, artist: "Alabama Shakes", date: "MAY 25, 2026", time: "7:00 PM" },
  { id: 39, artist: "Michael Franti & Spearhead", date: "MAY 29, 2026", time: "7:00 PM" },
  { id: 40, artist: "Alan Walker", date: "MAY 30, 2026", time: "6:00 PM" },
  { id: 41, artist: "Alex Warren", date: "JUN 02, 2026", time: "7:30 PM" },
  { id: 42, artist: "Brit Floyd", date: "JUN 04, 2026", time: "8:00 PM" },
  { id: 43, artist: "Brit Floyd", date: "JUN 05, 2026", time: "8:00 PM" },
  { id: 44, artist: "Big Head Todd and the Monsters", date: "JUN 06, 2026", time: "7:00 PM" },
  { id: 45, artist: "Lord Huron", date: "JUN 10, 2026", time: "7:30 PM" },
  { id: 46, artist: "Trevor Hall", date: "JUN 14, 2026", time: "5:30 PM" },
  { id: 47, artist: "Rod Stewart", date: "JUN 15, 2026", time: "7:30 PM" },
  { id: 48, artist: "Rod Stewart", date: "JUN 16, 2026", time: "7:30 PM" },
  { id: 49, artist: "Amyl and The Sniffers", date: "JUN 17, 2026", time: "8:00 PM" },
  { id: 50, artist: "Third Day 30th Anniversary", date: "JUN 18, 2026", time: "7:00 PM" },
  { id: 51, artist: "Louis Tomlinson", date: "JUN 19, 2026", time: "7:00 PM" },
  { id: 52, artist: "O.A.R. w/ Gavin DeGraw", date: "JUN 20, 2026", time: "6:30 PM" },
  { id: 53, artist: "Weird Al Yankovic", date: "JUN 23, 2026", time: "7:30 PM" },
  { id: 54, artist: "Treaty Oak Revival", date: "JUL 01, 2026", time: "7:00 PM" },
  { id: 55, artist: "DEADROCKS XII w/ Zeds Dead", date: "JUL 02, 2026", time: "4:30 PM" },
  { id: 56, artist: "DEADROCKS XII w/ Zeds Dead", date: "JUL 03, 2026", time: "5:00 PM" },
  { id: 57, artist: "The Avett Brothers", date: "JUL 10, 2026", time: "7:30 PM" },
  { id: 58, artist: "The Avett Brothers", date: "JUL 11, 2026", time: "7:30 PM" },
  { id: 59, artist: "The Avett Brothers", date: "JUL 12, 2026", time: "6:30 PM" },
  { id: 60, artist: "KALEO w/ Elle King", date: "JUL 14, 2026", time: "7:30 PM" },
  { id: 61, artist: "The Head And The Heart", date: "JUL 15, 2026", time: "7:30 PM" },
  { id: 62, artist: "The Head And The Heart", date: "JUL 16, 2026", time: "7:30 PM" },
  { id: 63, artist: "The String Cheese Incident", date: "JUL 17, 2026", time: "6:00 PM" },
  { id: 64, artist: "The String Cheese Incident", date: "JUL 18, 2026", time: "7:00 PM" },
  { id: 65, artist: "Parker McCollum", date: "JUL 29, 2026", time: "7:30 PM" },
  { id: 66, artist: "Killer Queen", date: "JUL 30, 2026", time: "8:00 PM" },
  { id: 67, artist: "Mt. Joy", date: "AUG 13, 2026", time: "7:00 PM" },
  { id: 68, artist: "Mt. Joy", date: "AUG 14, 2026", time: "7:00 PM" },
  { id: 69, artist: "Train", date: "AUG 17, 2026", time: "6:45 PM" },
  { id: 70, artist: "Joe Bonamassa", date: "AUG 23, 2026", time: "7:00 PM" },
  { id: 71, artist: "Ray LaMontagne", date: "AUG 26, 2026", time: "7:00 PM" },
  { id: 72, artist: "Maná", date: "SEP 04, 2026", time: "8:30 PM" },
  { id: 73, artist: "Maná", date: "SEP 05, 2026", time: "8:30 PM" },
  { id: 74, artist: "Gregory Alan Isakov", date: "SEP 06, 2026", time: "8:00 PM" },
  { id: 75, artist: "Gregory Alan Isakov", date: "SEP 07, 2026", time: "8:00 PM" },
  { id: 76, artist: "Five Finger Death Punch", date: "SEP 08, 2026", time: "6:45 PM" },
  { id: 77, artist: "Get The Led Out", date: "SEP 17, 2026", time: "7:30 PM" },
  { id: 78, artist: "Matt Rife", date: "OCT 18, 2026", time: "7:00 PM" },
  { id: 79, artist: "Mersiv", date: "OCT 23, 2026", time: "5:00 PM" },
  { id: 80, artist: "Evanescence", date: "OCT 26, 2026", time: "6:30 PM" },
  { id: 81, artist: "Cypress Hill, Method Man & Redman", date: "OCT 29, 2026", time: "6:00 PM" },
  { id: 82, artist: "mike.", date: "NOV 14, 2026", time: "5:30 PM" },
  { id: 83, artist: "mike.", date: "NOV 15, 2026", time: "2:30 PM" }
];
export default function ShuttleHomePage() {
  const router = useRouter();

  const handleBooking = () => {
    router.push('/booking');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* --- HERO SECTION --- */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img src="/hero123.jpg" alt="Party @ Red Rocks" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/60" /> 
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 italic leading-none">
            Party @ <span className="text-blue-500">Red Rocks!</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button onClick={handleBooking} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-black text-lg shadow-2xl uppercase tracking-widest transition-all">
              Book A Ride
            </button>
            <a href="tel:7203696292" className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-4 rounded-full font-black text-lg shadow-2xl flex items-center justify-center uppercase tracking-widest transition-all">
              <PhoneCall className="mr-2 w-5 h-5" /> (720) 369-6292
            </a>
          </div>
        </div>
      </header>

      {/* --- PROFESSIONAL FLEET --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-sm mb-3 italic">Our Assets</h2>
          <h3 className="text-5xl font-black text-slate-900 uppercase italic">The Professional Fleet</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div onClick={handleBooking} className="group cursor-pointer overflow-hidden rounded-[2.5rem] border-2 border-slate-50 shadow-xl hover:border-blue-500 transition-all duration-500 text-left">
            <div className="h-[400px] overflow-hidden bg-slate-100">
              <img src="/suburban123.jpg" alt="Luxury Suburban" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10 bg-white">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-3xl font-black uppercase italic tracking-tighter">Luxury Suburbans</h4>
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase italic">6 Units</span>
              </div>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">Mountain-spec AWD for resort transfers and airport logistics.</p>
            </div>
          </div>

          <div onClick={handleBooking} className="group cursor-pointer overflow-hidden rounded-[2.5rem] border-2 border-slate-50 shadow-xl hover:border-blue-500 transition-all duration-500 text-left">
            <div className="h-[400px] overflow-hidden bg-slate-100">
              <img src="/shuttle123.jpg" alt="Transit Van" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10 bg-white">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-3xl font-black uppercase italic tracking-tighter">High-Roof Transit</h4>
                <span className="bg-slate-900 text-white px-4 py-1 rounded-full text-xs font-black uppercase italic">5 Units</span>
              </div>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">Premium group logistics for wedding parties and large concert groups.</p>
            </div>
          </div>
        </div>
      </section>

{/* --- SECTION 2: LIVE LOGISTICS (CLEAN LIST) --- */}
      <section className="bg-slate-950 py-32 px-6 text-white border-y border-blue-900/50">
        <div className="max-w-4xl mx-auto text-left">
          <div className="mb-20">
            <h3 className="text-blue-500 font-black tracking-[0.4em] uppercase text-sm mb-4 italic">Upcoming Schedule</h3>
            <h4 className="text-7xl font-black uppercase italic tracking-tighter leading-none">Live Logistics</h4>
          </div>

          <div className="space-y-4">
            {UPCOMING_SHOWS.map((show) => (
              <div 
                key={show.id} 
                onClick={handleBooking}
                className="group flex flex-col md:flex-row md:items-center justify-between p-10 bg-slate-900/40 rounded-[2rem] border border-white/5 hover:border-blue-500 hover:bg-slate-900 transition-all cursor-pointer shadow-xl"
              >
                <div>
                  <h5 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-2 leading-none">{show.artist}</h5>
                  <div className="flex items-center gap-6 text-slate-400 text-xs font-black uppercase tracking-[0.1em]">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-500" /> {show.date}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" /> DOORS @ {show.time}</span>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 italic font-black text-blue-500 uppercase text-sm tracking-widest group-hover:text-white transition-colors flex items-center">
                  Request Transit <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-white py-12 border-t border-slate-100 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
        © 2026 Party @ Red Rocks! | 6 Suburbans, 5 Transit Vans
      </footer>
    </div>
  );
}
