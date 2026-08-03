import React, { useState } from "react";
import { Play } from "lucide-react";

/**
 * Vidéo "à la demande" : seule l'image d'aperçu (légère) charge avec la page.
 * Le fichier vidéo n'est chargé qu'après un clic explicite de l'utilisateur.
 */
export default function VideoPlayer({ poster, src, alt = "Vidéo BenDjo", className = "" }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`} style={{ boxShadow: "0 20px 34px -16px rgba(22,35,28,0.3)" }}>
      {playing ? (
        <video
          src={src}
          controls
          autoPlay
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label="Lire la vidéo BenDjo"
          className="relative w-full block group"
        >
          <img src={poster} alt={alt} width="720" height="960" loading="lazy" decoding="async" className="w-full h-full object-cover photo-grade" />
          <div className="absolute inset-0 bg-forest/25 transition-colors duration-300 group-hover:bg-forest/35" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-ivory/90 transition-transform duration-300 group-hover:scale-110">
              <Play size={26} className="text-forest ml-1" fill="currentColor" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
