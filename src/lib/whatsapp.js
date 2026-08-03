import { WHATSAPP_NUMBER } from "../data/products";

/**
 * Construit un lien wa.me pré-rempli à partir du panier.
 * @param {Record<string, number>} cart - { productId: quantité }
 * @param {Array} products - liste des produits (id, name, price)
 * @param {string} [extra] - message additionnel (ex: infos de contact)
 * @param {{name?: string, city?: string}} [customer] - infos de livraison saisies dans le panier
 */
export function buildWhatsAppLink(cart, products, extra = "", customer = {}) {
  const lines = Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const p = products.find((x) => x.id === id);
      if (!p) return null;
      return `• ${p.name} x${qty} — ${(p.price * qty).toLocaleString("fr-FR")} FCFA`;
    })
    .filter(Boolean);

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = products.find((x) => x.id === id);
    return p ? sum + p.price * qty : sum;
  }, 0);

  let message = `Bonjour BenDjo 👋, je souhaite passer cette commande :\n\n${lines.join("\n")}\n\nSous-total : ${total.toLocaleString(
    "fr-FR"
  )} FCFA`;

  if (customer?.name) message += `\nNom : ${customer.name}`;
  if (customer?.city) message += `\nVille de livraison : ${customer.city}`;
  message += `\nFrais de livraison : à confirmer avec vous`;

  if (extra) message += `\n\n${extra}`;

  message += `\n\nMerci de me confirmer la disponibilité et le délai. 🙏`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Lien WhatsApp simple, sans panier (ex: bouton flottant de contact) */
export function buildWhatsAppContactLink(message = "Bonjour BenDjo, j'aimerais avoir plus d'informations.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
