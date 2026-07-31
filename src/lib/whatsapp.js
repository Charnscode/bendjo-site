import { WHATSAPP_NUMBER } from "../data/products";

/**
 * Construit un lien wa.me pré-rempli à partir du panier.
 * @param {Record<string, number>} cart - { productId: quantité }
 * @param {Array} products - liste des produits (id, name, price)
 * @param {string} [extra] - message additionnel (ex: infos de contact)
 */
export function buildWhatsAppLink(cart, products, extra = "") {
  const lines = Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const p = products.find((x) => x.id === id);
      if (!p) return null;
      return `- ${p.name} x${qty} (${(p.price * qty).toLocaleString("fr-FR")} FCFA)`;
    })
    .filter(Boolean);

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = products.find((x) => x.id === id);
    return p ? sum + p.price * qty : sum;
  }, 0);

  let message = `Bonjour BenDjo, je souhaite commander :\n${lines.join("\n")}\nTotal : ${total.toLocaleString(
    "fr-FR"
  )} FCFA`;

  if (extra) message += `\n\n${extra}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Lien WhatsApp simple, sans panier (ex: bouton flottant de contact) */
export function buildWhatsAppContactLink(message = "Bonjour BenDjo, j'aimerais avoir plus d'informations.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
