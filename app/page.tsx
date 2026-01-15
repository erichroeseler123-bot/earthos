import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Music, 
  Snowflake, 
  Plane, 
  Users, 
  PhoneCall,
  Star
} from 'lucide-react';

export default function ShuttleHomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Using your local Suburban image for the Hero */}
        <img 
          src="/suburban123.jpg" 
          alt="Premium Suburban Service"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Destination <span className="text-blue-500">Command Center</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8">
            Professional Suburban & Van Transport
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl">
            Book Your Shuttle
          </button>
        </div>
      </header>

      {/* --- THE FLEET (Using your local images) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h3 className="text-4xl font-black text-slate-900 mb-12 text-center">Our Local Fleet</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Suburban Card */}
          <div className="group rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="h-72 overflow-hidden bg-slate-100">
              <img 
                src="/suburban123.jpg" 
                alt="Our Suburban"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold mb-2">Luxury Suburbans</h4>
              <p className="text-slate-600">6 vehicles ready for mountain and city transit.</p>
            </div>
          </div>

          {/* Van Card */}
          <div className="group rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="h-72 overflow-hidden bg-slate-100">
              <img 
                src="/shuttle123.jpg" 
                alt="Our Transit Van"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold mb-2">Transit Shuttles</h4>
              <p className="text-slate-600">High-capacity van for groups up to 14.</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- NEW ARTIST / RED ROCKS SECTION --- */}
      <section className="bg-slate-900 py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Music className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-4xl font-black mb-4 uppercase">Party at Red Rocks</h2>
          <p className="text-slate-400 mb-16 max-w-2xl mx-auto">
            Book your shuttle for the upcoming season. We provide door-to-door service for every major show.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Repeat this block for each artist image you have in /public */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all border-2 border-slate-700">
                <img src="/artist1.jpg" alt="Artist Name" className="w-full h-full object-cover" />
              </div>
              <p className="font-bold">Upcoming Show 01</p>
            </div>
            
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all border-2 border-slate-700">
                <img src="/artist2.jpg" alt="Artist Name" className="w-full h-full object-cover" />
              </div>
              <p className="font-bold">Upcoming Show 02</p>
            </div>

            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all border-2 border-slate-700">
                <img src="/artist3.jpg" alt="Artist Name" className="w-full h-full object-cover" />
              </div>
              <p className="font-bold">Upcoming Show 03</p>
            </div>

            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all border-2 border-slate-700">
                <img src="/artist4.jpg" alt="Artist Name" className="w-full h-full object-cover" />
              </div>
              <p className="font-bold">Upcoming Show 04</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-slate-500 border-t border-slate-100">
        <p>© {new Date().getFullYear()} Destination Command Center</p>
      </footer>
    </div>
  );
}
