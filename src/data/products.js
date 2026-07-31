import basilicImg from "../assets/product-basilic.webp";
import hibiscusImg from "../assets/product-hibiscus.webp";
import citronnelleImg from "../assets/product-citronnelle.webp";

export const PRODUCTS = [
  {
    id: "basilic",
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
];

export const WHATSAPP_NUMBER = "229162014161"; // vrai numéro BenDjo (Facebook)
