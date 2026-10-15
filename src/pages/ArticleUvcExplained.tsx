import { ArrowLeft, ArrowRight, Zap, ShieldCheck, AlertCircle, Eye, Calendar, Clock, BookOpen } from 'lucide-react';
import uvcExplainedImg from '../assets/images/uvc_explained_tech_1792071853188.jpg';
import { ARTICLE_6_FAQS, ARTICLES_CONFIG } from '../data/articlesData.ts';
import { FAQAccordion } from '../components/FAQAccordion.tsx';
import { ReadingProgressBar } from '../components/ReadingProgressBar.tsx';

interface ArticleUvcExplainedProps {
  onNavigate: (path: string) => void;
}

export function ArticleUvcExplained({ onNavigate }: ArticleUvcExplainedProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const meta = ARTICLES_CONFIG['uv-c-water-bottles-explained'];

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
            UV-C Water Bottles Explained: The Deep Physics, Biology & Safety Mechanisms
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="font-semibold text-slate-800">By PureSip Science Team</span>
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
            <span className="text-cyan-700 font-medium">Photobiology & Technology Deep Dive</span>
          </div>
        </div>
      </header>

      {/* Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <figure className="mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
          <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden">
            <img
              src={uvcExplainedImg}
              alt="High-tech scientific visual of deep ultraviolet UV-C germicidal light propagating through clear water in an educational laboratory setting"
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
          <figcaption className="p-4 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
            <span>Laboratory depiction of shortwave ultraviolet radiation penetrating liquid volumes to induce germicidal DNA inactivation.</span>
            <span className="font-mono text-slate-400">Fig 6.1</span>
          </figcaption>
        </figure>

        <div className="space-y-10 text-slate-700 leading-relaxed text-base sm:text-[17px]">
          
          <div className="space-y-4">
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              Ultraviolet germicidal irradiation has been trusted for over a century to sanitize municipal drinking water reservoirs, surgical hospital suites, and pharmaceutical cleanrooms. Yet until very recently, generating effective ultraviolet wavelengths required bulky, delicate mercury-vapor gas discharge tubes running on high mains voltage.
            </p>
            <p>
              The emergence of compact semiconductor technology changed everything. Today, having <strong>UV-C water bottles explained</strong> reveals a remarkable convergence of solid-state optoelectronics and molecular biology. By packing a micro-LED into an <strong>ultraviolet water bottle</strong> cap, consumers carry a miniature water treatment facility wherever they travel. But how does a <strong>germicidal LED bottle</strong> actually function, and what optical principles govern its performance?
            </p>
          </div>

          {/* Question H2 1 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              How do UV-C water bottles neutralize bacteria and harmful viruses?
            </h2>
            <p>
              UV-C water bottles neutralize bacteria and viruses by emitting concentrated short-wavelength ultraviolet radiation between 260 and 280 nanometers directly into the liquid. When pathogens absorb this light energy, it shatters their genetic DNA and RNA molecular bonds, preventing them from replicating, colonizing, or causing human infection.
            </p>
            <p>
              The fundamental biological target of UV-C light is nucleic acid. Inside microbial cells, deoxyribonucleic acid (DNA) stores genetic instructions through paired nitrogenous bases: adenine, thymine, cytosine, and guanine. Peak light absorption for DNA occurs at roughly 265 nanometers.
            </p>
            <p>
              When a photon at this wavelength strikes adjacent thymine base pairs, it creates a photochemical reaction known as dimerization. The adjacent thymine bases bond to each other instead of their complimentary adenine partners across the double helix. This structural distortion acts like a wrench in the cell's genetic replication engine. When the bacterium attempts to divide, cellular polymerases stall at the dimer, preventing reproduction and rendering the organism biologically harmless.
            </p>
          </section>

          {/* Solid State GaN vs Mercury */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              The Solid-State Revolution: Why Gallium Nitride LEDs Matter
            </h2>
            <p>
              For decades, portable ultraviolet sanitization was virtually impossible because mercury lamps were too fragile, drew excessive current, and contained hazardous heavy metals. Modern smart bottles succeeded only because of recent breakthroughs in Gallium Nitride (GaN) and Aluminum Gallium Nitride (AlGaN) solid-state semiconductors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 not-prose text-xs">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <span className="font-bold text-slate-900 block">100% Mercury-Free</span>
                <p className="text-slate-600 leading-relaxed">
                  Solid-state micro-LEDs contain zero toxic chemicals or fragile glass vacuum bulbs, making them completely safe for consumer drinking containers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <span className="font-bold text-slate-900 block">Instant Peak Output</span>
                <p className="text-slate-600 leading-relaxed">
                  Unlike traditional gas bulbs that require several minutes of warm-up time, GaN LEDs reach full germicidal photon output in less than 20 milliseconds.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <span className="font-bold text-slate-900 block">20,000+ Cycle Lifespan</span>
                <p className="text-slate-600 leading-relaxed">
                  Solid-state diodes withstand thousands of on/off power cycles without degrading, providing years of reliable daily sanitization.
                </p>
              </div>
            </div>
          </section>

          {/* Optical Physics of the Bottle Body */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Why the Bottle Interior Material Dictates Sanitation Success
            </h2>
            <p>
              The cap is only half of the optical equation. The physical body of the bottle plays an equally critical role in dispersing ultraviolet energy throughout the entire volume of water.
            </p>
            <p>
              In water, light naturally attenuates with distance. If a bottle were lined with matte black rubber or dark plastic, the ultraviolet beam would travel straight down, be absorbed by the bottom, and leave bacteria along the upper perimeter untreated. High-grade self-cleaning bottles solve this by using electropolished 18/8 (grade 304) or marine 316 stainless steel.
            </p>
            <p>
              Passivated, polished stainless steel has a high specular reflectance coefficient for ultraviolet light. Rather than being absorbed, photons ricochet off the interior steel walls and bounce back through the liquid column at intersecting angles. This light scattering ensures that water in every corner of the cylinder receives the necessary ultraviolet dosage (measured in millijoules per square centimeter, or mJ/cm²) needed to achieve a 99.99% microbial reduction.
            </p>
          </section>

          {/* Question H2 2 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              Is the UV-C light in water bottles dangerous to human health or eyes?
            </h2>
            <p>
              No, the UV-C light in certified self-cleaning water bottles is not dangerous to human health or eyes because the radiation is fully contained inside the opaque stainless steel chamber during operation. Furthermore, all reputable manufacturers integrate automatic gyroscopic tilt sensors that instantly cut power to the ultraviolet LED if the cap is loosened, removed, or pointed upwards.
            </p>
            <p>
              Direct, unshielded exposure to UV-C light is indeed harmful to human tissue. Shortwave ultraviolet radiation can cause painful eye inflammation known as photokeratitis (similar to welder's flash or severe snow blindness) and surface skin redness.
            </p>
            <p>
              However, when securely screwed onto a stainless steel bottle, zero ultraviolet radiation escapes through the metal walls. In addition, hardware interlocks provide failsafe protection: micro-switches or gyroscopic accelerometers monitor cap orientation in real-time. The moment the cap is tilted more than 45 degrees or unthreaded from the bottle neck, the circuit cuts power immediately, ensuring users cannot accidentally stare into the active emitter.
            </p>
          </section>

          {/* Physical Limitations */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              The Physics of Failure: Why UV-C Cannot Clean Dirty Water
            </h2>
            <p>
              Understanding UV-C also requires understanding its physical boundaries. Ultraviolet sanitization is fundamentally a line-of-sight optical process. It operates under two strict physical constraints:
            </p>

            <div className="space-y-4 my-6">
              <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>The Shadowing Effect (Turbidity)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  If water contains suspended silt, algae, mud, or cloudiness, those macroscopic particles absorb and scatter the light beam. Microorganisms hiding behind suspended particles sit in literal optical shadows, completely protected from germicidal photon absorption.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Zero Chemical or Mineral Binding</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Photons break genetic bonds in living cells; they have zero chemical ability to bind heavy metals like lead or mercury, filter microplastics, or neutralize dissolved agricultural pesticides. Clear potable tap water is sanitized; contaminated chemical runoff is not.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <div className="p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200 space-y-4 not-prose my-10">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Explore More Technology Guides</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Explore how smart UV-C bottles stack up against regular insulated flasks, or learn the proper cleaning protocols for optical lenses and silicone gaskets.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="/self-cleaning-vs-regular-water-bottles"
                onClick={(e) => handleLink(e, '/self-cleaning-vs-regular-water-bottles')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors text-center"
              >
                <span>Read Self-Cleaning vs Regular Bottles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/maintain-a-self-cleaning-water-bottle"
                onClick={(e) => handleLink(e, '/maintain-a-self-cleaning-water-bottle')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-cyan-900 bg-white hover:bg-cyan-50 border border-cyan-200 rounded-lg transition-colors text-center"
              >
                <span>Read Maintenance Protocols</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        <FAQAccordion
          items={ARTICLE_6_FAQS}
          title="Frequently Asked Questions: UV-C Physics & Safety"
          subtitle="Direct answers regarding germicidal mechanisms, optical quartz windows, and child safety."
        />

      </div>
    </article>
  );
}
