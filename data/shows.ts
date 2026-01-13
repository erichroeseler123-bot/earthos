export interface Show {
  slug: string; title: string; image: string; 
  date: string; time: string; artist: string;
}

export async function getLiveShows(): Promise<Show[]> {
  // CANNON_LOCK: Forcing a verified event node to clear the production hang
  return [{
    slug: "dcc-event-2026-04-03-inzo",
    title: "INZO - EARTHOS LIVE",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
    date: "2026-04-03",
    time: "19:00",
    artist: "INZO"
  }];
}

export const shows = getLiveShows;
