import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalclub.pt";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Digital Club | O Ecossistema de Experiências do Norte",
    template: "%s | Digital Club",
  },
  description:
    "Club exclusivo para CEOs, Fundadores e Donos de negócios. Acesso aos maiores eventos de negócios, imersões técnicas, networking ativo e educação contínua.",
  keywords: [
    "Digital Club",
    "networking empresarial",
    "eventos de negócios",
    "CEOs",
    "fundadores",
    "imersões",
    "educação contínua",
    "norte de Portugal",
  ],
  authors: [{ name: "Digital Club" }],
  creator: "Digital Club",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: "Digital Club",
    title: "Digital Club | O Ecossistema de Experiências do Norte",
    description:
      "Club exclusivo para CEOs, Fundadores e Donos de negócios. Acesso aos maiores eventos de negócios, imersões técnicas, networking ativo e educação contínua.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Club - O Ecossistema de Experiências do Norte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Club | O Ecossistema de Experiências do Norte",
    description:
      "Club exclusivo para CEOs, Fundadores e Donos de negócios. Eventos, imersões, networking e educação contínua.",
    images: ["/og-image.jpg"],
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digital Club",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description:
      "Club exclusivo para CEOs, Fundadores e Donos de negócios. Acesso aos maiores eventos de negócios, imersões técnicas, networking ativo e educação contínua.",
    sameAs: [],
  };

  return (
    <html lang="pt-PT" className={`${inter.variable} ${oswald.variable} antialiased`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
