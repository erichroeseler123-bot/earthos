import EventTicker from '@/components/EventTicker';

export default function ShuttlePage() {
  return (
    <>
      <EventTicker /> {/* This adds the moving news crawl */}
      <main>
        {/* Your existing shuttle content */}
        <div className="p-10 text-center">
            <a href="/gallery" className="text-zinc-500 hover:text-white underline font-mono text-xs">
                OPEN VISUAL INTELLIGENCE GALLERY
            </a>
        </div>
      </main>
    </>
  );
}
