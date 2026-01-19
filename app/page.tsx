'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  PhoneCall,
  ChevronRight,
  Calendar,
  Clock
} from 'lucide-react';

/* =========================
   UPCOMING RED ROCKS SHOWS
   (Icelantic REMOVED)
========================= */

const UPCOMING_SHOWS = [
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
  { id: 14, artist: "Ethel Cain", date: "APR 21, 2026", time: "7:00 PM" }
];

/* =========================
   PAGE
========================= */

export default function ShuttleHomePage() {
  const router = useRouter();
  const handleBooking = () => router.push('/booking');

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ================= HERO ================= */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="/hero123.jpg"
          alt="Party at Red Rocks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none">
            Party @ <span className="text-blue-500">Red Rocks</span>
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBooking}
              className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full font-black uppercase tracking-widest shadow-xl transition"
            >
              Book a Ride
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

      {/* ================= ALL VENUE SHUTTLE ================= */}
      <section className="-mt-24 relative z-20 px-6">
        <div className="mx-auto max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-10 md:p-14">

          <h2 className="text-3xl md:text-4xl font-black uppercase">
            All Concert Venue Shuttle
          </h2>

          <p className="mt-2 text-xl font-black text-blue-600">
            $50 per person · $250 minimum
          </p>

          <p className="mt-6 text-lg text-slate-700">
            Pick-up anywhere in the Denver area and drop-off at any concert venue
            in the Denver metro or Front Range.
          </p>

          <p className="mt-4 text-lg text-slate-700">
            Drink in the vehicle, ride with a designated driver, skip surge pricing,
            and never wait for an Uber again.
          </p>

          <p className="mt-4 text-sm text-slate-600">
            Includes up to two pickup locations within 5 miles of each other.
            On the return trip, we can stop at a drive-through if you want.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="/book-shuttle"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 font-black uppercase tracking-widest shadow-lg transition"
            >
              Book a Shuttle
            </a>

            <a
              href="/venues"
              className="border-2 border-slate-900 rounded-full px-8 py-4 font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition"
            >
              View Venues
            </a>
          </div>

        </div>
      </section>

      {/* ================= UPCOMING SHOWS ================= */}
      <section className="bg-slate-950 text-white py-32 px-6 mt-32">
        <div className="max-w-4xl mx-auto">

          <h3 className="text-blue-500 font-black tracking-[0.4em] uppercase text-sm italic mb-4">
            Upcoming Schedule
          </h3>
          <h4 className="text-6xl md:text-7xl font-black uppercase italic tracking-tighter mb-20">
            Live Logistics
          </h4>

          <div className="space-y-4">
            {UPCOMING_SHOWS.map(show => (
              <div
                key={show.id}
                onClick={handleBooking}
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-blue-500 hover:bg-slate-900 transition cursor-pointer"
              >
                <div>
                  <h5 className="text-2xl md:text-3xl font-black uppercase italic">
                    {show.artist}
                  </h5>
                  <div className="mt-2 flex gap-6 text-xs font-black uppercase tracking-widest text-slate-400">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      {show.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      {show.time}
                    </span>
                  </div>
                </div>

                <div className="mt-6 md:mt-0 flex items-center text-blue-500 font-black uppercase tracking-widest text-sm group-hover:text-white transition">
                  Request Transit
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
        © 2026 Party @ Red Rocks · 6 Suburbans · 5 Transit Vans
      </footer>

    </div>
  );
}
