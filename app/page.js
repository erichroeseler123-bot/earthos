"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [geoAllowed, setGeoAllowed] = useState(null);
  const [userZip, setUserZip] = useState(null);

  // Attempt to request location (but we don't store anything)
  function requestLocation() {
    if (!navigator.geolocation) {
      setGeoAllowed(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => setGeoAllowed(true),
      () => setGeoAllowed(false)
    );
  }

  return (
    <div style={{
      background: "#000",
      minHeight: "100vh",
      padding: "40px",
      color: "#0ff",
      fontFamily: "IBM Plex Mono, monospace"
    }}>

      {/* ORB */}
      <div style={{
        width: 260,
        height: 260,
        margin: "0 auto",
        borderRadius: "50%",
        background: "radial-gradient(circle, #00eaff33, #003b55aa, #00131f)",
        boxShadow: "0 0 40px #00eaff99, inset 0 0 30px #006688aa",
        animation: "pulse 4s infinite ease-in-out"
      }}></div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>

      {/* TITLE */}
      <h1 style={{
        textAlign: "center",
        marginTop: "30px",
        fontSize: "48px",
        color: "#b2ffff"
      }}>
        EarthOS
      </h1>

      {/* SEARCH */}
      <div style={{ maxWidth: 600, margin: "30px auto", textAlign: "center" }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter destination..."
          style={{
            width: "100%",
            padding: "14px 20px",
            fontSize: "20px",
            borderRadius: "12px",
            border: "1px solid #0ff6",
            background: "#001a22",
            color: "#b2ffff",
            outline: "none"
          }}
        />

        <button
          onClick={() => window.location.href = `/city/${search.toLowerCase()}`}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px 20px",
            fontSize: "20px",
            borderRadius: "12px",
            border: "1px solid #0ff",
            background: "#002f3c",
            color: "#0ff",
            cursor: "pointer"
          }}
        >
          Search
        </button>

        {/* USE MY LOCATION */}
        <button
          onClick={requestLocation}
          style={{
            marginTop: "16px",
            width: "100%",
            padding: "12px 20px",
            fontSize: "18px",
            borderRadius: "12px",
            border: "1px solid #666",
            background: "#001016",
            color: "#87e9ff",
            cursor: "pointer"
          }}
        >
          Use My Location
        </button>

        {geoAllowed === false && (
          <p style={{ marginTop: "10px", color: "#ff9f9f" }}>
            Location permission denied — EarthOS will still work without it.
          </p>
        )}
      </div>

      {/* FOOTER */}
      <div style={{
        marginTop: "80px",
        opacity: 0.6,
        color: "#69a2b0",
        fontSize: "14px",
        textAlign: "center",
        lineHeight: "1.5"
      }}>
        <a
          href="/zero-identity"
          style={{
            color: "#87e9ff",
            textDecoration: "none",
            borderBottom: "1px dashed #87e9ff",
            paddingBottom: "2px"
          }}
        >
          Zero Identity Domain™
        </a>

        <div style={{ marginTop: "10px" }}>
          We don’t collect your information. We don’t track you. We don’t sell your data.
        </div>
        <div>EarthOS stores no personal identity or behavior history.</div>
      </div>

    </div>
  );
}
