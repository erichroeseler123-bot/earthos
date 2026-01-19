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
  Calendar,
  MapPin
} from 'lucide-react';

/* =========================
   UPCOMING RED ROCKS SHOWS
   (Icelantic REMOVED)
========================= */

const UPCOMING_SHOWS = [
  { id: 1, artist: "Two Friends", date: "MAY 01, 2026", time: "7:00 PM" },
  { id: 2, artist: "Jason Isbell and the 400 Unit", date: "MAY 02, 2026", time: "7:00 PM" },
  { id: 3, artist: "Puscifer", date: "MAY 03, 2026", time: "7:30 PM" },
  { id: 4, artist: "Bright Eyes", date: "MAY 06, 2026", time: "7:00 PM" },
  { id: 5, artist: "Alejandro Fernández", date: "MAY 07, 2026", time: "8:00 PM" },
  { id: 6, artist: "Cloonee", date: "MAY 09, 2026", time: "7:00 PM" },
  { id: 7, artist: "Hippie Sabotage", date: "MAY 10, 2026", time: "7:00 PM" },
  { id: 8, artist: "YUNGBLUD – IDOLS World Tour", date: "MAY 11, 2026", time: "8:00 PM" },
  { id: 9, artist: "Russell Dickerson", date: "MAY 13, 2026", time: "7:00 PM" },
  { id: 10, artist: "LIGHTCODE by LSDREAM", date: "MAY 16, 2026", time: "9:30 AM" },
  { id: 11, artist: "LSDREAM presents: DREAMROCKS II", date: "MAY 16, 2026", time: "6:00 PM" },
  { id: 12, artist: "The Elovaters", date: "MAY 17, 2026", time: "5:00 PM" },
  { id: 13, artist: "Khalid", date: "MAY 18, 2026", time: "7:30 PM" },
  { id: 14, artist: "Kevin Gates", date: "MAY 19, 2026", time: "7:00 PM" },
  { id: 15, artist: "flipturn", date: "MAY 21, 2026", time: "6:00 PM" },
  { id: 16, artist: "Seven Lions", date: "MAY 22, 2026", time: "6:00 PM" },
  { id: 17, artist: "FISHER", date: "MAY 23, 2026", time: "7:00 PM" },
  { id: 18, artist: "Alabama Shakes", date: "MAY 24, 2026", time: "7:00 PM" },
  { id: 19, artist: "Alabama Shakes", date: "MAY 25, 2026", time: "7:00 PM" },
  { id: 20, artist: "Michael Franti & Spearhead", date: "MAY 29, 2026", time: "7:00 PM" },
  { id: 21, artist: "Alan Walker", date: "MAY 30, 2026", time: "6:00 PM" },

  { id: 22, artist: "Alex Warren", date: "JUN 02, 2026", time: "7:30 PM" },
  { id: 23, artist: "Brit Floyd – The Wall", date: "JUN 04, 2026", time: "8:00 PM" },
  { id: 24, artist: "Brit Floyd – Dark Side of the Moon", date: "JUN 05, 2026", time: "8:00 PM" },
  { id: 25, artist: "Big Head Todd and the Monsters", date: "JUN 06, 2026", time: "7:00 PM" },
  { id: 26, artist: "Lord Huron", date: "JUN 10, 2026", time: "7:30 PM" },
  { id: 27, artist: "Trevor Hall", date: "JUN 14, 2026", time: "5:30 PM" },
  { id: 28, artist: "Rod Stewart", date: "JUN 15, 2026", time: "7:30 PM" },
  { id: 29, artist: "Rod Stewart", date: "JUN 16, 2026", time: "7:30 PM" },
  { id: 30, artist: "Amyl and The Sniffers", date: "JUN 17, 2026", time: "8:00 PM" },
  { id: 31, artist: "THIRD DAY – 30th Anniversary", date: "JUN 18, 2026", time: "7:00 PM" },
  { id: 32, artist: "Louis Tomlinson", date: "JUN 19, 2026", time: "7:00 PM" },
  { id: 33, artist: "O.A.R.", date: "JUN 20, 2026", time: "6:30 PM" },
  { id: 34, artist: "Weird Al Yankovic", date: "JUN 23, 2026", time: "7:30 PM" },

  { id: 35, artist: "Treaty Oak Revival", date: "JUL 01, 2026", time: "7:00 PM" },
  { id: 36, artist: "DEADROCKS XII", date: "JUL 02, 2026", time: "4:30 PM" },
  { id: 37, artist: "DEADROCKS XII", date: "JUL 03, 2026", time: "5:00 PM" },
  { id: 38, artist: "The Avett Brothers", date: "JUL 10, 2026", time: "7:30 PM" },
  { id: 39, artist: "The Avett Brothers", date: "JUL 11, 2026", time: "7:30 PM" },
  { id: 40, artist: "The Avett Brothers", date: "JUL 12, 2026", time: "6:30 PM" },
  { id: 41, artist: "KALEO", date: "JUL 14, 2026", time: "7:30 PM" },
  { id: 42, artist: "The Head And The Heart", date: "JUL 15, 2026", time: "7:30 PM" },
  { id: 43, artist: "The Head And The Heart", date: "JUL 16, 2026", time: "7:30 PM" },
  { id: 44, artist: "The String Cheese Incident", date: "JUL 17, 2026", time: "6:00 PM" },
  { id: 45, artist: "The String Cheese Incident", date: "JUL 18, 2026", time: "7:00 PM" },

  { id: 46, artist: "Parker McCollum", date: "JUL 29, 2026", time: "7:30 PM" },
  { id: 47, artist: "Killer Queen", date: "JUL 30, 2026", time: "8:00 PM" },
  { id: 48, artist: "Mt. Joy", date: "AUG 13, 2026", time: "7:00 PM" },
  { id: 49, artist: "Mt. Joy", date: "AUG 14, 2026", time: "7:00 PM" },
  { id: 50, artist: "Train", date: "AUG 17, 2026", time: "6:45 PM" },
  { id: 51, artist: "Joe Bonamassa", date: "AUG 23, 2026", time: "7:00 PM" },
  { id: 52, artist: "Ray LaMontagne", date: "AUG 26, 2026", time: "7:00 PM" },

  { id: 53, artist: "Maná", date: "SEP 04, 2026", time: "8:30 PM" },
  { id: 54, artist: "Maná", date: "SEP 05, 2026", time: "8:30 PM" },
  { id: 55, artist: "Gregory Alan Isakov", date: "SEP 06, 2026", time: "8:00 PM" },
  { id: 56, artist: "Gregory Alan Isakov", date: "SEP 07, 2026", time: "8:00 PM" },
  { id: 57, artist: "Five Finger Death Punch", date: "SEP 08, 2026", time: "6:45 PM" },
  { id: 58, artist: "Get The Led Out", date: "SEP 17, 2026", time: "7:30 PM" },

  { id: 59, artist: "Matt Rife", date: "OCT 18, 2026", time: "7:00 PM" },
  { id: 60, artist: "Mersiv", date: "OCT 23, 2026", time: "5:00 PM" },
  { id: 61, artist: "Evanescence", date: "OCT 26, 2026", time: "7:00 PM" },
  { id: 62, artist: "Cypress Hill · Method Man · Redman", date: "OCT 29, 2026", time: "6:00 PM" },

  { id: 63, artist: "mike.", date: "NOV 14, 2026", time: "5:30 PM" },
  { id: 64, artist: "mike.", date: "NOV 15, 2026", time: "2:30 PM" },
];

