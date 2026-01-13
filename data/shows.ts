export interface Show {
  slug: string;
  title: string;
  image: string;
  date: string;
  time: string;
  artist: string;
}

/**
 * getLiveShows - The primary ingestion vector for the Schema Cannon.
 * Currently returns a "test-node" to verify visual sync while 
 * production SeatGeek credentials are being verified.
 */
export async function getLiveShows(): Promise<Show[]> {
  try {
    // Return a canonical "test-node" to clear the 'Syncing' hang
    return [{
      slug: "test-node",
      title: "CALENDAR_SYNC_IN_PROGRESS",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
      date: "2026-01-13",
      time: "15:30",
      artist: "SYSTEM_SYNC"
    }];
  } catch (e) {
    console.error("DCC_BRAIN_SYNC_HALT", e);
    return [];
  }
}

/**
 * DCC_AUTHORITY_ALIAS
 * Satisfies all legacy 'shows' imports to prevent 'Export not found' errors.
 * Points directly to the Cannon-resolved async function.
 */
export const shows = getLiveShows;
