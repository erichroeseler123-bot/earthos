import Link from 'next/link';
import { venues } from '@/data/venues';

const EXCLUDED_VENUES = [
  'red-rocks-amphitheatre',
  'ford-amphitheater',
  'mishawaka-amphitheatre',
  'dillon-amphitheater',
];


export default function VenuesIndexPage() {
  const filteredVenues = Object.values(venues).filter(
    venue => !EXCLUDED.has(venue.slug)
  );

  return (
    <main className="min-h-screen bg-white px-6 py-32">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-black uppercase italic mb-6">
          All Concert Venues
        </h1>

        <p className="text-slate-600 max-w-2xl mb-16 text-lg">
          We provide private shuttle service to venues across Denver,
          Boulder, and the Front Range.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVenues.map(venue => (
            <Link
              key={venue.slug}
              href={`/venues/${venue.slug}`}
              className="block p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition"
            >
              <h2 className="font-black uppercase tracking-tight text-xl mb-2">
                {venue.name}
              </h2>
              <p className="text-slate-600 text-sm">
                {venue.city}, {venue.state}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
