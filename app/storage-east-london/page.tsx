import type { Metadata } from "next";

import SeoLandingPage from "../components/seo/SeoLandingPage";
import { eastLondon } from "../lib/seo-pages/east-london";
import { buildLandingMetadata } from "../lib/seo-pages";

export const metadata: Metadata = buildLandingMetadata(eastLondon);

export default function Page() {
  return <SeoLandingPage page={eastLondon} />;
}
