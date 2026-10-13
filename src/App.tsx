import { useState, useEffect } from 'react';
import { SEOHead } from './components/SEOHead.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HydrationQuizModal } from './components/HydrationQuizModal.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ArticleHowItWorks } from './pages/ArticleHowItWorks.tsx';
import { ArticleBenefits } from './pages/ArticleBenefits.tsx';
import { ArticleBuyersGuide } from './pages/ArticleBuyersGuide.tsx';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path || '/';
    }
    return '/';
  });

  const [matcherOpen, setMatcherOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path || '/';
      setCurrentPath(normalizedPath);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    const normalized = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path || '/';
    if (normalized !== currentPath) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/how-self-cleaning-water-bottles-work':
        return <ArticleHowItWorks onNavigate={navigateTo} />;
      case '/benefits-of-self-cleaning-water-bottles':
        return <ArticleBenefits onNavigate={navigateTo} />;
      case '/how-to-choose-a-self-cleaning-water-bottle':
        return <ArticleBuyersGuide onNavigate={navigateTo} />;
      case '/':
      default:
        return <HomePage onNavigate={navigateTo} onOpenMatcher={() => setMatcherOpen(true)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfd]">
      {/* Dynamic SEO Head with canonical, OpenGraph and Schema.org */}
      <SEOHead pathname={currentPath} />

      {/* 3-Zone Navigation Top Bar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenMatcher={() => setMatcherOpen(true)}
      />

      {/* Active Page View */}
      <div className="flex-1">
        {renderCurrentPage()}
      </div>

      {/* Interactive Hydration Matcher Modal */}
      <HydrationQuizModal
        isOpen={matcherOpen}
        onClose={() => setMatcherOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Footer with Transparency and Educational Notice */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
