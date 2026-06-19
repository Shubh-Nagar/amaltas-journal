import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import clsx from 'clsx';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  size?: 'sm' | 'lg';
  onDark?: boolean;
}

export default function SearchBar({ placeholder = 'Search articles, authors, keywords…', className, size = 'lg', onDark = false }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <form onSubmit={handleSubmit} role="search" className={clsx('flex w-full', className)}>
      <div className="relative flex-1">
        <Search
          size={size === 'lg' ? 18 : 16}
          className={clsx(
            'absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none',
            onDark ? 'text-white/50' : 'text-navy-400'
          )}
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label="Search the journal"
          className={clsx(
            'w-full pl-10 pr-4 font-ui focus:outline-none transition-colors',
            size === 'lg' ? 'py-3 text-base' : 'py-2 text-sm',
            onDark
              ? 'bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:bg-white/15 focus:border-white/40 rounded-l-lg'
              : 'bg-white border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 rounded-l-lg'
          )}
        />
      </div>
      <button
        type="submit"
        className={clsx(
          'flex items-center gap-2 font-ui font-medium transition-colors px-5 rounded-r-lg',
          size === 'lg' ? 'text-sm' : 'text-xs',
          'bg-gold-400 text-navy-950 hover:bg-gold-500'
        )}
      >
        Search
      </button>
    </form>
  );
}
