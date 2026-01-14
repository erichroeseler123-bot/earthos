/**
 * PARR v1.1.1 Preset Registry
 * Declarative tactical views for primary operations nodes.
 */

export type MapPreset = {
  label: string;
  center: [number, number];
  zoom: number;
  pitch: number;
  bearing: number;
};

export const MAP_PRESETS: Record<string, MapPreset> = {
  RED_ROCKS: {
    label: "RED_ROCKS_AMPHITHEATRE",
    center: [-105.2054, 39.6654],
    zoom: 15.5,
    pitch: 65,
    bearing: -20,
  },
  UNION_STATION: {
    label: "UNION_STATION_DENVER",
    center: [-104.9997, 39.7527],
    zoom: 14.5,
    pitch: 45,
    bearing: 0,
  },
  GOLDEN: {
    label: "GOLDEN_PICKUP_ZONE",
    center: [-105.2211, 39.7555],
    zoom: 14,
    pitch: 40,
    bearing: 10,
  },
};
