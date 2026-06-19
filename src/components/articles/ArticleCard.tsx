import { Link } from 'react-router-dom';
import { Eye, Quote, ExternalLink, LockOpen, FileText } from 'lucide-react';
import type { Article } from '../../types';
import { articleTypeLabel, articleTypeBadgeClass, formatDate, formatAuthors, truncateText } from '../../utils/helpers';
import clsx from 'clsx';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'compact' | 'horizontal';
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  if (variant === 'compact') {
    return (
      <article className="card-border-anim bg-white rounded-lg p-4 hover:shadow-card transition-all duration-200">
        <Link to={`/article/${article.id}`} className="group">
          <div className="flex items-start gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-body text-navy-800 font-medium text-sm leading-snug group-hover:text-navy-600 transition-colors">
                {truncateText(article.title, 90)}
              </p>
              <p className="font-ui text-xs text-navy-500 mt-1.5">
                {formatAuthors(article.authors.map(a => a.name), 2)}
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-1 text-navy-400 text-xs font-ui">
              <Eye size={11} aria-hidden="true" />
              {article.viewCount.toLocaleString()}
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article
      className="bg-white rounded-xl border border-navy-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group"
      aria-label={article.title}
    >
      {/* Coloured top stripe based on article type */}
      <div
        className={clsx('h-1 w-full', {
          'bg-navy-400': article.articleType === 'research',
          'bg-purple-400': article.articleType === 'review',
          'bg-teal-400': article.articleType === 'case-study',
          'bg-maroon-400': article.articleType === 'editorial',
          'bg-amber-400': article.articleType === 'letter',
          'bg-slate-400': article.articleType === 'commentary',
        })}
        aria-hidden="true"
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={clsx('inline-flex items-center px-2 py-0.5 rounded text-xs font-ui font-medium', articleTypeBadgeClass(article.articleType))}>
            {articleTypeLabel(article.articleType)}
          </span>
          {article.accessType === 'open-access' && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-ui font-medium bg-gold-50 text-gold-700 border border-gold-200">
              <LockOpen size={10} aria-hidden="true" /> Open Access
            </span>
          )}
        </div>

        {/* Title */}
        <Link to={`/article/${article.id}`}>
          <h3 className="font-display text-gray-900 font-semibold text-base leading-snug mb-3 group-hover:text-navy-700 transition-colors line-clamp-3">
            {article.title}
          </h3>
        </Link>

        {/* Authors */}
        <p className="font-ui text-sm text-navy-600 mb-2">
          {formatAuthors(article.authors.map(a => a.name), 2)}
        </p>

        {/* Section */}
        <p className="font-ui text-xs text-navy-400 uppercase tracking-wide mb-4">
          {article.section}
        </p>

        {/* Abstract excerpt */}
        <p className="font-body text-sm text-navy-600 leading-relaxed mb-5 flex-1 line-clamp-3">
          {truncateText(article.abstract, 200)}
        </p>

        {/* Meta row */}
        <div className="mt-auto pt-4 border-t border-navy-100 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs font-ui text-navy-400">
            <span className="flex items-center gap-1">
              <Eye size={12} aria-hidden="true" />
              {article.viewCount.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Quote size={12} aria-hidden="true" />
              {article.citationCount}
            </span>
            <span>
              Vol.{article.volume} No.{article.issue} · {article.year}
            </span>
          </div>
          <Link
            to={`/article/${article.id}`}
            className="inline-flex items-center gap-1 text-xs font-ui font-medium text-navy-600 hover:text-navy-800 transition-colors"
            aria-label={`Read full article: ${article.title}`}
          >
            <FileText size={12} aria-hidden="true" /> Read
          </Link>
        </div>
      </div>
    </article>
  );
}
