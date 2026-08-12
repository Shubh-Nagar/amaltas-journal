import { useSearchParams, Link } from 'react-router-dom';
import { BookOpen, Calendar, ChevronRight, FileText } from 'lucide-react';
import { issues, getIssuesByYear } from '../data/issues';
import { getArticlesByIssue } from '../data/articles';
import { truncateText, formatAuthors } from '../utils/helpers';

export default function ArchivesPage() {
  const [searchParams] = useSearchParams();
  const filterVol = searchParams.get('vol') ? Number(searchParams.get('vol')) : null;
  const filterIss = searchParams.get('iss') ? Number(searchParams.get('iss')) : null;

  const byYear = getIssuesByYear();
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  const selectedIssue = filterVol && filterIss
    ? issues.find(i => i.volume === filterVol && i.issue === filterIss)
    : issues.find(i => i.isLatest);

  const selectedArticles = selectedIssue
    ? getArticlesByIssue(selectedIssue.volume, selectedIssue.issue)
    : [];

  return (
    <>
      <title>Issues &amp; Archives | IJRHM</title>
      {/* Page header */}
      <div className="bg-navy-800 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label text-gold-400">Browse</span>
          <h1 className="font-display text-4xl text-white font-semibold mt-2">
            Issues &amp; Archives
          </h1>
          <p className="font-ui text-white/70 mt-3 max-w-2xl">
            Browse all published volumes and issues of the International Journal of Rural Health and Medicine (IJRHM) since 2026.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar: year/volume navigation */}
          <aside className="lg:col-span-1" aria-label="Browse by year">
            <h2 className="font-display text-lg text-gray-900 font-semibold mb-4">Browse by Year</h2>
            <nav>
              {years.map(year => (
                <div key={year} className="mb-4">
                  <h3 className="font-ui text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                    <Calendar size={12} aria-hidden="true" /> {year}
                  </h3>
                  <div className="space-y-1 pl-4">
                    {byYear[year].sort((a, b) => b.issue - a.issue).map(iss => {
                      const isSelected = selectedIssue?.volume === iss.volume && selectedIssue?.issue === iss.issue;
                      return (
                        <Link
                          key={`${iss.volume}-${iss.issue}`}
                          to={`/issues?vol=${iss.volume}&iss=${iss.issue}`}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-ui transition-colors ${
                            isSelected
                              ? 'bg-navy-800 text-white'
                              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                          aria-current={isSelected ? 'page' : undefined}
                        >
                          <span>
                            Vol. {iss.volume}, No. {iss.issue}
                            {iss.isLatest && (
                              <span className="ml-2 text-xs px-1.5 py-0.5 bg-gold-400 text-navy-950 rounded font-medium">Latest</span>
                            )}
                          </span>
                          <span className={`text-xs ${isSelected ? 'text-white/60' : 'text-gray-500'}`}>
                            {iss.month}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main: selected issue */}
          <main className="lg:col-span-2">
            {selectedIssue ? (
              <div>
                <div className="bg-white border border-navy-100 rounded-xl p-6 shadow-card mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-navy-800 flex items-center justify-center flex-shrink-0">
                      <BookOpen size={24} className="text-gold-400" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h2 className="font-display text-xl text-gray-900 font-semibold">
                          Volume {selectedIssue.volume}, Issue {selectedIssue.issue}
                        </h2>
                        {selectedIssue.isLatest && (
                          <span className="text-xs px-2 py-0.5 bg-gold-100 text-gold-800 rounded font-ui font-medium border border-gold-200">
                            Current Issue
                          </span>
                        )}
                      </div>
                      <p className="font-ui text-gray-500 text-sm">
                        {selectedIssue.month} {selectedIssue.year}
                        {selectedIssue.title && (
                          <span className="mx-2 text-gray-300">·</span>
                        )}
                        {selectedIssue.title && (
                          <span className="italic">{selectedIssue.title}</span>
                        )}
                      </p>
                      {selectedIssue.description && (
                        <p className="font-ui text-sm text-gray-900 mt-3 leading-relaxed">
                          {selectedIssue.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {selectedArticles.length > 0 ? (
                  <div>
                    <h3 className="font-display text-lg text-gray-900 font-semibold mb-4">
                      Articles ({selectedArticles.length})
                    </h3>
                    <ol className="space-y-4">
                      {selectedArticles.map((article) => (
                        <li key={article.id}>
                          <Link
                            to={`/article/${article.id}`}
                            className="card-border-anim block bg-white border border-navy-100 rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200 group"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                  <span className="text-xs font-ui font-medium bg-navy-100 text-navy-700 px-2 py-0.5 rounded">
                                    {article.articleType.charAt(0).toUpperCase() + article.articleType.slice(1)}
                                  </span>
                                  {article.accessType === 'open-access' && (
                                    <span className="text-xs font-ui text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200 flex items-center gap-1">
                                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400" aria-hidden="true" />
                                      Open Access
                                    </span>
                                  )}
                                  <span className="text-xs font-ui text-gray-500">{article.section}</span>
                                </div>
                                <h4 className="font-display text-gray-900 font-semibold leading-snug group-hover:text-navy-700 transition-colors mb-2">
                                  {article.title}
                                </h4>
                                <p className="font-ui text-sm text-gray-700 mb-3">
                                  {formatAuthors(article.authors.map(a => a.name))}
                                </p>
                                <p className="font-body text-sm text-gray-600 leading-relaxed line-clamp-2">
                                  {truncateText(article.abstract, 180)}
                                </p>
                              </div>
                              <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-600 transition-colors flex-shrink-0 mt-1" aria-hidden="true" />
                            </div>
                            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-4 text-xs font-ui text-gray-500">
                              <span className="flex items-center gap-1">
                                <FileText size={11} aria-hidden="true" />
                                pp. {article.pageStart}–{article.pageEnd}
                              </span>
                              <span>{article.viewCount.toLocaleString()} views</span>
                              <span>{article.citationCount} citations</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : (
                  <div className="text-center py-16 text-gray-400 font-ui">
                    <BookOpen size={40} className="mx-auto mb-3 opacity-30" aria-hidden="true" />
                    <p>Article listing for this issue is not yet available.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400 font-ui">
                Select an issue from the sidebar to view articles.
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
