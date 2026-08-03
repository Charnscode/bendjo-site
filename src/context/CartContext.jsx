import React, { createContext, useCallback, useContext, useState } from "react";
import { PRODUCTS } from "../data/products";
import { buildWhatsAppLink } from "../lib/whatsapp";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const [toast, setToast] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [customer, setCustomerState] = useState({ name: "", city: "" });

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const setCustomer = useCallback((fields) => {
    setCustomerState((prev) => ({ ...prev, ...fields }));
  }, []);

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
    return p && p.price != null ? sum + p.price * qty : sum;
  }, 0);
  const hasQuoteItems = Object.entries(cart).some(([id, qty]) => {
    const p = PRODUCTS.find((x) => x.id === id);
    return qty > 0 && p && p.price == null;
  });

  const checkout = useCallback(
    (extraMessage) => {
      const url = buildWhatsAppLink(cart, PRODUCTS, extraMessage, customer);
      window.open(url, "_blank");
      setDrawerOpen(false);
    },
    [cart, customer]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        setQty,
        cartCount,
        cartTotal,
        hasQuoteItems,
        checkout,
        toast,
        drawerOpen,
        openDrawer,
        closeDrawer,
        customer,
        setCustomer,
      }}
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
