import { getMusicBrainzInfo } from '../../../utils/apiFetch';
import { shows } from '../../../data/shows';

// AUTOMATION: Tell the DCC Brain to build all artist nodes at once
export async function generateStaticParams() {
  return shows.map((show) => ({
    artist: encodeURIComponent(show.artist),
  }));
}

// Next.js 15 requires awaiting 'params' as a Promise
export default async function ArtistPage({ params }: { params: Promise<{ artist: string }> }) {
  const resolvedParams = await params;
  const artistName = decodeURIComponent(resolvedParams.artist); // Resolves "UNDEFINED"
  
  // SYSTEM_SYNC: Pull bio, genres, and discography from DCC-MusicBrainz
  const info = await getMusicBrainzInfo(artistName);

  return (
    <div className="min-h-screen bg-black text-white p-8 lg:p-12 font-mono">
      <header className="border-b border-zinc-800 pb-8 mb-12">
        <p className="text-neon-blue text-[10px] tracking-[0.4em] uppercase mb-2 font-black italic">
          // Intelligence_Node_Resolved: {info?.id || 'LOCAL_CACHE'}
        </p>
        <h1 className="text-6xl font-black uppercase italic tracking-tighter text-white">{artistName}</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* COLUMN 1: TRANSPORT EXECUTION & TICKETS */}
        <div className="lg:col-span-1 space-y-8">
          <div className="p-8 border-2 border-neon-blue bg-neon-blue/5 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-black italic uppercase mb-6 text-white border-l-4 border-neon-blue pl-4">Transport_Sync</h3>
            <div className="space-y-4">
              {/* Absolute paths with / ensure buttons work from any sub-folder */}
              <a href="/book?type=shuttle" className="block w-full py-4 bg-neon-blue text-black text-center font-black uppercase italic hover:bg-white transition-all">$59_SHUTTLE_EXEC</a>
              <a href="/book?type=suv" className="block w-full py-4 border-2 border-matrix-green text-matrix-green text-center font-black uppercase italic hover:bg-matrix-green hover:text-black transition-all">PRIVATE_SUV_SYNC</a>
            </div>
          </div>
          
          <div className="p-8 border border-zinc-800 bg-zinc-900/30 rounded-2xl">
            <h3 className="text-xl font-black italic uppercase mb-6 text-white">Event_Access</h3>
            <a href="https://www.redrocksonline.com/events/" target="_blank" className="block w-full py-4 border border-zinc-500 text-zinc-400 text-center font-black uppercase italic hover:text-white transition-all">Official_Tickets_→</a>
          </div>
        </div>

        {/* COLUMN 2 & 3: MUSICBRAINZ INTELLIGENCE */}
        <div className="lg:col-span-2 space-y-12">
          {info ? (
            <>
              <div className="border border-zinc-800 p-8">
                <h3 className="text-2xl font-black italic uppercase mb-6 text-white border-l-4 border-matrix-green pl-4">Artist_Metadata</h3>
                <div className="grid grid-cols-2 gap-8 text-[10px] uppercase font-bold italic">
                  <div>
                    <p className="text-zinc-500 mb-1">Origin_Node:</p>
                    <p className="text-white">{info.area?.name || info.country || 'Global'}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 mb-1">Active_Status:</p>
                    <p className="text-matrix-green">{info['life-span']?.begin || 'Verified'}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-zinc-500 mb-2">Resolved_Genres:</p>
                    <div className="flex flex-wrap gap-2">
                      {info.genres?.map((g: any) => (
                        <span key={g.name} className="px-2 py-1 border border-zinc-800 text-neon-blue bg-zinc-900">{g.name}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-zinc-800 p-8 bg-zinc-900/10">
                <h3 className="text-2xl font-black italic uppercase mb-6 text-white border-l-4 border-white pl-4">Discography_Log</h3>
                <ul className="space-y-2 text-[10px] uppercase font-bold text-zinc-400">
                  {info['release-groups']?.slice(0, 10).map((album: any) => (
                    <li key={album.id} className="flex justify-between border-b border-zinc-800 pb-2">
                      <span>{album.title}</span>
                      <span className="text-zinc-600">{album['primary-type'] || 'Album'}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="p-12 border border-zinc-800 border-dashed text-center">
              <p className="text-neon-blue animate-pulse uppercase font-black">Waiting_For_DCC_MusicBrainz_Sync...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
