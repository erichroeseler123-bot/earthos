export type SeatGeekPerformer = {
  id: number
  name: string
  image: string | null
}

export type SeatGeekEvent = {
  id: number
  title: string
  datetime_local: string
  url: string
  performers: SeatGeekPerformer[]
}

const NINETY_DAYS_MS = 1000 * 60 * 60 * 24 * 90

export async function getVenueEvents(
  venueId: number
): Promise<SeatGeekEvent[]> {
  const clientId = process.env.SEATGEEK_CLIENT_ID
  if (!clientId) return []

  const res = await fetch(
    `https://api.seatgeek.com/2/events?venue.id=${venueId}&per_page=50&client_id=${clientId}`,
    { cache: 'no-store' }
  )

  if (!res.ok) return []

  const data = await res.json()
  const events: SeatGeekEvent[] = data?.events ?? []

  const now = Date.now()
  const cutoff = now + NINETY_DAYS_MS

  return events.filter(e => {
    const t = new Date(e.datetime_local).getTime()
    return t >= now && t <= cutoff
  })
}
