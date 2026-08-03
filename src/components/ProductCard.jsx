import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Reveal from "./Reveal";

export default function ProductCard({ product, onAdd, onImageClick, delay = 0 }) {
  const cardRef = useRef(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setRot({ x: -dy * 6, y: dx * 6 });
  };

  return (
    <Reveal delay={delay}>
      <div style={{ perspective: 1000 }}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => {
            setActive(false);
            setRot({ x: 0, y: 0 });
          }}
          animate={{
            rotateX: rot.x,
            rotateY: rot.y,
            y: active ? -6 : 0,
            scale: active ? 1.02 : 1,
            boxShadow: active
              ? `0 26px 38px -14px ${product.liquid}77`
              : "0 8px 18px -10px rgba(0,0,0,0.12)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          style={{ transformStyle: "preserve-3d" }}
          className="rounded-2xl p-6 bg-ivory"
        >
          <div
            className="relative rounded-xl mb-5 overflow-hidden aspect-square cursor-pointer"
            style={{ background: `linear-gradient(160deg, ${product.liquid}22, ${product.liquid}55)` }}
            onClick={() => onImageClick && onImageClick(product)}
            role={onImageClick ? "button" : undefined}
            aria-label={onImageClick ? `Voir le détail de ${product.name}` : undefined}
          >
            {product.image ? (
              <motion.img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                animate={{ scale: active ? 1.08 : 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover photo-grade"
              />
            ) : (
              <motion.div
                animate={{ scale: active ? 1.1 : 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="rounded-full"
                  style={{
                    width: 64,
                    height: 64,
                    background: `linear-gradient(180deg, ${product.liquid}, ${product.liquidDark})`,
                    boxShadow: `0 10px 20px -6px ${product.liquid}99`,
                  }}
                />
              </motion.div>
            )}
            {onImageClick && (
              <motion.span
                animate={{ opacity: active ? 1 : 0, y: active ? 0 : 6 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-2 right-2 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                style={{ background: "rgba(246,240,228,0.92)", color: "#16231C" }}
              >
                Voir le détail
              </motion.span>
            )}
          </div>
          <h3 className="text-lg font-semibold mb-1 font-display text-forest">{product.name}</h3>
          <p className="text-sm mb-4" style={{ color: "#6B6F60" }}>
            {product.tag}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-display italic text-ink" style={{ fontSize: product.price != null ? 16 : 13 }}>
              {product.price != null ? `${product.price.toLocaleString("fr-FR")} FCFA` : "Prix sur demande"}
            </span>
            <button
              onClick={() => onAdd(product)}
              aria-label={`Ajouter ${product.name} au panier`}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 text-forest"
              style={{ background: product.liquid, outlineColor: "#A8462F" }}
            >
              <ShoppingBag size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}
