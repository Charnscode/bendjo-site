import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Boutique from "./pages/Boutique";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/boutique" element={<Boutique />} />
        {/* Ancienne URL conservée en redirection (évite les liens/index morts) */}
        <Route path="/infusions" element={<Navigate to="/boutique" replace />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </CartProvider>
  );
}
