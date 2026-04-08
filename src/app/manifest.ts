import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Digital Club - O Ecossistema de Experiências do Norte",
    short_name: "Digital Club",
    description:
      "Club exclusivo para CEOs, Fundadores e Donos de negócios. Eventos, imersões, networking e educação contínua.",
    start_url: "/",
    display: "standalone",
    background_color: "#080f13",
    theme_color: "#183d4c",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
