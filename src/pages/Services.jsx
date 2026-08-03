import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import SigOrnament from "../components/SigOrnament";
import FAQAccordion from "../components/FAQAccordion";
import Seo from "../components/Seo";
import { buildWhatsAppContactLink } from "../lib/whatsapp";
import giftBoxImg from "../assets/gift-box.webp";
import packsImg from "../assets/packs.webp";
import kioskImg from "../assets/kiosk.webp";
import petitDejImg from "../assets/menu/cafe-petit-dej.webp";

const SERVICES = [
  {
    image: packsImg,
    title: "Infusions naturelles",
    body: "Notre gamme d'infusions 100% naturelles (Basilic, Hibiscus, Citronnelle & le Thé naturel 3-en-1) livrée partout au Bénin.",
    cta: { label: "Voir la boutique", to: "/boutique" },
  },
  {
    image: petitDejImg,
    title: "Petit-déjeuner en entreprise",
    body: "Notre formule petit-déjeuner pour vos équipes : café chaud et sandwich BenDjo, livrés sur votre lieu de travail.",
    cta: { label: "Demander un devis", whatsapp: "Bonjour BenDjo, je souhaite un devis pour un petit-déjeuner en entreprise." },
  },
  {
    image: kioskImg,
    title: "Traiteur évènementiel",
    body: "Pour vos évènements (séminaires, mariages, lancements), un service traiteur qui met à l'honneur nos infusions et des mets locaux.",
    cta: { label: "Demander un devis", whatsapp: "Bonjour BenDjo, je souhaite un devis pour un service traiteur." },
  },
];

export default function Services() {
  return (
    <Layout>
      <Seo
        title="Services"
        description="BenDjo propose ses infusions naturelles, un service de petit-déjeuner en entreprise et un service traiteur évènementiel au Bénin."
      />
      <PageBanner
        eyebrow="Nos services"
        title="Au-delà de la tasse."
        subtitle="Infusions, petit-déjeuner en entreprise et traiteur : BenDjo accompagne votre quotidien et vos évènements."
      />

      <section className="py-28 px-6 sm:px-10 bg-ivory">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div
                className="group rounded-2xl overflow-hidden h-full flex flex-col bg-ivorySoft transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 12px 24px -14px rgba(22,35,28,0.18)" }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover photo-grade transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-3 font-display text-forest">{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: "#45493F" }}>
                    {s.body}
                  </p>
                  {s.cta.to ? (
                    <Link
                      to={s.cta.to}
                      className="text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-transform hover:-translate-y-0.5 bg-forest text-ivory"
                    >
                      {s.cta.label}
                    </Link>
                  ) : (
                    <a
                      href={buildWhatsAppContactLink(s.cta.whatsapp)}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold px-5 py-2.5 rounded-full text-center inline-flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 bg-forest text-ivory"
                    >
                      <MessageCircle size={15} />
                      {s.cta.label}
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 sm:px-10 bg-ivorySoft">
        <Reveal className="text-center max-w-xl mx-auto mb-4">
          <SigOrnament color="#A8462F" />
          <p className="font-script text-2xl mb-2 text-clay">Un coffret à offrir</p>
        </Reveal>
        <Reveal delay={80} className="max-w-md mx-auto">
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 34px -18px rgba(22,35,28,0.25)" }}>
            <img src={giftBoxImg} alt="Coffret cadeau BenDjo" loading="lazy" decoding="async" className="w-full object-cover photo-grade" />
          </div>
        </Reveal>
      </section>

      <section className="py-24 px-6 sm:px-10 bg-ivory">
        <Reveal className="text-center max-w-xl mx-auto mb-10">
          <SigOrnament />
          <p className="font-script text-2xl mb-2 text-clay">Questions fréquentes</p>
        </Reveal>
        <FAQAccordion />
      </section>

      <section className="py-24 px-6 sm:px-10 text-center bg-forest">
        <Reveal className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-4 font-display text-ivory">
            Une question sur nos services&nbsp;?
          </h2>
          <p className="text-sm mb-6" style={{ color: "#B9C2AE" }}>
            Écrivez-nous directement sur WhatsApp. Nous répondons rapidement,
            tous les jours.
          </p>
          <a
            href={buildWhatsAppContactLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 bg-amber text-forest"
          >
            <MessageCircle size={17} />
            Discuter sur WhatsApp
          </a>
        </Reveal>
      </section>
    </Layout>
  );
}
