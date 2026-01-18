export const dynamicParams = true;
import { notFound } from "next/navigation";
import { venues } from "@/data/venues";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function VenuePage({ params }: Props) {
  const { slug } = await params;

  const venue = venues[slug as keyof typeof venues];

  if (!venue) {
    notFound();
  }

  return (
    <main className="px-6 py-24 max-w-5xl mx-auto text-white">
      <h1 className="text-5xl font-black mb-4">
        {venue.name}
      </h1>

      <p className="text-zinc-400 text-lg mb-8">
        {venue.city}
      </p>

      <div className="bg-zinc-900 p-4 rounded text-sm">
        SeatGeek Venue ID: {venue.seatgeekId}
      </div>
    </main>
  );
}
