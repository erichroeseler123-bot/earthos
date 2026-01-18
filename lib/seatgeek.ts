// lib/seatgeek.ts

export type SeatGeekEvent = {
  id: number;
  title: string;
  datetime_local: string;
  url: string;
  performers?: {
    name: string;
    image?: string;
  }[];
  venue?: {
    name: string;
    city?: string;
    state?: string;
  };
};

type SeatGeekResponse = {
  events?: SeatGeekEvent[];
};

const BASE_URL = "https://api.seatgeek.com/2/events";

/**
 * Canonical SeatGeek fetcher by venue ID
 * Accepts numeric IDs (preferred) or strings
 */
export async function fetchSeatGeekEventsByVenue(
  venueId: number | string
): Promise<SeatGeekEvent[]> {
  const clientId = process.env.SEATGEEK_CLIENT_ID;

  if (!clientId) {
    console.warn("SEATGEEK_CLIENT_ID missing");
    return [];
  }

  const id = String(venueId);

  const url = `${BASE_URL}?venue.id=${id}&per_page=25&sort=datetime_local.asc&client_id=${clientId}`;

  const res = await fetch(url, {
    // SeatGeek is cache-safe for short durations
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    console.warn("SeatGeek fetch failed:", res.status);
    return [];
  }

  const data = (await res.json()) as SeatGeekResponse;

  return data.events ?? [];
}
