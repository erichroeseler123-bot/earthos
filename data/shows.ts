export interface Show {
  id: string;
  artist: string;
  date: string;       // YYYY-MM-DD
  time?: string;
  title?: string;
  image?: string;
  venueSlug: string;  // 🔑 REQUIRED
}
