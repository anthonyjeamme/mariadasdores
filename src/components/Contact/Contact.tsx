import classNameModule from "@anthonyjeamme/classname";
import styles from "./Contact.module.scss";

const className = classNameModule(styles);

export default function Contact() {
  return (
    <section id="contact" {...className("Contact")}>
      <div {...className("Container")}>
        <h2 {...className("Title")}>Contact</h2>
        <div {...className("Line")} />
        <div {...className("Grid")}>
          <div {...className("Item")}>
            <h3>Instagram</h3>
            <a
              href="https://www.instagram.com/dores_art_artiste_peintre"
              target="_blank"
              rel="noopener noreferrer"
            >
              @dores_art_artiste_peintre
            </a>
          </div>
          <div {...className("Item")}>
            <h3>Téléphone</h3>
            <a href="tel:+33652050847">06 52 05 08 47</a>
          </div>
          <div {...className("Item")}>
            <h3>Adresse</h3>
            <p>
              JEAMME Maria
              <br />
              57 chemin de Conord
              <br />
              42380 Périgneux
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
