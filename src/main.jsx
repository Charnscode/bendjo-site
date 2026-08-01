import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Relais des polices préchargées vers de vraies feuilles de style, une fois
// prêtes (technique recommandée pour ne pas bloquer l'affichage initial,
// écrite ici plutôt qu'en attribut "onload" en ligne pour rester compatible
// avec la Content-Security-Policy stricte du site).
document.querySelectorAll('link[data-swap-to-stylesheet]').forEach((link) => {
  link.addEventListener("load", () => {
    link.rel = "stylesheet";
  });
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
