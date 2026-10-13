import { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import buyersGuideImg from '../assets/images/buyers_guide_bottles_1791915640480.jpg';
import { ARTICLE_3_FAQS, ARTICLES_CONFIG } from '../data/articlesData.ts';
import { COMPARISON_BOTTLES, BUYING_CHECKLIST } from '../data/comparisonData.ts';
import { FAQAccordion } from '../components/FAQAccordion.tsx';
import { ReadingProgressBar } from '../components/ReadingProgressBar.tsx';

interface ArticleBuyersGuideProps {
  onNavigate: (path: string) => void;
}

export function ArticleBuyersGuide({ onNavigate }: ArticleBuyersGuideProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const meta = ARTICLES_CONFIG['how-to-choose-a-self-cleaning-water-bottle'];

  const filteredBottles = selectedCategory === 'all'
    ? COMPARISON_BOTTLES
    : COMPARISON_BOTTLES.filter(b => b.category.toLowerCase().includes(selectedCategory.toLowerCase()));

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
            How to Choose a Self-Cleaning Water Bottle: The Complete Practical Buyer Guide
          </h1>

          {/* Unboxed Metadata (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="font-semibold text-slate-800">By PureSip Buyer Advisory Team</span>
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
            <span className="text-cyan-700 font-medium">Buyer Advisory</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Main Article Image with Descriptive Alt */}
        <figure className="mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
          <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden">
            <img
              src={buyersGuideImg}
              alt="Comparison display of three distinct reusable insulated bottles in matte finishes with magnetic charging cables on a clean wooden surface"
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
          <figcaption className="p-4 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
            <span>Comparing reusable bottle capacities, cap charging architectures, and thermal vacuum wall construction.</span>
            <span className="font-mono text-slate-400">Fig 3.1</span>
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="space-y-10 text-slate-700 leading-relaxed text-base sm:text-[17px]">

          {/* Introduction Paragraphs */}
          <div className="space-y-4">
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              With the growing popularity of smart hydration accessories, the market for self-cleaning water bottles has expanded rapidly. What began as a niche category pioneered by crowdfunding campaigns is now populated by dozens of models ranging from budget plastic vessels to premium double-wall vacuum insulated flasks priced over one hundred dollars.
            </p>
            <p>
              However, not all self-cleaning bottles are built to the same engineering standards. Differences in ultraviolet wavelength accuracy, optical safety sensors, waterproof ingress protection, battery longevity, and metal alloy composition make a significant impact on long-term satisfaction and safety. This objective buyer guide breaks down every crucial purchasing parameter to help you choose the ideal model for your lifestyle and budget.
            </p>
          </div>

          {/* Section 1: Question-style H2 with direct answer in sentence 1-2 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              Which self-cleaning technology should you choose: UV-C LED or electrolytic ozone?
            </h2>
            <p>
              For most daily consumers, UV-C LED technology is the superior choice because it provides chemical-free, flavorless microbial sanitization with minimal maintenance and exceptional energy efficiency. Electrolytic ozone caps can provide potent water purification, but they generate dissolved ozone gas that leaves a noticeable metallic or chlorinated aftertaste and can degrade silicone seals over prolonged use.
            </p>
            <p>
              UV-C solid-state light emitters (emitting between 260 and 280 nanometers) sanitize water without adding or extracting any chemical compounds. The taste profile of crisp tap water remains completely unchanged. Moreover, solid-state UV-C LEDs boast operating lifespans exceeding 20,000 cycles, translating to many years of reliable daily sanitization.
            </p>
            <p>
              Electrolytic ozone systems, by contrast, utilize miniature titanium-coated electrolytic plates to convert trace dissolved oxygen molecules in water into aqueous ozone (O₃). While ozone is a formidable oxidizer that breaks down certain organic molecules, it demands that water contain a baseline mineral content to conduct electricity. If filled with distilled or reverse-osmosis purified water, electrolytic plates may fail to generate sufficient ozone, making UV-C LEDs far more dependable across diverse water chemistries.
            </p>
          </section>

          {/* Section 2: Question-style H2 with direct answer in sentence 1-2 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              How long does the battery typically last on a self-cleaning water bottle?
            </h2>
            <p>
              Under normal everyday usage, the rechargeable lithium-ion battery in a self-cleaning water bottle typically lasts between 14 and 30 days on a single charge. Battery longevity varies based on how frequently the automated cleaning cycle runs (usually 10 to 60 seconds every two to four hours) and whether you manually trigger higher-intensity 3-minute adventure cycles.
            </p>
            <p>
              When evaluating battery specifications, examine both the internal milliamp-hour (mAh) rating and the charging interface. Capacities generally range from 300 mAh to 500 mAh. Because modern Gallium Nitride (GaN) UV-C LEDs draw relatively low current during short 60-second bursts, even a modest 400 mAh battery can easily sustain over sixty cleaning cycles before requiring a recharge.
            </p>
            <p>
              Pay close attention to the charging mechanism:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 not-prose">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <span className="font-bold text-slate-900 text-xs block">Magnetic Pogo-Pin Connectors (Recommended)</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A magnetic contact cable snaps seamlessly to external terminals on top of the cap. Because there is no open socket or rubber flap to wear out, the cap maintains permanent IPX7 hermetic waterproofing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <span className="font-bold text-slate-900 text-xs block">Standard USB-C with Silicone Port Gasket</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Offers universal cable compatibility, but relies on a flexible rubber plug. If the user forgets to push the plug firmly into place before washing under a faucet, water can infiltrate the charging circuitry.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Essential Buying Parameters */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Six Critical Parameters to Evaluate Before Buying
            </h2>

            <div className="space-y-4 my-6">
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">1. Capacity and Pack Weight</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Self-cleaning bottles are heavier than basic steel containers due to the battery, PCB, and lens assembly inside the cap (adding approximately 100g to 140g). A 500 ml (17 oz) bottle is ideal for light commutes and running errands, whereas 750 ml (25 oz) is the sweet spot for gym sessions and full work days. Capacities beyond 1 liter (32 oz) become bulky and may reduce light intensity at the far bottom base.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">2. Thermal Insulation vs Single-Wall Portability</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Double-wall vacuum insulation made from food-grade 18/8 stainless steel keeps chilled water ice-cold for 24 hours. Cold temperatures naturally inhibit bacterial reproduction, complementing the UV-C LED. However, if pack weight is your primary concern for ultralight trekking, single-wall models reduce total weight by roughly 40%.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">3. Optical Tilt Safety Shutoff</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Direct exposure to shortwave UV-C radiation can cause corneal irritation (photokeratitis) and skin redness. Never purchase a model that lacks an integrated gyroscopic or tilt cutoff sensor. When you unthread the cap or tilt it upward past a 45-degree angle, the emitter must shut off instantly.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">4. Body Materials & Interior Finish</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ensure the internal chamber is crafted from passivated, electropolished 18/8 (304) or marine-grade 316 stainless steel. Polished interior surfaces enhance the reflection of ultraviolet photons throughout the liquid chamber while resisting staining and pitting.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">5. Price Considerations & Value Spectrum</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Reliable, safety-certified self-cleaning bottles typically retail between $65 and $115. Products listed below $40 often cut corners by substituting genuine 265–275 nm UV-C LEDs with inexpensive near-UV or blue LEDs (390–405 nm), which emit an impressive purple glow but possess zero actual germicidal capability.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-base font-bold text-slate-900 font-display">6. Cap Seal & Gasket Replaceability</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Over months of regular use, food-grade silicone O-rings can stretch or retain odors if not rinsed. Confirm that the manufacturer uses standard removable silicone gaskets that can be detached for hand cleaning or replaced easily.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Comprehensive Comparison Table */}
          <section className="space-y-6 pt-4 border-t border-slate-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
                Reusable Bottle Category Comparison Matrix
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Compare self-cleaning designs against traditional insulated tumblers and physical filtration bottles.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 mr-2">Filter Category:</span>
              {[
                { id: 'all', label: 'All Categories' },
                { id: 'traditional', label: 'Traditional Reusable' },
                { id: 'electronic', label: 'Portable UV-C' },
                { id: 'self-cleaning', label: 'Thermal UV-C' },
                { id: 'outdoor', label: 'Outdoor Filter' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-cyan-700 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs not-prose">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                    <th className="p-3.5 sm:p-4 whitespace-nowrap">Bottle Model</th>
                    <th className="p-3.5 sm:p-4 whitespace-nowrap">Sanitization Tech</th>
                    <th className="p-3.5 sm:p-4 whitespace-nowrap">Capacity</th>
                    <th className="p-3.5 sm:p-4 whitespace-nowrap">Battery & Power</th>
                    <th className="p-3.5 sm:p-4 whitespace-nowrap">Thermal Insulation</th>
                    <th className="p-3.5 sm:p-4 min-w-[180px]">Best Suited For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredBottles.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                        {b.name}
                        <span className="block text-[11px] text-slate-400 font-normal">{b.category}</span>
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-600 font-mono text-[11px]">{b.techType}</td>
                      <td className="p-3.5 sm:p-4 text-slate-700 font-mono tabular-nums">{b.capacity}</td>
                      <td className="p-3.5 sm:p-4 text-slate-600">
                        {b.batteryLife}
                        <span className="block text-[10px] text-slate-400">{b.chargingType}</span>
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-700 font-mono text-[11px]">{b.insulation}</td>
                      <td className="p-3.5 sm:p-4 text-slate-600 leading-relaxed text-[11px]">{b.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Buyer Checklist */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Pre-Purchase Verification Checklist
            </h2>
            <p>
              Before placing an order for any self-cleaning water bottle, review these five essential verification questions:
            </p>

            <div className="space-y-3 my-6 not-prose">
              {BUYING_CHECKLIST.map((item, idx) => (
                <div key={item.title} className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Cross-Linking Box */}
          <div className="p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200 space-y-4 not-prose my-10">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 uppercase tracking-wider">
              <span>Explore Additional Research</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Explore the detailed science behind UV-C wavelength absorption, or examine how automated sanitization tackles daily bottle odor and hygiene challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="/how-self-cleaning-water-bottles-work"
                onClick={(e) => handleLink(e, '/how-self-cleaning-water-bottles-work')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors text-center"
              >
                <span>Read How UV-C Technology Works</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/benefits-of-self-cleaning-water-bottles"
                onClick={(e) => handleLink(e, '/benefits-of-self-cleaning-water-bottles')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-cyan-900 bg-white hover:bg-cyan-50 border border-cyan-200 rounded-lg transition-colors text-center"
              >
                <span>Read Benefits & Odor Prevention</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Article FAQ Section */}
        <FAQAccordion
          items={ARTICLE_3_FAQS}
          title="Frequently Asked Questions: Buyer Guide"
          subtitle="Direct answers regarding battery longevity, magnetic charging, capacity, and fair pricing."
        />

      </div>
    </article>
  );
}
