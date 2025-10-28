// src/components/SearchBar.tsx
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function SearchBar({ value, onChange, placeholder = "Ex: Grêmio" }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-transparent border-2 border-white/30 rounded-lg text-white placeholder:text-white/60 outline-none focus:border-white/60 transition-all"
      />
    </div>
  );
}

export default SearchBar;