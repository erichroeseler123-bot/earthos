const fs = require('fs');
const path = require('path');

const KEYS = {
    seatgeek: process.env.SEATGEEK_CLIENT_ID,
    gemini: process.env.GEMINI_API_KEY
};

// 📍 PATHS: Cache stays in DCC repo, Output goes to current folder
const REPO_DIR = '/home/ewrewr12/destination-cc/';
const CACHE_FILE = path.resolve(REPO_DIR, 'ai-intelligence-cache.json');
const OUTPUT_FILE = path.resolve(process.cwd(), 'shows-2026.js');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function getOperationalIntel(artistName) {
    let cache = {};
    if (fs.existsSync(CACHE_FILE)) {
        try { cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')); } catch(e) {}
    }
    
    // Only return if it has the new "logistics" schema
    if (cache[artistName] && cache[artistName].logistics) return cache[artistName];

    console.log(`🧠 DCC ANALYST: Classifying logistics for ${artistName}...`);
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${KEYS.gemini}`;
    
    const payload = {
        contents: [{
            parts: [{ text: `Analyze "${artistName}" for a Red Rocks show. 
            Return strictly valid JSON with these operational fields:
            {
              "bio": "2 sentence artist summary",
              "fans": "Describe fan behavior and group size",
              "logistics": {
                "avgGroupSize": number, 
                "vehicleBias": "suburban" | "van" | "bus",
                "arrivalWave": "early" | "spread" | "compressed",
                "alcoholLikelihood": "low" | "high",
                "parkingAvoidance": "low" | "medium" | "high"
              },
              "trslNode": {
                "demandLevel": "low" | "medium" | "high",
                "weatherSensitivity": "rain" | "snow" | "none"
              }
            }` }]
        }]
    };

    try {
        await sleep(2000); // 🚦 Stay under Gemini free-tier rate limits
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        const data = await res.json();
        if (!res.ok) throw new Error(data.error?.message || "API Rejected Request");

        let text = data.candidates[0].content.parts[0].text;
        const intel = JSON.parse(text.replace(/```json|```/g, '').trim());
        
        cache[artistName] = intel;
        fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
        return intel;
    } catch (e) { 
        console.error(`❌ Analyst Error for ${artistName}: ${e.message}`);
        return null; // Don't cache failures
    }
}

async function runSync() {
    console.log("📡 DCC ENGINE: Scanning SeatGeek (Tier A) for 2026...");
    const seatgeekUrl = `https://api.seatgeek.com/2/events?venue.id=196&datetime_utc.gte=2026-01-01&per_page=100&client_id=${KEYS.seatgeek}`;

    try {
        const response = await fetch(seatgeekUrl);
        const data = await response.json();
        const events = data.events || [];
        console.log(`🔎 Found ${events.length} Operational Nodes.`);
        
        const db = [];
        for (const e of events) {
            const performer = e.performers[0];
            const intel = await getOperationalIntel(performer.name);
            
            if (intel) {
                console.log(`✅ Synced: ${performer.name}`);
                db.push({
                    slug: e.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                    artist: performer.name,
                    date: e.datetime_local,
                    img: performer.image,
                    operational: intel, // The new Logistics + TRSL data
                    venue: "Red Rocks Amphitheatre",
                    isGhostEvent: false // Default for SeatGeek
                });
            }
        }

        fs.writeFileSync(OUTPUT_FILE, `window.RED_ROCKS_2026 = ${JSON.stringify(db, null, 2)};`);
        console.log(`\n🏁 COMPLETE: ${db.length} Operational Nodes Saved to ${OUTPUT_FILE}`);
    } catch (err) { console.error("💥 CRITICAL ENGINE FAILURE:", err.message); }
}

runSync();
