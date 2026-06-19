import SearchBar from '../ui/SearchBar';
import Button from '../ui/Button';
import { ArrowRight, BookOpen, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      aria-label="Journal hero"
      className="relative bg-navy-800 overflow-hidden grain-overlay"
    >
      {/* Decorative geometric shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-navy-700 opacity-40 translate-x-32 -translate-y-20 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-navy-900 opacity-60 -translate-x-20 translate-y-20 blur-2xl" aria-hidden="true" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-gold-400 opacity-60" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: text content */}
          <div className="flex-1 min-w-0">
            {/* Kicker label */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <span className="gold-rule" aria-hidden="true" />
              <span className="section-label text-gold-400">Amaltas University Press</span>
            </div>

            {/* Journal title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-4 animate-slide-up delay-100">
              International Journal of{' '}
              <span className="text-gold-400">Rural Health</span>
              {' '}&amp; Medicine
            </h1>

            {/* Subtitle / scope */}
            <p className="font-ui text-white/70 text-lg leading-relaxed mb-8 max-w-2xl animate-slide-up delay-200">
              A peer-reviewed, open-access quarterly journal publishing multidisciplinary
              research at the intersection of public health, environmental science,
              and social development.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12 animate-slide-up delay-400">
              <Button href="/issues" variant="gold" size="lg">
                <BookOpen size={18} aria-hidden="true" /> Browse Current Issue
              </Button>
              <Button href="/submit" variant="outline-white" size="lg">
                <FileText size={18} aria-hidden="true" /> Submit Manuscript
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>

            {/* Search */}
            <div className="animate-slide-up delay-500">
              <SearchBar onDark placeholder="Search articles, authors, topics…" />
            </div>
          </div>

          {/* Right: journal logo */}
          <div className="flex-shrink-0 flex items-center justify-center animate-fade-in">
            <img
              src="/journal-logo.jpeg"
              alt="IJRHM Journal Logo"
              className="w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" className="w-full h-8 text-cream fill-current">
          <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
        </svg>
      </div>
    </section>
  );
}
