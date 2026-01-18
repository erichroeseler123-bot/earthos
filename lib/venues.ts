export type VenueKey =
  | "mission-ballroom"
  | "red-rocks";

export const VENUES: Record<VenueKey, {
  name: string;
  slug: VenueKey;
  address: string;
}> = {
  "mission-ballroom": {
    name: "Mission Ballroom",
    slug: "mission-ballroom",
    address: "4242 Wynkoop St, Denver, CO 80216",
  },
  "red-rocks": {
    name: "Red Rocks Amphitheatre",
    slug: "red-rocks",
    address: "18300 W Alameda Pkwy, Morrison, CO 80465",
  },
};
