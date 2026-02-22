"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import classNameModule from "@anthonyjeamme/classname";
import styles from "./Gallery.module.scss";
import { paintings, type Painting } from "@/data/paintings";

const className = classNameModule(styles);

type Filter = "all" | "figures-feminines" | "force-animale";

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<Painting | null>(null);

  const filtered =
    filter === "all"
      ? paintings
      : paintings.filter((p) => p.category === filter);

  const currentIndex = lightbox
    ? filtered.findIndex((p) => p.id === lightbox.id)
    : -1;

  const navigate = useCallback(
    (direction: "prev" | "next") => {
      if (!lightbox) return;
      const idx = currentIndex;
      if (direction === "prev" && idx > 0) {
        setLightbox(filtered[idx - 1]);
      } else if (direction === "next" && idx < filtered.length - 1) {
        setLightbox(filtered[idx + 1]);
      }
    },
    [lightbox, currentIndex, filtered]
  );

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "ArrowRight") navigate("next");
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightbox, navigate]);

  return (
    <section id="oeuvres" {...className("Gallery")}>
      <div {...className("Container")}>
        <h2 {...className("SectionTitle")}>Oeuvres</h2>
        <div {...className("Line")} />
        <div {...className("Filters")}>
          <button
            {...className("FilterBtn", { active: filter === "all" })}
            onClick={() => setFilter("all")}
          >
            Toutes
          </button>
          <button
            {...className("FilterBtn", {
              active: filter === "figures-feminines",
            })}
            onClick={() => setFilter("figures-feminines")}
          >
            Figures féminines
          </button>
          <button
            {...className("FilterBtn", {
              active: filter === "force-animale",
            })}
            onClick={() => setFilter("force-animale")}
          >
            Force animale
          </button>
        </div>
        <div {...className("Grid")}>
          {filtered.map((painting) => (
            <button
              key={painting.id}
              {...className("Card")}
              onClick={() => setLightbox(painting)}
            >
              <div {...className("CardImage")}>
                <Image
                  src={painting.image}
                  alt={painting.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div {...className("CardOverlay")}>
                  <span {...className("CardTitle")}>{painting.title}</span>
                  <span {...className("CardTechnique")}>
                    {painting.technique}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div {...className("Lightbox")} onClick={() => setLightbox(null)}>
          <button
            {...className("LightboxClose")}
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {currentIndex > 0 && (
            <button
              {...className("LightboxNav", { direction: "prev" })}
              onClick={(e) => {
                e.stopPropagation();
                navigate("prev");
              }}
              aria-label="Précédent"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          <div
            {...className("LightboxContent")}
            onClick={(e) => e.stopPropagation()}
          >
            <div {...className("LightboxImage")}>
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                fill
                sizes="90vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div {...className("LightboxInfo")}>
              <h3>{lightbox.title}</h3>
              <p>{lightbox.technique}</p>
              <p>
                {lightbox.dimensions} — {lightbox.year}
              </p>
            </div>
          </div>

          {currentIndex < filtered.length - 1 && (
            <button
              {...className("LightboxNav", { direction: "next" })}
              onClick={(e) => {
                e.stopPropagation();
                navigate("next");
              }}
              aria-label="Suivant"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
      )}
    </section>
  );
}
