import Link from "next/link";
import { venues } from "@/data/venues";

export default function VenuesIndex() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-black mb-8">Venues</h1>

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(venues).map(([slug, venue]) => (
          <li key={slug}>
            <Link
              href={`/venues/${slug}`}
              className="block border border-zinc-800 p-4 hover:border-neon-blue transition"
            >
              <div className="font-bold">{venue.name}</div>
              <div className="text-xs text-zinc-400">{venue.city}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
