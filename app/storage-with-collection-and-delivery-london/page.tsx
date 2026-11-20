import type { Metadata } from "next";

import SeoLandingPage from "../components/seo/SeoLandingPage";
import { collectionDelivery } from "../lib/seo-pages/collection-delivery";
import { buildLandingMetadata } from "../lib/seo-pages";

export const metadata: Metadata = buildLandingMetadata(collectionDelivery);

export default function Page() {
  return <SeoLandingPage page={collectionDelivery} />;
}
