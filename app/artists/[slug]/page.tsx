"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchArtistIntel, fetchArtistNews } from "@/lib/musicbrainz";
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
    <div className="min-h-screen bg-black text-white font-mono p-6 md:p-12 lg:p-24 selection:bg-neon-blue selection:text-black">
      <Link href="/" className="text-neon-blue text-[10px] mb-12 block font-black uppercase tracking-widest hover:pl-2 transition-all">
        {"< "}RETURN_TO_COMMAND_CENTER
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <header className="border-b border-zinc-800 pb-8">
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
              {intel?.name || artistName.toUpperCase()}
            </h1>
            <Link href={`/shows/${slug}`} className="inline-block mt-6 bg-neon-blue text-black px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">
              VIEW_TACTICAL_SHOW_INTEL
            </Link>
          </header>

          <div className="bg-zinc-900/60 border border-zinc-800 p-2 rounded-3xl overflow-hidden min-h-[380px]">
            <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest p-3">// LIVE_STREAMING_NODE</p>
            {intel?.spotifyId && (
              <iframe src={`https://open.spotify.com/embed/artist/${intel.spotifyId}?theme=0`} width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" className="rounded-2xl" />
            )}
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter border-b border-zinc-800 pb-4">// DISCOGRAPHY_RECON</h2>
          <div className="grid grid-cols-3 gap-2">
            {intel?.albums?.map((album: any, i: number) => (
              <img key={i} src={album.coverUrl} className="aspect-square object-cover border border-zinc-800 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
