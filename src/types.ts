export interface ArticleMeta {
  slug: string;
  url: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  readingTime: string;
  publishedDate: string;
  image: string;
  imageAlt: string;
  summary: string;
  topic: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonBottle {
  id: string;
  name: string;
  category: string;
  techType: string;
  capacity: string;
  batteryLife: string;
  chargingType: string;
  weightEmpty: string;
  insulation: string;
  bestFor: string;
  keyLimitation: string;
}
