import { useEffect } from 'react';

const DEFAULT_META = {
  title: 'Statordata.com — Phần Mềm Thiết Kế Dây Quấn Stator',
  description: 'Công cụ thiết kế và tính toán dây quấn stator động cơ 1 pha và 3 pha, gồm sơ đồ mạch, kỹ thuật và hướng dẫn chi tiết.',
  keywords: 'statordata, dây quấn stator, thiết kế stator, tính toán động cơ, động cơ 1 pha, động cơ 3 pha, sơ đồ mạch, hướng dẫn stator',
  siteName: 'Statordata.com',
  baseUrl: 'https://statordata.com',
  twitterCard: 'summary_large_image',
};

const ensureMeta = (attrName, attrValue, content, attributeType = 'name') => {
  if (!content) return;
  const selector = attributeType === 'name'
    ? `meta[${attrName}='${attrValue}']`
    : `meta[${attrName}='${attrValue}']`;

  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const updateCanonical = (href) => {
  if (typeof document === 'undefined') return;
  let link = document.head.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

export default function Seo({ title, description, keywords, path, noindex }) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const fullTitle = title || DEFAULT_META.title;
    document.title = fullTitle;

    ensureMeta('name', 'description', description || DEFAULT_META.description);
    ensureMeta('name', 'keywords', keywords || DEFAULT_META.keywords);
    ensureMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    ensureMeta('property', 'og:title', fullTitle, 'property');
    ensureMeta('property', 'og:description', description || DEFAULT_META.description, 'property');
    ensureMeta('property', 'og:site_name', DEFAULT_META.siteName, 'property');
    ensureMeta('property', 'og:url', `${DEFAULT_META.baseUrl}${path || window.location.pathname}`, 'property');
    ensureMeta('name', 'twitter:card', DEFAULT_META.twitterCard);
    ensureMeta('name', 'twitter:title', fullTitle);
    ensureMeta('name', 'twitter:description', description || DEFAULT_META.description);
    ensureMeta('name', 'twitter:url', `${DEFAULT_META.baseUrl}${path || window.location.pathname}`);

    updateCanonical(`${DEFAULT_META.baseUrl}${path || window.location.pathname}`);
  }, [title, description, keywords, path, noindex]);

  return null;
}
