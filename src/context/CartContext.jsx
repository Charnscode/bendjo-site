import React, { createContext, useCallback, useContext, useState } from "react";
import { PRODUCTS } from "../data/products";
import { buildWhatsAppLink } from "../lib/whatsapp";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const [toast, setToast] = useState(null);

  const addToCart = useCallback((product, qty = 1) => {
    setCart((prev) => ({ ...prev, [product.id]: (prev[product.id] || 0) + qty }));
    setToast(`${product.name} ajoutée au panier`);
    window.clearTimeout(window.__bendjoToastTimer);
    window.__bendjoToastTimer = window.setTimeout(() => setToast(null), 2200);
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  }, []);

  const setQty = useCallback((productId, qty) => {
    setCart((prev) => ({ ...prev, [productId]: Math.max(0, qty) }));
  }, []);

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find((x) => x.id === id);
    return p ? sum + p.price * qty : sum;
  }, 0);

  const checkout = useCallback(
    (extraMessage) => {
      const url = buildWhatsAppLink(cart, PRODUCTS, extraMessage);
      window.open(url, "_blank");
    },
    [cart]
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, setQty, cartCount, cartTotal, checkout, toast }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé dans un <CartProvider>");
  return ctx;
}
