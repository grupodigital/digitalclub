import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalclub.pt";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /preview = landing completa em stand by (remover deste disallow ao republicar)
        disallow: ["/obrigado", "/preview", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        // /preview = landing completa em stand by (remover deste disallow ao republicar)
        disallow: ["/obrigado", "/preview", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        // /preview = landing completa em stand by (remover deste disallow ao republicar)
        disallow: ["/obrigado", "/preview", "/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
