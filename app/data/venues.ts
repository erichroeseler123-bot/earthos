// app/data/venues.ts

export type Venue = {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  capacity?: string;
  seatGeekId?: number;
};

export const venues: Record<string, Venue> = {
  "mission-ballroom": {
    slug: "mission-ballroom",
    name: "Mission Ballroom",
    address: "4242 Wynkoop St",
    city: "Denver",
    state: "CO",
    capacity: "~3,950",
    seatGeekId: 50449,
  },

  "ogden-theatre": {
    slug: "ogden-theatre",
    name: "Ogden Theatre",
    address: "935 E Colfax Ave",
    city: "Denver",
    state: "CO",
    capacity: "~1,600",
    seatGeekId: 267,
  },

  "ford-amphitheater": {
    slug: "ford-amphitheater",
    name: "Ford Amphitheater",
    address: "95 Spectrum Loop",
    city: "Colorado Springs",
    state: "CO",
    capacity: "~8,000",
    seatGeekId: 107486,
  },

  "dillon-amphitheater": {
    slug: "dillon-amphitheater",
    name: "Dillon Amphitheater",
    address: "135 W Lodgepole St",
    city: "Dillon",
    state: "CO",
    capacity: "~3,500",
    seatGeekId: 22257,
  },

  "mishawaka": {
    slug: "mishawaka",
    name: "Mishawaka Amphitheatre",
    address: "13714 Poudre Canyon Rd",
    city: "Bellvue",
    state: "CO",
    capacity: "~1,300",
    seatGeekId: 2297,
  },
};
