// ... (keep all your existing imports and HomeContent function)

/**
 * HomePage - The root landing zone.
 * This MUST be a default export for the build to succeed.
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono w-full pb-20">
      <EventTicker />
      <main className="p-8 lg:p-12 max-w-7xl mx-auto">
        <Suspense fallback={<div className="text-neon-blue animate-pulse uppercase tracking-widest">Syncing_Intelligence_Layer...</div>}>
          <HomeContent />
        </Suspense>
      </main>
    </div>
  );
}
