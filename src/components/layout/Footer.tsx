import { Link } from 'react-router-dom';
import { BookOpen, Mail, MapPin, ExternalLink } from 'lucide-react';

const journalLinks = [
  { label: 'About the Journal', to: '/about' },
  { label: 'Editorial Board', to: '/editorial-board' },
  { label: 'Submit a Manuscript', to: '/submit' },
  { label: 'Information for Authors', to: '/author-guidelines' },
  { label: 'All Issues / Archives', to: '/issues' },
  { label: 'Contact', to: '/contact' },
];

const policyLinks = [
  { label: 'Peer Review Policy', to: '/about#peer-review' },
  { label: 'Open Access Policy', to: '/about#open-access' },
  { label: 'Ethics & Misconduct', to: '/about#ethics' },
  { label: 'Author Guidelines', to: '/submit#guidelines' },
  { label: 'Copyright & Permissions', to: '/about#copyright' },
];

const indexingLinks = [
  'Scopus', 'PubMed Central', 'Web of Science',
  'DOAJ', 'EMBASE', 'IndMED',
];

export default function Footer() {
  return (
    <footer
      className="relative text-white overflow-hidden"
      role="contentinfo"
      style={{
        backgroundImage: 'url(/amaltas-night.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay so text stays legible over the image */}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      {/* Gold accent line */}
      <div className="relative h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-gold-400 transition-colors">
                <BookOpen size={20} className="text-gold-400" aria-hidden="true" />
              </div>
              <div>
                <span className="block font-display text-white font-semibold">IJRHM</span>
                <span className="block text-white/50 text-xs font-ui">Amaltas University</span>
              </div>
            </Link>
            <p className="font-ui text-white/70 text-sm leading-relaxed mb-5">
              International Journal of Rural Health and Medicine (IJRHM) — a quarterly, peer-reviewed, open-access journal advancing multidisciplinary research for a healthier, more equitable world.
            </p>
            <div className="space-y-2 text-sm font-ui text-white/55">
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-gold-400 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:contactus@ijrhm.com" className="hover:text-gold-400 transition-colors">
                  contactus@ijrhm.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-gold-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Village Bangar, Dewas–Ujjain Highway, District Dewas, MP 455001</span>
              </div>
            </div>
          </div>

          {/* Journal Links */}
          <div>
            <h3 className="font-ui text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">Journal</h3>
            <ul className="space-y-2.5">
              {journalLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="font-ui text-sm text-white/65 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-ui text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">Policies</h3>
            <ul className="space-y-2.5">
              {policyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="font-ui text-sm text-white/65 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Indexing */}
          {/*
          <div>
            <h3 className="font-ui text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">Indexed In</h3>
            <ul className="space-y-2.5">
              {indexingLinks.map((name) => (
                <li key={name} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" aria-hidden="true" />
                  <span className="font-ui text-sm text-white/65">{name}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-navy-700">
              <p className="font-ui text-xs text-navy-500">Impact Factor</p>
              <p className="font-display text-2xl text-white font-semibold">3.82</p>
              <p className="font-ui text-xs text-navy-500 mt-0.5">CiteScore 2024</p>
            </div>
          </div>
          */}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-ui text-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Amaltas University Press. All rights reserved.
            &nbsp;|&nbsp; ISSN 2582-7341 (Print) &nbsp;|&nbsp; ISSN 2582-7352 (Online)
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-ui text-xs text-white/45 hover:text-white/70 transition-colors"
            >
              <span className="border border-white/20 rounded px-1.5 py-0.5 text-white/55">CC BY 4.0</span>
              <ExternalLink size={10} aria-hidden="true" />
            </a>
            <a
              href="https://amaltas.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-xs text-white/45 hover:text-white/70 transition-colors"
            >
              Amaltas University
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
