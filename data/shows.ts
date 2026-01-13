export interface Show {
  slug: string; title: string; image: string; date: string; time: string; artist: string;
}

export async function getLiveShows(): Promise<Show[]> {
  try {
    const res = await fetch(`https://api.seatgeek.com/2/events?venue.id=196&client_id=${process.env.SEATGEEK_CLIENT_ID}`);
    const data = await res.json();
    if (!data?.events) return [];

    return data.events
      .map((e: any, index: number) => ({
        // Index ensures uniqueness for Turbopack stability
        slug: e.slug || `node-intel-${index}`, 
        title: e.short_title || 'LIVE_INTEL_NODE',
        image: e.performers?.[0]?.image || 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3',
        date: e.datetime_local?.split('T')[0] || '2026-01-01',
        time: e.datetime_local?.split('T')[1]?.substring(0, 5) || '00:00',
        artist: e.performers?.[0]?.name || 'UNKNOWN_ARTIST'
      }))
      /* Safety: Only filter if properties are defined to prevent TypeErrors */
      .filter((show: Show) => {
        const title = show.title?.toLowerCase() || "";
        const slug = show.slug?.toLowerCase() || "";
        return !title.includes('icelantic') && !slug.includes('icelantic');
      });
  } catch (e) {
    console.error("DCC_BRAIN_SYNC_HALT");
    return []; 
  }
}

export const shows: any[] = [];
// Add this temporarily at the bottom to force the UI to load
export const shows = async () => [
  { slug: "test-node", title: "CALENDAR_SYNC_IN_PROGRESS", date: "2026-01-13", artist: "SYSTEM_SYNC" }
];
