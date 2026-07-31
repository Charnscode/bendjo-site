import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
import BackToTop from "./BackToTop";
import ScrollProgress from "./ScrollProgress";
import { useCart } from "../context/CartContext";

export default function Layout({ children, transparentHeader = false }) {
  const { toast } = useCart();

  return (
    <div className="font-sans">
      <ScrollProgress />
      <Header transparent={transparentHeader} />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloatingButton />
      <BackToTop />

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-full text-sm font-medium shadow-lg z-50"
            style={{ background: "#16231C", color: "#F6F0E4" }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
