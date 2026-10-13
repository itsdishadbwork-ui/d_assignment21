import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenMatcher: () => void;
}

export function Navbar({ currentPath, onNavigate, onOpenMatcher }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'How It Works', path: '/how-self-cleaning-water-bottles-work' },
    { label: 'Benefits & Limits', path: '/benefits-of-self-cleaning-water-bottles' },
    { label: 'Buyer Guide', path: '/how-to-choose-a-self-cleaning-water-bottle' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="text-xl font-bold tracking-tight text-slate-900 hover:text-cyan-700 transition-colors whitespace-nowrap shrink-0 font-display flex items-center gap-1.5"
        >
          <span className="text-cyan-600">Pure</span>
          <span className="text-emerald-700">Sip</span>
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`transition-colors whitespace-nowrap shrink-0 pb-0.5 border-b-2 ${
                  isActive
                    ? 'text-cyan-800 border-cyan-600 font-semibold'
                    : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenMatcher}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bottle Matcher</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-50 text-cyan-900 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMatcher();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Bottle Matcher</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
