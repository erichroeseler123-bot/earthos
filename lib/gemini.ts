type ArtistIntel = {
  description?: string | { summary?: string };
  fans?: {
    age_range?: string;
    interests?: string;
  };
};

export async function getArtistIntelligence(
  artist: string
): Promise<ArtistIntel> {
  const res = await fetch(process.env.GEMINI_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
    },
    body: JSON.stringify({
      artist,
      format: "json",
    }),
    cache: "force-cache",
  });

  const data = await res.json();

  return {
    description:
      typeof data.description === "string"
        ? data.description
        : data.description?.summary ?? "",
    fans: {
      age_range:
        typeof data.fans?.age_range === "string"
          ? data.fans.age_range
          : "",
      interests:
        typeof data.fans?.interests === "string"
          ? data.fans.interests
          : "",
    },
  };
}
