import React, { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Carrousel plein format : défilement automatique toutes les 4s,
 * pause au survol, navigation manuelle par flèches ou points.
 */
export default function Carousel({ slides }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (newDir) => {
      setDir(newDir);
      setIndex((i) => (i + newDir + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 4000);
    return () => clearInterval(t);
  }, [paused, go]);

  const variants = {
    enter: (direction) => ({ opacity: 0, x: direction > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (direction) => ({ opacity: 0, x: direction > 0 ? -60 : 60 }),
  };

  return (
    <div
      className="relative overflow-hidden rounded-3xl"
      style={{ aspectRatio: "16/9", boxShadow: "0 26px 44px -20px rgba(22,35,28,0.35)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={dir} mode="wait">
        <motion.img
          key={index}
          src={slides[index].src}
          alt={slides[index].alt}
          width="720"
          height="540"
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover photo-grade"
        />
      </AnimatePresence>

      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 65%, rgba(22,35,28,0.55) 100%)" }} />

      {slides[index].caption && (
        <p className="absolute bottom-5 left-6 text-sm sm:text-base font-medium text-ivory z-10">
          {slides[index].caption}
        </p>
      )}

      <button
        aria-label="Image précédente"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2"
        style={{ background: "rgba(246,240,228,0.85)", color: "#16231C", outlineColor: "#E2721A" }}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        aria-label="Image suivante"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2"
        style={{ background: "rgba(246,240,228,0.85)", color: "#16231C", outlineColor: "#E2721A" }}
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 right-6 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Aller à l'image ${i + 1}`}
            onClick={() => {
              setDir(i > index ? 1 : -1);
              setIndex(i);
            }}
            className="rounded-full transition-all"
            style={{
              width: i === index ? 20 : 7,
              height: 7,
              background: i === index ? "#D4A24C" : "rgba(246,240,228,0.6)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
