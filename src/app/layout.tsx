import type { Metadata, Viewport } from "next";
import { Figtree, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

// Texto: Figtree. Títulos: Plus Jakarta Sans. next/font las autohospeda (sin peticiones a Google).
const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: `${site.name} | Soluciones digitales para negocios locales`,
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    locale: "es_MX",
    type: "website",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${figtree.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
