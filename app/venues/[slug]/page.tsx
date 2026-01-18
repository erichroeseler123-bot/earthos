import { venues } from "@/data/venues";

export const dynamic = "force-dynamic";

export default async function VenueDebug({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const keys = Object.keys(venues as any);
  const hit = (venues as any)[slug];

  return (
    <main style={{ padding: 24, fontFamily: "monospace" }}>
      <h1>VENUE DEBUG</h1>
      <pre>slug: {slug}</pre>
      <pre>keys_count: {keys.length}</pre>
      <pre>first_10_keys: {JSON.stringify(keys.slice(0,10), null, 2)}</pre>
      <pre>has_slug: {String(keys.includes(slug))}</pre>
      <pre>hit: {JSON.stringify(hit ?? null, null, 2)}</pre>
    </main>
  );
}
