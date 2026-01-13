import Image from 'next/image';
import { getLiveShows } from '@/data/shows';
import { notFound } from 'next/navigation';

export default async function EventPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params; 
  const allShows = await getLiveShows();
  const show = allShows.find((s) => s.slug === slug);

  if (!show) notFound();

  return (
    <div className="min-h-screen bg-black text-white p-10 md:ml-[380px] font-mono">
      <header className="border-l-4 border-blue-600 pl-6 mb-8">
        <p className="text-blue-500 text-[10px] uppercase tracking-widest mb-2">Node Intel // {show.slug}</p>
        <h1 className="text-5xl font-bold tracking-tighter uppercase">{show.title}</h1>
      </header>
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800">
        <Image src={show.image} alt={show.title} fill className="object-cover" priority />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-8 bg-slate-900/30 p-8 rounded-2xl border border-slate-800">
        <div><p className="text-slate-500 text-[10px] uppercase mb-1">Date</p><p className="text-xl text-emerald-400">{show.date}</p></div>
        <div><p className="text-slate-500 text-[10px] uppercase mb-1">Artist</p><p className="text-xl">{show.artist}</p></div>
      </div>
    </div>
  );
}
