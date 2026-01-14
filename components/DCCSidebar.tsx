import React, { useState } from 'react';

interface SidebarProps {
  onSearch: (query: string) => void;
}

export default function DCCSidebar({ onSearch }: SidebarProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) onSearch(inputValue);
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-4 font-mono">
      <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-3">// GLOBAL_INTEL</p>
      <form onSubmit={handleSubmit} className="flex gap-1">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="SEARCH..."
          className="w-1/2 bg-black border border-zinc-800 p-2 text-[10px] text-white focus:border-neon-blue outline-none"
        />
        <button type="submit" className="flex-1 bg-neon-blue text-white text-[9px] font-black uppercase">
          Search
        </div>
      </form>
    </div>
  );
}
