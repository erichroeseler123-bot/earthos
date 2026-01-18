import { venues } from "@/data/venues";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export default function VenuePage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params?.slug;

  if (!slug) {
    return (
      <main style={{ padding: 24, fontFamily: "monospace" }}>
        <h1>PARAMS NOT INJECTED</h1>
        <pre>params: {JSON.stringify(params)}</pre>
      </main>
    );
  }

  const venue = (venues as Record<string, any>)[slug];

  if (!venue) {
    return (
      <main style={{ padding: 24, fontFamily: "monospace" }}>
        <h1>VENUE NOT FOUND</h1>
        <pre>slug: {slug}</pre>
        <pre>known_slugs: {Object.keys(venues).join(", ")}</pre>
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>{venue.name}</h1>
      <p>{venue.city}</p>
      <p>SeatGeek ID: {venue.seatgeekId}</p>
    </main>
  );
}
