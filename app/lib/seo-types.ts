export type SeoSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoFaq = { question: string; answer: string };

export type SeoLink = { href: string; label: string };

export type SeoImage = { src: string; alt: string };

export type SeoLandingData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  image: SeoImage;
  secondImage?: SeoImage;
  ctaLabel: string;
  sections: SeoSection[];
  faqs: SeoFaq[];
  related: SeoLink[];
  serviceType: string;
};

export type BlogPostData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  datePublished: string;
  readMinutes: number;
  image: SeoImage;
  sections: SeoSection[];
  faqs: SeoFaq[];
  landingLink: SeoLink;
  related: SeoLink[];
};

export const SITE = "https://kxhlogistics.co.uk";
