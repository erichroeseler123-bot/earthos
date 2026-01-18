import { venues } from "@/data/venues";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export default function VenuePage(props: any) {
  const slug = props?.params?.slug;

  const venue = slug ? (venues as any)[slug] : null;

  if (!slug || !venue) {
    return (
      <main style={{ padding: 24, fontFamily: "monospace" }}>
        <h1>VENUE NOT FOUND</h1>
        <pre>slug: {String(slug)}</pre>
        <pre>known_slugs: {Object.keys(venues).join(", ")}</pre>
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>{venue.name}</h1>
      <p>{venue.city}</p>
      <p>SeatGeek Venue ID: {venue.seatgeekId}</p>
    </main>
  );
}
