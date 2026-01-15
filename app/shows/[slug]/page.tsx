// Inside your ShowTacticalPage component, update the button section:

<div className="flex flex-col sm:flex-row gap-4 mb-8">
  {[
    { id: 'denver', label: 'DENVER_SHUTTLE' },
    { id: 'golden', label: 'GOLDEN_SHUTTLE' },
    { id: 'suburban', label: 'PRIVATE_SUBURBAN' }
  ].map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id as any)}
      className={`
        flex-1 px-6 py-4 rounded-xl font-black uppercase italic tracking-tighter text-sm transition-all duration-300
        ${activeTab === tab.id 
          ? 'bg-neon-blue text-black shadow-[0_0_25px_#00f2ff] scale-105 z-10' 
          : 'bg-zinc-900 text-zinc-500 border border-zinc-800 hover:border-neon-blue/50 hover:text-white'
        }
      `}
    >
      {activeTab === tab.id && <span className="mr-2 animate-pulse">●</span>}
      {tab.label}
    </button>
  ))}
</div>
