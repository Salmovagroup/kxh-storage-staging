import { abroad } from "./abroad";
import { boxStorage } from "./box-storage";
import { collectionDelivery } from "./collection-delivery";
import { downsizing } from "./downsizing";
import { eastLondon } from "./east-london";
import { household } from "./household";
import { longTerm } from "./long-term";
import { renovation } from "./renovation";
import { seasonal } from "./seasonal";
import { shortTerm } from "./short-term";
import type { SeoLandingData } from "../seo-types";

export const seoLandingPages: SeoLandingData[] = [
  collectionDelivery,
  shortTerm,
  longTerm,
  household,
  renovation,
  seasonal,
  eastLondon,
  downsizing,
  boxStorage,
  abroad,
];

export function buildLandingMetadata(page: SeoLandingData) {
  const url = `https://kxhlogistics.co.uk/${page.slug}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      url,
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: page.image.src, width: 1200, height: 800, alt: page.image.alt }],
    },
  };
}
