export async function onRequest(context) {
  // Pulls the encrypted GEMINI_API_KEY from your Pages settings
  const API_KEY = context.env.GEMINI_API_KEY; 
  
  const payload = {
    contents: [{
      parts: [{ text: "Write a 1-sentence intelligence SITREP for Red Rocks Amphitheatre command center. Professional, tactical, all caps, under 15 words." }]
    }]
  };

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    const briefing = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ briefing }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ briefing: "SITREP_OFFLINE: CHECK_ENCRYPTED_KEYS" }));
  }
}
