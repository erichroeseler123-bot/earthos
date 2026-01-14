export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-zinc-800 p-12 font-mono text-zinc-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-white font-black italic mb-4 uppercase italic">EarthOS DCC</h3>
          <p className="text-[10px] leading-relaxed uppercase tracking-widest">
            A Global Intelligence Layer managed by <br />
            <a href="https://destinationcommandcenter.com" className="text-neon-blue hover:underline">
              Destination Command Center
            </a>
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold text-zinc-400 mb-4 uppercase tracking-[0.2em]">// Navigation</h4>
          <ul className="text-[10px] space-y-2 uppercase font-bold">
            <li><a href="/" className="hover:text-neon-blue">Console_Home</a></li>
            <li><a href="/schedule" className="hover:text-neon-blue">Full_Schedule</a></li>
            <li><a href="/gallery" className="hover:text-neon-blue">Shuttle_Guide</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold text-zinc-400 mb-4 uppercase tracking-[0.2em]">// SitRep_Data</h4>
          <p className="text-[9px] italic mb-4 uppercase font-black">All transport nodes verified via EarthOS Schema.</p>
          <p className="text-[8px] opacity-50 uppercase">© 2026 Erich Roeseler Transportation</p>
        </div>
      </div>
    </footer>
  );
}
