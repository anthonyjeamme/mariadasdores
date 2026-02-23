"use client";

import { useState, useEffect } from "react";
import classNameModule from "@anthonyjeamme/classname";
import styles from "./Header.module.scss";

const className = classNameModule(styles);

const navItems = [
  { href: "#oeuvres", label: "Oeuvres" },
  { href: "#demarche", label: "Démarche" },
  { href: "#biographie", label: "Biographie" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header {...className("Header", { scrolled, menuOpen })}>
        <div {...className("Inner")}>
          <a href="#" {...className("Logo")} onClick={handleLinkClick}>
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
          <nav {...className("DesktopNav")}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <div {...className("MobileNav", { open: menuOpen })}>
        <nav>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={handleLinkClick}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
