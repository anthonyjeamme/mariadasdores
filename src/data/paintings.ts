export type Painting = {
  id: number;
  title: string;
  technique: string;
  dimensions: string;
  year: number;
  category: "figures-feminines" | "force-animale";
  image: string;
};

export const paintings: Painting[] = [
  {
    id: 1,
    title: "Au delà des larmes",
    technique: "Peinture à l'huile avec finition éclat de résine et doré",
    dimensions: "90 × 70 cm",
    year: 2025,
    category: "figures-feminines",
    image: "/images/1.png",
  },
  {
    id: 3,
    title: "Fusion mystique",
    technique: "Acrylique avec relief et feuille d'or",
    dimensions: "70 × 70 cm",
    year: 2025,
    category: "force-animale",
    image: "/images/3.png",
  },
  {
    id: 7,
    title: "Eclosion azur",
    technique: "Acrylique feuille métallique bleu/or et strasses",
    dimensions: "90 × 70 cm",
    year: 2024,
    category: "figures-feminines",
    image: "/images/7.png",
  },
  {
    id: 4,
    title: "Éveil intérieur",
    technique: "Acrylique, feuille d'or et strasses",
    dimensions: "100 × 80 cm",
    year: 2025,
    category: "figures-feminines",
    image: "/images/4.png",
  },
  {
    id: 6,
    title: "Sa majesté",
    technique: "Acrylique avec relief et feuille d'or",
    dimensions: "99 × 91 cm",
    year: 2023,
    category: "force-animale",
    image: "/images/6.png",
  },
  {
    id: 9,
    title: "Glamour floral",
    technique:
      "Acrylique sur toile relief avec résine, gesso et feuilles métallisées fuchsia",
    dimensions: "88 × 68 cm",
    year: 2025,
    category: "figures-feminines",
    image: "/images/9.png",
  },
  {
    id: 5,
    title: "Reflet sauvage",
    technique: "Acrylique avec relief et feuille d'or",
    dimensions: "50 × 50 cm",
    year: 2024,
    category: "force-animale",
    image: "/images/5.png",
  },
  {
    id: 8,
    title: "Femme fleur",
    technique: "Acrylique, résine et feuille d'or",
    dimensions: "90 × 70 cm",
    year: 2025,
    category: "figures-feminines",
    image: "/images/8.png",
  },
  {
    id: 2,
    title: "Symbiose",
    technique: "Acrylique, relief et feuille métalisées fuchsia",
    dimensions: "60 × 60 cm",
    year: 2024,
    category: "force-animale",
    image: "/images/2.png",
  },
];
