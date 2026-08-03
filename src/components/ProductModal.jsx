import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";

export default function ProductModal({ product, onClose, onAdd }) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(22,35,28,0.55)", backdropFilter: "blur(4px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden grid sm:grid-cols-2 bg-ivory"
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center bg-ivory/90 text-forest"
            >
              <X size={18} />
            </button>

            <div className="aspect-square sm:aspect-auto">
              {product.image && (
                <img src={product.image} alt={product.name} className="w-full h-full object-cover photo-grade" />
              )}
            </div>

            <div className="p-8 flex flex-col">
              <p className="font-script text-2xl mb-1" style={{ color: product.liquid }}>
                {product.categoryLabel || "BenDjo"}
              </p>
              <h3 className="text-2xl font-display text-forest mb-3">{product.name}</h3>
              <p className="text-sm mb-4" style={{ color: "#6B6F60" }}>
                {product.tag}
              </p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#45493F" }}>
                {product.description}
              </p>
              {product.benefits && (
                <ul className="mb-6 space-y-1.5">
                  {product.benefits.map((b) => (
                    <li key={b} className="text-sm flex items-start gap-2" style={{ color: "#45493F" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: product.liquid }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex items-center justify-between mb-5">
                <span className="font-display italic text-2xl text-ink">
                  {product.price != null ? `${product.price.toLocaleString("fr-FR")} FCFA` : "Prix sur demande"}
                </span>
              </div>
              <button
                onClick={() => {
                  onAdd(product);
                  onClose();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 text-forest"
                style={{ background: product.liquid }}
              >
                <ShoppingBag size={16} />
                {product.price != null ? "Ajouter au panier" : "Ajouter (prix à confirmer)"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
