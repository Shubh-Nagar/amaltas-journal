import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { getLatestIssue } from '../../data/issues';
import { getArticlesByIssue } from '../../data/articles';
import { truncateText, formatAuthors } from '../../utils/helpers';

export default function LatestIssueSection() {
  const latest = getLatestIssue();
  const issueArticles = getArticlesByIssue(latest.volume, latest.issue);

  return (
    <section aria-labelledby="latest-issue-heading" className="py-16 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cover / Issue Info */}
          <div className="lg:col-span-1">
            <span className="section-label">Latest Publication</span>
            <h2 id="latest-issue-heading" className="font-display text-3xl text-gray-900 font-semibold mt-1 mb-3">
              Current Issue
            </h2>
            <span className="gold-rule mb-6" aria-hidden="true" />

            {/* Issue cover */}
            <div className="relative rounded-xl overflow-hidden border border-navy-200 shadow-card mb-5">
              <img
                src="/journal-front-page.jpg"
                alt={`IJRHM Volume ${latest.volume}, Issue ${latest.issue} cover`}
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </div>

            <div className="flex items-center gap-2 text-sm font-ui text-navy-600 mb-2">
              <Calendar size={14} className="text-gold-400" aria-hidden="true" />
              <span>Published: {latest.month} {latest.year}</span>
            </div>
            {latest.description && (
              <p className="font-ui text-sm text-gray-900 leading-relaxed mb-5">
                {latest.description}
              </p>
            )}
            <Link
              to={`/issues?vol=${latest.volume}&iss=${latest.issue}`}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-navy-800 text-white text-sm font-ui font-medium rounded-lg hover:bg-navy-700 transition-colors shadow-sm"
            >
              View Full Issue <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Article list */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl text-gray-900 font-semibold">
                Articles in this issue
              </h3>
              <span className="font-ui text-sm text-navy-700">{issueArticles.length} articles</span>
            </div>

            <ol className="space-y-1" aria-label="Articles in latest issue">
              {issueArticles.map((article, idx) => (
                <li key={article.id}>
                  <Link
                    to={`/article/${article.id}`}
                    className="card-border-anim flex gap-4 p-4 rounded-lg hover:bg-white hover:shadow-card transition-all duration-200 group"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-navy-100 text-navy-600 text-xs font-ui font-semibold flex items-center justify-center group-hover:bg-gold-100 group-hover:text-gold-800 transition-colors" aria-hidden="true">
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        {article.accessType === 'open-access' && (
                          <span className="inline-flex items-center gap-1 text-xs font-ui text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" aria-hidden="true" />
                            Open Access
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-xs font-ui text-navy-700">
                          <Tag size={10} aria-hidden="true" /> {article.section}
                        </span>
                      </div>
                      <p className="font-display text-navy-800 font-medium leading-snug text-sm group-hover:text-navy-900 transition-colors">
                        {truncateText(article.title, 120)}
                      </p>
                      <p className="font-ui text-xs text-navy-700 mt-1.5">
                        {formatAuthors(article.authors.map((a) => a.name))}
                        &nbsp;·&nbsp; pp. {article.pageStart}–{article.pageEnd}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
