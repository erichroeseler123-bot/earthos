/**
 * PARR v1.2 Geocoding Engine
 * Resolves text queries into [lng, lat] coordinates via Mapbox API.
 */

export async function geocode(query: string) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  if (!token) throw new Error("Missing Mapbox Token");

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    query
  )}.json?access_token=${token}&limit=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.features && data.features.length > 0) {
      return data.features[0].center as [number, number];
    }
    return null;
  } catch (error) {
    console.error("Geocoding failure:", error);
    return null;
  }
}
