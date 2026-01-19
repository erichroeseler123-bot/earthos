// data/venues.ts
// AUTHORITATIVE VENUE REGISTRY — DO NOT DYNAMICALLY GENERATE

export type Venue = {
  slug: string;
  name: string;
  city: string;
  state: string;
  capacity?: number;
};

export const venues: Record<string, Venue> = {
  "red-rocks-amphitheatre": {
    slug: "red-rocks-amphitheatre",
    name: "Red Rocks Amphitheatre",
    city: "Morrison",
    state: "CO",
    capacity: 9525,
  },

  "mission-ballroom": {
    slug: "mission-ballroom",
    name: "Mission Ballroom",
    city: "Denver",
    state: "CO",
    capacity: 3950,
  },

  "ogden-theatre": {
    slug: "ogden-theatre",
    name: "Ogden Theatre",
    city: "Denver",
    state: "CO",
    capacity: 1600,
  },

  "fillmore-auditorium-denver": {
    slug: "fillmore-auditorium-denver",
    name: "Fillmore Auditorium",
    city: "Denver",
    state: "CO",
    capacity: 3700,
  },

  "bluebird-theater-denver": {
    slug: "bluebird-theater-denver",
    name: "Bluebird Theater",
    city: "Denver",
    state: "CO",
    capacity: 550,
  },

  "gothic-theatre": {
    slug: "gothic-theatre",
    name: "Gothic Theatre",
    city: "Englewood",
    state: "CO",
    capacity: 1100,
  },

  "paramount-theatre-co": {
    slug: "paramount-theatre-co",
    name: "Paramount Theatre",
    city: "Denver",
    state: "CO",
    capacity: 1870,
  },

  "the-oriental-theater": {
    slug: "the-oriental-theater",
    name: "Oriental Theater",
    city: "Denver",
    state: "CO",
    capacity: 1000,
  },

  "fiddler-s-green-amphitheatre": {
    slug: "fiddler-s-green-amphitheatre",
    name: "Fiddler’s Green Amphitheatre",
    city: "Greenwood Village",
    state: "CO",
    capacity: 18000,
  },

  "ball-arena": {
    slug: "ball-arena",
    name: "Ball Arena",
    city: "Denver",
    state: "CO",
    capacity: 20900,
  },

  "empower-field-at-mile-high": {
    slug: "empower-field-at-mile-high",
    name: "Empower Field at Mile High",
    city: "Denver",
    state: "CO",
    capacity: 76125,
  },

  "denver-coliseum": {
    slug: "denver-coliseum",
    name: "Denver Coliseum",
    city: "Denver",
    state: "CO",
    capacity: 10000,
  },

  "cervantes-masterpiece": {
    slug: "cervantes-masterpiece",
    name: "Cervantes’ Masterpiece Ballroom",
    city: "Denver",
    state: "CO",
    capacity: 1000,
  },

  "temple-denver": {
    slug: "temple-denver",
    name: "Temple",
    city: "Denver",
    state: "CO",
    capacity: 1000,
  },

  "the-church-nightclub-denver": {
    slug: "the-church-nightclub-denver",
    name: "Church Nightclub",
    city: "Denver",
    state: "CO",
    capacity: 700,
  },

  "meow-wolf-denver": {
    slug: "meow-wolf-denver",
    name: "Meow Wolf",
    city: "Denver",
    state: "CO",
    capacity: 3000,
  },

  "hq-denver": {
    slug: "hq-denver",
    name: "HQ",
    city: "Denver",
    state: "CO",
    capacity: 1000,
  },

  "larimer-lounge": {
    slug: "larimer-lounge",
    name: "Larimer Lounge",
    city: "Denver",
    state: "CO",
    capacity: 300,
  },

  "globe-hall-denver": {
    slug: "globe-hall-denver",
    name: "Globe Hall",
    city: "Denver",
    state: "CO",
    capacity: 350,
  },

  "fox-theatre-boulder": {
    slug: "fox-theatre-boulder",
    name: "Fox Theatre",
    city: "Boulder",
    state: "CO",
    capacity: 625,
  },

  "boulder-theater": {
    slug: "boulder-theater",
    name: "Boulder Theater",
    city: "Boulder",
    state: "CO",
    capacity: 850,
  },

  "ford-amphitheater-colorado-springs": {
    slug: "ford-amphitheater-colorado-springs",
    name: "Ford Amphitheater",
    city: "Colorado Springs",
    state: "CO",
    capacity: 8000,
  },

  "dillon-amphitheater": {
    slug: "dillon-amphitheater",
    name: "Dillon Amphitheater",
    city: "Dillon",
    state: "CO",
    capacity: 3500,
  },

  "mishawaka-amphitheatre": {
    slug: "mishawaka-amphitheatre",
    name: "Mishawaka Amphitheatre",
    city: "Bellvue",
    state: "CO",
    capacity: 800,
  },
};
