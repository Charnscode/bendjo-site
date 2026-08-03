import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";

const CITIES = ["Cotonou", "Abomey-Calavi", "Porto-Novo", "Ouidah", "Autre ville"];

export default function CartDrawer() {
  const {
    cart,
    cartCount,
    cartTotal,
    hasQuoteItems,
    setQty,
    removeFromCart,
    checkout,
    drawerOpen,
    closeDrawer,
    customer,
    setCustomer,
  } = useCart();

  const items = Object.entries(cart).filter(([, qty]) => qty > 0);

  return (
    <AnimatePresence>
      {drawerOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110]"
            style={{ background: "rgba(22,35,28,0.5)", backdropFilter: "blur(2px)" }}
            onClick={closeDrawer}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] z-[120] flex flex-col bg-ivory"
            style={{ boxShadow: "-16px 0 40px -20px rgba(0,0,0,0.35)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Votre panier BenDjo"
          >
            {/* En-tête */}
            <div
              className="flex items-center justify-between px-6 py-5 shrink-0"
              style={{ borderBottom: "1px solid #EFE7D6" }}
            >
              <div>
                <p className="font-script text-2xl leading-none text-forest">Votre panier</p>
                <p className="text-xs mt-1" style={{ color: "#8A8D7F" }}>
                  {cartCount} article{cartCount > 1 ? "s" : ""}
                </p>
              </div>
              <button
                onClick={closeDrawer}
                aria-label="Fermer le panier"
                className="w-9 h-9 rounded-full flex items-center justify-center text-forest hover:bg-ivorySoft"
              >
                <X size={18} />
              </button>
            </div>

            {/* Contenu scrollable */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-3 py-16">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "#EFE7D6" }}
                  >
                    <ShoppingBag size={22} className="text-forest" />
                  </div>
                  <p className="text-sm max-w-[220px]" style={{ color: "#6B6F60" }}>
                    Votre panier est vide. Ajoutez une infusion, un sandwich ou une glace pour commencer.
                  </p>
                </div>
              ) : (
                <>
                  <ul className="space-y-3 mb-6">
                    {items.map(([id, qty]) => {
                      const p = PRODUCTS.find((x) => x.id === id);
                      if (!p) return null;
                      return (
                        <li
                          key={id}
                          className="flex items-center gap-3 rounded-xl p-2.5 bg-ivorySoft"
                        >
                          <div
                            className="w-14 h-14 rounded-lg overflow-hidden shrink-0"
                            style={{ background: `${p.liquid}22` }}
                          >
                            {p.image && (
                              <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-full object-cover photo-grade"
                              />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium truncate text-ink">{p.name}</p>
                            <p className="text-xs" style={{ color: "#8A8D7F" }}>
                              {p.price != null
                                ? `${(p.price * qty).toLocaleString("fr-FR")} FCFA`
                                : "Prix sur demande"}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 shrink-0 rounded-full px-1 py-1 bg-ivory">
                            <button
                              aria-label="Diminuer la quantité"
                              onClick={() => setQty(id, qty - 1)}
                              className="w-6 h-6 rounded-full flex items-center justify-center text-forest hover:bg-ivorySoft"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-5 text-center text-sm">{qty}</span>
                            <button
                              aria-label="Augmenter la quantité"
                              onClick={() => setQty(id, qty + 1)}
                              className="w-6 h-6 rounded-full flex items-center justify-center text-forest hover:bg-ivorySoft"
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

                  {/* Livraison — un seul champ utile : la ville. Le nom est optionnel. */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#8A8D7F" }}>
                      Livraison
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        value={customer.name}
                        onChange={(e) => setCustomer({ name: e.target.value })}
                        placeholder="Votre nom (optionnel)"
                        className="col-span-2 sm:col-span-1 px-3 py-2.5 rounded-lg text-sm outline-none border"
                        style={{ borderColor: "#E4DBC7", background: "#fff" }}
                      />
                      <select
                        value={customer.city}
                        onChange={(e) => setCustomer({ city: e.target.value })}
                        className="col-span-2 sm:col-span-1 px-3 py-2.5 rounded-lg text-sm outline-none border bg-white"
                        style={{ borderColor: "#E4DBC7" }}
                      >
                        <option value="">Ville de livraison</option>
                        {CITIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Résumé */}
                  <div className="pt-4 mb-1" style={{ borderTop: "1px solid #E4DBC7" }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-ink" style={{ color: "#6B6F60" }}>
                        Sous-total
                      </span>
                      <span className="text-lg font-display italic text-forest">
                        {cartTotal.toLocaleString("fr-FR")} FCFA
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: "#8A8D7F" }}>
                        Frais de livraison
                      </span>
                      <span className="text-xs font-medium" style={{ color: "#8A8D7F" }}>
                        Confirmés sur WhatsApp
                      </span>
                    </div>
                    {hasQuoteItems && (
                      <p className="text-xs mt-2" style={{ color: "#A8462F" }}>
                        Certains articles n'ont pas de prix fixe (petit-déjeuner, sandwichs...) — le
                        prix vous sera confirmé directement sur WhatsApp.
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Pied — action principale toujours visible */}
            {items.length > 0 && (
              <div className="px-6 py-5 shrink-0" style={{ borderTop: "1px solid #EFE7D6" }}>
                <button
                  onClick={() => checkout()}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5"
                  style={{ background: "#25D366", color: "#fff" }}
                >
                  <MessageCircle size={16} />
                  Commander via WhatsApp
                </button>
                <p className="text-xs text-center mt-3" style={{ color: "#8A8D7F" }}>
                  Aucun paiement en ligne requis · paiement à la livraison
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
