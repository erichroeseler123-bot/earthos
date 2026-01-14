// lib/routes.ts
export const SHUTTLE_ROUTES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Denver Shuttle", color: "#3b82f6" },
      geometry: {
        type: "LineString",
        coordinates: [
          [-104.9997, 39.7527], // Union Station
          [-105.0250, 39.7400], 
          [-105.1300, 39.7100], 
          [-105.2054, 39.6654]  // Red Rocks
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "Golden Shuttle", color: "#00f2ff" },
      geometry: {
        type: "LineString",
        coordinates: [
          [-105.2211, 39.7555], // Golden Pickup
          [-105.2150, 39.7200], 
          [-105.2054, 39.6654]  // Red Rocks
        ]
      }
    }
  ]
};
