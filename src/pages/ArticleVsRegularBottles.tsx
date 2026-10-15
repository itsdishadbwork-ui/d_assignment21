import { ArrowLeft, ArrowRight, Scale, Check, X, Calendar, Clock, BookOpen } from 'lucide-react';
import bottleDuoImg from '../assets/images/bottle_comparison_duo_1792071853778.jpg';
import { ARTICLE_7_FAQS, ARTICLES_CONFIG } from '../data/articlesData.ts';
import { FAQAccordion } from '../components/FAQAccordion.tsx';
import { ReadingProgressBar } from '../components/ReadingProgressBar.tsx';

interface ArticleVsRegularBottlesProps {
  onNavigate: (path: string) => void;
}

export function ArticleVsRegularBottles({ onNavigate }: ArticleVsRegularBottlesProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const meta = ARTICLES_CONFIG['self-cleaning-vs-regular-water-bottles'];

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
            Self-Cleaning Water Bottles vs Regular Water Bottles: Head-to-Head Comparison
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="font-semibold text-slate-800">By PureSip Editorial Team</span>
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
            <span className="text-cyan-700 font-medium">Comparative Analysis</span>
          </div>
        </div>
      </header>

      {/* Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <figure className="mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
          <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden">
            <img
              src={bottleDuoImg}
              alt="Direct side-by-side comparison of an electronic self-cleaning bottle with illuminated cap ring alongside a traditional stainless steel water flask"
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
          <figcaption className="p-4 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
            <span>Contrasting smart self-sanitizing bottles against traditional double-wall stainless steel flasks across everyday parameters.</span>
            <span className="font-mono text-slate-400">Fig 7.1</span>
          </figcaption>
        </figure>

        <div className="space-y-10 text-slate-700 leading-relaxed text-base sm:text-[17px]">
          
          <div className="space-y-4">
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              Choosing the right hydration gear often comes down to an essential choice: should you stick with a reliable, traditional reusable flask, or invest in an automated self-sanitizing container? Both vessels hold water and keep drinks cold, but their maintenance demands and internal hygiene profiles differ dramatically.
            </p>
            <p>
              In this objective <strong>self-cleaning vs regular water bottles</strong> breakdown, we conduct a structured <strong>reusable bottle comparison</strong>. We will evaluate how a <strong>smart water bottle vs stainless steel</strong> standard flask performs across daily hygiene, weight, battery upkeep, long-term costs, and cleaning convenience.
            </p>
          </div>

          {/* Question H2 1 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              How does a self-cleaning water bottle differ from a regular reusable bottle?
            </h2>
            <p>
              A self-cleaning water bottle differs from a regular reusable bottle primarily by incorporating an active electronic cap that automatically emits germicidal UV-C light to destroy bacteria, mold, and odor-causing microbes throughout the day. In contrast, regular water bottles rely entirely on passive storage and require frequent, diligent manual scrubbing with soap and brushes to prevent bacterial biofilms.
            </p>
            <p>
              In a conventional water bottle, the vessel is entirely passive. It has no mechanism to interact with the contents. If you take a sip at 9:00 AM, introducing oral backwash bacteria, those organisms double in population every 20 minutes in the warm, dark, enclosed interior. By the end of the day, trillions of microbes can be present, causing the water to smell stale and taste flat.
            </p>
            <p>
              A self-cleaning bottle changes this dynamic into an active biological defense. A built-in battery and solid-state LED automatically pulse every 2 to 4 hours. Photons penetrate the water column and bounce off the internal steel walls, continually sterilizing microbial DNA before colonies can establish a foul-smelling biofilm.
            </p>
          </section>

          {/* Detailed Comparison Grid */}
          <section className="space-y-6 pt-4 border-t border-slate-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
                Head-to-Head Specification Comparison
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                A clear, objective assessment of how the two container categories compare across essential ownership metrics.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs not-prose">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                    <th className="p-3.5 sm:p-4 whitespace-nowrap">Category Parameter</th>
                    <th className="p-3.5 sm:p-4 whitespace-nowrap">Traditional Reusable Bottle</th>
                    <th className="p-3.5 sm:p-4 whitespace-nowrap">Self-Cleaning UV-C Bottle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Bacterial Suppression</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">Passive; bacteria multiply unchecked until washed</td>
                    <td className="p-3.5 sm:p-4 text-cyan-900 font-medium">Active; automated UV-C pulses neutralize 99.99% of germs</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Daily Scrubbing Required</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">Yes, daily brush scrub recommended</td>
                    <td className="p-3.5 sm:p-4 text-cyan-900 font-medium">No; weekly quick rim rinse is sufficient</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Empty Weight (750ml / 25oz)</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">~360 g to 400 g (Lightweight)</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">~480 g to 520 g (~120g heavier cap)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Power & Charging Needs</td>
                    <td className="p-3.5 sm:p-4 text-emerald-800 font-medium">None; zero electronics to maintain</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">Magnetic recharge once every 2–4 weeks</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Dishwasher Safe</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">Body hand-wash; caps often top-rack safe</td>
                    <td className="p-3.5 sm:p-4 text-amber-800 font-medium">Cap hand-wash ONLY; never place in dishwasher</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Average Price Range</td>
                    <td className="p-3.5 sm:p-4 text-emerald-800 font-medium">$15 – $35 (Budget-friendly)</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">$65 – $115 (Premium initial cost)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Thermal Insulation</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">Up to 24h Cold / 12h Hot (double-wall)</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">Up to 24h Cold / 12h Hot (double-wall)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Question H2 2 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              Which type of bottle is better for everyday convenience and portability?
            </h2>
            <p>
              A self-cleaning water bottle offers superior everyday convenience for busy professionals and students because it autonomously prevents foul odors and bacterial buildup without daily brush scrubbing. However, a regular reusable bottle provides slightly better physical portability because it weighs 100 to 140 grams less and never requires battery recharging.
            </p>
            <p>
              Consider your daily environment: if you work at a desk or attend university classes for 8 to 10 hours a day, the time saved by not needing to hunt down a kitchen sink with dish soap and a bottle brush makes a self-cleaning bottle remarkably convenient. The water you drink at 5:00 PM tastes just as crisp as the water you poured at 8:00 AM.
            </p>
            <p>
              Conversely, if you are an ultralight trail runner, backpacker, or minimalist hiker counting every ounce in your pack, the extra weight of a lithium battery and the need to carry a magnetic charging cord makes a traditional single-wall or standard vacuum insulated flask the superior choice.
            </p>
          </section>

          {/* Environmental Considerations */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Environmental Impact & Waste Reduction
            </h2>
            <p>
              Both types of bottles deliver massive environmental advantages compared to single-use polyethylene terephthalate (PET) disposable bottles, which take upwards of 450 years to degrade and contribute significantly to global microplastic pollution.
            </p>
            <p>
              A stainless steel reusable bottle requires more energy and raw materials to manufacture initially than a single disposable plastic bottle. However, life-cycle analysis shows that after just 30 to 50 refills, a stainless steel bottle offsets its manufacturing footprint and becomes net-positive for the environment.
            </p>
            <p>
              Here, self-cleaning bottles offer an intriguing behavioral advantage: because they solve the mold and odor issues that cause consumers to prematurely throw away stained bottles or revert to buying plastic bottles from vending machines, they often promote more consistent, long-term reusable bottle adoption.
            </p>
          </section>

          {/* Internal Links */}
          <div className="p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200 space-y-4 not-prose my-10">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Explore Related Articles</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Want to see if the price premium makes sense for your budget? Read our honest ROI analysis, or learn how to eliminate persistent odors from your existing regular bottle.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="/are-self-cleaning-water-bottles-worth-it"
                onClick={(e) => handleLink(e, '/are-self-cleaning-water-bottles-worth-it')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors text-center"
              >
                <span>Read Are Self-Cleaning Bottles Worth It?</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/remove-smell-from-water-bottle"
                onClick={(e) => handleLink(e, '/remove-smell-from-water-bottle')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-cyan-900 bg-white hover:bg-cyan-50 border border-cyan-200 rounded-lg transition-colors text-center"
              >
                <span>Read How to Remove Bottle Odors</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        <FAQAccordion
          items={ARTICLE_7_FAQS}
          title="Frequently Asked Questions: Comparison Guide"
          subtitle="Direct answers on active hygiene, weight differences, and thermal insulation."
        />

      </div>
    </article>
  );
}
