export async function geminiEnrichArtist(artistSlug: string) {
  return {
    name: artistSlug.replace(/-/g, " "),
    bio: "Artist information coming soon.",
    genres: [],
    vibe_profile: "party",
    typical_crowd: "casual",
    confidence: "low"
  };
}
