import Link from "next/link";
import { venues } from "@/data/venues";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black px-6 py-16 text-zinc-400">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 text-xs font-mono uppercase tracking-wider">
        {Object.entries(venues).map(([slug, venue]) => (
          <Link
            key={slug}
            href={`/venues/${slug}`}
            className="hover:text-white transition-colors"
          >
            {venue.name}
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center text-[10px] tracking-[0.35em] text-zinc-600">
        © {new Date().getFullYear()} PARTY AT RED ROCKS · DCC POWERED
      </div>
    </footer>
  );
}
