import type { MetadataRoute } from "next";

/**
 * Sitemap em modo "Em Breve".
 *
 * A home (/) exibe a página "Em Breve"; a landing /dsx continua ativa e é
 * hoje a principal página de conversão, por isso mantém a prioridade mais alta.
 *
 * Fora do sitemap por opção:
 *  - /form, /form-master e /obrigado — noindex no metadata da própria página;
 *  - /preview — landing completa em stand by, noindex + disallow no robots.ts.
 *
 * Ao republicar a landing completa como home, repor aqui as âncoras
 * (#about, #benefits, #quem, #como, #dsx, #cta) — ver src/app/preview/page.tsx.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalclub.pt";
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/dsx`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
