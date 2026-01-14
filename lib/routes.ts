export const SHUTTLE_ROUTES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Denver Shuttle (Sheraton)", color: "#3b82f6" },
      geometry: {
        type: "LineString",
        coordinates: [
          [-104.9893, 39.7431], // Sheraton Downtown
          [-105.0250, 39.7400], 
          [-105.1300, 39.7100], 
          [-105.2054, 39.6654]  // Red Rocks
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "Golden Shuttle (Trailhead Tap)", color: "#00f2ff" },
      geometry: {
        type: "LineString",
        coordinates: [
          [-105.2215, 39.7552], // Trailhead Taphouse (1177 12th St)
          [-105.2150, 39.7200], 
          [-105.2054, 39.6654] 
        ]
      }
    }
  ]
};
