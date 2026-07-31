import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Définit le <title>, la meta description et l'URL canonique de la page
 * courante. Évite d'ajouter une dépendance (react-helmet) pour un besoin simple.
 */
export default function Seo({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    if (title) document.title = `${title} | BenDjo`;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }

    const siteUrl = (import.meta.env.VITE_SITE_URL || "").replace(/\/$/, "");
    if (siteUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", `${siteUrl}${location.pathname}`);
    }
  }, [title, description, location.pathname]);

  return null;
}
