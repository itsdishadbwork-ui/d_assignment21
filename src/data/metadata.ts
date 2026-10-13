import heroBottleImg from '../assets/images/puresip_hero_bottle_1791915639723.jpg';
import uvcTechImg from '../assets/images/uvc_tech_diagram_1791915640312.jpg';
import hygieneLifestyleImg from '../assets/images/bottle_hygiene_lifestyle_1791915641258.jpg';
import buyersGuideImg from '../assets/images/buyers_guide_bottles_1791915640480.jpg';

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
      'author': {
        '@type': 'Person',
        'name': 'PureSip Editorial Team'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PureSip'
      },
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
      'author': {
        '@type': 'Person',
        'name': 'PureSip Editorial Team'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PureSip'
      },
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
      'author': {
        '@type': 'Person',
        'name': 'PureSip Editorial Team'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PureSip'
      },
      'datePublished': '2026-10-13'
    }
  }
};
