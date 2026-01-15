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
  ChevronRight
} from 'lucide-react';

export default function ShuttleHomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder: Black SUV / Colorado Road */}
        <img 
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Transport"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" /> {/* Dark Overlay */}
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Destination <span className="text-blue-500">Command Center</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 text-slate-200">
            Colorado's Premier Private Transport: Suburbans & Vans
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
              Book a Shuttle
            </button>
            <button className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl flex items-center justify-center">
              <PhoneCall className="mr-2 w-5 h-5" /> (303) 555-0123
            </button>
          </div>
        </div>
      </header>

      {/* --- THE FLEET --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Our Assets</h2>
            <h3 className="text-4xl font-black text-slate-900">The Professional Fleet</h3>
          </div>
          <p className="text-slate-500 max-w-md mt-4 md:mt-0">
            Maintaining a premium fleet of 6 luxury Suburbans and a high-capacity Transit Van for any group size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Suburban Card */}
          <div className="group overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Suburban"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-2xl font-bold">Luxury Suburbans</h4>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase">6 Available</span>
              </div>
              <p className="text-slate-600 mb-6">Perfect for families and small groups heading to ski resorts or airport transfers.</p>
              <div className="flex items-center text-slate-400 gap-4 text-sm font-medium">
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 6-7 Passengers</span>
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> AWD Enabled</span>
              </div>
            </div>
          </div>

          {/* Van Card */}
          <div className="group overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000" 
                alt="Transit Van"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-2xl font-bold">Group Transit Van</h4>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold uppercase">1 Available</span>
              </div>
              <p className="text-slate-600 mb-6">Our high-roof van is ideal for large groups and significant luggage requirements.</p>
              <div className="flex items-center text-slate-400 gap-4 text-sm font-medium">
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 14 Passengers</span>
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Professional Driver</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Mountain & City Logistics</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Red Rocks */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Music className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Party at Red Rocks</h4>
              <p className="text-slate-600 mb-6">The gold standard for concert transport. We handle the parking and the drive so you can focus on the show.</p>
              <a href="#" className="text-blue-600 font-bold flex items-center group">View Packages <ChevronRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all" /></a>
            </div>

            {/* Ski Resorts */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Snowflake className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Ski & Resort Links</h4>
              <p className="text-slate-600 mb-6">Direct service to Breckenridge, Vail, and Summit County. Heavy-duty winter tires and experienced mountain drivers.</p>
              <a href="#" className="text-blue-600 font-bold flex items-center group">Check Routes <ChevronRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all" /></a>
            </div>

            {/* Airport */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mb-6">
                <Plane className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">DIA Airport Transfer</h4>
              <p className="text-slate-600 mb-6">Avoid the shared-shuttle loops. Get direct, private door-to-door service to and from Denver International.</p>
              <a href="#" className="text-blue-600 font-bold flex items-center group">Book Pickup <ChevronRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK CONTACT / FOOTER --- */}
      <footer className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h5 className="text-2xl font-black mb-6">DCC TRANSIT</h5>
            <p className="text-slate-400 leading-relaxed">
              Premium transportation logistics for Colorado's most popular destinations. Private, reliable, and professional.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-6">Service Areas</h5>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> Breckenridge / Summit County</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> Vail / Eagle County</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> Red Rocks Amphitheatre</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> Denver International (DIA)</li>
            </ul>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl">
            <h5 className="text-lg font-bold mb-4">Need a Custom Quote?</h5>
            <p className="text-slate-400 text-sm mb-6">We specialize in weddings, corporate events, and large group outings.</p>
            <button className="w-full bg-blue-600 py-3 rounded-lg font-bold">Contact Dispatch</button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Destination Command Center. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

