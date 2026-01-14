import React, { useState } from 'react';

interface SidebarProps {
  onSearch: (query: string) => void;
}

export default function DCCSidebar({ onSearch }: SidebarProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  return (
    <div className="w-64 min-h-screen bg-black border-r border-zinc-800 p-6 flex flex-col gap-8 font-mono">
      <div className="flex flex-col gap-3">
        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-500 italic">Global Intelligence</p>
        <form className="flex w-full items-center gap-1" onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="COORD_SCAN..."
            className="w-1/2 bg-zinc-900/40 border border-zinc-800 p-2 text-[10px] text-white focus:outline-none focus:border-neon-blue transition-all italic"
          />
          <button type="submit" className="flex-1 bg-zinc-900 border border-zinc-800 hover:bg-neon-blue hover:text-white text-zinc-500 py-2 text-[9px] font-black uppercase transition-all tracking-tighter">
            Search
          </button>
        </form>
      </div>
      {/* Existing navigation nodes below... */}
    </div>
  );
}
