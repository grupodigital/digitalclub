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
    default: "Digital Club | O Ecossistema de Experiências do Norte",
    template: "%s | Digital Club",
  },
  description:
    "Club exclusivo para CEOs, Fundadores e Donos de negócios no Norte de Portugal. Acesso aos maiores eventos de negócios, imersões técnicas em Marketing, Vendas e Gestão, networking ativo e educação contínua. Junte-se a mais de 100 membros.",
  keywords: [
    "Digital Club",
    "Digital Club Portugal",
    "networking empresarial",
    "networking empresarial Porto",
    "eventos de negócios Portugal",
    "eventos de negócios Norte",
    "CEOs Portugal",
    "fundadores startups",
    "imersões de negócios",
    "imersões técnicas",
    "educação contínua empresarial",
    "norte de Portugal",
    "clube empresarial",
    "clube de negócios Porto",
    "DSX Digital Summit Experience",
    "Amazon IA evento",
    "Leaders AI Conference",
    "networking executivo",
    "eventos VIP empresariais",
    "comunidade empresarial",
    "Digital Educa",
    "formação executiva Porto",
    "liderança empresarial",
    "transformação digital",
    "inteligência artificial negócios",
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
    locale: "pt_PT",
    url: SITE_URL,
    siteName: "Digital Club",
    title: "Digital Club | O Ecossistema de Experiências do Norte",
    description:
      "Club exclusivo para CEOs, Fundadores e Donos de negócios. Eventos VIP, imersões técnicas, networking ativo e educação contínua no Norte de Portugal.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Digital Club - O Ecossistema de Experiências do Norte",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Club | O Ecossistema de Experiências do Norte",
    description:
      "Club exclusivo para CEOs, Fundadores e Donos de negócios. Eventos VIP, imersões, networking e educação contínua.",
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
      "pt-PT": SITE_URL,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
  },
  other: {
    "geo.region": "PT-13",
    "geo.placename": "Porto",
    "geo.position": "41.1579;-8.6291",
    "ICBM": "41.1579, -8.6291",
    "content-language": "pt-PT",
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
    alternateName: "Digital Club Portugal",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.svg`,
      width: 200,
      height: 70,
    },
    image: `${SITE_URL}/opengraph-image`,
    description:
      "O Digital Club é um ecossistema exclusivo de experiências para CEOs, Fundadores e Donos de negócios no Norte de Portugal. Fundado em 2023, reúne mais de 100 membros com acesso aos maiores eventos de negócios, imersões técnicas em Marketing, Vendas, Gestão e Negócios, networking estratégico e educação contínua através da plataforma Digital Educa.",
    foundingDate: "2023",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 100,
      unitText: "membros",
    },
    areaServed: {
      "@type": "Place",
      name: "Norte de Portugal",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Porto",
        addressCountry: "PT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.1579,
        longitude: -8.6291,
      },
    },
    knowsAbout: [
      "Networking Empresarial",
      "Eventos de Negócios",
      "Transformação Digital",
      "Inteligência Artificial",
      "Liderança Empresarial",
      "Marketing Digital",
      "Vendas",
      "Gestão de Negócios",
      "Educação Contínua",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Benefícios Digital Club",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ingressos VIP para Eventos",
            description:
              "9 ingressos VIP: 3 para o DSX (Digital Summit Experience), 3 para o Amazon IA e 3 para o Leaders AI Conference.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Imersões Técnicas",
            description:
              "12 ingressos para 4 imersões técnicas em Negócios, Gestão, Marketing e Vendas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Educa",
            description:
              "Plataforma exclusiva de educação contínua com conteúdos dos eventos, aulas de especialistas e material para toda a equipa.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Networking Exclusivo",
            description:
              "Jantar exclusivo com líderes, grupo de networking com todos os membros e acesso a pré-eventos.",
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
    alternateName: "Digital Club — O Ecossistema de Experiências do Norte",
    url: SITE_URL,
    description:
      "Club exclusivo para CEOs, Fundadores e Donos de negócios no Norte de Portugal. Eventos VIP, imersões técnicas, networking e educação contínua.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "pt-PT",
  };

  // WebPage Schema with Speakable (for Google AI Overview)
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Digital Club | O Ecossistema de Experiências do Norte",
    description:
      "O Digital Club é um ecossistema exclusivo de experiências para CEOs, Fundadores e Donos de negócios no Norte de Portugal. Acesso a eventos VIP, imersões técnicas, networking e educação contínua.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "pt-PT",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article", "#about", "#faq"],
    },
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  // Individual Event Schemas (better for Google AI Overview)
  const dsxEventSchema = {
    "@context": "https://schema.org",
    "@type": "BusinessEvent",
    name: "DSX — Digital Summit Experience",
    description:
      "O DSX é o maior evento de Transformação Digital do Norte de Portugal, organizado pelo Digital Club. Palestras, workshops e networking com os maiores nomes do mercado.",
    organizer: { "@id": `${SITE_URL}/#organization` },
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Norte de Portugal",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Porto",
        addressCountry: "PT",
      },
    },
    offers: {
      "@type": "Offer",
      description: "Incluído na adesão ao Digital Club — 3 ingressos VIP",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/#cta`,
    },
    about: [
      { "@type": "Thing", name: "Transformação Digital" },
      { "@type": "Thing", name: "Inovação Tecnológica" },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "CEOs, Fundadores e Donos de negócios",
    },
    inLanguage: "pt-PT",
  };

  const amazonIAEventSchema = {
    "@context": "https://schema.org",
    "@type": "BusinessEvent",
    name: "Amazon IA — Inteligência Artificial",
    description:
      "Evento dedicado à Inteligência Artificial aplicada a negócios e estratégias de mercado, organizado pelo Digital Club no Norte de Portugal.",
    organizer: { "@id": `${SITE_URL}/#organization` },
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Norte de Portugal",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Porto",
        addressCountry: "PT",
      },
    },
    offers: {
      "@type": "Offer",
      description: "Incluído na adesão ao Digital Club — 3 ingressos VIP",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/#cta`,
    },
    about: [
      { "@type": "Thing", name: "Inteligência Artificial" },
      { "@type": "Thing", name: "IA para Negócios" },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "CEOs, Fundadores e Donos de negócios",
    },
    inLanguage: "pt-PT",
  };

  const leadersAIEventSchema = {
    "@context": "https://schema.org",
    "@type": "BusinessEvent",
    name: "Leaders AI Conference",
    description:
      "Conferência de Liderança e Tecnologia organizada pelo Digital Club. Focada no futuro dos negócios, com os maiores líderes e especialistas do Norte de Portugal.",
    organizer: { "@id": `${SITE_URL}/#organization` },
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Norte de Portugal",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Porto",
        addressCountry: "PT",
      },
    },
    offers: {
      "@type": "Offer",
      description: "Incluído na adesão ao Digital Club — 3 ingressos VIP",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/#cta`,
    },
    about: [
      { "@type": "Thing", name: "Liderança Empresarial" },
      { "@type": "Thing", name: "Tecnologia" },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "CEOs, Fundadores e Donos de negócios",
    },
    inLanguage: "pt-PT",
  };

  // FAQ Schema (matches visible FAQ section on the page)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é o Digital Club?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O Digital Club é um ecossistema exclusivo de experiências para CEOs, Fundadores e Donos de negócios no Norte de Portugal. Fundado em 2023, reúne mais de 100 membros empresariais com acesso aos maiores eventos de negócios, imersões técnicas aplicadas, networking estratégico e educação contínua de mercados. É o clube de quem constrói o Norte.",
        },
      },
      {
        "@type": "Question",
        name: "Para quem é o Digital Club?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O Digital Club é exclusivo para CEOs, Fundadores e Donos de negócios que querem crescimento real através de acesso, contexto e conexões certas. É para líderes que já entenderam que o networking estratégico e a formação contínua são essenciais para escalar os seus negócios no Norte de Portugal.",
        },
      },
      {
        "@type": "Question",
        name: "O que está incluído na adesão ao Digital Club?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A adesão inclui 9 ingressos VIP para eventos (3 para o DSX — Digital Summit Experience, 3 para o Amazon IA e 3 para o Leaders AI Conference), 12 ingressos para 4 imersões técnicas em Negócios, Gestão, Marketing e Vendas, jantar exclusivo com líderes do mercado, acesso à plataforma Digital Educa com conteúdos e aulas, grupo de networking com todos os membros, acesso a pré-eventos de lançamento, e a possibilidade de levar +1 da empresa sem custo adicional.",
        },
      },
      {
        "@type": "Question",
        name: "Quais eventos fazem parte do Digital Club?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Os membros têm acesso VIP a três grandes eventos: o DSX (Digital Summit Experience), focado em Transformação Digital; o Amazon IA, sobre Inteligência Artificial aplicada a negócios; e o Leaders AI Conference, sobre Liderança e Tecnologia. Todos os eventos decorrem no Norte de Portugal.",
        },
      },
      {
        "@type": "Question",
        name: "O que são as imersões do Digital Club?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "São 4 imersões técnicas aprofundadas nas áreas de Negócios, Gestão, Marketing e Vendas. Cada membro recebe 3 ingressos por imersão (12 no total), podendo levar membros da sua equipa. As imersões são práticas e aplicáveis, com conteúdo de especialistas reconhecidos.",
        },
      },
      {
        "@type": "Question",
        name: "O que é a plataforma Digital Educa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O Digital Educa é a plataforma exclusiva de educação contínua do Digital Club. Inclui conteúdos gravados dos eventos, aulas exclusivas de especialistas, e material de formação para todo o time. Os membros podem rever aulas, aprender ao seu ritmo e implementar o conhecimento imediatamente.",
        },
      },
      {
        "@type": "Question",
        name: "Como posso fazer parte do Digital Club?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para se candidatar, preencha o formulário com os seus dados (nome, email, WhatsApp, empresa e cargo). A equipa fará uma avaliação e entrará em contacto em até 48 horas. A candidatura é sem compromisso e os dados são tratados com total segurança.",
        },
      },
    ],
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
    amazonIAEventSchema,
    leadersAIEventSchema,
    faqSchema,
    breadcrumbSchema,
  ];

  return (
    <html lang="pt-PT" className={`${inter.variable} ${oswald.variable} antialiased`}>
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
