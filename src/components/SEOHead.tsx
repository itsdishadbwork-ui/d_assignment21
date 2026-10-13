import { useEffect } from 'react';
import { PageMetadata, PAGES_METADATA } from '../data/metadata.ts';

interface SEOHeadProps {
  pathname: string;
}

export function SEOHead({ pathname }: SEOHeadProps) {
  useEffect(() => {
    const meta: PageMetadata = PAGES_METADATA[pathname] || PAGES_METADATA['/'];

    // Update title
    document.title = meta.title;

    // Update Meta Description
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', meta.metaDescription);

    // Update Canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', meta.canonicalUrl);

    // Update OpenGraph tags
    const setMetaProperty = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaProperty('og:title', meta.ogTitle);
    setMetaProperty('og:description', meta.ogDescription);
    setMetaProperty('og:url', meta.canonicalUrl);
    setMetaProperty('og:type', meta.ogType);
    setMetaProperty('og:image', meta.ogImage);

    // Update Twitter tags
    const setMetaName = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaName('twitter:title', meta.ogTitle);
    setMetaName('twitter:description', meta.ogDescription);
    setMetaName('twitter:image', meta.ogImage);

    // Structured Data (JSON-LD)
    const scriptId = 'puresip-schema-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(meta.structuredData, null, 2);
  }, [pathname]);

  return null;
}
