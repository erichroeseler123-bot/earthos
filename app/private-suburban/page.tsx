export default function PrivateVIPPage() {
  return (
    <div className="p-8 space-y-12 bg-black min-h-screen text-white font-mono text-xs">
      <header className="border-b border-slate-800 pb-8">
        <p className="text-emerald-500 text-[10px] uppercase tracking-[0.5em] mb-2 font-bold italic">Unit: Private_Suburban // VIP_Node</p>
        <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">VIP TAILGATE SUV</h2>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-black uppercase text-emerald-500 tracking-widest">// THE_TAILGATE_PACKAGE</h3>
          <div className="space-y-4 uppercase text-slate-300">
            <div className="p-4 bg-emerald-900/10 border border-emerald-500/30 rounded-2xl">
              <span className="text-white font-bold block mb-1">HARDWARE INCLUDED:</span>
              <p>Luxury Suburban + 100QT Cooler + 20lb Ice + 6 Heavy-Duty Tailgate Chairs.</p>
            </div>
            <div className="p-4 bg-slate-900/30 border border-slate-800 rounded-2xl">
              <span className="text-white font-bold block mb-1">DOOR-TO-DOOR:</span>
              <p>Pickup at your residence or hotel within the Denver/Golden metro areas.</p>
            </div>
            <div className="p-4 bg-slate-900/30 border border-slate-800 rounded-2xl">
              <span className="text-white font-bold block mb-1">EGRESS ADVANTAGE:</span>
              <p>Your driver handles parking logistics and waits in the designated private vehicle lot.</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-600/10 border border-emerald-500 p-8 rounded-[2.5rem] space-y-6 self-start">
          <h3 className="text-xl font-black uppercase tracking-widest text-white">// RESERVE_PRIVATE_NODE</h3>
          <div className="p-6 bg-black border border-emerald-500/30 rounded-2xl">
            <span className="block text-emerald-500 mb-1 uppercase font-bold">Group_Rate</span>
            <span className="text-4xl font-black text-white">$499.00 TOTAL</span>
            <p className="text-[10px] text-slate-500 mt-2 uppercase">Covers up to 6 Passengers RT.</p>
          </div>
          <button className="w-full bg-emerald-600 py-4 rounded-xl font-black uppercase text-sm hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/40">
            Secure VIP Suburban
          </button>
        </div>
      </section>
    </div>
  );
}
