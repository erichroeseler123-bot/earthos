// lib/seatgeek.ts

const SEATGEEK_BASE = "https://api.seatgeek.com/2/events";

type SeatGeekEvent = {
  id: number;
  title: string;
  datetime_local: string;
};

type SeatGeekResponse = {
  events?: SeatGeekEvent[];
};

export async function fetchMissionBallroomShows(): Promise<SeatGeekEvent[]> {
  const clientId = process.env.SEATGEEK_CLIENT_ID;

  if (!clientId) {
    console.warn("Missing SEATGEEK_CLIENT_ID");
    return [];
  }

  const url =
    `${SEATGEEK_BASE}` +
    `?venue.slug=mission-ballroom` +
    `&per_page=10` +
    `&sort=datetime_local.asc` +
    `&client_id=${clientId}`;

  const res = await fetch(url, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    console.warn("SeatGeek request failed");
    return [];
  }

  const data = (await res.json()) as SeatGeekResponse;

  return Array.isArray(data.events) ? data.events : [];
}
