"use client";

import { useState, useEffect } from "react";
import classNameModule from "@anthonyjeamme/classname";
import styles from "./Header.module.scss";

const className = classNameModule(styles);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header {...className("Header", { scrolled })}>
      <div {...className("Inner")}>
        <a href="#" {...className("Logo")}>
          Maria Das Dores
        </a>
        <button
          {...className("Burger", { open: menuOpen })}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
        <nav {...className("Nav", { open: menuOpen })}>
          <a href="#oeuvres" onClick={handleLinkClick}>
            Oeuvres
          </a>
          <a href="#demarche" onClick={handleLinkClick}>
            Démarche
          </a>
          <a href="#biographie" onClick={handleLinkClick}>
            Biographie
          </a>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
