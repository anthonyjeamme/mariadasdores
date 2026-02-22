import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.scss";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maria Das Dores — Artiste Peintre",
  description:
    "Portfolio de Maria Das Dores JEAMME, artiste peintre franco-portugaise. Peintures à l'huile et acrylique mêlant nature, féminité et force animale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={libreBaskerville.className}>{children}</body>
    </html>
  );
}
