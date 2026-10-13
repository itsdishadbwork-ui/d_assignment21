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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Fictional Educational Disclosure */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-cyan-400 font-display">Pure</span>
              <span className="text-xl font-bold tracking-tight text-emerald-400 font-display">Sip</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              PureSip is an independent fictional educational resource established to explore the science of UV-C sanitization, reusable bottle hygiene, and sustainable personal hydration practices.
            </p>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 leading-relaxed">
              <strong className="text-amber-300 font-semibold block mb-1">Educational Disclosure</strong>
              PureSip is purely a fictional educational project. We do not sell water bottles, manufacture hardware, receive affiliate commissions, or endorse commercial brands. Always consult product manuals for manufacturer safety instructions.
            </div>
          </div>

          {/* Column 2: Educational Articles */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Educational Guides</h4>
            <ul className="space-y-2.5 text-sm">
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
                  href="/benefits-of-self-cleaning-water-bottles"
                  onClick={(e) => handleNav(e, '/benefits-of-self-cleaning-water-bottles')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Hygiene Benefits & Limits
                </a>
              </li>
              <li>
                <a
                  href="/how-to-choose-a-self-cleaning-water-bottle"
                  onClick={(e) => handleNav(e, '/how-to-choose-a-self-cleaning-water-bottle')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Practical Buyer Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Site & Transparency Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Resources & Index</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNav(e, '/')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Homepage & Overview
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  XML Sitemap
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Robots Directive
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
            <span>Zero Commercial Affiliate Links</span>
            <span aria-hidden="true">·</span>
            <span>Non-Clinical Content</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
