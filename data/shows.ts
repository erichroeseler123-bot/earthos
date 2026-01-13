export interface Show {
  slug: string; title: string; image: string; 
  date: string; time: string; artist: string;
}

// CANNON_LOCK: Static authoritative data to prevent infinite build loops
export const shows: Show[] = [{
  slug: "dcc-event-2026-04-03-inzo",
  title: "INZO - EARTHOS LIVE",
  image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
  date: "2026-04-03",
  time: "19:00",
  artist: "INZO"
}];

export const getLiveShows = async () => shows;
