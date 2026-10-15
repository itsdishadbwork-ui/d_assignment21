import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2, AlertTriangle, Calendar, Clock, BookOpen } from 'lucide-react';
import cleanBottleImg from '../assets/images/clean_bottle_properly_1792071851653.jpg';
import { ARTICLE_4_FAQS, ARTICLES_CONFIG } from '../data/articlesData.ts';
import { FAQAccordion } from '../components/FAQAccordion.tsx';
import { ReadingProgressBar } from '../components/ReadingProgressBar.tsx';

interface ArticleCleanReusableBottleProps {
  onNavigate: (path: string) => void;
}

export function ArticleCleanReusableBottle({ onNavigate }: ArticleCleanReusableBottleProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const meta = ARTICLES_CONFIG['how-to-clean-a-reusable-water-bottle'];

  return (
    <article className="min-h-screen bg-[#fafbfd] pb-20">
      <ReadingProgressBar />

      {/* Article Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-6">
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display leading-[1.18] text-balance">
            How to Clean a Reusable Water Bottle Properly: Practical Sanitizing & Care
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="font-semibold text-slate-800">By PureSip Hygiene Team</span>
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
            <span className="text-cyan-700 font-medium">Step-by-Step Practical Guide</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <figure className="mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
          <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden">
            <img
              src={cleanBottleImg}
              alt="Disassembled stainless steel reusable water bottle drying on a clean linen cloth beside natural bristle bottle brush and mild soap"
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
          <figcaption className="p-4 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
            <span>Essential equipment for proper reusable bottle care: natural bristled brush, warm soapy water, and disassembled silicone gaskets.</span>
            <span className="font-mono text-slate-400">Fig 4.1</span>
          </figcaption>
        </figure>

        <div className="space-y-10 text-slate-700 leading-relaxed text-base sm:text-[17px]">
          
          <div className="space-y-4">
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              Carrying a reusable hydration container is an admirable habit for environmental sustainability and personal wellness. Yet many health-conscious individuals treat their bottles with a casual "quick rinse" under the tap, mistakenly believing that clean drinking water cannot harbor grime. In reality, a sealed water bottle is one of the most microbially active personal accessories in your bag.
            </p>
            <p>
              Learning <strong>how to clean reusable water bottle</strong> gear properly is not just about keeping water tasting crisp; it is essential to <strong>sanitize water bottle</strong> surfaces and prevent harmful bacterial colonies from taking root. When neglected, moisture and backwash saliva quickly cultivate bacterial biofilms and black mold. This comprehensive guide outlines the equipment, frequencies, and techniques needed to keep every component hygienic.
            </p>
          </div>

          {/* Question H2 1 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              How often should you wash your reusable water bottle?
            </h2>
            <p>
              You should wash your reusable water bottle daily with warm water and liquid dish soap, emptying any remaining liquid at the end of every evening. In addition to daily washing, perform a thorough deep sanitization once a week by disassembling the silicone sealing rings and scrubbing the lid threads with a dedicated bottle brush.
            </p>
            <p>
              Every time you take a sip, trace amounts of skin lipids, oral bacteria, food particles, and saliva backwash are introduced to the rim and reservoir. Even if the bottle was filled exclusively with municipal tap water, room-temperature stagnant water allows these microscopic organisms to multiply rapidly. Studies in public hygiene have demonstrated that reusable bottles left unwashed for multiple days often harbor more bacteria per square centimeter than a typical pet feeding bowl.
            </p>
            <p>
              Establishing a regular cleaning schedule prevents these microbes from organizing into an extracellular slime matrix known as biofilm. Once a biofilm forms on internal surfaces, simple rinsing is completely ineffective at dislodging it.
            </p>
          </section>

          {/* Step-by-Step Daily Clean */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              The Daily Cleaning Protocol: 4 Simple Steps
            </h2>
            <p>
              Maintaining pristine hygiene does not require complicated industrial chemicals. Integrating this four-step routine into your evening dishwashing habit takes less than two minutes:
            </p>

            <div className="space-y-4 my-6">
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Step 1: Discard Stale Water and Disassemble</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Never leave water sitting in the bottle overnight. Pour out remaining fluid, unthread the cap, and separate any modular drinking spouts or built-in straws.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Step 2: Apply Warm Water and Mild Dish Detergent</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Fill the chamber halfway with warm (not boiling) tap water and add a few drops of mild dishwashing liquid. Replace the cap loosely and shake vigorously for fifteen seconds to loosen surface residues.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Step 3: Scrub with a Long-Handled Bottle Brush</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A sponge cannot reach the deep corners and bottom contours of tall narrow-mouth flasks. Use a stiff, curved bottle brush to scour the interior base, sidewalls, and neck threads where grime tends to collect.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Step 4: Air Dry Inverted on a Clean Rack</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Rinse thoroughly with hot water to remove soap foam. Invert the bottle on a drying rack or clean linen towel and store the cap separately. Trapping damp air inside a closed bottle encourages fungal spore growth overnight.
                </p>
              </div>
            </div>
          </section>

          {/* Question H2 2 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              How do you clean the silicone gasket and remove water bottle mold?
            </h2>
            <p>
              To remove water bottle mold from silicone gaskets, gently pry the flexible rubber O-ring out of the cap channel using a dull butter knife or toothpick, then submerge it in a 50/50 mixture of distilled white vinegar and warm water for thirty minutes. Scrub the gasket and the cap groove with an old toothbrush, rinse with fresh water, and allow both pieces to air-dry completely before reassembling.
            </p>
            <p>
              The silicone seal is the single most vulnerable component in any reusable bottle. Because it sits compressed against the flask rim, moisture is continually trapped underneath it. In the darkness of a sealed backpack, this trapped moisture creates an ideal incubator for black mold (often species of Aspergillus or Cladosporium).
            </p>
            <p>
              Many users mistakenly assume their bottle is sparkling clean while black mold colonies thrive unseen beneath the gasket. If you notice persistent dark spots or a sour damp scent despite thorough washing, inspect the silicone ring immediately. If the silicone has become discolored or brittle from mold penetration, replacement gaskets are readily available from most bottle makers and should be swapped out.
            </p>
          </section>

          {/* Weekly Deep Cleaning Methods */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Weekly Deep Sanitization Methods
            </h2>
            <p>
              Once a week, especially if you occasionally add lemon slices, tea, or hydration powders, perform a deeper restorative clean using one of these three proven methods:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 not-prose">
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-sm font-bold text-slate-900">1. Distilled White Vinegar Soak</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mix equal parts white vinegar and warm water. Fill the bottle, attach the lid, shake, and leave it to soak for four to eight hours. Vinegar's natural acetic acid dissolves mineral scale and neutralizes odor-causing bacteria without harming stainless steel.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-sm font-bold text-slate-900">2. Baking Soda Paste Scrub</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mix two tablespoons of sodium bicarbonate (baking soda) with a splash of water to form a gritty paste. Use your bottle brush to scrub the paste against the interior metal walls, lifting stubborn organic films and neutralizing acidic odors.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-sm font-bold text-slate-900">3. Effervescent Cleaning Tablets</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Food-safe oxygen-based bottle tablets (or unflavored denture cleaning tablets) generate thousands of micro-bubbles that break down biological slime in narrow chambers without leaving synthetic chemical perfumes.
                </p>
              </div>
            </div>
          </section>

          {/* Dishwasher Do's and Don'ts */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Dishwasher Safety: Understanding the Risks for Insulated Bottles
            </h2>
            <p>
              While tossing a bottle into the dishwasher is tempting, doing so can permanently compromise your investment. Modern vacuum-insulated double-wall flasks rely on an airtight seal between two stainless steel layers. The extreme steam temperatures and harsh caustic detergents of dishwasher cycles can weaken the thermal weld, allowing air to penetrate the vacuum chamber and eliminating its temperature-retention capabilities.
            </p>
            <p>
              Furthermore, external powder coating paints will peel, blister, or fade after repeated high-temperature wash cycles. Unless the manufacturer explicitly marks the specific model as dishwasher-safe, always wash double-walled insulated bodies by hand. Basic plastic caps and straws can generally be washed on the dishwasher top rack inside a utensil basket.
            </p>
          </section>

          {/* Internal Cross Links */}
          <div className="p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200 space-y-4 not-prose my-10">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Related Hydration Resources</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Tired of constant scrubbing? Learn how automated ultraviolet bottles compare to conventional flasks, or read our proven methods for removing stubborn lingering odors.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="/remove-smell-from-water-bottle"
                onClick={(e) => handleLink(e, '/remove-smell-from-water-bottle')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors text-center"
              >
                <span>Read How to Remove Bad Smells</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/self-cleaning-vs-regular-water-bottles"
                onClick={(e) => handleLink(e, '/self-cleaning-vs-regular-water-bottles')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-cyan-900 bg-white hover:bg-cyan-50 border border-cyan-200 rounded-lg transition-colors text-center"
              >
                <span>Compare Self-Cleaning vs Regular Bottles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        <FAQAccordion
          items={ARTICLE_4_FAQS}
          title="Frequently Asked Questions: Bottle Cleaning & Sanitation"
          subtitle="Answers to common questions about brushes, dishwasher risks, and gasket care."
        />

      </div>
    </article>
  );
}
