import { useState, useEffect } from 'react';
import { SEOHead } from './components/SEOHead.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HydrationQuizModal } from './components/HydrationQuizModal.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ArticleHowItWorks } from './pages/ArticleHowItWorks.tsx';
import { ArticleBenefits } from './pages/ArticleBenefits.tsx';
import { ArticleBuyersGuide } from './pages/ArticleBuyersGuide.tsx';
import { ArticleCleanReusableBottle } from './pages/ArticleCleanReusableBottle.tsx';
import { ArticleAreTheyWorthIt } from './pages/ArticleAreTheyWorthIt.tsx';
import { ArticleUvcExplained } from './pages/ArticleUvcExplained.tsx';
import { ArticleVsRegularBottles } from './pages/ArticleVsRegularBottles.tsx';
import { ArticleRemoveBadSmell } from './pages/ArticleRemoveBadSmell.tsx';
import { ArticleStudentTravelFeatures } from './pages/ArticleStudentTravelFeatures.tsx';
import { ArticleMaintainSmartBottle } from './pages/ArticleMaintainSmartBottle.tsx';

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
      // Original 3 Articles
      case '/how-self-cleaning-water-bottles-work':
        return <ArticleHowItWorks onNavigate={navigateTo} />;
      case '/benefits-of-self-cleaning-water-bottles':
        return <ArticleBenefits onNavigate={navigateTo} />;
      case '/how-to-choose-a-self-cleaning-water-bottle':
        return <ArticleBuyersGuide onNavigate={navigateTo} />;
      
      // 7 New Articles
      case '/how-to-clean-a-reusable-water-bottle':
        return <ArticleCleanReusableBottle onNavigate={navigateTo} />;
      case '/are-self-cleaning-water-bottles-worth-it':
        return <ArticleAreTheyWorthIt onNavigate={navigateTo} />;
      case '/uv-c-water-bottles-explained':
        return <ArticleUvcExplained onNavigate={navigateTo} />;
      case '/self-cleaning-vs-regular-water-bottles':
        return <ArticleVsRegularBottles onNavigate={navigateTo} />;
      case '/remove-smell-from-water-bottle':
        return <ArticleRemoveBadSmell onNavigate={navigateTo} />;
      case '/water-bottle-features-for-students-and-travellers':
        return <ArticleStudentTravelFeatures onNavigate={navigateTo} />;
      case '/maintain-a-self-cleaning-water-bottle':
        return <ArticleMaintainSmartBottle onNavigate={navigateTo} />;

      // Homepage
      case '/':
      default:
        return <HomePage onNavigate={navigateTo} onOpenMatcher={() => setMatcherOpen(true)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfd]">
      {/* Dynamic SEO Head with canonical, OpenGraph, Twitter and Schema.org */}
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
