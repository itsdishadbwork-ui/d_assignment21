import { ArrowLeft, ArrowRight, Shield, Zap, AlertTriangle, BookOpen, Clock, Calendar } from 'lucide-react';
import uvcTechImg from '../assets/images/uvc_tech_diagram_1791915640312.jpg';
import { ARTICLE_1_FAQS, ARTICLES_CONFIG } from '../data/articlesData.ts';
import { FAQAccordion } from '../components/FAQAccordion.tsx';
import { ReadingProgressBar } from '../components/ReadingProgressBar.tsx';

interface ArticleHowItWorksProps {
  onNavigate: (path: string) => void;
}

export function ArticleHowItWorks({ onNavigate }: ArticleHowItWorksProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const meta = ARTICLES_CONFIG['how-self-cleaning-water-bottles-work'];

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
            How Do Self-Cleaning Water Bottles Work? Technology, UV-C Science, and Realistic Limits
          </h1>

          {/* Unboxed Metadata (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="font-semibold text-slate-800">By PureSip Research Team</span>
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
            <span className="text-cyan-700 font-medium">Educational Reference</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Main Article Image with Descriptive Alt */}
        <figure className="mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
          <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden">
            <img
              src={uvcTechImg}
              alt="Detailed technical illustration of a self-cleaning bottle cap showing UV-C LED sanitizing emitter casting focused ultraviolet beam into clear water"
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
          <figcaption className="p-4 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
            <span>Cutaway schematic demonstrating the cap-mounted UV-C solid-state emitter, quartz window, and reflective steel chamber.</span>
            <span className="font-mono text-slate-400">Fig 1.1</span>
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="space-y-10 text-slate-700 leading-relaxed text-base sm:text-[17px]">

          {/* Introduction Paragraphs */}
          <div className="space-y-4">
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              Anyone who has used a standard reusable beverage flask knows the familiar unpleasant scent of stale dampness that arises after just twenty-four hours of regular use. Despite our best intentions, moist enclosed metal containers create an ideal incubator for biological flora introduced from our lips, saliva backwash, and everyday drinking tap water.
            </p>
            <p>
              To solve this everyday frustration without requiring constant scrubbing at office sinks, engineers developed the modern <strong>self-cleaning water bottle</strong>. By harnessing miniature solid-state ultraviolet light-emitting diodes built into the bottle lid, these devices promise to eradicate up to 99.99% of bacterial contaminants and odor-producing microbes at the push of a button. But how does this technology function at the molecular level, what enables its automated sanitization cycles, and where do its physical capabilities end?
            </p>
          </div>

          {/* Section 1: Question-style H2 with direct answer in sentence 1-2 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              How do self-cleaning water bottles sterilize water and internal surfaces?
            </h2>
            <p>
              Self-cleaning water bottles sterilize water and interior surfaces by deploying deep ultraviolet radiation (UV-C) at a wavelength of 260 to 280 nanometers from a cap-mounted solid-state LED. When this germicidal light strikes microscopic organisms suspended in water or clinging to the steel walls, it ruptures their molecular DNA and RNA bonds, immediately rendering bacteria, viruses, and mold spores unable to reproduce or cause illness.
            </p>
            <p>
              This photochemical intervention is known scientifically as ultraviolet germicidal irradiation (UVGI). In nature, shortwave UV-C solar radiation is entirely absorbed by Earth’s protective ozone layer, meaning terrestrial organisms have evolved virtually no physiological defenses against it. When microbial cells are bathed in targeted 265–275 nm photons, the radiant energy specifically disrupts adjacent thymine nitrogenous bases on the DNA strand, welding them together into unnatural thymine dimers.
            </p>
            <p>
              Once dimer formation occurs, the pathogen’s reproductive machinery is permanently disabled. Even if the bacterium or viral capsid remains physically suspended in the liquid, it is biologically inactivated. It can no longer metabolize organic compounds, secrete noxious odor-causing sulfur gases, form slimy biofilm coatings, or colonize the human digestive tract.
            </p>
          </section>

          {/* Section 2: Mechanics of the Cap Architecture */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Anatomy of a Smart UV-C Cap: From Quartz Lenses to Lithium Cells
            </h2>
            <p>
              The core innovation distinguishing a self-cleaning bottle from a traditional steel container lies entirely inside its cap assembly. A contemporary UV-C cap integrates four precision components into a compact, watertight enclosure:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-cyan-800 uppercase tracking-wider">01. Solid-State UV-C LED Module</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unlike fragile, mercury-filled germicidal tubes of the past, modern bottles employ nontoxic Gallium Nitride (GaN) micro-LEDs that emit targeted 265–275 nm radiation instantly with zero warm-up latency.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-cyan-800 uppercase tracking-wider">02. Optical Quartz Crystal Window</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standard borosilicate glass and plastic polymers block shortwave UV-C light completely. Manufacturers seal the LED behind an optical-grade fused quartz lens that allows maximum ultraviolet photon transmission into the water.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-cyan-800 uppercase tracking-wider">03. Microcontroller & Timer Circuit</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  An integrated printed circuit board (PCB) regulates battery power delivery, registers capacitive touch sensor inputs, and manages autonomous periodic cleaning cycles every two to four hours.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-cyan-800 uppercase tracking-wider">04. Optical Tilt Safety Interlock</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Gyroscopic tilt sensors deactivate the LED immediately if the bottle cap is unthreaded or angled upwards, shielding user retinas and skin from direct ultraviolet exposure.
                </p>
              </div>
            </div>

            <p>
              Furthermore, the body of the bottle acts as an active multiplier for the light source. High-grade self-cleaning bottles feature electropolished 18/8 food-grade stainless steel on the inside. Because polished steel has a high specular reflectance for ultraviolet wavelengths, the emitted light beam bounces repeatedly between the walls and the base of the cylinder, penetrating the entire water volume rather than merely treating the surface layer.
            </p>
          </section>

          {/* Section 3: Automated vs Manual Cycles & Practical Examples */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Operating Cycles in Practice: Normal vs Deep Clean Routines
            </h2>
            <p>
              Most commercial self-cleaning bottles offer two distinct operational modes designed for varying daily use situations:
            </p>

            <div className="space-y-4 my-6">
              <div className="p-5 rounded-xl bg-cyan-50/60 border border-cyan-200 space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">Normal Maintenance Cycle (60 Seconds)</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Activated automatically every 2 to 4 hours or manually with a single tap on the cap’s capacitive button. This mode delivers a measured dose of UV-C photons sufficient to prevent vegetative bacteria introduced from normal sipping from establishing colonies in stagnant room-temperature water.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">Deep / Adventure Cycle (180 Seconds)</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Activated with a double-tap. The LED module increases photon flux and sustains continuous exposure for 3 minutes, tripling the cumulative ultraviolet dosage (measured in millijoules per square centimeter, mJ/cm²). This setting is recommended when refilling from unfamiliar municipal taps or airport water stations where baseline water quality might be variable.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 font-display pt-2">Practical Everyday Examples</h3>
            <p>
              Consider a university student studying for finals in a campus library for eight hours. With a conventional bottle, room-temperature backwash bacteria double in population roughly every twenty minutes, creating a noticeable musty smell by late afternoon. With an automated UV-C bottle, the cap quietly pulses for 60 seconds every two hours, repeatedly halting bacterial doubling and keeping the water tasting crisp and fresh through the entire study session.
            </p>
            <p>
              Similarly, consider an office commuter who forgets their water bottle on their desk over the weekend. A standard bottle left sealed for 72 hours frequently develops a stubborn microbial biofilm along the bottom corner that requires bleach or boiling water to dislodge. A self-cleaning bottle maintains its autonomous pulse cycle through Saturday and Sunday, keeping the stagnant chamber clean until Monday morning.
            </p>
          </section>

          {/* Section 4: Question-style H2 with direct answer in sentence 1-2 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              Can UV-C water bottles turn cloudy or muddy water into safe drinking water?
            </h2>
            <p>
              No, UV-C water bottles cannot make cloudy or muddy water safe to drink. Ultraviolet sanitization is strictly an optical disinfection process that requires clear water for light penetration; suspended silt, sediment, and turbidity block germicidal rays by casting physical optical shadows where pathogens remain fully shielded from the light beam.
            </p>
            <p>
              This is one of the most dangerous misconceptions surrounding self-cleaning technology. Photons can only neutralize what they can physically reach. If you scoop water from an alpine stream that contains visible cloudiness, algae, decaying leaf matter, or fine glacial silt, bacteria and cryptosporidium cysts will shelter behind those microscopic particles, emerging completely unharmed by the UV-C cycle.
            </p>
            <p>
              Furthermore, UV-C radiation has zero capability to alter dissolved chemicals, heavy metals, industrial pesticides, or microplastics. It cannot remove lead from aging municipal pipes, nor can it eliminate chlorine or agricultural runoff. For backcountry wilderness adventures where raw river water is your only source, a UV-C bottle must always be preceded by a physical 0.1-micron hollow-fiber membrane filter to clear debris and remove protozoan cysts before ultraviolet irradiation.
            </p>
          </section>

          {/* Section 5: Crucial Maintenance Guidelines */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Manufacturer Instructions & What You Still Must Wash by Hand
            </h2>
            <p>
              Because these products bear the moniker "self-cleaning," many owners make the mistake of assuming they never need to wash their bottle again. In reality, manufacturer instruction manuals outline several vital maintenance protocols that are critical for longevity and hygiene:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li>
                <strong>The Mouthpiece and Thread Rim:</strong> The UV-C light beam is directed downward into the bottle reservoir. It does not wrap around the upper exterior lip, threads, or silicone rim where your mouth makes direct contact. Saliva, dead skin cells, and lip balms collect along the threads and must be washed with warm soapy water at least once a week.
              </li>
              <li>
                <strong>Optical Lens Maintenance:</strong> Over weeks of use, hard water minerals (calcium and magnesium) can leave a faint mineral scale over the quartz glass lens on the underside of the cap. Inspect the lens periodically and wipe it gently with a soft cloth dipped in diluted white vinegar to ensure maximum ultraviolet transmission.
              </li>
              <li>
                <strong>Never Submerge Electronic Caps in Dishwashers:</strong> While high-quality caps boast IPX7 splash and submersion ratings for normal sink rinsing, the intense water pressures, steam heat, and harsh abrasive detergents of household dishwashers can compromise waterproof seals and permanently destroy internal lithium battery circuits.
              </li>
              <li>
                <strong>Clear Water Only:</strong> Never pour coffee, sweetened tea, electrolyte sports powders, or milk into a self-cleaning bottle. Sugars and proteins cloud the liquid, rapidly coat the quartz lens, and render the UV-C cycle ineffective while fostering thick mold colonies along rubber gaskets.
              </li>
            </ul>
          </section>

          {/* Internal Cross-Linking Box */}
          <div className="p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200 space-y-4 not-prose my-10">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Continue Your Research</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Now that you understand the optical physics behind UV-C LEDs, explore how these principles translate into everyday hygiene advantages, or consult our buyer guide to compare leading bottle designs.
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
                href="/how-to-choose-a-self-cleaning-water-bottle"
                onClick={(e) => handleLink(e, '/how-to-choose-a-self-cleaning-water-bottle')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-cyan-900 bg-white hover:bg-cyan-50 border border-cyan-200 rounded-lg transition-colors text-center"
              >
                <span>View Buyer Comparison Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Article FAQ Section */}
        <FAQAccordion
          items={ARTICLE_1_FAQS}
          title="Frequently Asked Questions on UV-C Bottle Technology"
          subtitle="Specific technical questions regarding wavelengths, cycles, and water chemistry."
        />

      </div>
    </article>
  );
}
