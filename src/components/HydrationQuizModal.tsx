import { useState } from 'react';
import { X, CheckCircle2, RotateCcw } from 'lucide-react';

interface HydrationQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export function HydrationQuizModal({ isOpen, onClose, onNavigate }: HydrationQuizModalProps) {
  const [step, setStep] = useState<number>(1);
  const [lifestyle, setLifestyle] = useState<string>('');
  const [washHabit, setWashHabit] = useState<string>('');
  const [priority, setPriority] = useState<string>('');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setLifestyle('');
    setWashHabit('');
    setPriority('');
  };

  const getRecommendation = () => {
    if (lifestyle === 'hiking' || priority === 'wilderness') {
      return {
        title: 'Physical Hollow-Fiber Filter Bottle',
        subtitle: 'Best for outdoor backcountry and untreated water sources',
        description: 'Because you frequently encounter unfiltered wilderness water, standard UV-C bottles are not sufficient alone. You need mechanical hollow-fiber membrane filtration (0.1–0.2 micron) to remove sediment, cysts, and protozoa from streams.',
        articlePath: '/how-to-choose-a-self-cleaning-water-bottle',
        articleText: 'See Buyer Guide for Filter Comparison'
      };
    }

    if (washHabit === 'forgetful' || priority === 'odor') {
      return {
        title: 'UV-C LED Self-Cleaning Insulated Bottle',
        subtitle: 'Best match for busy schedules and odor prevention',
        description: 'An automatic UV-C bottle is an ideal fit. Periodic germicidal light cycles prevent the foul bacterial smell that quickly develops when water sits in dark containers between washes, giving you peace of mind without scrubbing daily.',
        articlePath: '/how-self-cleaning-water-bottles-work',
        articleText: 'Learn How UV-C Technology Works'
      };
    }

    return {
      title: 'Standard Double-Wall Vacuum Insulated Bottle',
      subtitle: 'Great value for disciplined daily washers',
      description: 'If you already hand-wash your bottle daily with soapy water and refill exclusively from reliable home or office taps, a traditional vacuum insulated bottle delivers 24-hour chilled water without needing electronic charging.',
      articlePath: '/benefits-of-self-cleaning-water-bottles',
      articleText: 'Read about Bottle Hygiene Reality'
    };
  };

  const rec = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-1">Interactive Diagnostic Tool</p>
          <h3 className="text-xl font-bold text-slate-900 font-display">Hydration Bottle Matcher</h3>
          <p className="text-xs text-slate-500 mt-1">Answer 3 brief questions to determine whether a self-cleaning bottle suits your daily habits.</p>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-800">1. What best describes your primary daily routine?</h4>
            <div className="space-y-2.5">
              {[
                { id: 'campus', title: 'Student or Desk Professional', desc: 'Refilling multiple times daily at campus fountains or office taps.' },
                { id: 'gym', title: 'Gym & Fitness Enthusiast', desc: 'Frequent intense workouts where bottles sit in gym bags and cars.' },
                { id: 'hiking', title: 'Travel & Outdoor Backpacker', desc: 'Long journeys, airports, camping, or varied municipal sources.' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setLifestyle(item.id);
                    setStep(2);
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    lifestyle === item.id
                      ? 'border-cyan-600 bg-cyan-50/50 text-cyan-900'
                      : 'border-slate-200 hover:border-cyan-300 hover:bg-slate-50'
                  }`}
                >
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-800">2. How frequently do you wash your reusable bottle with soap?</h4>
            <div className="space-y-2.5">
              {[
                { id: 'daily', title: 'Every single night without fail', desc: 'I wash with hot water, bottle brush, and dish soap after each use.' },
                { id: 'occasional', title: 'Every 3 to 5 days', desc: 'I rinse it daily but only deep-scrub it every few days.' },
                { id: 'forgetful', title: 'Rarely / I often forget', desc: 'I often notice a damp musty odor before I finally wash it.' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setWashHabit(item.id);
                    setStep(3);
                  }}
                  className="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-cyan-300 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-800">3. What is your top priority for your hydration container?</h4>
            <div className="space-y-2.5">
              {[
                { id: 'odor', title: 'Zero musty odor & hands-free sanitization', desc: 'I want water that tastes fresh even after sitting in the car or desk all day.' },
                { id: 'cold', title: 'Maximum cold temperature retention & low cost', desc: 'Keeping water icy cold without needing to charge another electronic gadget.' },
                { id: 'wilderness', title: 'Removing sediment & wilderness stream pathogens', desc: 'Filtering dirt and protozoa during trail hikes and backcountry travel.' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setPriority(item.id);
                    setStep(4);
                  }}
                  className="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-cyan-300 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Result */}
        {step === 4 && (
          <div className="space-y-5 animate-fade-in">
            <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-700 shrink-0" />
                <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider">Recommended Match</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-display">{rec.title}</h4>
              <p className="text-xs font-medium text-cyan-800 mt-0.5">{rec.subtitle}</p>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">{rec.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onNavigate(rec.articlePath);
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors text-center cursor-pointer"
              >
                {rec.articleText}
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto py-2.5 px-3 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restart</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
