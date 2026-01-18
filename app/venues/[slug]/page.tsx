import { venues } from "@/data/venues";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

/**
 * THIS IS THE MISSING PIECE
 * Without this, params may be {}
 */
export async function generateStaticParams() {
  return Object.keys(venues).map((slug) => ({
    slug,
  }));
}

export default async function VenuePage({
  params,
}: {
  params: { slug: string };
}) {
  const venue = venues[params.slug as keyof typeof venues];

  if (!venue) notFound();

  return (
    <main className="pt-24 px-6">
      <h1 className="text-4xl font-black">{venue.name}</h1>
      <p className="mt-2 text-zinc-400">{venue.city}</p>
      <p className="mt-4 text-xs">SeatGeek ID: {venue.seatgeekId}</p>
    </main>
  );
}
