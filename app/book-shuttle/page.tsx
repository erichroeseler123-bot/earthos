import Link from 'next/link';

export default function SharedShuttlePage() {
  return (
    <div className="p-8 space-y-12 bg-black min-h-screen text-white font-mono text-xs">
      <header className="border-b border-slate-800 pb-8">
        <p className="text-blue-500 text-[10px] uppercase tracking-[0.5em] mb-2 font-bold italic">Unit: Shared_Shuttle // Intel_Node</p>
        <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">THE $59 SHUTTLE</h2>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-black uppercase text-blue-500 tracking-widest">// SERVICE_INCLUSIONS</h3>
          <ul className="space-y-4 text-slate-300 uppercase">
            <li className="flex items-start gap-3"><span className="text-blue-500">▶</span> Round-trip transport from Downtown Denver or Golden.</li>
            <li className="flex items-start gap-3"><span className="text-blue-500">▶</span> Professional driver with specialized mountain navigation experience.</li>
            <li className="flex items-start gap-3"><span className="text-blue-500">▶</span> Direct drop-off at the top of the venue for easy entry.</li>
            <li className="flex items-start gap-3"><span className="text-blue-500">▶</span> Guaranteed seat for the return trip to your original hub.</li>
          </ul>
        </div>

        <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-[2.5rem] space-y-6">
          <h3 className="text-xl font-black uppercase tracking-widest text-emerald-500">// BOOKING_TERMINAL</h3>
          <p className="text-slate-400">Inventory tracked live via Rezdy Network Sync.</p>
          <div className="p-6 bg-black border border-slate-800 rounded-2xl">
            <span className="block text-slate-500 mb-1 uppercase">Price_Node</span>
            <span className="text-4xl font-black text-white">$59.00 RT</span>
          </div>
          <button className="w-full bg-blue-600 py-4 rounded-xl font-black uppercase text-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40">
            Initialize Reservation
          </button>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-black uppercase italic text-slate-500 tracking-widest">// RED_ROCKS_FAQ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-900/20 border border-slate-800 rounded-3xl">
            <p className="font-bold text-white mb-2 uppercase tracking-tighter">Where is pickup?</p>
            <p className="text-slate-400 leading-relaxed uppercase">Return pickup is strictly at Lower South Lot B. Follow venue signage to avoid delays.</p>
          </div>
          <div className="p-6 bg-slate-900/20 border border-slate-800 rounded-3xl">
            <p className="font-bold text-white mb-2 uppercase tracking-tighter">When do we leave?</p>
            <p className="text-slate-400 leading-relaxed uppercase">Shuttles depart hubs exactly 45 minutes prior to event door times. Be on site 15 minutes early.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
