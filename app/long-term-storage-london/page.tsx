import type { Metadata } from "next";

import SeoLandingPage from "../components/seo/SeoLandingPage";
import { longTerm } from "../lib/seo-pages/long-term";
import { buildLandingMetadata } from "../lib/seo-pages";

export const metadata: Metadata = buildLandingMetadata(longTerm);

export default function Page() {
  return <SeoLandingPage page={longTerm} />;
}
