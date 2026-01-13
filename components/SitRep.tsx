export default async function SitRep() {
  // Fetches live Morrison/Red Rocks weather data
  const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=39.6654&longitude=-105.2057&current_weather=true&temperature_unit=fahrenheit", { next: { revalidate: 600 } });
  const data = await res.json();
  const { temperature, windspeed } = data.current_weather;

  return (
    <div className="border border-zinc-800 p-4 bg-zinc-950/50 backdrop-blur-sm">
      <p className="text-[10px] text-blue-500 font-mono mb-2 uppercase tracking-widest">// MORRISON_SITREP</p>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-black text-white">{Math.round(temperature)}°F</span>
      </div>
      <p className="text-[10px] text-zinc-500 font-mono mt-1 uppercase">WIND: {windspeed} MPH</p>
    </div>
  );
}
