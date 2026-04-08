import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalclub.pt";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/obrigado", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/obrigado", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/obrigado", "/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
