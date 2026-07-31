import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Infusions from "./pages/Infusions";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/infusions" element={<Infusions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </CartProvider>
  );
}
