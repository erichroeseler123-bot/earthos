'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { venues } from '@/data/venues';

const STATIC_NAV = [
  { href: '/venues', label: 'Venues' },
  { href: '/shuttles', label: 'Shuttles' },
  { href: '/gallery', label: 'Gallery' },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <Link
          href="/"
          className="font-black uppercase tracking-widest text-white text-sm"
        >
          PARTY AT RED ROCKS
        </Link>

        {/* Menu */}
        <div className="flex gap-6 text-xs uppercase tracking-[0.25em]">
          {/* Static links */}
          {STATIC_NAV.map(item => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? 'text-neon-blue font-bold'
                    : 'text-zinc-400 hover:text-white transition'
                }
              >
                {item.label}
              </Link>
            );
          })}

          {/* Venue links (from canonical registry) */}
          {Object.entries(venues).map(([slug, venue]) => {
            const href = `/venues/${slug}`;
            const active = pathname === href;

            return (
              <Link
                key={slug}
                href={href}
                className={
                  active
                    ? 'text-neon-blue font-bold'
                    : 'text-zinc-400 hover:text-white transition'
                }
              >
                {venue.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
