export async function onRequest(context) {
  const API_KEY = context.env.GEMINI_API_KEY; 
  const payload = { contents: [{ parts: [{ text: "Write a 1-sentence SITREP for Red Rocks command. Tactical, all caps, under 15 words." }] }] };
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload)
    });
    const data = await response.json();
    return new Response(JSON.stringify({ briefing: data.candidates[0].content.parts[0].text }), { headers: { "Content-Type": "application/json" } });
  } catch (e) { return new Response(JSON.stringify({ briefing: "SITREP_OFFLINE" })); }
}
