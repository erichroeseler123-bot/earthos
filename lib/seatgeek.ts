export interface SeatGeekEvent {
  id: number;
  title: string;
  datetime_local: string;
  url: string;
  performers?: {
    name: string;
    image?: string;
  }[];
}

interface SeatGeekResponse {
  events: SeatGeekEvent[];
}

export async function fetchSeatGeekEventsByVenue(
  venueQuery: string,
  limit = 12
): Promise<SeatGeekEvent[]> {
  const clientId = process.env.SEATGEEK_CLIENT_ID;
  if (!clientId) return [];

  const url = `https://api.seatgeek.com/2/events?venue.name=${encodeURIComponent(
    venueQuery
  )}&per_page=${limit}&client_id=${clientId}`;

  const res = await fetch(url, {
    next: { revalidate: 900 }, // 15 min cache
  });

  if (!res.ok) return [];

  const data = (await res.json()) as SeatGeekResponse;
  return data.events ?? [];
}
