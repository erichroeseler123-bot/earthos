export async function onRequest(context) {
  const { env } = context;

  const eventsRes = await fetch(
    `https://rest.bandsintown.com/v3/venues/Red%20Rocks%20Amphitheatre/events?app_id=${env.BANDSINTOWN_APP_ID}`
  );

  if (!eventsRes.ok) {
    return new Response(JSON.stringify({ error: "Bandsintown failed" }), {
      status: 500,
    });
  }

  const events = await eventsRes.json();
  const artistMeta = {};

  for (const event of events) {
    for (const name of event.lineup || []) {
      if (artistMeta[name]) continue;

      try {
        const r = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(
            name
          )}&api_key=${env.LASTFM_API_KEY}&format=json`
        );
        const d = await r.json();

        artistMeta[name] = {
          image:
            d?.artist?.image?.find(i => i.size === "extralarge")?.["#text"] ||
            null,
          tags: d?.artist?.tags?.tag?.map(t => t.name) || [],
        };
      } catch {
        artistMeta[name] = null;
      }
    }
  }

  const out = events.map(e => ({
    id: e.id,
    date: e.datetime,
    venue: e.venue?.name,
    city: e.venue?.city,
    artists: e.lineup.map(n => ({ name: n, ...artistMeta[n] })),
    ticket_url: e.url,
  }));

  return new Response(JSON.stringify(out), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=600",
    },
  });
}
