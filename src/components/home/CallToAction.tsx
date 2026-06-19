import { Link } from 'react-router-dom';
import { FileText, Mail, ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section aria-labelledby="cta-heading" className="py-20 bg-navy-800 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold-400 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-gold-400 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Submit */}
          <div className="bg-navy-700/50 border border-navy-600 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-gold-400/20 border border-gold-400/30 flex items-center justify-center mb-5">
              <FileText size={22} className="text-gold-400" aria-hidden="true" />
            </div>
            <h2 id="cta-heading" className="font-display text-2xl text-white font-semibold mb-3">
              Submit Your Research
            </h2>
            <p className="font-ui text-white/70 text-sm leading-relaxed mb-6">
              We welcome original research articles, systematic reviews, and case studies
              from across health, environmental, and social science disciplines.
              Rigorous double-blind peer review. Average decision in 21 days.
            </p>
            <Link
              to="/submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-400 text-navy-950 text-sm font-ui font-semibold rounded-lg hover:bg-gold-500 transition-colors shadow-gold"
            >
              Author Guidelines <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          {/* Subscribe / Contact */}
          <div className="bg-navy-700/50 border border-navy-600 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-gold-400/20 border border-gold-400/30 flex items-center justify-center mb-5">
              <Mail size={22} className="text-gold-400" aria-hidden="true" />
            </div>
            <h3 className="font-display text-2xl text-white font-semibold mb-3">
              Stay Updated
            </h3>
            <p className="font-ui text-white/70 text-sm leading-relaxed mb-6">
              Subscribe to receive table of contents alerts for new issues,
              editor-selected article highlights, and journal news directly to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
              aria-label="Newsletter subscription"
            >
              <input
                type="email"
                placeholder="your.email@institution.edu"
                aria-label="Email address"
                className="flex-1 px-4 py-2.5 bg-navy-900/50 border border-white/20 rounded-lg text-white placeholder:text-white/35 text-sm font-ui focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-white text-navy-800 text-sm font-ui font-medium rounded-lg hover:bg-cream transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
