// app/venues/[slug]/page.tsx
import { notFound } from "next/navigation";
import { venues } from "@/data/venues";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function VenuePage({ params }: Props) {
  const { slug } = await params; // ✅ THIS IS THE FIX

  const venue = venues[slug];

  if (!venue) {
    notFound();
  }

  return (
    <main className="px-6 py-24 max-w-5xl mx-auto text-white">
      <h1 className="text-5xl font-black mb-4">
        {venue.name}
      </h1>

      <p className="text-zinc-400 text-lg mb-12">
        {venue.city}, {venue.state}
      </p>

      <div className="border border-zinc-800 p-6 rounded-lg text-zinc-300">
        <p className="uppercase tracking-widest text-xs text-zinc-500 mb-2">
          Venue Intelligence
        </p>

        <ul className="space-y-2">
          <li><strong>City:</strong> {venue.city}</li>
          <li><strong>State:</strong> {venue.state}</li>
          {venue.capacity && (
            <li><strong>Capacity:</strong> {venue.capacity.toLocaleString()}</li>
          )}
        </ul>
      </div>
    </main>
  );
}
