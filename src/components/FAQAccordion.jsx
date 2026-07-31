import React, { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Comment se passe la livraison ?",
    a: "Livraison possible sur Cotonou et Abomey-Calavi. Écrivez-nous sur WhatsApp pour connaître les délais selon votre quartier.",
  },
  {
    q: "Quel est le mode de paiement ?",
    a: "Le paiement se fait à la livraison. Vous confirmez votre commande sur WhatsApp, on s'occupe du reste.",
  },
  {
    q: "Les infusions contiennent-elles des additifs ?",
    a: "Non, uniquement des plantes naturelles sélectionnées avec soin, sans additif ni arôme artificiel.",
  },
  {
    q: "Proposez-vous des commandes pour les entreprises ?",
    a: "Oui, petit-déjeuner en entreprise et service traiteur évènementiel. Contactez-nous pour un devis.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <div className="max-w-xl mx-auto">
      {FAQS.map((item, i) => (
        <Reveal key={item.q} delay={i * 70}>
          <div style={{ borderBottom: "1px solid #E4DBC7" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-4 flex items-center justify-between gap-4 text-ink font-medium text-[15px]"
            >
              {item.q}
              <Plus
                size={18}
                className="shrink-0 text-clay transition-transform duration-300"
                style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
              />
            </button>
            <div
              style={{
                maxHeight: open === i ? 160 : 0,
                overflow: "hidden",
                transition: "max-height .35s ease",
              }}
            >
              <p className="text-sm leading-relaxed pb-4" style={{ color: "#6B6F60" }}>
                {item.a}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
