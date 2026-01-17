"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getWeather } from "@/lib/weather";

type WeatherIntel = {
  temp: number;
  condition: number;
  wind: number;
};

export default function ShowTacticalPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [weather, setWeather] = useState<WeatherIntel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWeather()
      .then((data) => {
        if (data?.current) {
          setWeather({
            temp: data.current.temp,
            condition: data.current.condition,
            wind: data.current.wind,
          });
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="opacity-60">Loading show intel…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24 max-w-4xl mx-auto">
      <Link
        href="/shows"
        className="text-sm text-zinc-400 hover:text-white mb-8 inline-block"
      >
        ← Back to shows
      </Link>

      <h1 className="text-4xl font-black mb-6">
        Show: {slug}
      </h1>

      {weather ? (
        <div className="border border-zinc-800 p-4 bg-zinc-950/50">
          <p>🌡️ Temperature: {weather.temp}°F</p>
          <p>💨 Wind: {weather.wind} mph</p>
          <p>☁️ Condition code: {weather.condition}</p>
        </div>
      ) : (
        <p className="opacity-60">Weather unavailable.</p>
      )}
    </main>
  );
}
