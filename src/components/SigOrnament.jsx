import React from "react";

/** Petit motif "vapeur" réutilisé comme fil visuel de la marque au-dessus des titres. */
export default function SigOrnament({ color = "#D4A24C", className = "" }) {
  return (
    <div className={`flex justify-center mb-2 ${className}`} style={{ color, opacity: 0.75 }} aria-hidden="true">
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
        <path d="M6 20c0-6 3-8 3-12S6 2 6 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14 20c0-7 3.5-9 3.5-14S14 0 14 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M22 20c0-6 3-8 3-12s-3-6-3-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  );
}
