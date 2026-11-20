import type { Metadata } from "next";

import SeoLandingPage from "../components/seo/SeoLandingPage";
import { abroad } from "../lib/seo-pages/abroad";
import { buildLandingMetadata } from "../lib/seo-pages";

export const metadata: Metadata = buildLandingMetadata(abroad);

export default function Page() {
  return <SeoLandingPage page={abroad} />;
}
