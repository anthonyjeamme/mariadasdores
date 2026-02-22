import classNameModule from "@anthonyjeamme/classname";
import styles from "./About.module.scss";

const className = classNameModule(styles);

export default function About() {
  return (
    <section id="demarche" {...className("About")}>
      <div {...className("Container")}>
        <h2 {...className("Title")}>Démarche artistique</h2>
        <div {...className("Line")} />
        <div {...className("Text")}>
          <p>
            Mon travail explore la rencontre entre nature et féminité, entre
            instinct et symbolique.
          </p>
          <p>
            Les formes florales et animales se mêlent aux visages féminins pour
            donner naissance à des figures hybrides, à la fois puissantes et
            vulnérables.
          </p>
          <p>
            J&apos;explore les tensions entre réel et imaginaire, matière et
            spiritualité, délicatesse et force.
          </p>
          <p>
            Les textures, minutieusement travaillées, ancrent l&apos;œuvre dans
            la matière tout en laissant affleurer une dimension plus intérieure.
          </p>
          <p>
            J&apos;ouvre des pistes et des correspondances, sans chercher à en
            imposer une lecture unique.
          </p>
        </div>
      </div>
    </section>
  );
}
