import { ArrowLeft, ArrowRight, Wrench, Shield, BatteryCharging, AlertTriangle, Calendar, Clock, BookOpen } from 'lucide-react';
import bottleMaintenanceImg from '../assets/images/bottle_maintenance_care_1792071855338.jpg';
import { ARTICLE_10_FAQS, ARTICLES_CONFIG } from '../data/articlesData.ts';
import { FAQAccordion } from '../components/FAQAccordion.tsx';
import { ReadingProgressBar } from '../components/ReadingProgressBar.tsx';

interface ArticleMaintainSmartBottleProps {
  onNavigate: (path: string) => void;
}

export function ArticleMaintainSmartBottle({ onNavigate }: ArticleMaintainSmartBottleProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const meta = ARTICLES_CONFIG['maintain-a-self-cleaning-water-bottle'];

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
            How to Maintain a Self-Cleaning Water Bottle: Longevity, Lens Care & Charging
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="font-semibold text-slate-800">By PureSip Technical Care</span>
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
            <span className="text-cyan-700 font-medium">Preventative Maintenance Handbook</span>
          </div>
        </div>
      </header>

      {/* Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <figure className="mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
          <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden">
            <img
              src={bottleMaintenanceImg}
              alt="Person gently wiping the optical quartz lens and magnetic charging contacts of an electronic bottle cap using a microfiber cloth"
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
          <figcaption className="p-4 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
            <span>Essential maintenance steps: gently wiping the optical quartz window, preserving magnetic contacts, and inspecting silicone seals.</span>
            <span className="font-mono text-slate-400">Fig 10.1</span>
          </figcaption>
        </figure>

        <div className="space-y-10 text-slate-700 leading-relaxed text-base sm:text-[17px]">
          
          <div className="space-y-4">
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              A high-quality self-cleaning water bottle is a sophisticated piece of optoelectronic equipment. Behind its sleek exterior lies a miniature microcontroller, a rechargeable lithium-ion battery, an optical tilt safety sensor, and a high-efficiency solid-state UV-C light-emitting diode.
            </p>
            <p>
              While these devices dramatically reduce your daily scrubbing chore, knowing how to <strong>maintain self-cleaning water bottle</strong> gear correctly is essential to protect your investment. Without proper <strong>UV-C cap care</strong>, mineral scale will cloud the emitter, dirty charging contacts will impede power transfer, and compromised seals can shorten device life. In this guide, we outline preventative habits to <strong>clean water bottle optical lens</strong> components and preserve your bottle for years of reliable operation.
            </p>
          </div>

          {/* Question H2 1 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              How do you properly clean and maintain a self-cleaning water bottle cap?
            </h2>
            <p>
              You properly clean and maintain a self-cleaning water bottle cap by gently wiping the underside quartz optical lens and silicone gasket with a soft cloth dipped in warm, soapy water or diluted white vinegar. Never submerge the electronic cap in a dishwasher or soak it in boiling water, as extreme thermal stress and high-pressure steam can destroy internal lithium batteries and compromise waterproof seals.
            </p>
            <p>
              Although high-grade caps feature IPX7 water resistance ratings—meaning they can withstand splash contact and brief accidental immersion under a sink faucet—they are not impervious to industrial dishwashing conditions. A dishwasher's heated drying cycle routinely exceeds 70°C (160°F), which causes thermal expansion of the housing plastics and degrades the internal rubber hermetic gaskets.
            </p>
            <p>
              Instead, treat the cap like a premium smartphone or camera lens. A quick hand-rinse under warm tap water followed by a gentle wipe with a microfiber cloth is all that is required to maintain optical clarity and electronic integrity.
            </p>
          </section>

          {/* Question H2 2 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              Why does the optical quartz window need regular cleaning and descaling?
            </h2>
            <p>
              The optical quartz window needs regular cleaning and descaling because dissolved minerals in tap water, such as calcium and magnesium, gradually form a microscopic cloudy limescale film over the glass lens. Even a thin layer of mineral scale blocks shortwave UV-C photons, drastically reducing the sanitizing light intensity that reaches the water and internal bottle walls.
            </p>
            <p>
              Shortwave ultraviolet radiation (260–280 nanometers) has very low penetrative power compared to visible light. While human eyes can easily see through a faintly cloudy mineral haze, shortwave ultraviolet photons are rapidly scattered and absorbed by inorganic carbonate scale.
            </p>
            <p>
              If hard water minerals build up on the quartz lens, your bottle may continue to illuminate its cyan indicator ring, giving you the false impression that it is sanitizing, while the actual germicidal photon flux entering the water has dropped by 50% or more. Wiping the lens with a cotton swab dampened in mild white vinegar once a month effortlessly dissolves mineral carbonates and restores 100% light transmission.
            </p>
          </section>

          {/* Magnetic Charging Pin Care */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Caring for Magnetic Charging Contacts and Battery Health
            </h2>
            <p>
              Most premium self-cleaning caps utilize magnetic pogo-pin charging terminals. While superior to open USB ports because they prevent water ingress, magnetic terminals require basic upkeep:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider">Keeping Terminals Dry Before Charging</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Always inspect the gold-plated contact pins before snapping the magnetic charging cable into place. If water droplets remain on the pins, electrical current can trigger localized electrolytic corrosion, degrading the gold plating over time.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider">Lithium Battery Longevity Habits</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Like all lithium-ion cells, the battery in your smart cap lasts longest when kept between 20% and 80% charge. Avoid letting the cap sit completely discharged for months in storage, and recharge it once every three to four weeks.
                </p>
              </div>
            </div>
          </section>

          {/* Silicone Gasket Care */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Silicone O-Ring Inspection & Replacement Protocol
            </h2>
            <p>
              The silicone sealing ring embedded within the cap creates an airtight seal that prevents leaks and preserves thermal vacuum performance. Because UV-C light shines downward and does not sterilize the gasket's recessed channel, perform this simple monthly check:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li>
                <strong>Gently Extract the Ring:</strong> Use a blunt plastic pick or dull butter knife to lift the silicone ring out of its groove without puncturing or tearing the elastomer.
              </li>
              <li>
                <strong>Vinegar Soak:</strong> Submerge the gasket in a small cup containing warm water and a tablespoon of distilled white vinegar for 20 minutes to eliminate hidden bacteria.
              </li>
              <li>
                <strong>Check Elasticity:</strong> If the ring feels sticky, brittle, or cracked, it has reached the end of its useful lifespan and should be replaced with a fresh manufacturer seal.
              </li>
              <li>
                <strong>Ensure Proper Seating:</strong> When replacing the dried gasket, press it firmly and evenly into the cap channel. An uneven gasket will pinch when tightened, causing annoying leaks inside your bag.
              </li>
            </ul>
          </section>

          {/* What to Never Do */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Four Actions That Will Void Warranty or Destroy Smart Caps
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose text-xs">
              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                <span className="font-bold text-amber-900 block">1. Never Freeze the Bottle</span>
                <p className="text-slate-700 leading-relaxed">
                  Water expands as it freezes. Placing a filled bottle in the freezer will crush the double-wall vacuum weld and physically crack the cap's lithium cell.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                <span className="font-bold text-amber-900 block">2. Never Microwave Any Part</span>
                <p className="text-slate-700 leading-relaxed">
                  Both the stainless steel vessel and electronic cap contain conductive metals that will spark violently and cause permanent fire danger in a microwave.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                <span className="font-bold text-amber-900 block">3. Never Use Abrasive Scouring Pads</span>
                <p className="text-slate-700 leading-relaxed">
                  Scrubbing the quartz window with steel wool or abrasive green scouring pads will scratch the optical surface, scattering and dimming the ultraviolet beam.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                <span className="font-bold text-amber-900 block">4. Never Pour Sweetened Liquids</span>
                <p className="text-slate-700 leading-relaxed">
                  Milks, juices, and sports drinks leave sticky sugar residues over the quartz lens and foster thick mold in internal crevices that UV-C cannot break down.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <div className="p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200 space-y-4 not-prose my-10">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Related Care Guides</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Looking for general bottle washing advice or dealing with stubborn mildew in traditional containers? Explore our step-by-step cleaning and odor removal articles.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="/how-to-clean-a-reusable-water-bottle"
                onClick={(e) => handleLink(e, '/how-to-clean-a-reusable-water-bottle')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors text-center"
              >
                <span>Read How to Clean a Reusable Bottle</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/remove-smell-from-water-bottle"
                onClick={(e) => handleLink(e, '/remove-smell-from-water-bottle')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-cyan-900 bg-white hover:bg-cyan-50 border border-cyan-200 rounded-lg transition-colors text-center"
              >
                <span>Read How to Remove Bad Smells</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        <FAQAccordion
          items={ARTICLE_10_FAQS}
          title="Frequently Asked Questions: Smart Bottle Maintenance"
          subtitle="Answers regarding optical lens cleaning, magnetic pin care, and freezer hazards."
        />

      </div>
    </article>
  );
}
