{filteredShows.map((node) => (
  <div key={node.slug} className="p-4 border border-zinc-800 bg-zinc-900/30 flex flex-col md:flex-row items-center gap-6 group hover:border-neon-blue transition-all mb-4">
    {/* VISUAL_NODE */}
    {node.image && (
      <div className="w-full md:w-32 h-20 overflow-hidden border border-zinc-700">
        <img src={node.image} alt={node.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
      </div>
    )}
    
    <div className="flex-1">
      <a href={`/shows/${node.slug}`} className="block">
        <h5 className="font-black italic uppercase text-xl text-white group-hover:text-neon-blue transition-colors">{node.title}</h5>
      </a>
      <p className="text-[10px] text-zinc-400 uppercase border-l-2 border-neon-blue pl-4 mt-1 font-bold italic">
        Node_ID: {node.slug} // 
        <a href={`https://musicbrainz.org/search?query=${encodeURIComponent(node.artist)}&type=artist`} target="_blank" className="ml-1 text-neon-blue hover:underline">
          RESOLVE_ARTIST_INTEL: {node.artist}
        </a>
      </p>
    </div>
    
    <div className="text-right text-white min-w-[120px]">
      <p className="text-lg font-black italic">{node.date}</p>
      <p className="text-[9px] text-zinc-500 font-bold tracking-widest uppercase">{node.time}</p>
    </div>
  </div>
))}
