import type { Metadata } from "next";

import SeoLandingPage from "../components/seo/SeoLandingPage";
import { household } from "../lib/seo-pages/household";
import { buildLandingMetadata } from "../lib/seo-pages";

export const metadata: Metadata = buildLandingMetadata(household);

export default function Page() {
  return <SeoLandingPage page={household} />;
}
