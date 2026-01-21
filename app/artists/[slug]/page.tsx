import { notFound } from "next/navigation";
import { getArtistIntelligence } from "@/lib/gemini";
import { getArtistShows } from "@/lib/seatgeek";

export const revalidate = 86400;

export default async function ArtistPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const artistName = slug.replace(/-/g, " ");

  const [intel, shows] = await Promise.all([
    getArtistIntelligence(artistName),
    getArtistShows(slug),
  ]);

  if (!shows || shows.length === 0) return notFound();

  const description =
    typeof intel.description === "string"
      ? intel.description
      : intel.description?.summary || "No description available.";

  const ageRange =
    typeof intel.fans?.age_range === "string"
      ? intel.fans.age_range
      : "N/A";

  const interests =
    typeof intel.fans?.interests === "string"
      ? intel.fans.interests
      : "N/A";

  return (
    <main className="min-h-screen pt-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl font-black italic uppercase tracking-tighter mb-12">
          {artistName}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <section className="lg:col-span-2 p-10 bg-white/5 border border-white/10 rounded-3xl">
            <h2 className="text-xs tracking-widest text-blue-400 mb-8">
              // ARTIST DOSSIER
            </h2>

            <p className="text-xl text-zinc-300 leading-relaxed italic">
              {description}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8 mt-8 border-t border-white/10">
              <div>
                <div className="text-[10px] uppercase text-zinc-500">
                  Age Range
                </div>
                <div className="text-lg font-bold">{ageRange}</div>
              </div>

              <div>
                <div className="text-[10px] uppercase text-zinc-500">
                  Interests
                </div>
                <div className="text-lg font-bold">{interests}</div>
              </div>
            </div>
          </section>

          <aside className="p-10 bg-blue-600 rounded-3xl h-fit shadow-2xl">
            <h3 className="font-black uppercase text-sm mb-6">
              Fleet Dispatch
            </h3>

            <div className="text-xs space-y-2 mb-8 uppercase font-bold text-blue-100">
              <div>$50 / Person</div>
              <div>$250 Minimum</div>
            </div>

            <a
              href="/book-shuttle"
              className="block w-full bg-black text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest text-[10px]"
            >
              Reserve Suburban
            </a>
          </aside>
        </div>
      </div>
    </main>
  );
}
