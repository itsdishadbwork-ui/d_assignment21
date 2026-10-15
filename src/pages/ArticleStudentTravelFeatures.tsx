import { ArrowLeft, ArrowRight, Plane, GraduationCap, ShieldCheck, Battery, Calendar, Clock, BookOpen } from 'lucide-react';
import studentTravelImg from '../assets/images/student_travel_gear_1792071855459.jpg';
import { ARTICLE_9_FAQS, ARTICLES_CONFIG } from '../data/articlesData.ts';
import { FAQAccordion } from '../components/FAQAccordion.tsx';
import { ReadingProgressBar } from '../components/ReadingProgressBar.tsx';

interface ArticleStudentTravelFeaturesProps {
  onNavigate: (path: string) => void;
}

export function ArticleStudentTravelFeatures({ onNavigate }: ArticleStudentTravelFeaturesProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const meta = ARTICLES_CONFIG['water-bottle-features-for-students-and-travellers'];

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
            Best Water Bottle Features for Students and Travellers: Mobile Hydration Guide
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="font-semibold text-slate-800">By PureSip Travel Advisory</span>
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
            <span className="text-cyan-700 font-medium">On-the-Go Buying Advisory</span>
          </div>
        </div>
      </header>

      {/* Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <figure className="mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
          <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-100 overflow-hidden">
            <img
              src={studentTravelImg}
              alt="Student and traveller gear layout with a lightweight insulated water bottle with carry loop, notebook, passport, and canvas backpack"
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
          <figcaption className="p-4 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
            <span>Essential hydration setup for university life and frequent transit: leakproof seals, carry loops, and TSA-compliant electronics.</span>
            <span className="font-mono text-slate-400">Fig 9.1</span>
          </figcaption>
        </figure>

        <div className="space-y-10 text-slate-700 leading-relaxed text-base sm:text-[17px]">
          
          <div className="space-y-4">
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              Whether you are dashing between lecture halls on a sprawling university campus or navigating layovers in international airport terminals, maintaining consistent hydration is vital for cognitive alertness and stamina. Yet mobile lifestyles present unique challenges: heavy backpacks, crowded transit seats, limited sink access, and unpredictable water refilling stations.
            </p>
            <p>
              Identifying the <strong>best water bottle features for students and travellers</strong> means looking beyond aesthetic colors and focusing on utilitarian performance. In this practical guide, we evaluate what makes the <strong>best travel water bottle</strong> and the ideal <strong>campus hydration bottle</strong>, detailing leakproofing, battery regulations, thermal vacuum insulation, and autonomous hygiene features.
            </p>
          </div>

          {/* Question H2 1 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              What are the most important water bottle features for students and travellers?
            </h2>
            <p>
              The most important water bottle features for students and travellers are guaranteed leakproof sealing, a compact 20 to 25 ounce capacity that fits into backpack side pockets, and durable double-wall vacuum insulation to maintain cold water all day. Furthermore, active travel and campus life benefit significantly from integrated carry loops, lightweight food-grade stainless steel construction, and autonomous UV-C sanitization to prevent bacterial odor between infrequent washes.
            </p>
            <p>
              When a bottle shares space in a backpack with a $1,200 laptop, expensive textbooks, or a passport, a faulty screw thread or loose silicone ring can cause catastrophic damage. Zero-tolerance leak resistance is non-negotiable.
            </p>
            <p>
              Equally important is ergonomics: a bottle that is too wide to slide into an aircraft seatback pocket or campus lecture hall desk cup holder will end up being carried awkwardly in hand or left behind. Choosing a streamlined cylinder with a secure carry handle transforms hydration from an inconvenience into a natural daily reflex.
            </p>
          </section>

          {/* Question H2 2 */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight text-balance">
              Can you take a self-cleaning water bottle with an electronic battery through airport security?
            </h2>
            <p>
              Yes, you can take a self-cleaning water bottle with an electronic battery through airport security as long as the bottle is completely empty of liquids before entering the screening checkpoint. The small rechargeable lithium-ion battery housed within the cap complies with FAA and international civil aviation safety rules for carry-on luggage, although it should not be packed in checked luggage.
            </p>
            <p>
              Transportation Security Administration (TSA) and European aviation security regulations strictly prohibit liquids exceeding 100 milliliters (3.4 oz) at security checkpoints. Empty bottles of any material—including stainless steel smart bottles—are 100% permitted.
            </p>
            <p>
              Regarding electronics, self-cleaning caps feature tiny lithium batteries (typically between 300 mAh and 500 mAh, or roughly 1.5 to 2.0 Watt-hours). This falls well below the 100 Watt-hour limit imposed by airlines for lithium battery carry-on devices. Because lithium batteries represent a fire risk in cargo holds, always keep your smart bottle in your carry-on daypack rather than in checked baggage under the plane.
            </p>
          </section>

          {/* 6 Essential Features Breakdown */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Six Critical Features for Active Mobile Hydration
            </h2>

            <div className="space-y-4 my-6">
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <span className="text-xs font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">01</span>
                  <span>1. Deep Thread Leakproof Engineering</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Look for multi-turn internal threads with a thick, food-grade silicone compression gasket. Bottles with quick pop-tops or flip straws are prone to accidental opening when squeezed against notebooks inside packed daypacks.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <span className="text-xs font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">02</span>
                  <span>2. 20 oz to 24 oz (600–700 ml) Sweet Spot</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Larger 32 oz or 40 oz flasks weigh over three pounds when full and stretch backpack mesh pockets until they tear. A 20 to 24 oz bottle supplies two to three hours of hydration while remaining light and compact.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <span className="text-xs font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">03</span>
                  <span>3. Double-Wall Vacuum Sweat Protection</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Single-wall bottles sweat heavily in humid lecture halls and tropical climates, soaking papers and electronics. Double-wall vacuum insulation maintains external surface dryness regardless of internal ice temperature.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <span className="text-xs font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">04</span>
                  <span>4. Magnetic Portless Recharging</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Caps that use magnetic snap-on contact pins eliminate open USB ports and vulnerable rubber flaps, ensuring you can rinse the cap under hostel or hotel sinks without fear of short-circuiting.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <span className="text-xs font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">05</span>
                  <span>5. Ergonomic Carry Loop or Carabiner Attachment</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A rigid or articulated loop on top of the cap lets you clip the flask to travel bags or hook it on a single finger while juggling a campus ID card, phone, and study materials.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <span className="text-xs font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">06</span>
                  <span>6. Autonomous Odor Prevention</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Students and travellers rarely have daily access to dish soap or bottle brushes. Self-cleaning UV-C cycles eliminate stagnant bacterial odor, keeping water palatable throughout long journeys.
                </p>
              </div>
            </div>
          </section>

          {/* Airport Refill Protocol */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Airport & Travel Refilling Best Practices
            </h2>
            <p>
              Airport water bottle refilling stations have become common worldwide, but hygiene varies widely. High-traffic touchless fountains can harbor bacteria along the nozzle from passengers bumping contaminated mouthpieces against the sensor.
            </p>
            <p>
              When refilling at airport terminals or hotel sinks, run the water for five seconds before filling your container to clear stagnant pipe lines. If your bottle is equipped with an automated UV-C cap, trigger a manual 3-minute deep cycle immediately after capping. This gives you peace of mind that any microbes introduced from the public faucet are promptly neutralized before your flight takes off.
            </p>
          </section>

          {/* Internal Links */}
          <div className="p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200 space-y-4 not-prose my-10">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Explore More Travel & Gear Guides</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Explore our comprehensive buyer guide for side-by-side capacity and battery comparisons, or learn how to properly maintain an electronic bottle while travelling.
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
          items={ARTICLE_9_FAQS}
          title="Frequently Asked Questions: Travel & Student Hydration"
          subtitle="Advice on airport TSA rules, student backpack sizes, and wide-mouth versus narrow-mouth flasks."
        />

      </div>
    </article>
  );
}
