import { useState, useEffect } from 'react';

export function ReadingProgressBar() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 h-1 bg-transparent z-40 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-cyan-600 to-emerald-500 transition-all duration-150"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
}
