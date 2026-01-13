export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Only respond to /events
    if (url.pathname !== "/events") {
      return new Response("Not found", { status: 404 });
    }

    if (!env.SEATGEEK_CLIENT_ID) {
      return json(
        { error: "Missing SEATGEEK_CLIENT_ID" },
        500
      );
    }

    const SEATGEEK_URL =
      "https://api.seatgeek.com/2/events" +
      "?venue.slug=red-rocks-amphitheatre" +
      "&per_page=50" +
      "&sort=datetime_local.asc" +
      `&client_id=${env.SEATGEEK_CLIENT_ID}`;

    let data;
    try {
      const res = await fetch(SEATGEEK_URL);
      data = await res.json();
    } catch (err) {
      return json(
        { error: "SeatGeek fetch failed", detail: err.message },
        500
      );
    }

    const events = (data.events || []).map(e => ({
      id: `sg_${e.id}`,
      title: e.title,
      date: e.datetime_local,
      venue: e.venue?.name ?? "Red Rocks Amphitheatre",
      tickets: {
        provider: "seatgeek",
        url: e.url
      },
      performers: (e.performers || []).map(p => ({
        name: p.name,
        image: p.image
      }))
    }));

    return json(events);
  }
};

/* ---------- helpers ---------- */

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
