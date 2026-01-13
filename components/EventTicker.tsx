export default async function EventTicker() {
  const CLIENT_ID = "NTUyMjcyMDV8MTc2NzU1MDc0Ni41MDEyNjgx";
  // Fetching live data for Venue 196 (Red Rocks)
  const res = await fetch(`https://api.seatgeek.com/2/events?client_id=${CLIENT_ID}&venue.id=196&per_page=10`, { next: { revalidate: 3600 } });
  const data = await res.json();
  
  const tickerText = data.events?.map((e: any) => 
    `${e.title.toUpperCase()} — ${new Date(e.datetime_local).toLocaleDateString()}`
  ).join(" // ") || "LOADING LIVE INTEL...";

  return (
    <div className="w-full bg-red-600 text-white overflow-hidden py-2 border-y border-black flex">
      <div className="whitespace-nowrap flex animate-[marquee_30s_linear_infinite] font-mono text-sm font-bold">
        <span className="px-4">{tickerText} //</span>
        <span className="px-4">{tickerText} //</span>
      </div>
    </div>
  );
}
