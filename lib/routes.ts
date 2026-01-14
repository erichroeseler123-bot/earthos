/**
 * PARR v1.3 Tactical Route Registry
 * Updated: Denver Pickup moved to Sheraton Downtown (Court St).
 */

export const SHUTTLE_ROUTES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Denver Shuttle (Sheraton)", color: "#3b82f6" },
      geometry: {
        type: "LineString",
        coordinates: [
          [-104.9893, 39.7431], // Sheraton Downtown (1550 Court Pl)
          [-105.0250, 39.7400], // I-25 Transition
          [-105.1300, 39.7100], // 6th Ave Tactical
          [-105.2054, 39.6654]  // Red Rocks Stage
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
          [-105.2150, 39.7200], // CO-93 South
          [-105.2054, 39.6654]  // Red Rocks Stage
        ]
      }
    }
  ]
};
