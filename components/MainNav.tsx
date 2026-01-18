'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/venues', label: 'Venues' },
  { href: '/venues/red-rocks', label: 'Red Rocks' },
  { href: '/shuttles', label: 'Shuttles' },
  { href: '/gallery', label: 'Gallery' },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link
          href="/"
          className="font-black uppercase tracking-widest text-white text-sm"
        >
          PARTY AT RED ROCKS
        </Link>

        {/* Menu */}
        <div className="flex gap-8 text-xs uppercase tracking-[0.25em] font-mono">
          {NAV_ITEMS.map(item => {
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
        </div>
      </div>
    </nav>
  );
}
