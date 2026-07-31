import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo.webp";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="px-6 sm:px-10 py-14" style={{ background: "#1E2F24", color: "#F6F0E4" }}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 max-w-6xl mx-auto">
        <div>
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-3" style={{ background: "#F6F0E4" }}>
            <img src={logo} alt="BenDjo" style={{ height: 64, objectFit: "contain" }} />
          </div>
          <p className="text-sm opacity-75">La marque qui vous reconnecte à vos origines.</p>
          <div className="flex gap-3 mt-4">
            <a href="https://facebook.com/BenDjoBenin" aria-label="Facebook BenDjo" target="_blank" rel="noreferrer">
              <Facebook size={16} />
            </a>
            <a href="https://www.linkedin.com/company/bendjo/" aria-label="LinkedIn BenDjo" target="_blank" rel="noreferrer">
              <Linkedin size={16} />
            </a>
            <a href="https://www.tiktok.com/@bendjo229" aria-label="TikTok BenDjo" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.82a4.28 4.28 0 0 1-3.03-3.03h-3.07v13.32a2.53 2.53 0 1 1-1.8-2.42V10.6a5.66 5.66 0 1 0 4.87 5.6V9.4a7.3 7.3 0 0 0 4.24 1.36V7.7a4.27 4.27 0 0 1-1.21-1.88z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold mb-3 text-sm">Liens rapides</p>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">À propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/infusions">Nos infusions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3 text-sm">Contactez-nous</p>
          <ul className="space-y-2 text-sm opacity-80">
            <li className="flex items-center gap-2"><Phone size={14} /> +229 01 62 01 41 61</li>
            <li className="flex items-center gap-2"><Mail size={14} /> bendjobenin@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> Cotonou, Bénin</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3 text-sm">Newsletter</p>
          <p className="text-sm opacity-75 mb-3">Recevez nos offres et conseils bien-être.</p>
          {sent ? (
            <p className="text-sm font-medium" style={{ color: "#D4A24C" }}>Merci pour votre inscription !</p>
          ) : (
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="px-3 py-2 rounded-l-full text-sm flex-1 focus-visible:outline focus-visible:outline-2"
                style={{ background: "#F6F0E4", color: "#20241D", outlineColor: "#D4A24C" }}
              />
              <button
                onClick={() => email && setSent(true)}
                className="px-4 rounded-r-full focus-visible:outline focus-visible:outline-2"
                style={{ background: "#D4A24C", color: "#16231C", outlineColor: "#F6F0E4" }}
                aria-label="S'inscrire à la newsletter"
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        className="pt-6 text-xs opacity-60 flex flex-wrap justify-between gap-2 max-w-6xl mx-auto"
        style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
      >
        <span>© 2026 BenDjo. Tous droits réservés.</span>
        <span>Mentions légales · Politique de confidentialité</span>
      </div>
    </footer>
  );
}
