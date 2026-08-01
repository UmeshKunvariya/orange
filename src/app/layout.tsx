import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { caseStudy, contacts, site, solutions } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "AI solutions Junagadh",
    "AI chatbot for business",
    "AI voice agent India",
    "web development Junagadh",
    "business website Gujarat",
    "CRM ERP development",
    "booking system",
    "business automation",
    "digitalize business",
    site.name,
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: `${site.name} — ${site.slogan}` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ea580c",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  areaServed: [
    { "@type": "City", name: "Junagadh" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Junagadh",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  slogan: site.slogan,
  telephone: contacts.map((c) => `+${c.intl}`),
  knowsAbout: solutions.map((s) => s.title),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI & web solutions",
    itemListElement: solutions.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
  },
  subjectOf: {
    "@type": "CreativeWork",
    name: caseStudy.client,
    url: caseStudy.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
