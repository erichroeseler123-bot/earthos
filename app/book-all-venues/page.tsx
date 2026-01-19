'use client';

import React from 'react';
import { PhoneCall, MapPin, DollarSign, Clock, Users } from 'lucide-react';

export default function BookAllVenuesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* HERO */}
      <header className="relative py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">
            All Concert Venue Shuttle
          </h1>

          <p className="text-2xl md:text-3xl font-extrabold text-green-400 mb-6">
            $50 per person · $250 minimum — Round Trip Price
          </p>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Private, flexible concert transportation anywhere in the Denver metro
            area to any concert venue in the Front Range.
          </p>
        </div>
      </header>

      {/* DETAILS */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 text-lg">

            <div className="flex gap-4 items-start">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <p>
                <strong>Pickup anywhere</strong> in the Denver metro area and
                drop-off at any concert venue in Denver or the Front Range.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <Users className="w-6 h-6 text-blue-600 mt-1" />
              <p>
                Ride together with your group. Includes up to
                <strong> two pickup locations within 5 miles</strong> of each other.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <Clock className="w-6 h-6 text-blue-600 mt-1" />
              <p>
                Your driver waits for you after the show.
                No surge pricing. No waiting for rideshares.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <DollarSign className="w-6 h-6 text-green-600 mt-1" />
              <p>
                <strong>Payment is due at pickup time.</strong><br />
                <span className="text-red-600 font-bold">
                  Cash only.
                </span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:7203696292"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-black text-lg shadow-xl uppercase tracking-widest transition-all"
            >
              <PhoneCall className="w-5 h-5" />
              Book Via Text: (720) 369-6292
            </a>
          </div>

          {/* FOOTNOTE */}
          <p className="mt-10 text-center text-sm text-slate-500">
            Alcohol permitted for passengers · Designated driver provided ·
            Return stop options available
          </p>
        </div>
      </section>
    </div>
  );
}
