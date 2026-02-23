"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import classNameModule from "@anthonyjeamme/classname";
import styles from "./ScrollReveal.module.scss";

const className = classNameModule(styles);

export default function ScrollReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} {...className("ScrollReveal", { visible })}>
      {children}
    </div>
  );
}
