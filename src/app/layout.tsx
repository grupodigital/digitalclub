import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalclub.pt";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Digital Club | Comunidade exclusiva para quem move o Norte do Brasil",
    template: "%s | Digital Club",
  },
  description:
    "O Digital Club é uma comunidade exclusiva para CEOs, donos e fundadores que buscam acesso, experiências premium e conexões estratégicas de alto valor na Região Norte do Brasil. Ingresso por curadoria. O clube nasce durante o DSX.",
  keywords: [
    "Digital Club",
    "Digital Club Brasil",
    "comunidade exclusiva empresários",
    "comunidade de CEOs",
    "networking estratégico",
    "networking empresarial Manaus",
    "conexões estratégicas",
    "CEOs Brasil",
    "donos de empresas",
    "fundadores e empreendedores",
    "clube empresarial",
    "clube de negócios Manaus",
    "comunidade por curadoria",
    "Região Norte do Brasil",
    "Amazonas Brasil",
    "experiências premium",
    "relações estratégicas",
    "oportunidades de negócio",
    "posicionamento empresarial",
    "Grupo Digital",
    "DSX Digital Summit Experience",
    "ecossistema de negócios Norte",
    "liderança empresarial",
  ],
  authors: [{ name: "Digital Club" }],
  creator: "Digital Club",
  publisher: "Digital Club",
  category: "Business",
  classification: "Business Networking",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Digital Club",
    title: "Digital Club | Comunidade exclusiva para quem move o Norte do Brasil",
    description:
      "Comunidade exclusiva para CEOs, donos e fundadores. Acesso, experiências premium e conexões estratégicas de alto valor. Ingresso por curadoria — o clube nasce durante o DSX.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Digital Club — Comunidade exclusiva para quem move o Norte do Brasil",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Club | Comunidade exclusiva para quem move o Norte do Brasil",
    description:
      "Comunidade exclusiva para CEOs, donos e fundadores. Acesso, experiências premium e conexões estratégicas. Ingresso por curadoria.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "pt-BR": SITE_URL,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
  },
  other: {
    "geo.region": "BR-AM",
    "geo.placename": "Manaus",
    "geo.position": "-3.1190;-60.0217",
    "ICBM": "-3.1190, -60.0217",
    "content-language": "pt-BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Digital Club",
    alternateName: "Digital Club Brasil",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.svg`,
      width: 200,
      height: 70,
    },
    image: `${SITE_URL}/opengraph-image`,
    description:
      "O Digital Club é uma comunidade exclusiva para CEOs, donos e fundadores que buscam acesso, experiências premium e conexões estratégicas de alto valor na Região Norte do Brasil. Reúne empresários que compartilham nível, visão e ambição, com ingresso por curadoria. A comunidade nasce oficialmente durante o DSX.",
    areaServed: {
      "@type": "Place",
      name: "Amazonas, Brasil",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Amazonas",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -3.119,
        longitude: -60.0217,
      },
    },
    knowsAbout: [
      "Networking Estratégico",
      "Comunidade de Empresários",
      "Relações Estratégicas",
      "Conexões de Alto Valor",
      "Oportunidades de Negócio",
      "Posicionamento Empresarial",
      "Liderança Empresarial",
      "Ecossistema de Negócios",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "O que você recebe no Digital Club",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Relações Estratégicas",
            description:
              "Conexão com empresários, fundadores e líderes que compartilham ambição, visão de crescimento e capacidade de gerar oportunidades relevantes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Experiências Exclusivas",
            description:
              "Encontros, viagens, eventos e experiências cuidadosamente selecionadas para promover convivência, troca e acesso.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Acesso ao Ecossistema do Grupo Digital",
            description:
              "Proximidade com os bastidores, eventos, iniciativas e conexões do maior ecossistema de negócios e inovação da Região Norte.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Oportunidades de Negócio",
            description:
              "Alcance ampliado por meio de apresentações estratégicas, conexões qualificadas e relacionamentos construídos com confiança.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Posicionamento",
            description:
              "Participação em uma comunidade reconhecida por reunir empresários que lideram empresas relevantes e contribuem para o desenvolvimento da região.",
          },
        },
      ],
    },
    sameAs: [],
  };

  // WebSite Schema (enables Google Sitelinks Search Box)
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Digital Club",
    alternateName: "Digital Club — Comunidade exclusiva para quem move o Norte do Brasil",
    url: SITE_URL,
    description:
      "Comunidade exclusiva para CEOs, donos e fundadores no Norte do Brasil. Acesso, experiências premium e conexões estratégicas de alto valor, com ingresso por curadoria.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "pt-BR",
  };

  // WebPage Schema with Speakable (for Google AI Overview)
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Digital Club | Comunidade exclusiva para quem move o Norte do Brasil",
    description:
      "O Digital Club é uma comunidade exclusiva para CEOs, donos e fundadores que buscam acesso, experiências premium e conexões estratégicas de alto valor na Região Norte do Brasil. Ingresso por curadoria.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "pt-BR",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article", "#about", "#quem"],
    },
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  // DSX Event Schema — porta de entrada / lançamento do Digital Club
  const dsxEventSchema = {
    "@context": "https://schema.org",
    "@type": "BusinessEvent",
    name: "DSX — A porta de entrada do Digital Club",
    description:
      "O Digital Club nasce oficialmente durante o DSX. Empresários, fundadores e líderes da Região Norte terão acesso à apresentação da comunidade e ao processo de ingresso para a primeira turma de membros.",
    organizer: { "@id": `${SITE_URL}/#organization` },
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Região Norte, Brasil",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Amazonas",
        addressCountry: "BR",
      },
    },
    offers: {
      "@type": "Offer",
      description:
        "As primeiras vagas do Digital Club serão disponibilizadas exclusivamente para participantes do DSX.",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/#cta`,
    },
    about: [
      { "@type": "Thing", name: "Comunidade de Empresários" },
      { "@type": "Thing", name: "Networking Estratégico" },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "CEOs, donos e fundadores",
    },
    inLanguage: "pt-BR",
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Digital Club",
        item: SITE_URL,
      },
    ],
  };

  const allSchemas = [
    organizationSchema,
    webSiteSchema,
    webPageSchema,
    dsxEventSchema,
    breadcrumbSchema,
  ];

  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable} antialiased`}>
      <body className="min-h-screen">
        {allSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
