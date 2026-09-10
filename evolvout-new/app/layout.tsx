import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.evolvout.com"),
  title: {
    default: "EvolvOut | Tecnologia para negócios em Angola",
    template: "%s | EvolvOut",
  },
  description: "Websites, sistemas e marcas digitais para empresas e empreendedores que querem crescer em Angola.",
  keywords: ["tecnologia Angola", "desenvolvimento web Angola", "marketing digital Angola", "design Angola", "EvolvOut"],
  authors: [{ name: "EvolvOut", url: "https://www.evolvout.com" }],
  creator: "EvolvOut",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: "/",
    siteName: "EvolvOut",
    title: "EvolvOut | Tecnologia para negócios em Angola",
    description: "Websites, sistemas e marcas digitais para empresas e empreendedores que querem crescer em Angola.",
    images: [{ url: "/og-evolvout.webp", width: 1200, height: 630, alt: "EvolvOut — Tecnologia para fazer negócios evoluírem" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EvolvOut | Tecnologia para negócios em Angola",
    description: "Websites, sistemas e marcas digitais para empresas e empreendedores que querem crescer em Angola.",
    images: ["/og-evolvout.webp"],
  },
  icons: { icon: "/favicon.ico" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "EvolvOut",
  url: "https://www.evolvout.com",
  logo: "https://www.evolvout.com/logo.PNG",
  image: "https://www.evolvout.com/og-evolvout.webp",
  description: "Websites, sistemas e marcas digitais para empresas e empreendedores em Angola.",
  email: "contacto@evolvout.com",
  telephone: "+244945367487",
  areaServed: { "@type": "Country", name: "Angola" },
  address: { "@type": "PostalAddress", addressLocality: "Luanda", addressCountry: "AO" },
  sameAs: [
    "https://www.linkedin.com/company/evolvout",
    "https://www.facebook.com/people/EvolvOut/61571618222639/",
    "https://www.instagram.com/evolvout_oficial/",
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root Layout
 * 
 * Layout raiz da aplicação Next.js
 * Define fontes, metadados e estrutura HTML base
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-AO">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
