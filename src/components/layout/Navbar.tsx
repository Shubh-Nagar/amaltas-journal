import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, ExternalLink } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'Issues',
    to: '/issues',
    children: [
      { label: 'Current Issue', to: '/issues?vol=14&iss=2' },
      { label: 'All Archives', to: '/issues' },
    ],
  },
  { label: 'About', to: '/about' },
  { label: 'Editorial Board', to: '/editorial-board' },
  {
    label: 'For Authors',
    to: '/submit',
    children: [
      { label: 'Submit Manuscript', to: '/submit' },
      { label: 'Information for Authors', to: '/author-guidelines' },
    ],
  },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement Bar */}
      <div className="announce-bar hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-white/70 text-xs font-ui">
            <span>ISSN (Print): <strong className="text-white/90">2582-7341</strong></span>
            <span className="text-white/30">|</span>
            <span>ISSN (Online): <strong className="text-white/90">2582-7352</strong></span>
            <span className="text-white/30">|</span>
            <span>Amaltas University Press</span>
          </div>
          <a
            href="https://amaltasuniversity.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gold-400 hover:text-gold-300 transition-colors text-xs font-ui"
          >
            <ExternalLink size={11} /> University Website
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={clsx(
          'bg-white border-b transition-all duration-200',
          scrolled ? 'border-gray-200 shadow-md' : 'border-gray-200'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label="IJRHM Home"
            >
              <img
                src="/journal-logo.jpeg"
                alt="IJRHM"
                className="h-10 w-auto object-contain rounded shadow-sm group-hover:shadow-md transition-shadow"
              />
              <div>
                <span className="block font-display text-gray-900 font-semibold text-base leading-tight">IJRHM</span>
                <span className="block font-ui text-gray-500 text-xs leading-tight hidden sm:block">Amaltas University Press</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div ref={dropdownRef} className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className={clsx(
                        'flex items-center gap-1 px-3 py-2 font-ui text-sm font-medium rounded transition-colors',
                        openDropdown === link.label
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      )}
                      aria-haspopup="menu"
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={clsx('transition-transform', openDropdown === link.label && 'rotate-180')}
                        aria-hidden="true"
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div
                        role="menu"
                        className="nav-dropdown absolute top-full left-0 w-52 bg-white border border-navy-100 rounded-lg shadow-card-hover overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            role="menuitem"
                            className="block px-4 py-2.5 font-ui text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      clsx(
                        'px-3 py-2 font-ui text-sm font-medium rounded transition-colors',
                        isActive
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      )
                    }
                    end={link.to === '/'}
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Toggle search"
                className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <Search size={18} aria-hidden="true" />
              </button>

              {/* Submit CTA */}
              <Link
                to="/submit"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-navy-800 text-white text-sm font-ui font-medium rounded hover:bg-navy-700 transition-colors shadow-sm"
              >
                Submit Manuscript
              </Link>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Inline Search Bar */}
          {searchOpen && (
            <div className="pb-4 border-t border-gray-200 pt-3 animate-slide-up">
              <form onSubmit={handleSearch} role="search" className="flex gap-2">
                <input
                  autoFocus
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, authors, keywords…"
                  aria-label="Search"
                  className="flex-1 px-4 py-2.5 border border-navy-200 rounded-lg font-ui text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:border-gold-400"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-gold-400 text-navy-950 text-sm font-ui font-medium rounded-lg hover:bg-gold-500 transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white animate-slide-up">
            <nav aria-label="Mobile navigation" className="px-4 py-3 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() =>
                        setMobileOpenDropdown(mobileOpenDropdown === link.label ? null : link.label)
                      }
                      className="flex items-center justify-between w-full px-4 py-2.5 font-ui text-sm font-medium rounded-lg transition-colors text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={clsx(
                          'transition-transform',
                          mobileOpenDropdown === link.label && 'rotate-180'
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    {mobileOpenDropdown === link.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-navy-100 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block px-3 py-2 font-ui text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                            onClick={() => {
                              setMenuOpen(false);
                              setMobileOpenDropdown(null);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      clsx(
                        'block px-4 py-2.5 font-ui text-sm font-medium rounded-lg transition-colors',
                        isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      )
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <div className="pt-2 border-t border-gray-200 mt-2">
                <Link
                  to="/submit"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-4 py-2.5 bg-navy-800 text-white text-sm font-ui font-medium rounded-lg hover:bg-navy-700 transition-colors"
                >
                  Submit Manuscript
                </Link>
              </div>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}
