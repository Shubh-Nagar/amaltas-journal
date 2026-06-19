import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { articles, searchArticles } from '../data/articles';
import ArticleCard from '../components/articles/ArticleCard';
import type { ArticleType, AccessType } from '../types';
import { articleTypeLabel } from '../utils/helpers';

const ARTICLE_TYPES: ArticleType[] = ['research', 'review', 'case-study', 'editorial', 'letter', 'commentary'];
const YEARS = [...new Set(articles.map((a) => a.year))].sort((a, b) => b - a);
const SECTIONS = [...new Set(articles.map((a) => a.section))].sort();
const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'date', label: 'Newest First' },
  { value: 'citations', label: 'Most Cited' },
  { value: 'views', label: 'Most Viewed' },
];

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';

  const [query, setQuery] = useState(initialQuery);
  const [inputVal, setInputVal] = useState(initialQuery);
  const [filterType, setFilterType] = useState<ArticleType | ''>('');
  const [filterYear, setFilterYear] = useState<number | ''>('');
  const [filterAccess, setFilterAccess] = useState<AccessType | ''>('');
  const [filterSection, setFilterSection] = useState('');
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'citations' | 'views'>('relevance');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.title = query ? `Search: "${query}" — IJRHM` : 'Search — IJRHM';
  }, [query]);

  const results = useMemo(() => {
    let r = query.trim() ? searchArticles(query) : [...articles];
    if (filterType) r = r.filter((a) => a.articleType === filterType);
    if (filterYear) r = r.filter((a) => a.year === filterYear);
    if (filterAccess) r = r.filter((a) => a.accessType === filterAccess);
    if (filterSection) r = r.filter((a) => a.section === filterSection);
    if (sortBy === 'date') r = [...r].sort((a, b) => b.year - a.year || b.issue - a.issue);
    else if (sortBy === 'citations') r = [...r].sort((a, b) => b.citationCount - a.citationCount);
    else if (sortBy === 'views') r = [...r].sort((a, b) => b.viewCount - a.viewCount);
    return r;
  }, [query, filterType, filterYear, filterAccess, filterSection, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(inputVal);
    setSearchParams(inputVal ? { q: inputVal } : {});
  };

  const clearFilter = (setter: (v: any) => void) => setter('');

  const activeFilterCount = [filterType, filterYear, filterAccess, filterSection].filter(Boolean).length;

  return (
    <div className="bg-cream min-h-screen">

      {/* Search bar header */}
      <div className="bg-navy-800 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-2xl text-white mb-5 text-center">Search IJRHM</h1>
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="search"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Search by title, keyword, author, or topic…"
              className="w-full pl-12 pr-32 py-4 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-400 shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-navy-700 hover:bg-navy-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-[260px_1fr] gap-8">

          {/* ── Filters sidebar ── */}
          <aside>
            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 mb-4 text-sm font-semibold text-navy-800 shadow-sm"
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters {activeFilterCount > 0 && <span className="bg-navy-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{activeFilterCount}</span>}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            <div className={`space-y-5 ${showFilters ? 'block' : 'hidden'} lg:block`}>

              {/* Sort */}
              <FilterBox title="Sort By">
                <div className="space-y-1.5">
                  {SORT_OPTIONS.map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-navy-800">
                      <input
                        type="radio"
                        name="sort"
                        value={opt.value}
                        checked={sortBy === opt.value}
                        onChange={() => setSortBy(opt.value as any)}
                        className="text-navy-700 focus:ring-navy-400"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </FilterBox>

              {/* Article Type */}
              <FilterBox
                title="Article Type"
                onClear={filterType ? () => clearFilter(setFilterType) : undefined}
              >
                <div className="space-y-1.5">
                  {ARTICLE_TYPES.map((t) => (
                    <label key={t} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-navy-800">
                      <input
                        type="checkbox"
                        checked={filterType === t}
                        onChange={() => setFilterType(filterType === t ? '' : t)}
                        className="rounded text-navy-700 focus:ring-navy-400"
                      />
                      {articleTypeLabel(t)}
                    </label>
                  ))}
                </div>
              </FilterBox>

              {/* Year */}
              <FilterBox
                title="Year"
                onClear={filterYear ? () => clearFilter(setFilterYear) : undefined}
              >
                <div className="space-y-1.5">
                  {YEARS.map((y) => (
                    <label key={y} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-navy-800">
                      <input
                        type="checkbox"
                        checked={filterYear === y}
                        onChange={() => setFilterYear(filterYear === y ? '' : y)}
                        className="rounded text-navy-700 focus:ring-navy-400"
                      />
                      {y}
                    </label>
                  ))}
                </div>
              </FilterBox>

              {/* Access Type */}
              <FilterBox
                title="Access"
                onClear={filterAccess ? () => clearFilter(setFilterAccess) : undefined}
              >
                <div className="space-y-1.5">
                  {(['open-access', 'subscription'] as AccessType[]).map((t) => (
                    <label key={t} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-navy-800">
                      <input
                        type="checkbox"
                        checked={filterAccess === t}
                        onChange={() => setFilterAccess(filterAccess === t ? '' : t)}
                        className="rounded text-navy-700 focus:ring-navy-400"
                      />
                      {t === 'open-access' ? 'Open Access' : 'Subscription'}
                    </label>
                  ))}
                </div>
              </FilterBox>

              {/* Section */}
              <FilterBox
                title="Section"
                onClear={filterSection ? () => clearFilter(setFilterSection) : undefined}
              >
                <div className="space-y-1.5">
                  {SECTIONS.map((s) => (
                    <label key={s} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-navy-800">
                      <input
                        type="checkbox"
                        checked={filterSection === s}
                        onChange={() => setFilterSection(filterSection === s ? '' : s)}
                        className="rounded text-navy-700 focus:ring-navy-400"
                      />
                      <span className="text-xs leading-snug">{s}</span>
                    </label>
                  ))}
                </div>
              </FilterBox>

              {/* Clear all */}
              {activeFilterCount > 0 && (
                <button
                  onClick={() => {
                    setFilterType(''); setFilterYear(''); setFilterAccess(''); setFilterSection('');
                  }}
                  className="w-full flex items-center justify-center gap-1.5 text-sm text-red-600 hover:text-red-700 border border-red-200 rounded-lg py-2 hover:bg-red-50 transition-colors"
                >
                  <X className="w-3.5 h-3.5" /> Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* ── Results ── */}
          <main>
            {/* Results meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <p className="text-sm text-gray-600">
                {query ? (
                  <>Showing <strong>{results.length}</strong> results for "<strong>{query}</strong>"</>
                ) : (
                  <>Showing all <strong>{results.length}</strong> articles</>
                )}
                {activeFilterCount > 0 && (
                  <span className="text-navy-600 ml-1">· {activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''} applied</span>
                )}
              </p>
            </div>

            {results.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-14 h-14 text-gray-300 mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-500 text-sm mb-5">Try different keywords or remove some filters.</p>
                <button
                  onClick={() => { setQuery(''); setInputVal(''); setSearchParams({}); }}
                  className="text-sm text-navy-600 underline"
                >
                  Show all articles
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {results.map((article) => (
                  <ArticleCard key={article.id} article={article} variant="horizontal" />
                ))}
              </div>
            )}

            {/* Popular searches */}
            {!query && (
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {['climate health India', 'maternal mortality', 'AI diagnostics', 'water contamination', 'microplastics', 'tobacco cessation', 'digital health'].map((s) => (
                    <button
                      key={s}
                      onClick={() => { setInputVal(s); setQuery(s); setSearchParams({ q: s }); }}
                      className="text-sm bg-white border border-gray-200 text-navy-700 px-3 py-1.5 rounded-full hover:border-navy-400 hover:bg-navy-50 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function FilterBox({ title, onClear, children }: { title: string; onClear?: () => void; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-navy-800">{title}</p>
        {onClear && (
          <button onClick={onClear} className="text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-0.5">
            <X className="w-3 h-3" /> Clear
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
