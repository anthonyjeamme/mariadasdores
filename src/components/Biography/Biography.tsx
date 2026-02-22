import Image from "next/image";
import classNameModule from "@anthonyjeamme/classname";
import styles from "./Biography.module.scss";

const className = classNameModule(styles);

export default function Biography() {
  return (
    <section id="biographie" {...className("Biography")}>
      <div {...className("Container")}>
        <div {...className("ImageCol")}>
          <div {...className("ImageWrapper")}>
            <Image
              src="/images/4.png"
              alt="Éveil intérieur — Maria Das Dores"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div {...className("TextCol")}>
          <h2 {...className("Title")}>Biographie</h2>
          <div {...className("Line")} />
          <div {...className("Text")}>
            <p>
              Artiste peintre franco-portugaise et autodidacte, Maria das Dores
              développe un univers où fleurs, animaux et figures féminines se
              rencontrent.
            </p>
            <p>
              Maître artisan coiffeur, elle commence par exposer ses œuvres dans
              son propre salon, faisant de cet espace un premier lieu
              d&apos;expression artistique.
            </p>
            <p>
              Son travail s&apos;ouvre ensuite à d&apos;autres lieux&nbsp;:
              restaurants, galeries, village d&apos;artistes de Marols, puis à
              l&apos;international grâce à Artboxy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
