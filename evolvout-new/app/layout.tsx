import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "EvolvOut - Onde a Mudança Começa.",
  description: "Transformamos ideias em soluções digitais inteligentes. A empresa angolana de inovação, design, marketing e tecnologia.",
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
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
