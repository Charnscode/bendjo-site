import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, MapPin, Recycle, Award, MessageCircle } from "lucide-react";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import SigOrnament from "../components/SigOrnament";
import Carousel from "../components/Carousel";
import Marquee from "../components/Marquee";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";
import heroImg from "../assets/hero.webp";
import slideBoxesImg from "../assets/slide-boxes.webp";
import slideShopfrontImg from "../assets/slide-shopfront.webp";
import teamImg from "../assets/team.webp";
import kioskImg from "../assets/kiosk.webp";
import packsImg from "../assets/packs.webp";
import boutiqueImg from "../assets/boutique.webp";
import posterImg from "../assets/poster.webp";
import mugImg from "../assets/mug.webp";
import bottleImg from "../assets/gallery-bottle.webp";
import collectionImg from "../assets/gallery-collection.webp";
import petitDejCafeImg from "../assets/menu/cafe-petit-dej.webp";
import petitDejLivraisonImg from "../assets/menu/equipe-livraison.webp";
import petitDejCuisineImg from "../assets/menu/preparation-cuisine.webp";

const STEPS = [
  {
    num: "01",
    title: "La cueillette",
    body: "Nos plantes sont sélectionnées auprès de producteurs locaux, à maturité, pour préserver leurs bienfaits.",
  },
  {
    num: "02",
    title: "Le séchage naturel",
    body: "Séchage à l'air libre, sans additif, pour conserver les arômes et les propriétés de chaque plante.",
  },
  {
    num: "03",
    title: "L'assemblage",
    body: "Chaque mélange est composé à la main dans notre atelier, en petites quantités pour garantir sa fraîcheur.",
  },
  {
    num: "04",
    title: "Votre tasse",
    body: "Sachets conditionnés avec soin, prêts à être livrés partout au Bénin ou retirés en boutique.",
  },
];

