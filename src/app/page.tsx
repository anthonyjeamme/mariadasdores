import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Gallery from "@/components/Gallery/Gallery";
import Biography from "@/components/Biography/Biography";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mariadasdores.fr";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maria Das Dores JEAMME",
  jobTitle: "Artiste Peintre",
  description:
    "Artiste peintre franco-portugaise et autodidacte, Maria das Dores développe un univers où fleurs, animaux et figures féminines se rencontrent.",
  url: siteUrl,
  sameAs: ["https://www.instagram.com/dores_art_artiste_peintre"],
  telephone: "+33652050847",
  address: {
    "@type": "PostalAddress",
    streetAddress: "57 chemin de Conord",
    addressLocality: "Périgneux",
    postalCode: "42380",
    addressCountry: "FR",
  },
  knowsAbout: [
    "Peinture à l'huile",
    "Acrylique",
    "Feuille d'or",
    "Art contemporain",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Gallery />
      </ScrollReveal>
      <ScrollReveal>
        <Biography />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <Footer />
    </>
  );
}
