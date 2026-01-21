import Link from 'next/link'
import { VENUES } from '@/data/venues'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-xs uppercase">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.values(VENUES).map(v => (
          <div key={v.slug}>
            <Link
              href={`/venues/${v.slug}`}
              className="hover:text-white transition"
            >
              {v.name}
            </Link>
          </div>
        ))}
      </div>
    </footer>
  )
}
