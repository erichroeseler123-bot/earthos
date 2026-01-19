'use client';

import React from 'react';
import { PhoneCall, MapPin, ShieldCheck, Users } from 'lucide-react';

export default function BookAllVenuesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 px-6 py-24 font-sans">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tight mb-6">
          All-Venue Shuttle
        </h1>

        <p className="text-2xl font-bold text-green-600 mb-8">
          $50 per person · $250 minimum — Round Trip Price
        </p>

        <div className="space-y-6 text-lg text-slate-700">
          <div className="flex gap-3">
            <MapPin className="w-6 h-6 text-blue-600" />
            <span>Pickup anywhere in the Denver metro area</span>
          </div>

          <div className="flex gap-3">
            <Users className="w-6 h-6 text-blue-600" />
            <span>Up to two pickup locations within 5 miles</span>
          </div>

          <div className="flex gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <span>Drink in the vehicle · Professional designated driver</span>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-xl border border-slate-200 bg-slate-50">
          <p className="font-bold mb-2">To book this shuttle:</p>
          <p>
            Call or text <strong>(720) 369-6292</strong> with:
          </p>
          <ul className="list-disc ml-6 mt-2 text-slate-700">
            <li>Event / venue name</li>
            <li>Pickup address(es)</li>
            <li>Group size</li>
            <li>Preferred pickup time</li>
          </ul>
        </div>

        <a
          href="tel:7203696292"
          className="mt-10 inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest shadow-xl transition"
        >
          <PhoneCall className="w-5 h-5" />
          Call to Book
        </a>

      </div>
    </div>
  );
}
