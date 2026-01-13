export default {
  async fetch(request, env) {
    // This calls SeatGeek specifically for Red Rocks (Venue ID: 521)
    const SEATGEEK_URL = `https://api.seatgeek.com/2/events?venue.id=521&client_id=${env.SEATGEEK_CLIENT_ID}`;

    try {
      const response = await fetch(SEATGEEK_URL);
      const data = await response.json();
      
      // Return the live show list to your website
      return new Response(JSON.stringify(data.events), {
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*" 
        }
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: "Failed to fetch Red Rocks feed" }), { status: 500 });
    }
  }
}
