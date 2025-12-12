export default function CityPage({ params }) {
  const slug = params.slug;

  return (
    <div style={{ padding: 40, background: "#000", color: "#0ff" }}>
      <h1 style={{ fontSize: 40 }}>City: {slug}</h1>

      <p>This is the EarthOS entrypoint page for this city.</p>

      <h2>Deep Intelligence</h2>
      <ul style={{ lineHeight: "2em" }}>
        <li><a href={`/city/${slug}/weather`}>Weather</a></li>
        <li><a href={`/city/${slug}/cams`}>Live Cams</a></li>
        <li><a href={`/city/${slug}/news`}>Local News</a></li>
        <li><a href={`/city/${slug}/safety`}>Safety Dashboard</a></li>
        <li><a href={`/city/${slug}/air`}>Air Quality</a></li>
        <li><a href={`/city/${slug}/events`}>Events</a></li>
        <li><a href={`/city/${slug}/routes`}>Transit & Routes</a></li>
        <li><a href={`/city/${slug}/map`}>Interactive Map</a></li>
        <li><a href={`/city/${slug}/book`}>Book Travel</a></li>
        <li><a href={`/city/${slug}/ai`}>AI Assistant</a></li>
      </ul>
    </div>
  );
}
