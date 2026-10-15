import heroBottleImg from '../assets/images/puresip_hero_bottle_1791915639723.jpg';
import uvcTechImg from '../assets/images/uvc_tech_diagram_1791915640312.jpg';
import hygieneLifestyleImg from '../assets/images/bottle_hygiene_lifestyle_1791915641258.jpg';
import buyersGuideImg from '../assets/images/buyers_guide_bottles_1791915640480.jpg';
import cleanBottleImg from '../assets/images/clean_bottle_properly_1792071851653.jpg';
import smartBottleValueImg from '../assets/images/smart_bottle_value_1792071852087.jpg';
import uvcExplainedImg from '../assets/images/uvc_explained_tech_1792071853188.jpg';
import bottleDuoImg from '../assets/images/bottle_comparison_duo_1792071853778.jpg';
import removeOdorImg from '../assets/images/remove_bottle_odor_1792071854216.jpg';
import studentTravelImg from '../assets/images/student_travel_gear_1792071855459.jpg';
import bottleMaintenanceImg from '../assets/images/bottle_maintenance_care_1792071855338.jpg';

export interface PageMetadata {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: string;
  structuredData: Record<string, unknown>;
}

export const SITE_URL = 'https://puresip-guide.vercel.app';

export const PAGES_METADATA: Record<string, PageMetadata> = {
  '/': {
    title: 'PureSip - Guide to Self-Cleaning Water Bottles & Bottle Hygiene',
    metaDescription: 'Discover how self-cleaning water bottles sanitize hydration, prevent bacteria, and compare to traditional bottles in this comprehensive educational guide.',
    canonicalUrl: `${SITE_URL}/`,
    ogTitle: 'PureSip - Guide to Self-Cleaning Water Bottles & Bottle Hygiene',
    ogDescription: 'Discover how self-cleaning water bottles sanitize hydration, prevent bacteria, and compare to traditional bottles in this comprehensive educational guide.',
    ogImage: heroBottleImg,
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'PureSip Educational Hydration Guide',
      'url': `${SITE_URL}/`,
      'description': 'Independent educational guide exploring self-cleaning water bottle technology, reusable hydration hygiene, and consumer considerations.',
      'publisher': {
        '@type': 'Organization',
        'name': 'PureSip Educational Project'
      }
    }
  },
  '/how-self-cleaning-water-bottles-work': {
    title: 'How Do Self-Cleaning Water Bottles Work? UV-C Science & Limits | PureSip',
    metaDescription: 'Learn how self-cleaning water bottles use UV-C LED wavelengths to neutralize bacteria, understand automatic sanitization cycles, and examine real-world limits.',
    canonicalUrl: `${SITE_URL}/how-self-cleaning-water-bottles-work`,
    ogTitle: 'How Do Self-Cleaning Water Bottles Work? UV-C Science Explained',
    ogDescription: 'Learn how self-cleaning water bottles use UV-C LED wavelengths to neutralize bacteria, understand automatic sanitization cycles, and examine real-world limits.',
    ogImage: uvcTechImg,
    ogType: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'How Do Self-Cleaning Water Bottles Work? Technology, UV-C Science, and Realistic Limits',
      'description': 'A detailed educational investigation into UV-C LED germicidal mechanisms, automated sanitizing cycles, and practical hygiene boundaries.',
      'url': `${SITE_URL}/how-self-cleaning-water-bottles-work`,
      'image': uvcTechImg,
      'author': { '@type': 'Person', 'name': 'PureSip Editorial Team' },
      'publisher': { '@type': 'Organization', 'name': 'PureSip' },
      'datePublished': '2026-10-13'
    }
  },
  '/benefits-of-self-cleaning-water-bottles': {
    title: 'What Are the Benefits of Self-Cleaning Water Bottles? Hygiene & Facts | PureSip',
    metaDescription: 'Explore the key benefits of self-cleaning water bottles: musty odor prevention, daily convenience, and travel hygiene, alongside crucial health reality checks.',
    canonicalUrl: `${SITE_URL}/benefits-of-self-cleaning-water-bottles`,
    ogTitle: 'Benefits of Self-Cleaning Water Bottles: Odor Control & Hygiene',
    ogDescription: 'Explore the key benefits of self-cleaning water bottles: musty odor prevention, daily convenience, and travel hygiene, alongside crucial health reality checks.',
    ogImage: hygieneLifestyleImg,
    ogType: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'What Are the Benefits of Self-Cleaning Water Bottles? Hygiene, Odor Prevention, and Reality Checks',
      'description': 'An honest review of how automated UV-C bottles curb bacterial biofilms, when they excel for gym-goers and travellers, and why they cannot filter dirty water.',
      'url': `${SITE_URL}/benefits-of-self-cleaning-water-bottles`,
      'image': hygieneLifestyleImg,
      'author': { '@type': 'Person', 'name': 'PureSip Editorial Team' },
      'publisher': { '@type': 'Organization', 'name': 'PureSip' },
      'datePublished': '2026-10-13'
    }
  },
  '/how-to-choose-a-self-cleaning-water-bottle': {
    title: 'How to Choose a Self-Cleaning Water Bottle: Buyer Guide & Comparison | PureSip',
    metaDescription: 'Compare UV-C technology, battery life, insulation materials, capacity, and price before buying a self-cleaning water bottle with our practical buyer guide.',
    canonicalUrl: `${SITE_URL}/how-to-choose-a-self-cleaning-water-bottle`,
    ogTitle: 'How to Choose a Self-Cleaning Water Bottle: Comprehensive Buyer Guide',
    ogDescription: 'Compare UV-C technology, battery life, insulation materials, capacity, and price before buying a self-cleaning water bottle with our practical buyer guide.',
    ogImage: buyersGuideImg,
    ogType: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'How to Choose a Self-Cleaning Water Bottle: The Complete Practical Buyer Guide',
      'description': 'Essential criteria for choosing a self-cleaning bottle including UV-C wattage, battery longevity, magnetic charging, thermal vacuum insulation, and comparison tables.',
      'url': `${SITE_URL}/how-to-choose-a-self-cleaning-water-bottle`,
      'image': buyersGuideImg,
      'author': { '@type': 'Person', 'name': 'PureSip Editorial Team' },
      'publisher': { '@type': 'Organization', 'name': 'PureSip' },
      'datePublished': '2026-10-13'
    }
  },
  '/how-to-clean-a-reusable-water-bottle': {
    title: 'How to Clean a Reusable Water Bottle Properly | PureSip',
    metaDescription: 'Learn how to clean a reusable water bottle properly using warm water, vinegar, and brush techniques to remove stubborn mold, bacteria, and hidden odors.',
    canonicalUrl: `${SITE_URL}/how-to-clean-a-reusable-water-bottle`,
    ogTitle: 'How to Clean a Reusable Water Bottle Properly | PureSip',
    ogDescription: 'Step-by-step instructions for sanitizing reusable water bottles, cleaning silicone gaskets, and preventing harmful bacterial biofilms.',
    ogImage: cleanBottleImg,
    ogType: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'How to Clean a Reusable Water Bottle Properly: Practical Sanitizing & Care',
      'description': 'A comprehensive step-by-step guide to washing stainless steel, glass, and plastic water bottles, maintaining gaskets, and preventing bacterial contamination.',
      'url': `${SITE_URL}/how-to-clean-a-reusable-water-bottle`,
      'image': cleanBottleImg,
      'author': { '@type': 'Person', 'name': 'PureSip Hygiene Team' },
      'publisher': { '@type': 'Organization', 'name': 'PureSip' },
      'datePublished': '2026-10-15'
    }
  },
  '/are-self-cleaning-water-bottles-worth-it': {
    title: 'Are Self-Cleaning Water Bottles Worth It? Honest Review',
    metaDescription: 'Discover whether self-cleaning water bottles are worth the cost. Explore daily time savings, bacterial control, realistic limitations, and alternative options.',
    canonicalUrl: `${SITE_URL}/are-self-cleaning-water-bottles-worth-it`,
    ogTitle: 'Are Self-Cleaning Water Bottles Worth It? Honest Value Review',
    ogDescription: 'Discover whether self-cleaning water bottles are worth the cost. Explore daily time savings, bacterial control, realistic limitations, and alternative options.',
    ogImage: smartBottleValueImg,
    ogType: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Are Self-Cleaning Water Bottles Worth It? An Honest Value & ROI Analysis',
      'description': 'Evaluating the return on investment for self-cleaning bottles: convenience, odor mitigation, and cost comparison against traditional reusable flasks.',
      'url': `${SITE_URL}/are-self-cleaning-water-bottles-worth-it`,
      'image': smartBottleValueImg,
      'author': { '@type': 'Person', 'name': 'PureSip Advisory Team' },
      'publisher': { '@type': 'Organization', 'name': 'PureSip' },
      'datePublished': '2026-10-15'
    }
  },
  '/uv-c-water-bottles-explained': {
    title: 'UV-C Water Bottles Explained: Science, Safety & Limits',
    metaDescription: 'Understand how UV-C water bottles neutralize bacteria and viruses at 260-280 nm, why automatic cycles matter, and what ultraviolet sanitization cannot clean.',
    canonicalUrl: `${SITE_URL}/uv-c-water-bottles-explained`,
    ogTitle: 'UV-C Water Bottles Explained: Science, Safety & Limits | PureSip',
    ogDescription: 'Understand how UV-C water bottles neutralize bacteria and viruses at 260-280 nm, why automatic cycles matter, and what ultraviolet sanitization cannot clean.',
    ogImage: uvcExplainedImg,
    ogType: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'UV-C Water Bottles Explained: The Deep Physics, Biology & Safety Mechanisms',
      'description': 'A detailed exploration of how ultraviolet germicidal irradiation works in compact water vessels, solid-state LED efficiency, and user eye safety.',
      'url': `${SITE_URL}/uv-c-water-bottles-explained`,
      'image': uvcExplainedImg,
      'author': { '@type': 'Person', 'name': 'PureSip Science Team' },
      'publisher': { '@type': 'Organization', 'name': 'PureSip' },
      'datePublished': '2026-10-15'
    }
  },
  '/self-cleaning-vs-regular-water-bottles': {
    title: 'Self-Cleaning vs Regular Water Bottles: Full Comparison',
    metaDescription: 'Compare self-cleaning water bottles with regular reusable bottles across hygiene, daily maintenance, weight, battery upkeep, long-term costs, and portability.',
    canonicalUrl: `${SITE_URL}/self-cleaning-vs-regular-water-bottles`,
    ogTitle: 'Self-Cleaning vs Regular Water Bottles: Full Comparison Guide',
    ogDescription: 'Compare self-cleaning water bottles with regular reusable bottles across hygiene, daily maintenance, weight, battery upkeep, long-term costs, and portability.',
    ogImage: bottleDuoImg,
    ogType: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Self-Cleaning Water Bottles vs Regular Water Bottles: Head-to-Head Comparison',
      'description': 'Comparing traditional stainless steel bottles with smart UV-C sanitizing containers across daily convenience, hygiene performance, weight, and pricing.',
      'url': `${SITE_URL}/self-cleaning-vs-regular-water-bottles`,
      'image': bottleDuoImg,
      'author': { '@type': 'Person', 'name': 'PureSip Editorial Team' },
      'publisher': { '@type': 'Organization', 'name': 'PureSip' },
      'datePublished': '2026-10-15'
    }
  },
  '/remove-smell-from-water-bottle': {
    title: 'How to Remove Bad Smells from a Water Bottle | PureSip',
    metaDescription: 'Eliminate foul mildew odors and biofilm from your reusable water bottle using proven baking soda, distilled vinegar, boiling water, and gasket soaking methods.',
    canonicalUrl: `${SITE_URL}/remove-smell-from-water-bottle`,
    ogTitle: 'How to Remove Bad Smells from a Water Bottle: 5 Proven Methods',
    ogDescription: 'Eliminate foul mildew odors and biofilm from your reusable water bottle using proven baking soda, distilled vinegar, boiling water, and gasket soaking methods.',
    ogImage: removeOdorImg,
    ogType: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'How to Remove Bad Smells from a Water Bottle: 5 Proven Deodorizing Techniques',
      'description': 'Scientific remedies for musty, sour bottle odors, bacterial biofilms, and stubborn mold smells in stainless steel and plastic reusable bottles.',
      'url': `${SITE_URL}/remove-smell-from-water-bottle`,
      'image': removeOdorImg,
      'author': { '@type': 'Person', 'name': 'PureSip Hygiene Team' },
      'publisher': { '@type': 'Organization', 'name': 'PureSip' },
      'datePublished': '2026-10-15'
    }
  },
  '/water-bottle-features-for-students-and-travellers': {
    title: 'Best Water Bottle Features for Students & Travellers',
    metaDescription: 'Discover essential water bottle features for students and travellers, including TSA compliance, leakproof caps, thermal insulation, and on-the-go sanitization.',
    canonicalUrl: `${SITE_URL}/water-bottle-features-for-students-and-travellers`,
    ogTitle: 'Best Water Bottle Features for Students & Travellers | PureSip',
    ogDescription: 'Discover essential water bottle features for students and travellers, including TSA compliance, leakproof caps, thermal insulation, and on-the-go sanitization.',
    ogImage: studentTravelImg,
    ogType: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Best Water Bottle Features for Students and Travellers: Mobile Hydration Guide',
      'description': 'A practical breakdown of critical hydration features for university lecture halls, transit terminals, airport security, and international travel.',
      'url': `${SITE_URL}/water-bottle-features-for-students-and-travellers`,
      'image': studentTravelImg,
      'author': { '@type': 'Person', 'name': 'PureSip Travel Advisory' },
      'publisher': { '@type': 'Organization', 'name': 'PureSip' },
      'datePublished': '2026-10-15'
    }
  },
  '/maintain-a-self-cleaning-water-bottle': {
    title: 'How to Maintain a Self-Cleaning Water Bottle | PureSip',
    metaDescription: 'Keep your self-cleaning water bottle performing at its best with practical care tips for quartz lenses, waterproof seals, charging pins, and battery longevity.',
    canonicalUrl: `${SITE_URL}/maintain-a-self-cleaning-water-bottle`,
    ogTitle: 'How to Maintain a Self-Cleaning Water Bottle: Maintenance Protocol',
    ogDescription: 'Keep your self-cleaning water bottle performing at its best with practical care tips for quartz lenses, waterproof seals, charging pins, and battery longevity.',
    ogImage: bottleMaintenanceImg,
    ogType: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'How to Maintain a Self-Cleaning Water Bottle: Longevity, Lens Care & Charging',
      'description': 'Comprehensive maintenance guidelines for UV-C smart caps, optical lens scale removal, magnetic pin cleaning, and seal preservation.',
      'url': `${SITE_URL}/maintain-a-self-cleaning-water-bottle`,
      'image': bottleMaintenanceImg,
      'author': { '@type': 'Person', 'name': 'PureSip Technical Care' },
      'publisher': { '@type': 'Organization', 'name': 'PureSip' },
      'datePublished': '2026-10-15'
    }
  }
};
