'use client';
import React, { Suspense } from 'react'; // Add Suspense here
import BookingTerminal from '@/components/BookingTerminal';
import { useSearchParams } from 'next/navigation';

// 1. Create a sub-component to handle the search params
function BookingContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') === 'suv' ? 'private' : 'shared';

  return <BookingTerminal productType={type} />;
}

// 2. Wrap it in Suspense in the main export
export default function BookPage() {
  return (
    <main className="min-h-screen bg-black p-8">
      <Suspense fallback={<div className="text-white font-mono">LOADING_TERMINAL...</div>}>
        <BookingContent />
      </Suspense>
    </main>
  );
}