/* =========================
   PAGE
========================= */


export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ================= HERO ================= */}
      <header className="relative h-[78vh] flex items-center justify-center overflow-hidden">
        <img
          src="/hero123.jpg"
          alt="Party at Red Rocks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/50" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tight leading-none">
            Party @ <span className="text-blue-500">Red Rocks</span>
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/booking')}
              className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full font-black uppercase tracking-widest shadow-xl transition"
            >
              Book Red Rocks Shuttle
            </button>

            <a
              href="tel:7203696292"
              className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 rounded-full font-black uppercase tracking-widest shadow-xl flex items-center justify-center transition"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              (720) 369-6292
            </a>
          </div>
        </div>
      </header>

      {/* ================= ALL-VENUE SHUTTLE OFFER ================= */}
      <section className="relative z-20 -mt-20 px-6">
        <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic">
            All Concert Venue Shuttle
          </h2>

          <p className="mt-2 text-xl font-bold text-green-600">
            $50 per person round trip · $250 round-trip minimum
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-6 text-lg">
            <div className="flex gap-3">
              <MapPin className="text-blue-600 w-6 h-6" />
              <span>Pickup anywhere in the Denver metro area</span>
            </div>

            <div className="flex gap-3">
              <Users className="text-blue-600 w-6 h-6" />
              <span>Two pickup locations within 5 miles</span>
            </div>

            <div className="flex gap-3">
              <ShieldCheck className="text-blue-600 w-6 h-6" />
              <span>Drink in the vehicle · Designated driver</span>
            </div>
          </div>

          <p className="mt-4 text-slate-600">
            Skip Uber surge pricing. No waiting. We take you there and bring you home.
            Optional drive-through stop on the return.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.push('/book-all-venues')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest rounded-full px-10 py-4 transition"
            >
              Book All-Venue Shuttle
            </button>

            <button
              onClick={() => router.push('/venues')}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-black uppercase tracking-widest rounded-full px-10 py-4 transition"
            >
              See Venues
            </button>
          </div>
        </div>
      </section>

      {/* ================= UPCOMING RED ROCKS ================= */}
      <section className="bg-slate-950 text-white py-28 px-6 mt-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-blue-500 uppercase tracking-[0.4em] font-black text-sm mb-4 italic">
            Upcoming Red Rocks
          </h3>
          <h4 className="text-6xl font-black uppercase italic mb-16">
            Live Logistics
          </h4>

          <div className="space-y-4">
            {UPCOMING_SHOWS.map(show => (
              <div
                key={show.id}
                onClick={() => router.push('/booking')}
                className="group p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500 hover:bg-slate-900 transition cursor-pointer"
              >
                <h5 className="text-2xl font-black uppercase italic mb-2">
                  {show.artist}
                </h5>

                <div className="flex gap-6 text-xs uppercase tracking-widest text-slate-400">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    {show.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    {show.time}
                  </span>
                </div>

                <div className="mt-4 text-blue-500 uppercase font-black tracking-widest text-sm flex items-center">
                  Request Transit
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 text-center text-xs uppercase tracking-[0.4em] text-slate-400 border-t border-slate-100">
        © 2026 Party @ Red Rocks · Denver Concert Shuttle Specialists
      </footer>
    </div>
  );
}
