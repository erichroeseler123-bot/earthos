const fs = require('fs');
const path = require('path');

// 📂 PATH: Point to the output file in your DCC repo
const SHOWS_FILE = path.resolve(process.cwd(), 'shows-2026.js');

// 👻 GHOST LOGIC: Operational events that don't have tickets
const ghostEvents = [
  {
    slug: "yoga-on-the-rocks-june-6",
    artist: "Yoga on the Rocks",
    date: "2026-06-06T07:00:00",
    img: "https://www.redrocksonline.com/wp-content/uploads/2021/12/Yoga-scaled.jpg",
    operational: {
      logistics: { 
        avgGroupSize: 1.5, 
        vehicleBias: "suburban", 
        arrivalWave: "early", 
        alcoholLikelihood: "low",
        parkingAvoidance: "medium"
      },
      trslNode: { demandLevel: "medium", weatherSensitivity: "rain" }
    },
    venue: "Red Rocks Amphitheatre",
    isGhostEvent: true
  }
];

try {
    // 1. Read the file and strip the 'window.RED_ROCKS_2026 = ' wrapper
    let rawContent = fs.readFileSync(SHOWS_FILE, 'utf8');
    let jsonString = rawContent
        .replace('window.RED_ROCKS_2026 = ', '')
        .replace(/;$/, '') // Remove trailing semicolon
        .trim();

    // 2. Parse the clean JSON
    const existingShows = JSON.parse(jsonString);

    // 3. Filter out any existing ghosts to prevent duplicates
    const coreShows = existingShows.filter(s => !s.isGhostEvent);
    const combined = [...coreShows, ...ghostEvents];

    // 4. Save the wrapped data back to the file
    fs.writeFileSync(SHOWS_FILE, `window.RED_ROCKS_2026 = ${JSON.stringify(combined, null, 2)};`);
    
    console.log(`\n👻 GHOST NODES INJECTED.`);
    console.log(`🏁 TOTAL NODES: ${combined.length}`);

} catch (err) {
    console.error("💥 GHOST ENGINE ERROR:", err.message);
}
