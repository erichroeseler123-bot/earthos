export const runtime = "edge";

export async function GET(request, context) {
  const key = context.params.key.toLowerCase();

  // Dynamic builder — replace/expand as needed
  const map = {
    "ak:anchorage": {
      name: "Anchorage",
      state: "AK",
      lat: 61.2181,
      lon: -149.9003,
      population: 290000,
      description: "Primary Arctic Teleport Hub",
    },
    "ny:new+york": {
      name: "New York City",
      state: "NY",
      lat: 40.7128,
      lon: -74.0060,
      population: 8800000,
      description: "Quantum Commerce Teleport Node",
    }
  };

  const obj = map[key];
  if (!obj) {
    return new Response("Teleport not found", { status: 404 });
  }

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>${obj.name} — EarthOS Teleport</title>

    <meta name="description" content="${obj.description}">
    <meta property="og:title" content="${obj.name} — EarthOS Teleport">
    <meta property="og:description" content="${obj.description}">
    <meta property="og:type" content="website">

    <style>
      body {
        font-family: 'Inter', sans-serif;
        background: radial-gradient(circle at center, #0a0f1f, #000);
        color: #cfffff;
        margin: 0;
        padding: 0;
      }

      .hud-wrapper {
        position: relative;
        padding: 40px;
        text-align: center;
      }

      .orb {
        width: 240px;
        height: 240px;
        margin: 40px auto;
        border-radius: 50%;
        background: radial-gradient(circle, #00d4ff44, #003b55aa, #00131f);
        box-shadow: 0 0 50px #00eaffaa, inset 0 0 30px #006688aa;
        animation: pulse 6s infinite ease-in-out;
      }

      @keyframes pulse {
        0% { transform: scale(1); box-shadow: 0 0 40px #00eaffaa; }
        50% { transform: scale(1.06); box-shadow: 0 0 100px #00eaff; }
        100% { transform: scale(1); box-shadow: 0 0 40px #00eaffaa; }
      }

      .panel {
        backdrop-filter: blur(14px);
        background: rgba(0, 50, 70, 0.25);
        border: 1px solid rgba(0, 200, 255, 0.3);
        padding: 20px;
        margin: 20px auto;
        width: 80%;
        max-width: 700px;
        border-radius: 12px;
        box-shadow: 0 0 40px #003f55aa;
        text-align: left;
      }

      h1 {
        color: #8eefff;
        font-size: 36px;
        text-shadow: 0 0 10px #00ddff;
      }

      .label {
        color: #6ecae3;
        font-weight: bold;
        display: block;
        margin-top: 12px;
      }
    </style>
  </head>

  <body>
    <div class="hud-wrapper">
      <div class="orb"></div>

      <h1>${obj.name}, ${obj.state}</h1>

      <div class="panel">
        <span class="label">Description</span>
        ${obj.description}

        <span class="label">Coordinates</span>
        ${obj.lat}, ${obj.lon}

        <span class="label">Population</span>
        ${obj.population.toLocaleString()}
      </div>
    </div>
  </body>
  </html>`;

  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}
