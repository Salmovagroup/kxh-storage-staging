import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://kxhlogistics.co.uk";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/checkout",
          "/order-summary",
          "/success",
          "/payment/",
          "/billing/",
          "/client-inventory/",
          "/login",
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
