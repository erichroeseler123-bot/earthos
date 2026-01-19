import { notFound } from 'next/navigation'
import { venues } from '@/data/venues'
import { fetchSeatGeekEventsByVenue } from '@/lib/seatgeek'

export const dynamic = 'force-dynamic'
export const dynamicParams = true

type Props = {
  params: { slug: string }
}

/**
 * 🔑 THIS IS WHAT MAKES /venues/:slug WORK
 */
export function generateStaticParams() {
  return Object.keys(venues).map((slug) => ({ slug }))
}

export default async function VenuePage({ params }: Props) {
  const venue = venues[params.slug]

  if (!venue) notFound()

  const events = venue.seatgeekVenueId
    ? await fetchSeatGeekEventsByVenue(venue.seatgeekVenueId)
    : []

  return (
    <main className="min-h-screen bg-black text-white px-8 py-12">
      <header className="mb-12">
        <h1 className="text-5xl font-black uppercase">{venue.name}</h1>
        <p className="text-zinc-400 mt-2">
          {venue.city}, {venue.state}
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-black mb-6">Upcoming Events</h2>

        {events.length === 0 && (
          <p className="text-zinc-500">No upcoming events found.</p>
        )}

        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event.id}
              className="p-6 rounded-xl bg-zinc-900 border border-white/5"
            >
              <div className="font-black text-xl">{event.title}</div>
              <div className="text-zinc-400 text-sm mt-1">
                {new Date(event.datetime_local).toLocaleString()}
              </div>

              <a
                href="/book-all-venues"
                className="inline-block mt-4 text-blue-500 font-black uppercase"
              >
                Book Shuttle →
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
