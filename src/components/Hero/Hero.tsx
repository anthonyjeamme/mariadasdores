import Image from "next/image";
import classNameModule from "@anthonyjeamme/classname";
import styles from "./Hero.module.scss";

const className = classNameModule(styles);

export default function Hero() {
  return (
    <section {...className("Hero")}>
      <div {...className("Background")}>
        <Image
          src="/images/1.png"
          alt="Au delà des larmes — Maria Das Dores"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
          priority
        />
      </div>
      <div {...className("Overlay")} />
      <div {...className("Content")}>
        <span {...className("Eyebrow")}>Artiste Peintre</span>
        <h1 {...className("Name")}>
          Maria
          <br />
          Das Dores
        </h1>
        <div {...className("Divider")} />
      </div>
      <a href="#oeuvres" {...className("ScrollDown")}>
        <span>Découvrir</span>
        <div {...className("ScrollLine")} />
      </a>
    </section>
  );
}
