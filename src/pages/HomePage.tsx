import { useState } from 'react';
import { ArrowRight, ShieldCheck, Zap, AlertCircle, Droplets, Check, Compass, BatteryCharging } from 'lucide-react';
import heroBottleImg from '../assets/images/puresip_hero_bottle_1791915639723.jpg';
import { HOMEPAGE_FAQS, ARTICLES_CONFIG } from '../data/articlesData.ts';
import { FAQAccordion } from '../components/FAQAccordion.tsx';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenMatcher: () => void;
}

export function HomePage({ onNavigate, onOpenMatcher }: HomePageProps) {
  const [activeTab, setActiveTab] = useState<'benefits' | 'limitations'>('benefits');

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <main className="min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="text-cyan-700">Educational Hydration Guide</span>
                <span aria-hidden="true">·</span>
                <span>Self-Cleaning Technology</span>
                <span aria-hidden="true">·</span>
                <span>Bottle Hygiene</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display leading-[1.15] text-balance">
                Understanding Self-Cleaning Water Bottles & Modern Hydration Hygiene
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Explore how UV-C germicidal technology prevents bacterial build-up in reusable bottles, examine practical hygiene realities for students and active travellers, and discover how to choose the right hydration gear for your daily routine.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="/how-self-cleaning-water-bottles-work"
                  onClick={(e) => handleLink(e, '/how-self-cleaning-water-bottles-work')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-xl transition-colors shadow-sm whitespace-nowrap"
                >
                  <span>Read Technology Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={onOpenMatcher}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Interactive Bottle Matcher</span>
                </button>
              </div>

              {/* Quiet Educational Highlights */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-xs text-slate-600">
                <div>
                  <span className="font-bold text-slate-900 block text-sm">260–280 nm</span>
                  <span>Germicidal UV-C band</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-sm">2–4 Hours</span>
                  <span>Automated cycle interval</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-sm">100% Unbiased</span>
                  <span>Fictional educational research</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm aspect-[4/3] lg:aspect-[16/11]">
                <img
                  src={heroBottleImg}
                  alt="Modern brushed stainless steel self-cleaning water bottle resting on a tabletop with clean water droplets"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* 2. Educational Section 1: Question-style H2 with direct answer in sentence 1-2 */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold text-cyan-700 uppercase tracking-wider">Core Definition</div>
            
            {/* Required Question-Style H2 with direct answer in first 1-2 sentences */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              What is a self-cleaning water bottle?
            </h2>
            
            <p className="text-base text-slate-700 leading-relaxed">
              A self-cleaning water bottle is a reusable beverage container outfitted with an integrated electronic cap that emits germicidal ultraviolet light (typically UV-C) into the vessel. This automated light exposure breaks down microbial genetic material to prevent bacterial proliferation and halt the development of stubborn musty bottle odors.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Unlike ordinary stainless steel or plastic bottles that rely purely on manual hand scrubbing, a self-cleaning bottle introduces active sanitization. An internal rechargeable lithium battery powers miniature solid-state light-emitting diodes (LEDs) calibrated to ultraviolet wavelengths that continually sanitize both the stored drinking water and the internal reflective stainless steel walls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-100">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 font-display">Active Germicidal Action</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Neutralizes microbial DNA rather than masking smells with chemical sanitizers or synthetic coatings.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 font-display">Autonomous Periodic Cycles</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Smart caps run automated 15-to-60 second cleaning bursts every few hours, even when forgotten inside a backpack.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 font-display">Double-Wall Thermal Vacuum</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Most models utilize vacuum-sealed 18/8 food-grade stainless steel to preserve iced water for 24 hours without sweating.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Educational Section 2: Question-style H2 with direct answer in sentence 1-2 */}
        <section className="bg-slate-50/70 rounded-2xl border border-slate-200 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold text-cyan-700 uppercase tracking-wider">Scientific Principles</div>

              {/* Required Question-Style H2 with direct answer in first 1-2 sentences */}
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
                How does self-cleaning bottle technology generally sanitize water?
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Self-cleaning bottles sanitize water by directing short-wavelength UV-C radiation (between 260 and 280 nanometers) directly through the liquid column and across the interior walls. Photons at this specific frequency penetrate microbial cell walls, scrambling DNA and RNA bonds so bacteria, mold spores, and viruses cannot replicate or cause illness.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                The primary mechanism is the photochemical formation of thymine dimers. When cellular DNA absorbs UV-C photons, adjacent thymine bases fuse together, rendering the organism sterile and non-pathogenic. Because the interior of the bottle is typically electropolished stainless steel, the germicidal rays reflect and scatter throughout the chamber, optimizing photon distribution.
              </p>

              <div className="pt-2">
                <a
                  href="/how-self-cleaning-water-bottles-work"
                  onClick={(e) => handleLink(e, '/how-self-cleaning-water-bottles-work')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-900 transition-colors"
                >
                  <span>Explore the complete scientific breakdown of UV-C technology</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">The Germicidal Spectrum</h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-800 block">UV-A (315–400 nm)</span>
                  <span className="text-slate-500">Tanning and sunlight; no significant germicidal disruption.</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-800 block">UV-B (280–315 nm)</span>
                  <span className="text-slate-500">Sunburn spectrum; moderate cellular stress but slow kill rates.</span>
                </div>
                <div className="p-3 rounded-lg bg-cyan-50/70 border border-cyan-200">
                  <span className="font-bold text-cyan-900 block">UV-C (200–280 nm) · Germicidal Peak</span>
                  <span className="text-cyan-800">Peak nucleic acid absorption at 265 nm. Completely neutralizes pathogens.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Benefits vs Limitations Interactive Tab Section */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold text-cyan-700 uppercase tracking-wider">Objective Analysis</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight mt-1">
                Potential Benefits and Practical Limitations
              </h2>
            </div>

            {/* Tab switch control */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('benefits')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'benefits'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Key Benefits
              </button>
              <button
                onClick={() => setActiveTab('limitations')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'limitations'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Crucial Limitations
              </button>
            </div>
          </div>

          {activeTab === 'benefits' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-bold text-slate-900">Prevention of Bacterial Odor</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Eliminates the stale, swampy smell common in standard bottles by stopping bacterial exponential doubling before volatile organic odor compounds can accumulate.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-bold text-slate-900">Effortless Campus & Office Convenience</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Students and office professionals don’t need to pack bottle brushes or dish soap to university libraries or daily commutes.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-bold text-slate-900">Confidence During Travel</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Provides a reassuring secondary barrier when refilling from hotel bathrooms, airport potable water fountains, or gym hydration stations.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-bold text-slate-900">Sustainable Habit Reinforcement</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Encourages regular daily hydration by keeping water crisp and tasting fresh, lowering reliance on single-use bottled water.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              <div className="p-5 rounded-xl border border-amber-200/80 bg-amber-50/30 space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-bold text-slate-900">Zero Physical Filtration</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  UV-C light kills biological organisms but does not remove microplastics, silt, dirt, sand, rust, chlorine, lead, or dissolved chemical contaminants.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-amber-200/80 bg-amber-50/30 space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-bold text-slate-900">Turbidity & Shadowing Vulnerability</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cloudy or muddy wilderness water blocks ultraviolet transmission. Microbes shielded behind suspended particulate matter escape exposure.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-amber-200/80 bg-amber-50/30 space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-bold text-slate-900">Mouthpiece Rim Still Requires Washing</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The UV-C beam shines downwards into the water. Saliva, food particles, and lip oils collected on the outer drinking lip and thread grooves must still be rinsed by hand.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-amber-200/80 bg-amber-50/30 space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-bold text-slate-900">Higher Initial Purchase Price</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Electronic smart caps, rechargeable batteries, and optical quartz lenses place these bottles in the $60–$115 range, substantially higher than basic steel tumblers.
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Read full hygiene analysis in our dedicated guide:</span>
            <a
              href="/benefits-of-self-cleaning-water-bottles"
              onClick={(e) => handleLink(e, '/benefits-of-self-cleaning-water-bottles')}
              className="font-semibold text-cyan-700 hover:text-cyan-900"
            >
              Benefits & Health Realities Guide →
            </a>
          </div>
        </section>

        {/* 5. Educational Guides Navigation Cards (Links to all 3 articles) */}
        <section className="space-y-6">
          <div>
            <p className="text-xs font-semibold text-cyan-700 uppercase tracking-wider">Educational Library</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight mt-1">
              Deep-Dive Guides & In-Depth Research
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Access comprehensive, peer-reviewed educational articles on sanitization mechanics, hygiene management, and buyer criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Article 1 */}
            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:border-cyan-300 transition-colors shadow-xs">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={ARTICLES_CONFIG['how-self-cleaning-water-bottles-work'].image}
                  alt={ARTICLES_CONFIG['how-self-cleaning-water-bottles-work'].imageAlt}
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>Technology & Science</span>
                  <span aria-hidden="true">·</span>
                  <span>6 min read</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display leading-snug">
                  <a
                    href="/how-self-cleaning-water-bottles-work"
                    onClick={(e) => handleLink(e, '/how-self-cleaning-water-bottles-work')}
                    className="hover:text-cyan-700 transition-colors"
                  >
                    How Do Self-Cleaning Water Bottles Work?
                  </a>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                  Examine the exact photobiological mechanisms of UV-C LED emitters, automated cycle timing, and manufacturer safety practices.
                </p>
                <div className="pt-2 border-t border-slate-100">
                  <a
                    href="/how-self-cleaning-water-bottles-work"
                    onClick={(e) => handleLink(e, '/how-self-cleaning-water-bottles-work')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-900 transition-colors"
                  >
                    <span>Read Technology Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>

            {/* Card 2: Article 2 */}
            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:border-cyan-300 transition-colors shadow-xs">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={ARTICLES_CONFIG['benefits-of-self-cleaning-water-bottles'].image}
                  alt={ARTICLES_CONFIG['benefits-of-self-cleaning-water-bottles'].imageAlt}
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>Hygiene & Lifestyle</span>
                  <span aria-hidden="true">·</span>
                  <span>6 min read</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display leading-snug">
                  <a
                    href="/benefits-of-self-cleaning-water-bottles"
                    onClick={(e) => handleLink(e, '/benefits-of-self-cleaning-water-bottles')}
                    className="hover:text-cyan-700 transition-colors"
                  >
                    What Are the Benefits of Self-Cleaning Bottles?
                  </a>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                  Understand why dark water containers smell bad, how active sanitization helps travellers, and why exaggerated claims must be rejected.
                </p>
                <div className="pt-2 border-t border-slate-100">
                  <a
                    href="/benefits-of-self-cleaning-water-bottles"
                    onClick={(e) => handleLink(e, '/benefits-of-self-cleaning-water-bottles')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-900 transition-colors"
                  >
                    <span>Read Benefits & Hygiene Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>

            {/* Card 3: Article 3 */}
            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:border-cyan-300 transition-colors shadow-xs">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={ARTICLES_CONFIG['how-to-choose-a-self-cleaning-water-bottle'].image}
                  alt={ARTICLES_CONFIG['how-to-choose-a-self-cleaning-water-bottle'].imageAlt}
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>Buyer Guide & Comparison</span>
                  <span aria-hidden="true">·</span>
                  <span>7 min read</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display leading-snug">
                  <a
                    href="/how-to-choose-a-self-cleaning-water-bottle"
                    onClick={(e) => handleLink(e, '/how-to-choose-a-self-cleaning-water-bottle')}
                    className="hover:text-cyan-700 transition-colors"
                  >
                    How to Choose a Self-Cleaning Water Bottle
                  </a>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                  Compare battery life, optical safety sensors, thermal insulation, and port waterproofing in a comprehensive buyer comparison table.
                </p>
                <div className="pt-2 border-t border-slate-100">
                  <a
                    href="/how-to-choose-a-self-cleaning-water-bottle"
                    onClick={(e) => handleLink(e, '/how-to-choose-a-self-cleaning-water-bottle')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-900 transition-colors"
                  >
                    <span>Read Buyer Guide & Matrix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 6. FAQ Section */}
        <FAQAccordion
          items={HOMEPAGE_FAQS}
          title="Frequently Asked Questions About Self-Cleaning Bottles"
          subtitle="Clear, objective answers to common questions about sanitization efficacy, safety, and everyday bottle care."
        />

        {/* 7. About PureSip Section */}
        <section className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold text-cyan-700 uppercase tracking-wider">About This Resource</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              About PureSip & Our Educational Mission
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              PureSip is an independent fictional educational website established to provide evidence-based, scientifically accurate information concerning reusable hydration containers, microbial bottle contamination, and ultraviolet sanitization technology.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Many consumer marketing claims exaggerate what self-cleaning electronics can achieve. Our mission is to demystify UV-C physics, promote honest expectations regarding physical filtration versus optical disinfection, and help university students, commuters, and fitness enthusiasts maintain sanitary hydration habits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-xs">
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Independent & Fictional</span>
              <span className="text-slate-600">PureSip is not affiliated with any consumer brand or manufacturer.</span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Scientific Integrity</span>
              <span className="text-slate-600">Grounded in established photobiological and microbial sanitation physics.</span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Actionable Guidance</span>
              <span className="text-slate-600">Realistic maintenance tips to keep both bottles and drinking lips sanitary.</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
