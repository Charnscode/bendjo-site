import React, { useState } from "react";
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import Seo from "../components/Seo";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";
import packsImg from "../assets/packs.webp";

function CartSummary() {
  const { cart, cartCount, cartTotal, setQty, removeFromCart, checkout } = useCart();
  const items = Object.entries(cart).filter(([, qty]) => qty > 0);

  return (
    <div className="rounded-2xl p-6 sticky top-24 bg-ivorySoft" style={{ boxShadow: "0 12px 26px -16px rgba(22,35,28,0.2)" }}>
      <p className="font-script text-3xl leading-none text-forest">Votre panier</p>
      <p className="text-xs mb-5 mt-1" style={{ color: "#8A8D7F" }}>
        {cartCount} article{cartCount > 1 ? "s" : ""}
      </p>

      {items.length === 0 ? (
        <p className="text-sm" style={{ color: "#6B6F60" }}>
          Votre panier est vide. Ajoutez une infusion pour commencer.
        </p>
      ) : (
        <>
          <ul className="space-y-3 mb-5">
            {items.map(([id, qty]) => {
              const p = PRODUCTS.find((x) => x.id === id);
              if (!p) return null;
              return (
                <li key={id} className="flex items-center gap-3 rounded-xl p-2.5 bg-ivory">
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0" style={{ background: `${p.liquid}22` }}>
                    {p.image && (
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover photo-grade" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate text-ink">{p.name}</p>
                    <p className="text-xs" style={{ color: "#8A8D7F" }}>
                      {(p.price * qty).toLocaleString("fr-FR")} FCFA
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 rounded-full px-1 py-1 bg-ivorySoft">
                    <button
                      aria-label="Diminuer la quantité"
                      onClick={() => setQty(id, qty - 1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-forest hover:bg-ivory"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-5 text-center text-sm">{qty}</span>
                    <button
                      aria-label="Augmenter la quantité"
                      onClick={() => setQty(id, qty + 1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-forest hover:bg-ivory"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                  <button
                    aria-label={`Retirer ${p.name} du panier`}
                    onClick={() => removeFromCart(id)}
                    className="shrink-0 text-clay"
                  >
                    <Trash2 size={14} />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center justify-between mb-5 pt-4" style={{ borderTop: "1px solid #E4DBC7" }}>
            <span className="text-sm font-semibold text-ink">Total</span>
            <span className="text-2xl font-display italic text-forest">
              {cartTotal.toLocaleString("fr-FR")} FCFA
            </span>
          </div>

          <button
            onClick={() => checkout()}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5"
            style={{ background: "#25D366", color: "#fff" }}
          >
            <MessageCircle size={16} />
            Commander via WhatsApp
          </button>
          <p className="text-xs text-center mt-3" style={{ color: "#8A8D7F" }}>
            Paiement à la livraison. Votre commande s'ouvre dans WhatsApp,
            pré-remplie.
          </p>
        </>
      )}
    </div>
  );
}

export default function Infusions() {
  const { addToCart } = useCart();
  const [selected, setSelected] = useState(null);

  return (
    <Layout>
      <Seo
        title="Nos infusions"
        description="Découvrez la gamme d'infusions naturelles BenDjo : Basilic, Hibiscus, Citronnelle, et commandez directement sur WhatsApp."
      />
      <PageBanner
        eyebrow="Nos infusions"
        title="Une plante pour chaque besoin."
        subtitle="100% naturelles, sans additif ni arôme artificiel. Ajoutez au panier et commandez en un clic sur WhatsApp."
      />

      <section className="py-24 px-6 sm:px-10 bg-ivory">
        <Reveal>
          <div className="rounded-2xl overflow-hidden mb-12 max-w-5xl mx-auto" style={{ boxShadow: "0 20px 34px -18px rgba(22,35,28,0.28)" }}>
            <img src={packsImg} alt="Boîtes d'infusions naturelles BenDjo" loading="lazy" decoding="async" className="w-full object-cover photo-grade" style={{ maxHeight: 340 }} />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 content-start">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.id} product={p} onAdd={addToCart} onImageClick={setSelected} delay={i * 100} />
            ))}
          </div>
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      </section>

      <ProductModal product={selected} onClose={() => setSelected(null)} onAdd={addToCart} />
    </Layout>
  );
}
