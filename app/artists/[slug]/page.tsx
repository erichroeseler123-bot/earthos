"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { fetchMusicBrainzArtist } from "@/lib/musicbrainz";

type ArtistIntel = {
  id: string;
  name: string;
};

export default function ArtistBioNode() {
  const params = useParams();
  const slug = params?.slug as string;

  const [artist, setArtist] = useState<ArtistIntel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetchMusicBrainzArtist(slug)
      .then((data) => {
        if (data?.artist) {
          setArtist({
            id: data.artist.id,
            name: data.artist.name,
          });
        }
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="opacity-60">Loading artist…</p>
      </main>
    );
  }

  if (!artist) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="opacity-60">Artist not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24 max-w-4xl mx-auto">
      <Link
        href="/artists"
        className="text-sm text-zinc-400 hover:text-white mb-8 inline-block"
      >
        ← Back to artists
      </Link>

      <h1 className="text-5xl font-black tracking-tight mb-6">
        {artist.name}
      </h1>

      <p className="text-zinc-400">
        MusicBrainz Artist ID: {artist.id}
      </p>
    </main>
  );
}
