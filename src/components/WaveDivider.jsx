import React from "react";

/**
 * Séparateur en courbe douce entre deux sections de couleurs différentes.
 * @param {string} fill - couleur de la section SUIVANTE (celle vers laquelle on descend)
 * @param {boolean} flip - inverse le sens de la courbe
 */
export default function WaveDivider({ fill = "#F6F0E4", flip = false }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: 44 }}
      aria-hidden="true"
    >
      <path
        d={flip ? "M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" : "M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"}
        fill={fill}
      />
    </svg>
  );
}
