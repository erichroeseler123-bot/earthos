// components/EventTicker.tsx
export default async function EventTicker() {
  const CLIENT_ID = "NTUyMjcyMDV8MTc2NzU1MDc0Ni41MDEyNjgx";
  const res = await fetch(`https://api.seatgeek.com/2/events?client_id=${CLIENT_ID}&venue.id=196&per_page=10`);
  const data = await res.json();
  
  const tickerText = data.events?.map((e: any) => `${e.title.toUpperCase()} — ${new Date(e.datetime_local).toLocaleDateString()}`).join(" // ");

  return (
    <div className="w-full bg-red-600 text-white overflow-hidden py-2 border-y border-black">
      <div className="whitespace-nowrap animate-marquee font-mono text-sm font-bold">
        {tickerText} // {tickerText}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
