import type { Metadata } from "next";

import SeoLandingPage from "../components/seo/SeoLandingPage";
import { downsizing } from "../lib/seo-pages/downsizing";
import { buildLandingMetadata } from "../lib/seo-pages";

export const metadata: Metadata = buildLandingMetadata(downsizing);

export default function Page() {
  return <SeoLandingPage page={downsizing} />;
}
