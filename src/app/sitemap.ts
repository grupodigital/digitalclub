import type { MetadataRoute } from "next";

/**
 * Sitemap em modo "Em Breve".
 *
 * Enquanto a home exibe a página "Em Breve", apenas a raiz é listada.
 * As âncoras da landing completa (#about, #benefits, #quem, #como, #dsx, #cta)
 * devem ser repostas aqui quando a landing voltar a ser a home — ver
 * src/app/preview/page.tsx.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalclub.pt";
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
