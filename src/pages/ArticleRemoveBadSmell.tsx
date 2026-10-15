import { ArrowLeft, ArrowRight, Sparkles, AlertCircle, CheckCircle2, Calendar, Clock, BookOpen } from 'lucide-react';
import removeOdorImg from '../assets/images/remove_bottle_odor_1792071854216.jpg';
import { ARTICLE_8_FAQS, ARTICLES_CONFIG } from '../data/articlesData.ts';
import { FAQAccordion } from '../components/FAQAccordion.tsx';
import { ReadingProgressBar } from '../components/ReadingProgressBar.tsx';

interface ArticleRemoveBadSmellProps {
  onNavigate: (path: string) => void;
}

export function ArticleRemoveBadSmell({ onNavigate }: ArticleRemoveBadSmellProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const meta = ARTICLES_CONFIG['remove-smell-from-water-bottle'];

  return (
    <article className="min-h-screen bg-[#fafbfd] pb-20">
      <ReadingProgressBar />

      {/* Header */}
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
            How to Remove Bad Smells from a Water Bottle: 5 Proven Deodorizing Techniques
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
            <span className="text-cyan-700 font-medium">Deodorizing Protocol</span>
          </div>
        </div>
      </header>

      {/* Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <figure className="mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
          <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden">
            <img
              src={removeOdorImg}
              alt="Natural pantry deodorizing remedies with a bowl of baking soda, fresh sliced lemon, and white vinegar next to a clean stainless steel bottle"
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
          <figcaption className="p-4 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
            <span>Natural household remedies for dissolving microbial biofilms and eliminating persistent sour water odors.</span>
            <span className="font-mono text-slate-400">Fig 8.1</span>
          </figcaption>
        </figure>

        <div className="space-y-10 text-slate-700 leading-relaxed text-base sm:text-[17px]">
          
          <div className="space-y-4">
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              You unscrew your favourite reusable water bottle expecting a refreshing sip of crisp, chilled water, only to be greeted by an unmistakable wave of stale mildew or damp laundry funk. Even worse, you wash the bottle with dish soap, fill it again, and find the sour taste returns within hours.
            </p>
            <p>
              Learning <strong>how to remove smell from water bottle</strong> surfaces requires understanding the microbiology at work. When simple rinsing fails to <strong>get rid of water bottle odor</strong>, it is usually because bacteria have anchored into an adhesive matrix. In this guide, we explore the science behind bottle odors and provide five tested, food-grade methods to <strong>eliminate bottle biofilm</strong> and restore fresh, odorless water.
            </p>
          </div>

          {/* Question H2 1 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              Why does a water bottle develop a sour or mildew smell?
            </h2>
            <p>
              A water bottle develops a sour or mildew smell because oral bacteria, food particles, and saliva backwash are introduced to the moist, warm interior every time you take a sip. Trapped inside the dark chamber, these microbes multiply rapidly and secrete volatile sulfur compounds that adhere to internal metal micro-crevices and silicone seals as a resilient biofilm.
            </p>
            <p>
              The human mouth hosts over 700 species of bacteria. When your lips touch the rim of a bottle, hundreds of thousands of oral microbes (including Streptococcus mutans and Staphylococcus epidermidis) wash into the water column. In room-temperature water, these bacteria thrive.
            </p>
            <p>
              As the bacteria feed on microscopic trace organic matter, they produce metabolic wastes: volatile organic sulfur compounds (VSCs), cadaverine, and putrescine. To protect themselves from desiccation, they secrete an extracellular polymeric substance (EPS)—a slimy, sticky glue that bonds tightly to stainless steel pores and flexible silicone rubber. This biofilm shields the bacteria from brief rinses with cold tap water.
            </p>
          </section>

          {/* Question H2 2 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              What is the most effective natural method to remove bad smells from a bottle?
            </h2>
            <p>
              The most effective natural method to remove bad smells from a water bottle is a combined soak of warm water and sodium bicarbonate (baking soda), or a 50/50 mix of distilled white vinegar and warm water. Both household ingredients naturally break down bacterial cell walls and dissolve the sticky biofilm matrix without scratching stainless steel or leaving toxic chemical residues.
            </p>
            <p>
              Sodium bicarbonate is an amphoteric alkaline substance that chemically neutralizes acidic odor compounds while providing mild mechanical abrasiveness that lifts dried biological films. Distilled white vinegar contains acetic acid (typically 5% concentration), which pierces microbial cell membranes and dissolves mineral limescale where odor-causing bacteria frequently nest.
            </p>
            <p>
              Neither of these household staples will corrode food-grade 18/8 stainless steel, degrade borosilicate glass, or leach harmful chemicals into your drinking water, making them far safer and more effective than chemical bleach or artificially perfumed dishwashing detergents.
            </p>
          </section>

          {/* 5 Proven Methods */}
          <section className="space-y-6 pt-4 border-t border-slate-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
                5 Tested Methods to Eliminate Water Bottle Odors
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Choose the method that best matches the supplies in your pantry to rescue a foul-smelling flask.
              </p>
            </div>

            <div className="space-y-4 my-6 not-prose">
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Method 1: The Overnight Distilled White Vinegar Soak</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Fill the bottle one-third full with distilled white vinegar and top it off with hot (not boiling) tap water. Screw the cap on loosely and leave it to soak for 6 to 8 hours. Pour out the solution, scrub with a bottle brush, and rinse thoroughly. The faint vinegar scent dissipates completely once dry.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Method 2: The Baking Soda Slurry Scour</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mix two tablespoons of baking soda with just enough warm water to create a thick paste. Coat the interior walls and base using your bottle brush. Let the paste sit for one hour, then scrub vigorously before rinsing with hot water. Excellent for stubborn coffee or tea stains.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Method 3: Boiling Water & Lemon Juice Infusion</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For stainless steel bottles (not plastic or glass), squeeze half a fresh lemon into the bottle and fill with freshly boiled water. Citric acid and high thermal heat kill vegetative bacteria and leave a light, natural citrus aroma. Leave to cool for two hours before rinsing.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Method 4: Effervescent Denture or Bottle Tablets</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Drop one or two unflavored effervescent denture cleaning tablets or specialized hydration cleaning tablets into warm water. The rapid oxygen bubbling lifts embedded biofilms out of narrow necks and internal welding seams.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Method 5: The Silicone Gasket Separate Vinegar Bath</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If the bottle still smells after cleaning, the odor is trapped in the silicone O-ring. Pry the gasket out of the cap and submerge it in pure white vinegar for 2 hours. Scrub the empty cap groove with a toothbrush dipped in baking soda before replacing the dried gasket.
                </p>
              </div>
            </div>
          </section>

          {/* Prevention Tips */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              How to Prevent Bad Smells from Returning
            </h2>
            <p>
              Once your bottle is fresh, adopting simple daily habits will stop odors from reforming:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li>
                <strong>Always Store with Cap Off:</strong> When drying or storing your bottle between uses, never leave the cap tightly screwed on. Circulating air prevents residual moisture from cultivating anaerobic mold spores.
              </li>
              <li>
                <strong>Empty at Night:</strong> Never let water sit stagnant in the bottle on a nightstand or desk overnight. Pour it out and rinse before bed.
              </li>
              <li>
                <strong>Stick to Water Only:</strong> If you use your bottle for protein powders, smoothies, or sweet juices, wash it within 30 minutes. Sugar and whey proteins act as super-fuel for rapid bacterial growth.
              </li>
            </ul>
          </section>

          {/* Internal Links */}
          <div className="p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200 space-y-4 not-prose my-10">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Explore Automated Solutions</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              If manual deodorizing routines are too tedious for your busy schedule, explore how self-cleaning UV-C technology continuously suppresses bacterial odor automatically.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="/benefits-of-self-cleaning-water-bottles"
                onClick={(e) => handleLink(e, '/benefits-of-self-cleaning-water-bottles')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors text-center"
              >
                <span>Read Benefits & Odor Prevention</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/how-to-clean-a-reusable-water-bottle"
                onClick={(e) => handleLink(e, '/how-to-clean-a-reusable-water-bottle')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-cyan-900 bg-white hover:bg-cyan-50 border border-cyan-200 rounded-lg transition-colors text-center"
              >
                <span>Read Complete Cleaning Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        <FAQAccordion
          items={ARTICLE_8_FAQS}
          title="Frequently Asked Questions: Bottle Odor Removal"
          subtitle="Solutions for vinegar use on stainless steel, dishwasher limitations, and fast deodorizing."
        />

      </div>
    </article>
  );
}
