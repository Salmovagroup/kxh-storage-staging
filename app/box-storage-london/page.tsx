import type { Metadata } from "next";

import SeoLandingPage from "../components/seo/SeoLandingPage";
import { boxStorage } from "../lib/seo-pages/box-storage";
import { buildLandingMetadata } from "../lib/seo-pages";

export const metadata: Metadata = buildLandingMetadata(boxStorage);

export default function Page() {
  return <SeoLandingPage page={boxStorage} />;
}
