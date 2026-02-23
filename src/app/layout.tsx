import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";
import "./globals.scss";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mariadasdores.fr";
const title = "Maria Das Dores — Artiste Peintre";
const description =
  "Portfolio de Maria Das Dores JEAMME, artiste peintre franco-portugaise. Peintures à l'huile et acrylique mêlant nature, féminité et force animale.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  keywords: [
    "Maria Das Dores",
    "JEAMME",
    "artiste peintre",
    "peinture",
    "huile",
    "acrylique",
    "feuille d'or",
    "art contemporain",
    "Périgneux",
    "Loire",
    "franco-portugaise",
  ],
  authors: [{ name: "Maria Das Dores JEAMME" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Maria Das Dores",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/1.png",
        width: 1200,
        height: 1600,
        alt: "Au delà des larmes — Maria Das Dores JEAMME",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={libreBaskerville.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
