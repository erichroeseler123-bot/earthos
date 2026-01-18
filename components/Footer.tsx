import Link from "next/link";
import { venues } from "@/data/venues";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400 px-6 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6 text-xs uppercase tracking-widest">

        {Object.entries(venues).map(([slug, venue]) => (
          <Link
            key={slug}
            href={`/venues/${slug}`}
            className="hover:text-white transition"
          >
            {venue.name}
          </Link>
        ))}

      </div>

      <div className="mt-16 text-center text-[10px] tracking-[0.3em] text-zinc-600">
        © 2026 PARTY AT RED ROCKS · DCC POWERED
      </div>
    </footer>
  );
}
