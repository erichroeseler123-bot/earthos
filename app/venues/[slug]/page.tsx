import { notFound } from 'next/navigation'
import { venues } from '@/data/venues'

export const dynamic = 'force-dynamic'

type Props = {
  params: { slug: string }
}

export default function VenuePage({ params }: Props) {
  const venue = venues[params.slug]

  if (!venue) notFound()

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-black">{venue.name}</h1>
      <p className="text-zinc-400">
        {venue.city}, {venue.state}
      </p>
    </main>
  )
}

