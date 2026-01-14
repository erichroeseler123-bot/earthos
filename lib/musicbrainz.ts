// lib/musicbrainz.ts

// ... (keep your existing fetchArtistIntel function) ...

export async function fetchArtistNews(artistName: string) {
  try {
    const query = encodeURIComponent(`${artistName} Red Rocks`);
    const res = await fetch(`https://news.google.com/rss/search?q=${query}&hl=en-US&gl=US&ceid=US:en`);
    const text = await res.text();
    
    // Tactical XML Parsing (Basic regex for RSS titles/links)
    const titles = [...text.matchAll(/<title>(.*?)<\/title>/g)].slice(1, 4).map(m => m[1]);
    const links = [...text.matchAll(/<link>(.*?)<\/link>/g)].slice(1, 4).map(m => m[1]);

    return titles.map((title, i) => ({
      title: title.split(' - ')[0], // Strip the source name for a cleaner UI
      source: title.split(' - ')[1] || "INTEL_SOURCE",
      url: links[i]
    }));
  } catch (err) {
    console.error("NEWS_RECON_FAILURE:", err);
    return [];
  }
}
