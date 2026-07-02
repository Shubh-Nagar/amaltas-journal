import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  ArrowLeft, Download, Share2, BookOpen, Calendar,
  Eye, Quote, Tag, User, ExternalLink, Globe, FileText,
  ChevronRight, BookMarked, Hash,
} from 'lucide-react';
import { getArticleById, articles } from '../data/articles';
import { buildDOIUrl, formatDate, articleTypeLabel, articleTypeBadgeClass } from '../utils/helpers';
import CitationBox from '../components/articles/CitationBox';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ArticleCard from '../components/articles/ArticleCard';

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = id ? getArticleById(id) : undefined;

  useEffect(() => {
    if (article) {
      document.title = `${article.shortTitle ?? article.title} — IJRHM`;
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <FileText className="w-16 h-16 text-gray-300 mb-4" />
        <h1 className="font-playfair text-2xl text-gray-900 mb-2">Article Not Found</h1>
        <p className="text-gray-500 mb-6">The article you are looking for does not exist or has been moved.</p>
        <Button href="/issues" variant="primary">Browse All Issues</Button>
      </div>
    );
  }

  const correspondingAuthor = article.authors.find((a) => a.isCorresponding);
  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.section === article.section)
    .slice(0, 3);

  const sectionColor: Record<string, string> = {
    'Digital Health & Technology': 'bg-blue-600',
    'Environmental Science': 'bg-green-700',
    'Public Health': 'bg-teal-700',
    'Maternal & Child Health': 'bg-pink-700',
    'Climate & Society': 'bg-amber-700',
    'Behavioural Sciences': 'bg-purple-700',
  };
  const stripe = sectionColor[article.section] ?? 'bg-navy-800';

  return (
    <div className="bg-cream min-h-screen">
      {/* ── Breadcrumb ── */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500">
            <Link to="/" className="hover:text-navy-700 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/issues" className="hover:text-navy-700 transition-colors">Issues</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              to={`/issues?vol=${article.volume}&iss=${article.issue}`}
              className="hover:text-navy-700 transition-colors"
            >
              Vol. {article.volume}, No. {article.issue} ({article.year})
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-navy-800 font-medium truncate max-w-[200px] sm:max-w-xs">
              {article.shortTitle ?? article.title}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="lg:grid lg:grid-cols-[1fr_320px] gap-10">

          {/* ══ MAIN CONTENT ══════════════════════════════════ */}
          <main>
            {/* Back button */}
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-navy-700 mb-6 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back
            </button>

            {/* Section + Type badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`inline-flex items-center gap-1 text-xs font-semibold text-white px-2.5 py-1 rounded-full ${stripe}`}>
                {article.section}
              </span>
              <span className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full ${articleTypeBadgeClass(article.articleType)}`}>
                {articleTypeLabel(article.articleType)}
              </span>
              {article.accessType === 'open-access' && (
                <Badge variant="gold" size="sm">⊕ Open Access</Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="font-playfair text-2xl sm:text-3xl lg:text-[2rem] leading-snug text-gray-900 mb-5">
              {article.title}
            </h1>

            {/* Authors */}
            <div className="mb-5 space-y-2">
              {article.authors.map((author) => (
                <div key={author.id} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="font-semibold text-navy-800 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-navy-400" />
                    {author.name}
                    {author.isCorresponding && (
                      <span title="Corresponding Author" className="ml-1 text-gold-600 font-bold">✉</span>
                    )}
                  </span>
                  <span className="text-gray-500">{author.affiliation}, {author.country}</span>
                  {author.orcid && (
                    <a
                      href={`https://orcid.org/${author.orcid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#A6CE39] text-xs font-medium hover:underline"
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.516.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
                      </svg>
                      ORCID
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Meta strip */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 pb-5 mb-6 border-b border-gray-200">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-navy-400" />
                Vol. {article.volume}, No. {article.issue}, pp. {article.pageStart}–{article.pageEnd}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-navy-400" />
                Published {formatDate(article.publishedDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-navy-400" />
                {article.viewCount.toLocaleString('en-IN')} views
              </span>
              <span className="flex items-center gap-1.5">
                <Quote className="w-4 h-4 text-navy-400" />
                {article.citationCount} citations
              </span>
              <a
                href={buildDOIUrl(article.doi)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-navy-600 hover:text-navy-800 hover:underline font-mono text-xs"
              >
                <Hash className="w-3.5 h-3.5" />
                {article.doi}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Abstract */}
            <section className="mb-8">
              <h2 className="font-playfair text-xl text-gray-900 mb-3 flex items-center gap-2">
                <span className="block w-1 h-6 bg-gold-400 rounded-full" />
                Abstract
              </h2>
              {article.structuredAbstract ? (
                <div className="space-y-3">
                  {article.structuredAbstract.map((part) => (
                    <p key={part.label} className="text-gray-700 leading-relaxed font-lora text-[0.97rem]">
                      <span className="font-semibold text-navy-800">{part.label}: </span>
                      {part.text}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-700 leading-relaxed font-lora text-[0.97rem]">
                  {article.abstract}
                </p>
              )}
            </section>

            {/* Keywords */}
            <section className="mb-8">
              <h2 className="font-playfair text-xl text-gray-900 mb-3 flex items-center gap-2">
                <span className="block w-1 h-6 bg-gold-400 rounded-full" />
                Keywords
              </h2>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((kw) => (
                  <Link
                    key={kw}
                    to={`/search?q=${encodeURIComponent(kw)}`}
                    className="inline-flex items-center gap-1 text-sm bg-navy-50 text-navy-700 border border-navy-200 rounded-full px-3 py-1 hover:bg-navy-100 transition-colors"
                  >
                    <Tag className="w-3 h-3" />
                    {kw}
                  </Link>
                ))}
              </div>
            </section>

            {/* Full text */}
            {article.sections && article.sections.length > 0 && (
              <section className="mb-8">
                <h2 className="font-playfair text-xl text-gray-900 mb-5 flex items-center gap-2">
                  <span className="block w-1 h-6 bg-gold-400 rounded-full" />
                  Full Text
                </h2>
                <div className="space-y-7">
                  {article.sections.map((sec) => (
                    <div key={sec.heading}>
                      <h3 className="font-playfair text-lg text-navy-800 mb-2.5">{sec.heading}</h3>
                      <div className="space-y-3">
                        {sec.paragraphs.map((p, i) => (
                          <p key={i} className="text-gray-700 leading-relaxed font-lora text-[0.97rem]">
                            {p}
                          </p>
                        ))}
                      </div>
                      {sec.tables?.map((table, ti) => (
                        <div key={ti} className="mt-4 overflow-x-auto">
                          {table.caption && (
                            <p className="text-sm font-semibold text-navy-800 mb-2">{table.caption}</p>
                          )}
                          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                            <thead>
                              <tr className="bg-navy-50">
                                {table.headers.map((h) => (
                                  <th key={h} className="text-left font-semibold text-navy-800 px-3 py-2 border-b border-gray-200">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {table.rows.map((row, ri) => (
                                <tr key={ri} className="odd:bg-white even:bg-gray-50">
                                  {row.map((cell, ci) => (
                                    <td key={ci} className="px-3 py-2 border-b border-gray-100 text-gray-700">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* References */}
            {article.references && article.references.length > 0 && (
              <section className="mb-8">
                <h2 className="font-playfair text-xl text-gray-900 mb-3 flex items-center gap-2">
                  <span className="block w-1 h-6 bg-gold-400 rounded-full" />
                  References
                </h2>
                <ol className="space-y-2 list-decimal list-outside pl-5">
                  {article.references.map((ref, i) => (
                    <li key={i} className="text-gray-700 leading-relaxed font-lora text-[0.9rem]">
                      {ref}
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Citation */}
            <section className="mb-8">
              <h2 className="font-playfair text-xl text-gray-900 mb-3 flex items-center gap-2">
                <span className="block w-1 h-6 bg-gold-400 rounded-full" />
                Cite This Article
              </h2>
              <CitationBox citation={article.citation} doi={article.doi} />
            </section>

            {/* Disclaimer note */}
            <div className="rounded-xl border border-gold-200 bg-gold-50 p-4 text-sm text-gray-600 mb-8">
              <p>
                <strong className="text-navy-800">Peer Review Statement:</strong>{' '}
                This article underwent double-blind peer review by a minimum of two independent experts. Received:{' '}
                <span className="font-medium">{formatDate(article.publishedDate)}</span>. Accepted after revision.
                Published under{' '}
                <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-navy-700 underline">
                  CC BY 4.0
                </a>.
              </p>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section>
                <h2 className="font-playfair text-xl text-navy-800 mb-5 flex items-center gap-2">
                  <span className="block w-1 h-6 bg-gold-400 rounded-full" />
                  Related Articles
                </h2>
                <div className="space-y-4">
                  {relatedArticles.map((a) => (
                    <ArticleCard key={a.id} article={a} variant="horizontal" />
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* ══ SIDEBAR ═══════════════════════════════════════ */}
          <aside className="space-y-6 mt-10 lg:mt-0">

            {/* Download panel */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="font-playfair text-lg text-gray-900 mb-4">Access Article</h3>
              <a
                href={article.pdfUrl ?? '#'}
                className="flex items-center justify-center gap-2 w-full bg-navy-800 hover:bg-navy-900 text-white font-semibold py-3 rounded-xl transition-colors mb-3 text-sm"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <button className="flex items-center justify-center gap-2 w-full border border-navy-200 text-navy-700 hover:bg-navy-50 font-medium py-2.5 rounded-xl transition-colors text-sm">
                <BookMarked className="w-4 h-4" />
                Add to Reading List
              </button>
              {/*
              <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 text-center">
                {article.downloadCount.toLocaleString('en-IN')} downloads
              </div>
              */}
            </div>

            {/* Quick stats */}
            {/*
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="font-playfair text-lg text-gray-900 mb-4">Article Metrics</h3>
              <div className="space-y-3">
                {[
                  { label: 'Views', value: article.viewCount.toLocaleString('en-IN'), icon: Eye },
                  { label: 'Downloads', value: article.downloadCount.toLocaleString('en-IN'), icon: Download },
                  { label: 'Citations', value: article.citationCount, icon: Quote },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon className="w-4 h-4 text-navy-400" />
                      {label}
                    </span>
                    <span className="font-semibold text-navy-800 text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            */}

            {/* Share */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="font-playfair text-lg text-gray-900 mb-3">Share</h3>
              <div className="flex gap-2">
                {[
                  { label: 'X', bg: 'bg-black', href: `https://x.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}` },
                  { label: 'LI', bg: 'bg-[#0A66C2]', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}` },
                  { label: 'Email', bg: 'bg-gray-700', href: `mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(window.location.href)}` },
                ].map(({ label, bg, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 ${bg} text-white text-xs font-semibold py-2 rounded-lg text-center hover:opacity-90 transition-opacity`}
                  >
                    {label}
                  </a>
                ))}
                <button
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="flex-1 bg-gray-100 text-gray-700 text-xs font-semibold py-2 rounded-lg text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-1"
                >
                  <Share2 className="w-3 h-3" /> Copy
                </button>
              </div>
            </div>

            {/* Corresponding Author */}
            {/*
            {correspondingAuthor && correspondingAuthor.email && (
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <h3 className="font-playfair text-lg text-gray-900 mb-3">Correspondence</h3>
                <p className="text-sm text-gray-600 mb-1 font-semibold">{correspondingAuthor.name}</p>
                <p className="text-xs text-gray-500 mb-2">{correspondingAuthor.affiliation}</p>
                <a
                  href={`mailto:${correspondingAuthor.email}`}
                  className="text-sm text-navy-700 hover:underline flex items-center gap-1"
                >
                  <Globe className="w-3.5 h-3.5" />
                  {correspondingAuthor.email}
                </a>
              </div>
            )}
            */}

            {/* Issue link */}
            <div className="bg-navy-800 text-white rounded-2xl p-5">
              <p className="text-xs text-navy-300 uppercase tracking-widest mb-1">From the Issue</p>
              <p className="font-playfair text-base mb-3">
                Vol. {article.volume}, No. {article.issue} · {article.year}
              </p>
              <Link
                to={`/issues?vol=${article.volume}&iss=${article.issue}`}
                className="inline-flex items-center gap-1.5 text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                View Full Issue
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
