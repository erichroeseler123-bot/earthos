// AUTHORITATIVE VENUE REGISTRY
// DO NOT AUTO-GENERATE
// ALL DYNAMIC PAGES DEPEND ON THIS FILE

export type Venue = {
  slug: string
  name: string
  city: string
  state: string
  capacity?: number

  // REQUIRED FOR EVENT CALENDARS
  seatgeekVenueId?: number
}

export const venues: Record<string, Venue> = {
  "red-rocks-amphitheatre": {
    slug: "red-rocks-amphitheatre",
    name: "Red Rocks Amphitheatre",
    city: "Morrison",
    state: "CO",
    capacity: 9525,
    seatgeekVenueId: 196,
  },

  "mission-ballroom": {
    slug: "mission-ballroom",
    name: "Mission Ballroom",
    city: "Denver",
    state: "CO",
    capacity: 3950,
    seatgeekVenueId: 13899,
  },

  "ogden-theatre": {
    slug: "ogden-theatre",
    name: "Ogden Theatre",
    city: "Denver",
    state: "CO",
    capacity: 1600,
    seatgeekVenueId: 317,
  },

  "fillmore-auditorium-denver": {
    slug: "fillmore-auditorium-denver",
    name: "Fillmore Auditorium",
    city: "Denver",
    state: "CO",
    capacity: 3700,
    seatgeekVenueId: 302,
  },

  "bluebird-theater": {
    slug: "bluebird-theater",
    name: "Bluebird Theater",
    city: "Denver",
    state: "CO",
    capacity: 550,
    seatgeekVenueId: 303,
  },

  "gothic-theatre": {
    slug: "gothic-theatre",
    name: "Gothic Theatre",
    city: "Englewood",
    state: "CO",
    capacity: 1100,
    seatgeekVenueId: 306,
  },
}
