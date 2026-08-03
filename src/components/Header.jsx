import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.webp";

const LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/boutique", label: "Boutique" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

/**
 * @param {boolean} transparent - si vrai, le header démarre transparent (pour un hero plein écran)
 *   et devient plein au scroll. Utilisé uniquement sur la page d'accueil.
 */
export default function Header({ transparent = false }) {
  const { cartCount, openDrawer } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!transparent);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const solid = !transparent || scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-5 transition-all duration-300"
      style={{
        background: solid ? "rgba(246,240,228,0.94)" : "rgba(22,35,28,0.16)",
        backdropFilter: "blur(10px)",
        borderBottom: solid ? "1px solid #EFE7D6" : "1px solid rgba(246,240,228,0.12)",
        boxShadow: solid ? "0 2px 18px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <Link to="/" aria-label="Accueil BenDjo" className="flex items-center">
        <motion.img
          src={logo}
          alt="BenDjo"
          width="52"
          height="52"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            height: 52,
            objectFit: "contain",
            filter: solid ? "none" : "invert(1) drop-shadow(0 2px 10px rgba(0,0,0,0.35))",
            mixBlendMode: solid ? "normal" : "screen",
            transition: "filter 0.3s",
          }}
        />
      </Link>

      <nav
        className="hidden lg:flex items-center gap-9 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300"
        style={{ color: solid ? "#20241D" : "#FFFFFF" }}
        onMouseLeave={() => setHovered(null)}
      >
        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            onMouseEnter={() => setHovered(l.to)}
            className="relative pb-1"
          >
            {({ isActive }) => (
              <>
                {l.label}
                {(hovered === l.to || (isActive && hovered === null)) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-0.5 h-[2px] w-full rounded-full"
                    style={{ background: "#E2721A" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button
          aria-label="Voir le panier"
          onClick={openDrawer}
          className="relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2"
          style={{ background: "#16231C", color: "#F6F0E4", outlineColor: "#E2721A" }}
        >
          <ShoppingBag size={15} />
          Panier ({cartCount})
        </button>
        <button
          className="lg:hidden hover:opacity-60 transition-opacity"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          style={{ color: solid ? "#20241D" : "#FFFFFF" }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 flex flex-col px-6 py-4 gap-3 text-sm font-medium"
          style={{ background: "#F6F0E4", color: "#20241D", borderBottom: "1px solid #EFE7D6" }}
        >
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </header>
  );
}
