export async function onRequest(context) {
  // Venue 521 is Red Rocks
  const SEATGEEK_CLIENT_ID = context.env.SEATGEEK_CLIENT_ID;
  const url = `https://api.seatgeek.com/2/events?venue.id=521&client_id=${SEATGEEK_CLIENT_ID}&per_page=50`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    return new Response(JSON.stringify(data.events), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch shows" }), { status: 500 });
  }
}
