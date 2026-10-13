import { ArrowLeft, ArrowRight, Sparkles, AlertOctagon, Heart, CheckCircle2, Calendar, Clock } from 'lucide-react';
import hygieneLifestyleImg from '../assets/images/bottle_hygiene_lifestyle_1791915641258.jpg';
import { ARTICLE_2_FAQS, ARTICLES_CONFIG } from '../data/articlesData.ts';
import { FAQAccordion } from '../components/FAQAccordion.tsx';
import { ReadingProgressBar } from '../components/ReadingProgressBar.tsx';

interface ArticleBenefitsProps {
  onNavigate: (path: string) => void;
}

export function ArticleBenefits({ onNavigate }: ArticleBenefitsProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const meta = ARTICLES_CONFIG['benefits-of-self-cleaning-water-bottles'];

  return (
    <article className="min-h-screen bg-[#fafbfd] pb-20">
      <ReadingProgressBar />

      {/* Article Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-6">
          
          {/* Breadcrumb / Back Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <a
              href="/"
              onClick={(e) => handleLink(e, '/')}
              className="hover:text-cyan-700 transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-slate-700 font-semibold">{meta.topic}</span>
          </nav>

          {/* Single Main H1 Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display leading-[1.18] text-balance">
            What Are the Benefits of Self-Cleaning Water Bottles? Hygiene, Odor Prevention, and Reality Checks
          </h1>

          {/* Unboxed Metadata (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="font-semibold text-slate-800">By PureSip Hygiene & Research Team</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Published {meta.publishedDate}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{meta.readingTime}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-cyan-700 font-medium">Hygiene Analysis</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Main Article Image with Descriptive Alt */}
        <figure className="mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
          <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden">
            <img
              src={hygieneLifestyleImg}
              alt="Stainless steel reusable hydration bottle resting on a clean wooden locker bench next to running shoes and gym bag in natural morning light"
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
          <figcaption className="p-4 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
            <span>Consistent bottle hygiene is essential for active fitness enthusiasts, students, and travellers carrying hydration throughout the day.</span>
            <span className="font-mono text-slate-400">Fig 2.1</span>
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="space-y-10 text-slate-700 leading-relaxed text-base sm:text-[17px]">

          {/* Introduction Paragraphs */}
          <div className="space-y-4">
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              Transitioning from disposable single-use plastic bottles to high-grade reusable hydration flasks is one of the most effective personal steps towards reducing environmental waste. Yet many well-intentioned consumers abandon their reusable bottles after a few months, frustrated by recurring sour odors, mysterious interior sliminess, and the tedious chore of daily brush scrubbing.
            </p>
            <p>
              Self-cleaning water bottles promise an elegant modern solution to this hygiene dilemma. But separating marketing hype from genuine scientific benefits is essential for making an informed purchasing choice. While these innovative bottles deliver dramatic advantages in odor prevention and everyday peace of mind, they also come with distinct limitations that every consumer must understand.
            </p>
          </div>

          {/* Section 1: Question-style H2 with direct answer in sentence 1-2 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              Why do reusable water bottles develop bad smells so quickly?
            </h2>
            <p>
              Reusable water bottles develop bad smells quickly because warm, dark, and moist sealed containers create the perfect incubation chamber for bacteria introduced through saliva, lip contact, and backwash. Within just 12 to 24 hours at room temperature, naturally occurring oral microbes like Staphylococcus and Streptococcus multiply exponentially, producing smelly volatile sulfur compounds and metabolic byproducts that coat the inner walls in an organic biofilm.
            </p>
            <p>
              Most people assume tap water is sterile. While municipal drinking water meets strict biological safety standards, it is not completely devoid of harmless microscopic organisms. When you take a sip, you deposit thousands of oral epithelial cells, enzymes, and bacteria into the bottle neck. A tiny fraction washes back into the reservoir. Left in an enclosed dark bottle at room temperature (around 20°C to 25°C), bacterial populations can double every twenty minutes.
            </p>
            <p>
              Over several days of continuous refilling without deep cleaning, these bacteria attach to the micro-crevices of stainless steel or plastic walls. They secrete an extracellular polymeric substance (EPS), forming a slippery, adhesive matrix known as a biofilm. Biofilms protect bacteria from simple water rinses and produce the signature "damp basement" smell that ruins the taste of fresh water.
            </p>
          </section>

          {/* Section 2: Core Benefits Breakdown */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              The Real-World Benefits of Automated Bottle Sanitization
            </h2>
            <p>
              When evaluated realistically, the core benefits of self-cleaning water bottles center on convenience, sensory freshness, and behavioral habit reinforcement rather than magical health cures:
            </p>

            <div className="space-y-4 my-6">
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>1. Elimination of Persistent Stale Odors</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  By firing periodic short-wavelength UV-C pulses every few hours, the bottle neutralizes newly introduced bacteria before they can form mature colonies or secrete volatile sulfur compounds. As a result, water poured at 8:00 AM still tastes crisp and odorless at 8:00 PM.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>2. Unmatched Convenience for Demanding Schedules</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For university students spending all day between lecture halls, gym enthusiasts hopping between workouts and commutes, or busy office workers, finding a sink with dish soap and a bottle brush during the day is impractical. Automated sanitization maintains interior cleanliness hands-free.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>3. Reassurance When Refilling at Public Water Points</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Public hydration fountains at airports, train terminals, and sports facilities often have high touch points. While municipal water is safe, a quick manual 3-minute deep cycle delivers a secondary biological safeguard that neutralizes lingering waterborne pathogens.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>4. Improved Daily Hydration Compliance</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Behavioral hydration studies confirm that individuals drink significantly more water throughout the day when their beverage tastes clean and fresh. When bottles smell foul, users avoid sipping, leading to chronic mild dehydration and fatigue.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Question-style H2 with direct answer in sentence 1-2 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              Do self-cleaning water bottles completely eliminate the need for manual washing?
            </h2>
            <p>
              No, self-cleaning water bottles do not completely eliminate the need for manual washing. While the internal UV-C lamp effectively sanitizes the water column and reflective stainless steel body, it cannot physically clean dried saliva, lip oils, food crumbs, and cosmetic residues that accumulate on the exterior drinking lip and threaded silicone gaskets.
            </p>
            <p>
              The term "self-cleaning" is somewhat of a misnomer; it is more accurately described as "self-sanitizing." Sanitization refers to destroying microbiological organisms, whereas cleaning refers to physically detaching and washing away organic grime, grease, and dirt particles.
            </p>
            <p>
              Because your lips rest directly on the rim of the bottle, dead skin cells, oils, and lip balms collect along the threads. UV-C light rays travel downward inside the bottle chamber and cannot bend around exterior corners to reach the drinking rim. Therefore, owners should still wash the rim and rinse the silicone sealing gasket with warm soapy water at least once a week to maintain complete personal hygiene.
            </p>
          </section>

          {/* Section 4: Critical Health Reality Checks & No Exaggerated Claims */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Health Reality Check: What Self-Cleaning Bottles Cannot Do
            </h2>
            <p>
              Responsible hydration education requires dispelling exaggerated health claims. Some aggressive online advertisements suggest that owning a UV-C bottle allows you to safely drink from any puddle, jungle stream, or stagnant pond in the world. This is dangerously incorrect.
            </p>

            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-4 not-prose my-6">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <AlertOctagon className="w-5 h-5 text-amber-700 shrink-0" />
                <span>Crucial Safety Truths for Consumers</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-amber-800 font-bold">•</span>
                  <span><strong>Not a Water Filter:</strong> UV-C technology contains no physical filter media. It cannot remove toxic chemicals, agricultural pesticides, heavy metals like arsenic and lead, microplastics, or chlorine.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-800 font-bold">•</span>
                  <span><strong>Fails in Turbid Water:</strong> In cloudy lake or stream water, particles of clay, silt, and algae block the UV-C beam. Microorganisms hiding behind suspended particles are sheltered from the radiation and survive.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-800 font-bold">•</span>
                  <span><strong>Cryptosporidium Resistance:</strong> Certain thick-walled protozoan parasites (such as Cryptosporidium parvum oocysts) require extraordinarily high ultraviolet dosages that compact, low-wattage bottle LEDs may not reliably achieve in short cycles.</span>
                </li>
              </ul>
            </div>

            <p>
              In summary, a self-cleaning bottle is engineered for clear, potable tap water that suffers from bacterial stagnation and backwash odor. It is not an emergency survival device for untreated, sediment-heavy wilderness water unless paired with a reputable mechanical micro-filter.
            </p>
          </section>

          {/* Section 5: Situations Where These Bottles Excel */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Ideal Scenarios: Who Benefits Most from Self-Cleaning Bottles?
            </h2>
            <p>
              While not every consumer needs an electronic bottle, specific user groups experience substantial quality-of-life improvements:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 not-prose">
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-sm font-bold text-slate-900">University Students</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dorm rooms often lack full kitchen sinks or dishwashers. Keeping a bottle fresh between campus classes and late-night study sessions without manual bottle brushes saves time and maintains hygiene.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-sm font-bold text-slate-900">Fitness & Gym Goers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Workout sessions cause heavy mouth breathing and elevated saliva backwash. Sealed bottles left in hot gym lockers or car trunks become bacterial breeding grounds without periodic sanitization pulses.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-sm font-bold text-slate-900">Business Travellers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Frequent flyers refilling from diverse hotel bathroom taps, conference venues, and airport terminals enjoy clean, crisp taste and added peace of mind across time zones.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Cross-Linking Box */}
          <div className="p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200 space-y-4 not-prose my-10">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 uppercase tracking-wider">
              <span>Ready to Compare Models?</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              If the convenience and odor-prevention benefits align with your daily hydration habits, read our detailed buyer guide to compare specifications, battery life, and materials.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="/how-to-choose-a-self-cleaning-water-bottle"
                onClick={(e) => handleLink(e, '/how-to-choose-a-self-cleaning-water-bottle')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors text-center"
              >
                <span>Read Practical Buyer Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/how-self-cleaning-water-bottles-work"
                onClick={(e) => handleLink(e, '/how-self-cleaning-water-bottles-work')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-cyan-900 bg-white hover:bg-cyan-50 border border-cyan-200 rounded-lg transition-colors text-center"
              >
                <span>Review UV-C Physics & Limits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Article FAQ Section */}
        <FAQAccordion
          items={ARTICLE_2_FAQS}
          title="Frequently Asked Questions on Bottle Hygiene & Benefits"
          subtitle="Insights on odor formation, travel safety, and healthy daily hydration habits."
        />

      </div>
    </article>
  );
}
