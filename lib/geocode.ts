export const runtime = "nodejs";

type GeocodeFeature = {
  center: [number, number];
};

type GeocodeResponse = {
  features: GeocodeFeature[];
};

export async function geocode(
  query: string
): Promise<[number, number] | null> {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        query
      )}.json?access_token=${process.env.MAPBOX_TOKEN}`,
      { cache: "force-cache" }
    );

    if (!response.ok) return null;

    const data = (await response.json()) as GeocodeResponse;

    if (data.features && data.features.length > 0) {
      return data.features[0].center;
    }

    return null;
  } catch {
    return null;
  }
}
