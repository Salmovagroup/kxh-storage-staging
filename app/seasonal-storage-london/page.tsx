import type { Metadata } from "next";

import SeoLandingPage from "../components/seo/SeoLandingPage";
import { seasonal } from "../lib/seo-pages/seasonal";
import { buildLandingMetadata } from "../lib/seo-pages";

export const metadata: Metadata = buildLandingMetadata(seasonal);

export default function Page() {
  return <SeoLandingPage page={seasonal} />;
}