const HERO_SLIDES = [
  {
    img: heroImg,
    accent: "#D4A24C",
    accentSoft: "rgba(212,162,76,0.5)",
    overlay: "linear-gradient(100deg, rgba(22,35,28,0.78) 0%, rgba(22,35,28,0.5) 45%, rgba(22,35,28,0.18) 75%)",
    eyebrow: "Un pur régal, chaque matin",
    h1: "La nature,",
    h1accent: "dans votre tasse.",
    lead: "Infusions naturelles 100% béninoises, fabriquées artisanalement.",
    sub: "Des mélanges de plantes locales et biologiques, assemblés à la main pour vous offrir un moment d'exception à chaque infusion, un rituel simple à intégrer dans votre quotidien, à la maison comme au bureau.",
    cta: "Découvrir la collection",
    ctaTo: "/boutique",
    badges: ["100% Naturel", "Fabriqué au Bénin", "Sans additifs"],
    steam: true,
  },
  {
    img: slideBoxesImg,
    accent: "#D1445B",
    accentSoft: "rgba(209,68,91,0.5)",
    overlay: "linear-gradient(100deg, rgba(48,17,20,0.8) 0%, rgba(48,17,20,0.52) 45%, rgba(48,17,20,0.2) 75%)",
    eyebrow: "Fait main, en petites quantités",
    h1: "Une explosion,",
    h1accent: "de saveurs naturelles.",
    lead: "Basilic, Hibiscus, Citronnelle : chaque infusion a son caractère.",
    sub: "Préparées à la main, en petites quantités, pour garantir fraîcheur et qualité à chaque boîte.",
    cta: "Voir toutes les infusions",
    ctaTo: "/boutique",
    badges: ["3 saveurs", "1500 FCFA la boîte", "Fait main"],
    steam: false,
  },
  {
    img: slideShopfrontImg,
    accent: "#3C9C87",
    accentSoft: "rgba(60,156,135,0.5)",
    overlay: "linear-gradient(100deg, rgba(10,32,29,0.8) 0%, rgba(10,32,29,0.52) 45%, rgba(10,32,29,0.2) 75%)",
    eyebrow: "Chez nos partenaires",
    h1: "Disponible,",
    h1accent: "près de chez vous.",
    lead: "Retrouvez BenDjo chez nos boutiques partenaires au Bénin.",
    sub: "Un pur rituel de bien-être, sans additifs ni arômes artificiels, uniquement des plantes sélectionnées avec soin.",
    cta: "Notre méthode",
    ctaTo: "/a-propos",
    badges: ["Toujours ouvert", "Cotonou, Bénin", "Livraison possible"],
    steam: false,
  },
];

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  // Le hero change d'ambiance à chaque visite de la page (pas toutes les X secondes)
  const [slideIndex] = useState(() => Math.floor(Math.random() * HERO_SLIDES.length));
  const slide = HERO_SLIDES[slideIndex];

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: "94vh" }}>
      <img
        src={slide.img}
        alt="BenDjo"
        fetchPriority="high"
        loading="eager"
        className="absolute w-full object-cover photo-grade"
        style={{ top: 0, left: 0, height: "120%", transform: `translateY(${Math.min(scrollY * 0.18, 90)}px)` }}
      />
      <div className="absolute inset-0" style={{ background: slide.overlay }} />

      {slide.steam && (
        <div className="absolute hidden sm:block" style={{ top: "30%", left: "52%" }}>
          {[0, 1, 2].map((i) => (
            <span key={i} className="steam-wisp" style={{ left: (i - 1) * 16, animationDelay: `${i * 0.9}s` }} />
          ))}
        </div>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-6 sm:px-10 pt-24 max-w-2xl"
      >
        <motion.p variants={item} className="font-script text-2xl sm:text-3xl mb-2" style={{ color: slide.accent }}>
          {slide.eyebrow}
        </motion.p>
        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl leading-[0.98] tracking-tight mb-7 font-display text-white"
          style={{ textShadow: "0 6px 30px rgba(0,0,0,0.35)" }}
        >
          {slide.h1}
          <br />
          <span className="font-script text-4xl sm:text-6xl" style={{ color: slide.accent }}>
            {slide.h1accent}
          </span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mb-9 max-w-md px-4 py-3 rounded-xl"
          style={{
            background: "rgba(22,35,28,0.22)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(246,240,228,0.14)",
            animation: "floatY 5s ease-in-out infinite",
          }}
        >
          <p className="text-lg sm:text-xl font-semibold mb-1.5 font-display" style={{ color: "#F6F0E4", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
            {slide.lead}
          </p>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#EFEADE", textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}>
            {slide.sub}
          </p>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-4 mb-8">
          <Link
            to={slide.ctaTo}
            className="px-7 py-3.5 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 text-white"
            style={{ background: slide.accent }}
          >
            {slide.cta}
          </Link>
          <Link
            to="/a-propos"
            className="px-7 py-3.5 rounded-full text-sm font-semibold border transition-transform hover:-translate-y-0.5 border-white text-white"
          >
Nous connaître          </Link>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          {slide.badges.map((badge) => (
            <span
              key={badge}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full"
              style={{ background: "rgba(246,240,228,0.14)", color: "#F6F0E4", border: "1px solid rgba(246,240,228,0.3)" }}
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function WhyBenDjo() {
  const reasons = [
    { icon: Leaf, title: "100% naturel", body: "Aucun additif, aucun arôme artificiel." },
    { icon: MapPin, title: "Fabriqué au Bénin", body: "Des plantes locales, une production locale." },
    { icon: Award, title: "Qualité constante", body: "Composé à la main, en petites quantités." },
    { icon: MessageCircle, title: "Commande simple", body: "Panier direct vers WhatsApp, sans compte à créer." },
  ];

  return (
    <section className="bg-forest">
      <div className="px-6 sm:px-10 py-16">
        <Reveal className="text-center max-w-xl mx-auto mb-12">
          <p className="font-script text-2xl mb-2 text-amber">Pourquoi BenDjo ?</p>
          <h2 className="text-3xl tracking-tight font-display text-ivory">
            Des raisons simples de nous choisir.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <div className="flex flex-col items-start gap-3 group">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-sage/50 group-hover:scale-110 group-hover:-rotate-6 group-hover:border-coral/60"
                >
                  <r.icon size={20} className="transition-colors duration-300 text-sage group-hover:text-coral" />
                </div>
                <p className="font-semibold font-display text-ivory">{r.title}</p>
                <p className="text-sm" style={{ color: "#B9C2AE" }}>{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Marquee
        items={[
          "100% naturel",
          "Fabriqué au Bénin",
          "Sans additifs",
          "Fait main, en petites quantités",
          "Toujours disponible",
        ]}
      />
    </section>
  );
}

function Gallery() {
  const slides = [
    { src: teamImg, alt: "L'équipe BenDjo lors d'un évènement", caption: "Sur le terrain, à la rencontre du public" },
    { src: kioskImg, alt: "Le kiosque BenDjo", caption: "Notre kiosque, pour un thé sur le pouce" },
    { src: petitDejCafeImg, alt: "Formule café & sandwich BenDjo", caption: "Le petit-déjeuner BenDjo, café & sandwich" },
    { src: petitDejLivraisonImg, alt: "L'équipe BenDjo en livraison de petit-déjeuner", caption: "Notre équipe en livraison, sur le terrain" },
    { src: petitDejCuisineImg, alt: "Préparation des sandwichs petit-déjeuner BenDjo", caption: "Préparé le matin même, dans notre cuisine" },
    { src: packsImg, alt: "Boîtes d'infusions naturelles", caption: "Nos infusions, prêtes à être dégustées" },
    { src: boutiqueImg, alt: "BenDjo en boutique partenaire", caption: "Disponible chez nos boutiques partenaires" },
    { src: posterImg, alt: "Affiche Thé naturel BenDjo", caption: "Un pur rituel de bien-être" },
    { src: mugImg, alt: "Une tasse d'infusion BenDjo", caption: "Un moment pour soi, chaque jour" },
    { src: bottleImg, alt: "Coffret Thé naturel BenDjo", caption: "Nos coffrets, pour offrir ou s'offrir" },
    { src: collectionImg, alt: "Collection d'infusions BenDjo", caption: "Toute la collection, réunie" },
  ];

  return (
    <section className="py-20 px-6 sm:px-10 bg-forest">
      <Reveal className="mb-10 text-center max-w-xl mx-auto">
        <p className="font-script text-2xl mb-2 text-amber">En images</p>
        <h2 className="text-3xl font-display text-ivory">La vie de BenDjo, sur le terrain.</h2>
      </Reveal>
      <Reveal delay={100} className="max-w-4xl mx-auto">
        <Carousel slides={slides} />
      </Reveal>
    </section>
  );
}

function Story() {
  return (
    <section className="grid lg:grid-cols-2 gap-10 items-center px-6 sm:px-10 py-20 bg-ivorySoft">
      <Reveal>
        <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ boxShadow: "0 20px 34px -16px rgba(22,35,28,0.3)" }}>
          <img src={teamImg} alt="L'équipe BenDjo lors d'un évènement" loading="lazy" decoding="async" className="w-full h-full object-cover photo-grade" />
        </div>
      </Reveal>
      <Reveal delay={120}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-clay">Notre histoire</p>
        <h2 className="text-3xl mb-5 font-display text-forest">Une marque née de nos terres.</h2>
        <p className="leading-relaxed mb-6" style={{ color: "#45493F" }}>
          BenDjo est une entreprise béninoise engagée dans la valorisation des
          plantes locales. Notre équipe va à la rencontre du public, sur le
          terrain, pour faire découvrir des infusions 100&nbsp;% naturelles,
          sachet après sachet.
        </p>
        <Link to="/a-propos" className="text-sm font-semibold underline-offset-4 hover:underline text-forest">
          En savoir plus sur BenDjo →
        </Link>
      </Reveal>
    </section>
  );
}

function ProductsTeaser() {
  const { addToCart } = useCart();
  const [selected, setSelected] = useState(null);
  return (
    <section className="px-6 sm:px-10 py-20 bg-ivory">
      <Reveal>
        <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
          <div>
            <SigOrnament className="justify-start" />
            <p className="font-script text-2xl mb-2 text-clay">Nos infusions</p>
            <h2 className="text-3xl font-display text-forest">Une plante pour chaque besoin.</h2>
          </div>
          <Link to="/boutique" className="text-sm font-semibold text-forest">
            Voir toutes les infusions →
          </Link>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0 20px 34px -18px rgba(22,35,28,0.28)" }}>
          <img src={packsImg} alt="Boîtes d'infusions naturelles BenDjo" loading="lazy" decoding="async" className="w-full object-cover photo-grade" style={{ maxHeight: 320 }} />
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((p, i) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} onImageClick={setSelected} delay={i * 100} />
        ))}
      </div>
      <ProductModal product={selected} onClose={() => setSelected(null)} onAdd={addToCart} />
    </section>
  );
}

function Method() {
  return (
    <section className="py-24 px-6 sm:px-16 bg-forest">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-amber">Du champ à la tasse</p>
          <h2 className="text-3xl sm:text-4xl font-display text-ivory">
            Une méthode pensée <span className="font-script text-amber text-3xl sm:text-4xl">pour les sens.</span>
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 90}>
              <div className="flex gap-5 items-start">
                <span className="text-3xl font-semibold shrink-0 leading-none font-display text-amber opacity-55">
                  {s.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-display text-ivory">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#B9C2AE" }}>{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBand() {
  const items = [
    { icon: Leaf, label: "100% Naturel", sub: "Plantes locales sélectionnées avec soin" },
    { icon: MapPin, label: "Fabriqué au Bénin", sub: "Production locale, économie soutenue" },
    { icon: Recycle, label: "Emballage responsable", sub: "Sachets écologiques et recyclables" },
    { icon: Award, label: "Qualité premium", sub: "Un contrôle rigoureux à chaque étape" },
  ];
  return (
    <section className="px-6 sm:px-10 py-16 bg-forestSoft">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 90}>
            <div className="flex flex-col items-start gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ border: "1px solid #D4A24C88" }}>
                <it.icon size={20} className="text-amber" />
              </div>
              <p className="font-semibold font-display text-ivory">{it.label}</p>
              <p className="text-sm" style={{ color: "#B9C2AE" }}>{it.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Atelier() {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = 1 - rect.top / window.innerHeight;
      setOffset(Math.max(-6, Math.min(6, (progress - 0.5) * 12)));
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden py-28 bg-ivorySoft">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${kioskImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
          transform: `translateX(${offset}%)`,
          transition: "transform 0.2s linear",
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
        <Reveal>
          <div className="text-5xl mb-4 leading-none font-display text-clay opacity-50">"</div>
          <blockquote className="text-2xl sm:text-3xl leading-snug mb-6 font-display text-forest">
            Une infusion n'est pas juste une boisson. C'est une invitation à{" "}
            <span className="font-script text-3xl sm:text-4xl">ralentir.</span>
          </blockquote>
          <p className="text-sm font-medium tracking-wide" style={{ color: "#6B6F60" }}>L'équipe BenDjo</p>
        </Reveal>
      </div>
    </section>
  );
}

function WhatsAppBand() {
  const { cartCount, checkout } = useCart();
  return (
    <section className="px-6 sm:px-10 py-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-clay text-ivory">
      <div>
        <h3 className="text-2xl mb-2 font-display">Envie de commander&nbsp;?</h3>
        <p className="opacity-90 text-sm max-w-md">
          Ajoutez vos infusions au panier puis finalisez directement sur
          WhatsApp, simple, rapide, sans compte à créer.
        </p>
      </div>
      <button
        onClick={() => checkout()}
        disabled={cartCount === 0}
        className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 bg-ivory text-forest"
      >
        <MessageCircle size={17} />
        Commander sur WhatsApp {cartCount > 0 ? `(${cartCount})` : ""}
      </button>
    </section>
  );
}

export default function Home() {
  return (
    <Layout transparentHeader>
      <Hero />
      <WhyBenDjo />
      <ProductsTeaser />
      <Story />
      <Gallery />
      <Method />
      <TrustBand />
      <Atelier />
      <WhatsAppBand />
    </Layout>
  );
}
