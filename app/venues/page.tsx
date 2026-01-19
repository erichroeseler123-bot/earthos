import Link from 'next/link';
import { venues } from '@/data/venues';

type Venue = {
  slug: string;
  name: string;
  city?: string;
  state?: string;
};

const EXCLUDED_VENUES = new Set<string>([
  'red-rocks-amphitheatre',
  'ford-amphitheater',
  'mishawaka-amphitheatre',
  'dillon-amphitheater',
]);

export default function VenuesIndexPage() {
  const filteredVenues = Object.values(venues).filter(
    (venue: Venue) => !EXCLUDED_VENUES.has(venue.slug)
  );

  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black uppercase italic tracking-tight mb-6">
          Supported Venues
        </h1>

        <p className="text-slate-600 max-w-2xl mb-12 text-lg">
          We provide private and shared shuttle service to major Colorado
          concert venues. Red Rocks, Mishawaka, Ford Amphitheater, and Dillon
          Amphitheater are handled separately.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredVenues.map((venue) => (
            <Link
              key={venue.slug}
              href={`/venues/${venue.slug}`}
              className="group block rounded-xl border border-slate-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-black uppercase italic tracking-tight group-hover:text-blue-600">
                {venue.name}
              </h2>

              {(venue.city || venue.state) && (
                <p className="mt-1 text-sm text-slate-500">
                  {venue.city}
                  {venue.city && venue.state ? ', ' : ''}
                  {venue.state}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
