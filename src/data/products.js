import basilicImg from "../assets/product-basilic.webp";
import hibiscusImg from "../assets/product-hibiscus.webp";
import citronnelleImg from "../assets/product-citronnelle.jpg";
import sandwichImg from "../assets/menu/sandwich-hachis-banane.webp";
import cafeImg from "../assets/menu/cafe-petit-dej.webp";
import glacesImg from "../assets/menu/glaces-maison.webp";

// Catégories affichées (dans cet ordre) sur la page Boutique.
export const CATEGORIES = [
  { id: "infusions", label: "Infusions & thés naturels" },
  { id: "sandwichs", label: "Sandwichs & snacks" },
  { id: "petit-dej", label: "Petit-déjeuner & café" },
];

export const PRODUCTS = [
  {
    id: "basilic",
    category: "infusions",
    name: "Infusion Basilic",
    tag: "Vitamines A, K, C · bienfaits digestifs",
    description:
      "Une infusion douce à base de basilic, appréciée pour son soutien digestif au quotidien. Idéale après le repas ou en fin de journée pour se détendre.",
    benefits: [
      "Riche en vitamines A, K et C",
      "Favorise une bonne digestion",
      "Apaise après le repas",
      "100% naturelle, sans additif",
    ],
    price: 1500,
    image: basilicImg,
    liquid: "#C97B93",
    liquidDark: "#8E4A61",
  },
  {
    id: "hibiscus",
    category: "infusions",
    name: "Infusion Hibiscus",
    tag: "Vitamine C · Calcium · Magnésium · Potassium",
    description:
      "Une infusion rouge et acidulée à base de fleurs d'hibiscus, riche en vitamine C. Parfaite chaude ou glacée, pour un moment vivifiant.",
    benefits: [
      "Riche en vitamine C, calcium, magnésium et potassium",
      "Renforce les défenses naturelles",
      "Goût acidulé et rafraîchissant",
      "100% naturelle, sans additif",
    ],
    price: 1500,
    image: hibiscusImg,
    liquid: "#A8462F",
    liquidDark: "#7A3320",
  },
  {
    id: "citronnelle",
    category: "infusions",
    name: "Infusion Citronnelle, Laurier & Girofle",
    tag: "Vitamine E · Magnésium · Antioxydants",
    description:
      "Notre mélange signature : citronnelle, feuille de laurier et clou de girofle, pour un moment de détente. Un classique du bien-être béninois.",
    benefits: [
      "Riche en vitamine E, magnésium et antioxydants",
      "Favorise la détente et un sommeil apaisé",
      "Aide à la digestion",
      "100% naturelle, sans additif",
    ],
    price: 1500,
    image: citronnelleImg,
    liquid: "#D4A24C",
    liquidDark: "#A87A2E",
  },
  {
    id: "sandwich-hachis",
    category: "sandwichs",
    name: "Sandwich hachis ",
    tag: "Fait maison · légumes frais",
    description:
      "Notre sandwich signature : un hachis de viande relevé aux légumes (chou, poivron, carotte), servi avec des rondelles de banane plantain et une touche de mayonnaise. Préparé le jour même.",
    benefits: [
      "Garniture maison, légumes frais coupés du jour",
      "Délicieux",
      "Emballage kraft, pratique à emporter",
    ],
    price: null,
    priceNote: "Prix sur demande",
    image: sandwichImg,
    liquid: "#C9A24C",
    liquidDark: "#9C7A2E",
  },
  {
    id: "petit-dej-cafe",
    category: "petit-dej",
    name: "Formule café & sandwich",
    tag: "Idéal bureau · à emporter ou livré",
    description:
      "Un café chaud accompagné d'un sandwich BenDjo, pensé pour démarrer la journée au bureau. Disponible à l'unité ou en formule petit-déjeuner d'entreprise pour toute une équipe.",
    benefits: [
      "Café servi chaud, prêt à emporter",
      "Se combine avec nos infusions ou sandwichs",
      "Formules entreprise sur devis",
    ],
    price: null,
    priceNote: "Prix sur demande",
    image: cafeImg,
    liquid: "#8A5A32",
    liquidDark: "#5E3B1F",
  },
   {
    id: "Petit-déjeuner",
    category: "sandwichs + une infusion BenDjo pour une belle journée",
    name: "Petit-déjeuner ",
    tag: "Fait maison · légumes frais",
    description:
      "Notre sandwich signature : un hachis de viande relevé aux légumes (chou, poivron, carotte), servi avec des rondelles de banane plantain et une touche de mayonnaise. Préparé le jour même.",
    benefits: [
      "Garniture maison, légumes frais coupés du jour",
      "Délicieux",
      "Emballage kraft, pratique à emporter",
    ],
    price: null,
    priceNote: "Prix sur demande",
    image: glacesImg,
    liquid: "#B85C7A",
    liquidDark: "#7E3D53",
  },
];

export const WHATSAPP_NUMBER = "22962014161"; 
