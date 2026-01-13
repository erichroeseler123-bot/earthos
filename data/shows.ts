export interface Show {
  slug: string; title: string; image: string; 
  date: string; time: string; artist: string;
}

export async function getLiveShows(): Promise<Show[]> {
  // EMERGENCY_BRAKE: Static data to prevent build loops and system crashes
  return [{
    slug: "system-safety-node",
    title: "SYSTEM_RECOVERY_ACTIVE",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
    date: "2026-01-13",
    time: "16:00",
    artist: "DCC_RECOVERY"
  }];
}

export const shows = getLiveShows;
