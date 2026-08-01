import React from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import SigOrnament from "../components/SigOrnament";
import VideoPlayer from "../components/VideoPlayer";
import Seo from "../components/Seo";
import { Leaf, MapPin, Recycle, Award } from "lucide-react";
import teamImg from "../assets/team.webp";
import mugImg from "../assets/mug.webp";
import boutiqueImg from "../assets/boutique.webp";
import kioskImg from "../assets/kiosk.webp";
import videoPoster from "../assets/video-poster.webp";
import videoSrc from "../assets/video/bendjo.webm";

const VALUES = [
  { icon: Leaf, title: "100% naturel", body: "Aucun additif, aucun arôme artificiel, uniquement des plantes sélectionnées avec soin." },
  { icon: MapPin, title: "Ancré au Bénin", body: "Des producteurs locaux, une production locale, une économie qui reste sur nos terres." },
  { icon: Recycle, title: "Emballage responsable", body: "Des sachets et boîtes pensés pour limiter notre impact environnemental." },
  { icon: Award, title: "Qualité constante", body: "Chaque lot est composé à la main, en petite quantité, pour garantir sa fraîcheur." },
];

const PARTNERS = [
  { name: "AMAP Shop", contact: "+229 01 61 22 83 10" },
  { name: "WEZEUX Shop", contact: "+229 01 96 07 57 63" },
  { name: "Marie Bazin Sall (MBS)", contact: "+229 01 54 68 73 71" },
];

export default function About() {
  return (
    <Layout>
      <Seo
        title="À propos"
        description="Découvrez l'histoire de BenDjo, marque béninoise d'infusions 100% naturelles, ses valeurs et ses points de vente partenaires."
      />
      <PageBanner
        eyebrow="À propos"
        title="Une marque née de nos terres."
        subtitle="BenDjo valorise les plantes locales du Bénin à travers des infusions 100% naturelles, pensées pour votre quotidien."
        bgImage={kioskImg}
      />

      <section className="grid lg:grid-cols-2 gap-10 items-center px-6 sm:px-10 py-28 bg-ivory">
        <Reveal>
          <VideoPlayer poster={videoPoster} src={videoSrc} alt="BenDjo en vidéo" className="aspect-[4/3]" />
        </Reveal>
        <Reveal delay={120}>
          <p className="font-script text-2xl mb-2 text-clay">Notre mission</p>
          <h2 className="text-3xl mb-5 font-display text-forest">Reconnecter chacun à ses racines.</h2>
          <p className="leading-relaxed mb-4" style={{ color: "#45493F" }}>
            BenDjo est née d'une conviction simple&nbsp;: les plantes qui ont toujours
            soigné nos familles méritent d'être remises au goût du jour, sous une
            forme simple et accessible. Basilic, hibiscus, citronnelle, laurier,
            clou de girofle. Chaque infusion est composée à partir de plantes
            locales, sans additif ni arôme artificiel.
          </p>
          <p className="leading-relaxed" style={{ color: "#45493F" }}>
            Notre équipe va à la rencontre du public : marchés, évènements,
            boutiques partenaires, pour faire découvrir ces infusions et
            partager un moment de bien-être, sachet après sachet.
          </p>
        </Reveal>
      </section>

      <section className="py-28 px-6 sm:px-10 bg-ivorySoft">
        <Reveal className="mb-12 text-center max-w-xl mx-auto">
          <SigOrnament />
          <p className="font-script text-2xl mb-2 text-clay">Nos valeurs</p>
          <h2 className="text-3xl font-display text-forest">Ce qui nous guide.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="group flex flex-col items-start gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-clay/30 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-clay/70"
                >
                  <v.icon size={20} className="text-clay" />
                </div>
                <p className="font-semibold font-display text-forest">{v.title}</p>
                <p className="text-sm" style={{ color: "#6B6F60" }}>{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 py-28 bg-ivory">
        <Reveal>
          <div className="group rounded-2xl overflow-hidden aspect-[4/3]" style={{ boxShadow: "0 20px 34px -16px rgba(22,35,28,0.25)" }}>
            <img src={teamImg} alt="L'équipe BenDjo lors d'un évènement" loading="lazy" decoding="async" className="w-full h-full object-cover photo-grade transition-transform duration-500 group-hover:scale-110" />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="group rounded-2xl overflow-hidden aspect-[4/3]" style={{ boxShadow: "0 20px 34px -16px rgba(22,35,28,0.25)" }}>
            <img src={mugImg} alt="Une tasse d'infusion BenDjo" loading="lazy" decoding="async" className="w-full h-full object-cover photo-grade transition-transform duration-500 group-hover:scale-110" />
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="group rounded-2xl overflow-hidden aspect-[4/3]" style={{ boxShadow: "0 20px 34px -16px rgba(22,35,28,0.25)" }}>
            <img src={boutiqueImg} alt="Boîtes BenDjo en boutique partenaire" loading="lazy" decoding="async" className="w-full h-full object-cover photo-grade transition-transform duration-500 group-hover:scale-110" />
          </div>
        </Reveal>
      </section>

      <section className="py-28 px-6 sm:px-10 bg-forest">
        <Reveal className="mb-10 text-center max-w-xl mx-auto">
          <SigOrnament color="#D4A24C" />
          <p className="font-script text-2xl mb-2 text-amber">Retrouvez-nous</p>
          <h2 className="text-3xl font-display text-ivory">Nos points de vente partenaires.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div className="rounded-2xl p-6 text-center bg-forestSoft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="font-semibold font-display text-ivory mb-2">{p.name}</p>
                <p className="text-sm" style={{ color: "#B9C2AE" }}>{p.contact}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
