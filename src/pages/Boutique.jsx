import React, { useState } from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import Seo from "../components/Seo";
import { useCart } from "../context/CartContext";
import { PRODUCTS, CATEGORIES } from "../data/products";
import packsImg from "../assets/packs.webp";

export default function Boutique() {
  const { addToCart } = useCart();
  const [selected, setSelected] = useState(null);
  const [activeCat, setActiveCat] = useState("all");

  const visible =
    activeCat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCat);

  return (
    <Layout>
      <Seo
        title="Boutique — Infusions, thés naturels, sandwichs"
        description="La boutique BenDjo au Bénin : infusions et thés 100% naturels (basilic, hibiscus, citronnelle), sandwichs maison, petit-déjeuner d'entreprise. Commande directe sur WhatsApp, livraison à Cotonou."
      />
      <PageBanner
        eyebrow="Boutique"
        title="Nos thés, infusions & gourmandises."
        subtitle="Infusions 100% naturelles, sandwichs faits maison, petit-déjeuner d'entreprise. Ajoutez au panier et commandez en un clic sur WhatsApp."
      />

      <section className="py-24 px-6 sm:px-10 bg-ivory">
        <Reveal>
          <div
            className="rounded-2xl overflow-hidden mb-10 max-w-5xl mx-auto"
            style={{ boxShadow: "0 20px 34px -18px rgba(22,35,28,0.28)" }}
          >
            <img
              src={packsImg}
              alt="Infusions et thés naturels BenDjo, faits au Bénin"
              width="675"
              height="900"
              loading="lazy"
              decoding="async"
              className="w-full object-cover photo-grade"
              style={{ maxHeight: 340 }}
            />
          </div>
        </Reveal>

        {/* Filtres catégories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveCat("all")}
            className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors"
            style={{
              background: activeCat === "all" ? "#16231C" : "#EFE7D6",
              color: activeCat === "all" ? "#F6F0E4" : "#45493F",
            }}
          >
            Tout voir
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors"
              style={{
                background: activeCat === c.id ? "#16231C" : "#EFE7D6",
                color: activeCat === c.id ? "#F6F0E4" : "#45493F",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visible.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={addToCart}
              onImageClick={(prod) =>
                setSelected({
                  ...prod,
                  categoryLabel: CATEGORIES.find((c) => c.id === prod.category)?.label,
                })
              }
              delay={i * 80}
            />
          ))}
        </div>
      </section>

      <ProductModal product={selected} onClose={() => setSelected(null)} onAdd={addToCart} />
    </Layout>
  );
}
