'use client';
import { useSearchParams } from 'next/navigation';

export default function BookingPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const isSUV = type === 'suv';
  const title = isSUV ? "VIP SUV COMMAND" : "$59 SHUTTLE VECTOR";
  const image = isSUV ? "/VIPSUV.jpg" : "/Shuttle.jpg";

  const inclusions = isSUV 
    ? ["Door-to-Door Pickup", "Chevrolet Suburban Asset", "Tailgate Cooler + Ice", "Professional Chauffeur", "Onboard WiFi", "Flexible Return Time"]
    : ["Union Station Pickup", "High-Roof Transit Van", "Onboard Storage", "Climate Controlled", "90m Pre-Show Arrival", "Top-Lot Dropoff"];

  return (
    <div className="min-h-screen bg-black text-white font-mono p-8 lg:p-24">
      <div className="max-w-4xl mx-auto border border-zinc-800 bg-zinc-900/20 rounded-3xl overflow-hidden shadow-2xl">
        <img src={image} className="w-full h-80 object-cover border-b border-zinc-800" alt="Fleet Asset" />
        
        <div className="p-12">
          <div className="mb-8 border-b border-zinc-800 pb-4">
            <p className="text-neon-blue text-[10px] tracking-[0.4em] uppercase font-black mb-2 italic">// Booking_Node_Initialize</p>
            <h1 className="text-5xl font-black italic uppercase tracking-tighter">{title}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-neon-blue text-xs font-black uppercase tracking-widest mb-6 underline">Mission_Inclusions</h3>
              <ul className="space-y-4">
                {inclusions.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-300 uppercase tracking-widest">
                    <span className="text-neon-blue font-bold">[0{i+1}]</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/40 border border-zinc-800 p-8 rounded-xl">
              <h3 className="text-white text-xs font-black uppercase tracking-widest mb-6">Execution_Total</h3>
              <p className="text-6xl font-black italic mb-4">{isSUV ? "$399" : "$59"}</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-8 italic">// Includes all fuel and driver sync</p>
              <button className="w-full py-4 bg-neon-blue text-white font-black uppercase text-sm tracking-widest rounded-sm hover:scale-[1.02] active:scale-95 transition-all">
                CONFIRM_MISSION
              </button>
            </div>
          </div>
          
          <a href="/shuttles" className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-white transition-colors">← ABORT_AND_RETURN</a>
        </div>
      </div>
    </div>
  );
}
