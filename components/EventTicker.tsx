export default async function EventTicker() {
  const CLIENT_ID = "NTUyMjcyMDV8MTc2NzU1MDc0Ni41MDEyNjgx";
  let tickerText = "OFFLINE_MODE // DATA_CACHED // MONITORING_LIVE_FEED...";

  try {
    const res = await fetch(`https://api.seatgeek.com/2/events?client_id=${CLIENT_ID}&venue.id=196&per_page=10`, { 
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000) 
    });
    
    if (res.ok) {
      const data = await res.json();
      tickerText = data.events?.map((e: any) => `${e.title.toUpperCase()} — ${new Date(e.datetime_local).toLocaleDateString()}`).join(" // ") + " //";
    }
  } catch (err) {
    // Fail silently so the page still loads
  }

  return (
    <div className="w-full bg-red-600 text-white overflow-hidden py-2 border-y border-black flex">
      <div className="whitespace-nowrap flex animate-[marquee_30s_linear_infinite] font-mono text-sm font-bold">
        <span className="px-4">{tickerText}</span>
        <span className="px-4">{tickerText}</span>
      </div>
    </div>
  );
}
