export interface Venue {
  slug: string;
  name: string;
  city: string;
  state: string;
  seatgeekVenueId: number;
  price: number;
}

export const VENUES: Record<string, Venue> = {
  'mission-ballroom': { slug: 'mission-ballroom', name: 'Mission Ballroom', city: 'Denver', state: 'CO', seatgeekVenueId: 467142, price: 50 },
  'red-rocks-amphitheatre': { slug: 'red-rocks-amphitheatre', name: 'Red Rocks Amphitheatre', city: 'Morrison', state: 'CO', seatgeekVenueId: 80, price: 59 },
  'ogden-theatre': { slug: 'ogden-theatre', name: 'Ogden Theatre', city: 'Denver', state: 'CO', seatgeekVenueId: 849, price: 59 },
  'fillmore-auditorium-denver': { slug: 'fillmore-auditorium-denver', name: 'Fillmore Auditorium', city: 'Denver', state: 'CO', seatgeekVenueId: 451, price: 59 },
  'bluebird-theater-denver': { slug: 'bluebird-theater-denver', name: 'Bluebird Theater', city: 'Denver', state: 'CO', seatgeekVenueId: 555, price: 59 },
  'gothic-theatre': { slug: 'gothic-theatre', name: 'Gothic Theatre', city: 'Englewood', state: 'CO', seatgeekVenueId: 828, price: 59 },
  'paramount-theatre-co': { slug: 'paramount-theatre-co', name: 'Paramount Theatre', city: 'Denver', state: 'CO', seatgeekVenueId: 453, price: 59 },
  'denver-coliseum': { slug: 'denver-coliseum', name: 'Denver Coliseum', city: 'Denver', state: 'CO', seatgeekVenueId: 3081, price: 59 },
  'cervantes-masterpiece': { slug: 'cervantes-masterpiece', name: "Cervantes' Masterpiece", city: 'Denver', state: 'CO', seatgeekVenueId: 1537, price: 59 },
  'oriental-theater': { slug: 'oriental-theater', name: 'Oriental Theater', city: 'Denver', state: 'CO', seatgeekVenueId: 7435, price: 59 },
  'meow-wolf-denver': { slug: 'meow-wolf-denver', name: 'Meow Wolf Denver', city: 'Denver', state: 'CO', seatgeekVenueId: 229104, price: 59 },
  'boulder-theater': { slug: 'boulder-theater', name: 'Boulder Theater', city: 'Boulder', state: 'CO', seatgeekVenueId: 1031, price: 59 }
};
