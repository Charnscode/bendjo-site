import React, { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import SigOrnament from "../components/SigOrnament";
import Seo from "../components/Seo";
import { buildWhatsAppContactLink } from "../lib/whatsapp";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Bonjour BenDjo, je suis ${form.name || "un visiteur du site"}.\n${form.message}${
      form.phone ? `\n\nMon numéro : ${form.phone}` : ""
    }`;
    window.open(buildWhatsAppContactLink(text), "_blank");
  };

  return (
    <Layout>
      <Seo
        title="Contact"
        description="Contactez BenDjo par WhatsApp, téléphone ou email pour toute question sur nos infusions, notre service traiteur ou petit-déjeuner en entreprise."
      />
      <PageBanner
        eyebrow="Contact"
        title="Parlons-en."
        subtitle="Une question, une commande spéciale, un évènement à organiser ? Écrivez-nous."
      />

      <section className="py-28 px-6 sm:px-10 bg-ivory">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Reveal>
            <SigOrnament color="#A8462F" className="justify-start" />
            <p className="font-script text-2xl mb-1 text-clay">Contact direct</p>
            <h2 className="text-3xl mb-6 font-display text-forest">Nos coordonnées</h2>
            <ul className="space-y-5 mb-10">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-clay" />
                <span className="text-sm text-ink">+229 01 62 01 41 61</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-clay" />
                <span className="text-sm text-ink">bendjobenin@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-clay" />
                <span className="text-sm text-ink">Cotonou, Bénin</span>
              </li>
            </ul>
            <a
              href={buildWhatsAppContactLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 bg-forest text-ivory"
            >
              <MessageCircle size={17} />
              Discuter sur WhatsApp
            </a>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="rounded-2xl p-6 bg-ivorySoft" style={{ boxShadow: "0 12px 26px -16px rgba(22,35,28,0.2)" }}>
              <p className="font-script text-2xl mb-1 text-clay">Un message ?</p>
              <h2 className="text-xl font-semibold mb-5 font-display text-forest">Écrivez-nous</h2>
              <label className="block text-sm font-medium mb-1 text-ink" htmlFor="name">Nom</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg mb-4 text-sm outline-none border focus-visible:outline focus-visible:outline-2"
                style={{ borderColor: "#E4DBC7", background: "#fff", outlineColor: "#A8462F" }}
              />
              <label className="block text-sm font-medium mb-1 text-ink" htmlFor="phone">Téléphone (optionnel)</label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg mb-4 text-sm outline-none border focus-visible:outline focus-visible:outline-2"
                style={{ borderColor: "#E4DBC7", background: "#fff", outlineColor: "#A8462F" }}
              />
              <label className="block text-sm font-medium mb-1 text-ink" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg mb-5 text-sm outline-none border resize-none focus-visible:outline focus-visible:outline-2"
                style={{ borderColor: "#E4DBC7", background: "#fff", outlineColor: "#A8462F" }}
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 bg-clay text-ivory"
              >
                <Send size={15} />
                Envoyer sur WhatsApp
              </button>
              <p className="text-xs text-center mt-3" style={{ color: "#8A8D7F" }}>
                Ce formulaire n'envoie aucune donnée à un serveur : il ouvre
                simplement WhatsApp avec votre message pré-rempli.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
