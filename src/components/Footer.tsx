interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Brand & Fictional Educational Disclosure */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-cyan-400 font-display">Pure</span>
              <span className="text-xl font-bold tracking-tight text-emerald-400 font-display">Sip</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              PureSip is an independent fictional educational publication created to explore UV-C sanitization science, reusable bottle hygiene, and sustainable personal hydration practices.
            </p>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 leading-relaxed">
              <strong className="text-amber-300 font-semibold block mb-1">Educational Disclosure</strong>
              PureSip is purely a fictional educational project. We do not sell water bottles, manufacture hardware, receive affiliate commissions, or endorse commercial brands. Always consult product manuals for manufacturer safety instructions.
            </div>
          </div>

          {/* Column: Technology & Science */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Technology & Science</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="/how-self-cleaning-water-bottles-work"
                  onClick={(e) => handleNav(e, '/how-self-cleaning-water-bottles-work')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  How UV-C Bottles Work
                </a>
              </li>
              <li>
                <a
                  href="/uv-c-water-bottles-explained"
                  onClick={(e) => handleNav(e, '/uv-c-water-bottles-explained')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  UV-C Tech Explained
                </a>
              </li>
              <li>
                <a
                  href="/benefits-of-self-cleaning-water-bottles"
                  onClick={(e) => handleNav(e, '/benefits-of-self-cleaning-water-bottles')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Hygiene Benefits & Limits
                </a>
              </li>
              <li>
                <a
                  href="/self-cleaning-vs-regular-water-bottles"
                  onClick={(e) => handleNav(e, '/self-cleaning-vs-regular-water-bottles')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Self-Cleaning vs Regular
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Hygiene & Maintenance */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Hygiene & Maintenance</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="/how-to-clean-a-reusable-water-bottle"
                  onClick={(e) => handleNav(e, '/how-to-clean-a-reusable-water-bottle')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  How to Clean Bottles Properly
                </a>
              </li>
              <li>
                <a
                  href="/remove-smell-from-water-bottle"
                  onClick={(e) => handleNav(e, '/remove-smell-from-water-bottle')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Remove Bad Bottle Smells
                </a>
              </li>
              <li>
                <a
                  href="/maintain-a-self-cleaning-water-bottle"
                  onClick={(e) => handleNav(e, '/maintain-a-self-cleaning-water-bottle')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Maintain Self-Cleaning Caps
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Buyer & Travel Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Buyer & Lifestyle Guides</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="/how-to-choose-a-self-cleaning-water-bottle"
                  onClick={(e) => handleNav(e, '/how-to-choose-a-self-cleaning-water-bottle')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Practical Buyer Guide
                </a>
              </li>
              <li>
                <a
                  href="/are-self-cleaning-water-bottles-worth-it"
                  onClick={(e) => handleNav(e, '/are-self-cleaning-water-bottles-worth-it')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Are They Worth It? (ROI)
                </a>
              </li>
              <li>
                <a
                  href="/water-bottle-features-for-students-and-travellers"
                  onClick={(e) => handleNav(e, '/water-bottle-features-for-students-and-travellers')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Features for Students & Travellers
                </a>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  XML Sitemap (10 Articles)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 PureSip Educational Guide. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Fictional Educational Brand</span>
            <span aria-hidden="true">·</span>
            <span>10 Educational Articles</span>
            <span aria-hidden="true">·</span>
            <span>Non-Clinical Content</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
