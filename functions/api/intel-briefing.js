export async function onRequest(context) {
  // Pulls the encrypted key you verified in your dashboard
  const API_KEY = context.env.GEMINI_API_KEY; 
  
  const prompt = {
    contents: [{
      parts: [{
        text: "Write a 1-sentence professional intelligence briefing for a transportation 'Command Center' regarding Red Rocks Amphitheatre. Mention it's 28°F and clear. Keep it under 20 words and use all caps."
      }]
    }]
  };

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(prompt)
    });

    const data = await response.json();
    const briefing = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ briefing }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ briefing: "SITREP_OFFLINE: CHECK_API_KEY" }));
  }
}
