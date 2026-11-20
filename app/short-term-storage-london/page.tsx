import type { Metadata } from "next";

import SeoLandingPage from "../components/seo/SeoLandingPage";
import { shortTerm } from "../lib/seo-pages/short-term";
import { buildLandingMetadata } from "../lib/seo-pages";

export const metadata: Metadata = buildLandingMetadata(shortTerm);

export default function Page() {
  return <SeoLandingPage page={shortTerm} />;
}
