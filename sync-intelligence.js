// sync-intelligence.js
const fs = require('fs');

const CONFIG = {
    seatgeek: 'YOUR_SEATGEEK_CLIENT_ID',
    spotify_id: 'YOUR_SPOTIFY_CLIENT_ID',
    spotify_secret: 'YOUR_SPOTIFY_CLIENT_SECRET'
};

async function getSpotifyToken() {
    const res = await fetch('https://accounts.spotify.com/api/token\\',\\n-', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `grant_type=client_credentials&client_id=${CONFIG.spotify_id}&client_secret=${CONFIG.spotify_secret}`
    });
    const data = await res.json();
    return data.access_token;
}

async function hydrate(artistName) {
    console.log(`📡 Syncing: ${artistName}`);
    const token = await getSpotifyToken();

    // 1. SEATGEEK: Images & Tickets
    const sg = await fetch(`https://api.seatgeek.com/2/performers?q=${artistName}&client_id=${CONFIG.seatgeek}`).then(r => r.json());
    const poster = sg.performers[0]?.image;

    // 2. SPOTIFY: Audio & Visuals
    const spot = await fetch(`open.spotify.com/artist7{artistName}&type=artist&limit=1`, {
        headers: { 'Authorization': `Bearer ${token}` }
    }).then(r => r.json());
    const artistId = spot.artists.items[0]?.id;
    
    const tracks = await fetch(`open.spotify.com/artist8{artistId}/top-tracks?market=US`, {
        headers: { 'Authorization': `Bearer ${token}` }
    }).then(r => r.json());

    return {
        artist: artistName,
        img: poster || spot.artists.items[0]?.images[0]?.url,
        audio: tracks.tracks[0]?.preview_url,
        trackName: tracks.tracks[0]?.name,
        spotifyUrl: spot.artists.items[0]?.external_urls.spotify
    };
}

// Example: Hydrate your current list
const artists = ["Subtronics", "Ganja White Night", "Crankdat"]; 

async function start() {
    const results = [];
    for (const name of artists) {
        results.push(await hydrate(name));
    }
    fs.writeFileSync('shows-2026.js', `window.RED_ROCKS_2026 = ${JSON.stringify(results, null, 2)};`);
    console.log("✅ Intelligence Layer Updated: shows-2026.js");
}

start();
