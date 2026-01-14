"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchArtistIntel } from "@/lib/musicbrainz";
import Link from 'next/link';

export default function ArtistBioNode() {
  const { slug } = useParams();
  const [intel, setIntel] = useState<any>(null);
  const artistName = (slug as string).replace(/-/g, ' ');

  useEffect(() => {
    async function activate() {
      const data = await fetchArtistIntel(artistName);
      setIntel(data);
    }
    activate();
  }, [artistName]);

  return (
    <div className="min-h-screen bg-black text-white font-mono p-6 md:p-12 lg:p-24">
      <Link href="/" className="text-neon-blue text-[10px] mb-12 block font-black uppercase tracking-widest">
        {"< "}RETURN_TO_COMMAND_CENTER
      </Link>
      <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-10 border-b border-zinc-800 pb-8">
        {intel?.name || artistName.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <p className="text-[10px] text-neon-blue font-black tracking-widest uppercase">// ARTIST_BIO_SIGNAL</p>
          <div className="bg-zinc-900/60 p-4 rounded-3xl min-h-[380px]">
            {intel?.spotifyId && (
              <iframe src={`https://open.spotify.com/embed/artist/${intel.spotifyId}`} width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" className="rounded-2xl" />
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {intel?.albums?.map((album: any, i: number) => (
            <img key={i} src={album.coverUrl} className="aspect-square object-cover border border-zinc-800 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
