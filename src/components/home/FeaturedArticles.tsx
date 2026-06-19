import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedArticles } from '../../data/articles';
import ArticleCard from '../articles/ArticleCard';

export default function FeaturedArticles() {
  const featured = getFeaturedArticles();

  return (
    <section aria-labelledby="featured-heading" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="section-label" aria-hidden="true">Selected Research</span>
            <h2 id="featured-heading" className="font-display text-3xl text-navy-800 font-semibold mt-1">
              Featured Articles
            </h2>
            <span className="gold-rule mt-3" aria-hidden="true" />
          </div>
          <Link
            to="/issues"
            className="hidden md:flex items-center gap-1.5 font-ui text-sm text-navy-600 hover:text-navy-800 transition-colors"
          >
            Browse all issues <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/issues"
            className="inline-flex items-center gap-1.5 font-ui text-sm text-navy-600 hover:text-navy-800 transition-colors"
          >
            Browse all issues <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
