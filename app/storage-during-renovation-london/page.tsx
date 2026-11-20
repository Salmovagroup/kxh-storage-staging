import type { Metadata } from "next";

import SeoLandingPage from "../components/seo/SeoLandingPage";
import { renovation } from "../lib/seo-pages/renovation";
import { buildLandingMetadata } from "../lib/seo-pages";

export const metadata: Metadata = buildLandingMetadata(renovation);

export default function Page() {
  return <SeoLandingPage page={renovation} />;
}
