import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProductLightbox({ product, onClose }) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{ background: "rgba(22,35,28,0.72)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-ivory rounded-2xl overflow-hidden max-w-3xl w-full grid sm:grid-cols-2"
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center bg-ivory/90 text-forest"
            >
              <X size={18} />
            </button>
            <div className="aspect-square sm:aspect-auto">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover photo-grade" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <p className="font-script text-2xl mb-2" style={{ color: product.liquid }}>
                Infusion naturelle
              </p>
              <h3 className="text-2xl font-display text-forest mb-3">{product.name}</h3>
              <p className="text-sm mb-4" style={{ color: "#6B6F60" }}>{product.tag}</p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#45493F" }}>
                {product.description}
              </p>
              <span className="font-display italic text-xl text-ink">
                {product.price.toLocaleString("fr-FR")} FCFA
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
