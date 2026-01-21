export default function BookingTerminal() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 font-mono">
      <div className="max-w-3xl mx-auto border border-zinc-800 p-12 bg-zinc-900/10 rounded-lg shadow-[0px_0px_50px_rgba(30,58,138,0.1)]">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-8 text-blue-500">// DEPLOY_FLEET</h1>
        <div className="bg-blue-600/20 border border-blue-500/30 p-6 mb-8">
          <div className="text-[10px] text-blue-400 uppercase font-bold tracking-widest mb-2">MISSION_PRICING</div>
          <div className="text-4xl font-black tracking-tighter">$50.00 <span className="text-sm font-normal text-zinc-500 italic">RT / PER PERSON</span></div>
          <div className="text-[10px] text-zinc-500 mt-2 uppercase tracking-tighter">* $250.00 MINIMUM ACTIVATION FEE APPLIES</div>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="PICKUP_ADDRESS_NODE" className="w-full bg-black border border-zinc-800 p-4 text-xs focus:border-blue-500 outline-none uppercase tracking-widest" />
          <button className="w-full bg-blue-600 hover:bg-blue-500 py-6 font-black uppercase tracking-[0.4em] text-xs transition-all border-b-4 border-blue-800">Execute_Reservation</button>
        </form>
      </div>
    </main>
  );
}
