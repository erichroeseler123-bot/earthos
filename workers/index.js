export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Serve AI Briefing API
    if (url.pathname === "/api/intel-briefing") {
      const API_KEY = env.GEMINI_API_KEY; 
      const payload = { contents: [{ parts: [{ text: "Write a 1-sentence SITREP for Red Rocks command. Tactical, all caps, under 15 words." }] }] };
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload)
      });
      const data = await response.json();
      return new Response(JSON.stringify({ briefing: data.candidates[0].content.parts[0].text }), { headers: { "Content-Type": "application/json" } });
    }

    // 2. Serve Maps on Homepage
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return fetch("https://partyatredrocks.pages.dev/index.html");
    }

    // 3. Proxy everything else (FAQ, Schedule) back to Pages to avoid 404
    return fetch(`https://partyatredrocks.pages.dev${url.pathname}`);
  }
};
