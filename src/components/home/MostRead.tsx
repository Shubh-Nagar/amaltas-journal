import { Link } from 'react-router-dom';
import { Eye, TrendingUp } from 'lucide-react';
import { getMostReadArticles } from '../../data/articles';
import { truncateText, formatAuthors } from '../../utils/helpers';

export default function MostRead() {
  const articles = getMostReadArticles(5);

  return (
    <section aria-labelledby="most-read-heading" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="section-label">Reader Analytics</span>
          <h2 id="most-read-heading" className="font-display text-3xl text-gray-900 font-semibold mt-1">
            Most Read Articles
          </h2>
          <span className="gold-rule mt-3" aria-hidden="true" />
        </div>

        <ol className="space-y-px bg-gray-100 rounded-xl overflow-hidden shadow-card" aria-label="Most read articles">
          {articles.map((article, idx) => (
            <li key={article.id} className="bg-white">
              <Link
                to={`/article/${article.id}`}
                className="flex items-center gap-5 p-5 hover:bg-cream transition-colors group"
              >
                {/* Rank number */}
                <span
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center font-display text-xl font-semibold"
                  style={{ color: idx === 0 ? '#d4a828' : idx === 1 ? '#a8a8a8' : idx === 2 ? '#c67c52' : '#9ca3af' }}
                  aria-label={`Rank ${idx + 1}`}
                >
                  {idx + 1}
                </span>

                {/* Article info */}
                <div className="flex-1 min-w-0">
                  <p className="font-body text-gray-900 font-medium leading-snug text-sm md:text-base group-hover:text-black transition-colors">
                    {truncateText(article.title, 100)}
                  </p>
                  <p className="font-ui text-xs text-gray-500 mt-1.5">
                    {formatAuthors(article.authors.map((a) => a.name))}
                    &nbsp;·&nbsp;
                    Vol. {article.volume}, No. {article.issue} ({article.year})
                  </p>
                </div>

                {/* View count */}
                <div className="flex-shrink-0 flex items-center gap-1.5 text-gray-500 ml-4">
                  <Eye size={14} aria-hidden="true" />
                  <span className="font-ui text-sm font-medium">{article.viewCount.toLocaleString()}</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-4 flex items-center gap-2 text-gray-400">
          <TrendingUp size={14} aria-hidden="true" />
          <p className="font-ui text-xs">View counts updated weekly. Based on full-text and abstract views.</p>
        </div>
      </div>
    </section>
  );
}
