export type Venue = {
  slug: string;
  name: string;
  city: string;
  state: string;
};

export const venues: Venue[] = [
  {
    slug: "red-rocks",
    name: "Red Rocks Amphitheatre",
    city: "Morrison",
    state: "CO",
  },
  {
    slug: "ogden-theatre",
    name: "Ogden Theatre",
    city: "Denver",
    state: "CO",
  },
  {
    slug: "mission-ballroom",
    name: "Mission Ballroom",
    city: "Denver",
    state: "CO",
  },
];
