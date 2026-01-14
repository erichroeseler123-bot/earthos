export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. AI SITREP API
    if (url.pathname === "/api/intel-briefing") {
      const API_KEY = env.GEMINI_API_KEY; 
      const payload = { contents: [{ parts: [{ text: "Write a 1-sentence tactical SITREP for Red Rocks command. ALL CAPS, under 15 words." }] }] };
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload)
      });
      const data = await response.json();
      return new Response(JSON.stringify({ briefing: data.candidates[0].content.parts[0].text }), { headers: { "Content-Type": "application/json" } });
    }

    // 2. Homepage (Force reload of the maps)
    if (url.pathname === "/" || url.pathname === "/index.html") {
      const home = await fetch("https://partyatredrocks.pages.dev/index.html");
      return new Response(home.body, { headers: { "Content-Type": "text/html" } });
    }

    // 3. Proxy everything else (FAQ, Schedule) to avoid 404s
    return fetch(`https://partyatredrocks.pages.dev${url.pathname}`);
  }
};
