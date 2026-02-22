import classNameModule from "@anthonyjeamme/classname";
import styles from "./Footer.module.scss";

const className = classNameModule(styles);

export default function Footer() {
  return (
    <footer {...className("Footer")}>
      <div {...className("Container")}>
        <span {...className("Brand")}>Maria Das Dores JEAMME</span>
        <span {...className("Sep")}>—</span>
        <span {...className("Copy")}>Tous droits réservés</span>
      </div>
    </footer>
  );
}
