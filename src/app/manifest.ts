import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Digital Club — Comunidade exclusiva para quem move o Norte do Brasil",
    short_name: "Digital Club",
    description:
      "Comunidade exclusiva para CEOs, donos e fundadores. Acesso, experiências premium e conexões estratégicas de alto valor. Ingresso por curadoria.",
    start_url: "/",
    display: "standalone",
    background_color: "#24322c",
    theme_color: "#24322c",
    icons: [
      {
        src: "/favicon-digitalclub.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
