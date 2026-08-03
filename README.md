# BenDjo — Site vitrine & commande

Site React (Vite + Tailwind + React Router + Framer Motion) pour BenDjo :
infusions naturelles, petit-déjeuner en entreprise et traiteur.

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrez l'URL affichée (en général `http://localhost:5173`).

## Build de production

```bash
npm run build
npm run preview   # pour tester le build localement
```

Le résultat est généré dans `dist/`.

## Déploiement

Le projet est prêt pour **Vercel** :
- Vercel : connectez le dépôt (`vercel.json` inclus gère le routing et
  quelques en-têtes de sécurité de base).

## Structure du projet

```
src/
  assets/       images réelles (logo, photos produits, équipe...)
  components/   Header, Footer, Layout, ProductCard, Reveal, Seo...
  context/      CartContext (panier partagé entre toutes les pages)
  data/         products.js (catalogue + numéro WhatsApp)
  lib/          whatsapp.js (génération des liens de commande)
  pages/        Home, About, Services, Infusions, Contact
```

## À faire avant mise en ligne

1. **Gamme de produits** — dans `src/data/products.js`, vérifiez les 3
   infusions (Basilic, Hibiscus, Citronnelle/Laurier/Girofle) et leurs prix
   (1500 FCFA, confirmé via la page Facebook officielle). Si le coffret
   "Thé naturel" 3-en-1 est un produit distinct des infusions "Citronnelle"
   à l'unité, dites-le-moi pour que je l'ajoute séparément.
2. **Logo** — `src/assets/logo.jpg` est le monogramme utilisé. Une version PNG transparente en plus
   haute résolution donnerait un rendu encore plus net si vous l'avez.

## Sécurité

- Aucun `dangerouslySetInnerHTML`, `eval`, ni exécution de contenu externe.
- **En-têtes de sécurité complets**, configurés à l'identique pour Vercel
  (`vercel.json`) et Netlify (`public/_headers`) :
  - `Strict-Transport-Security` (HSTS) : force le HTTPS même si quelqu'un
    tape ou partage un lien en `http://`.
  - `Content-Security-Policy` : n'autorise que les ressources nécessaires
    (le site lui-même, Google Fonts, Fontshare) ; bloque toute exécution de
    script externe non prévue.
  - `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`,
    `Permissions-Policy` (caméra/micro/géolocalisation désactivés, inutiles
    ici).
- Si vous ajoutez un vrai formulaire avec backend plus tard : validez et
  filtrez toujours les entrées côté serveur, jamais seulement côté client.
- `npm audit` signale une vulnérabilité modérée dans `esbuild` (via Vite) qui
  n'affecte que le serveur de développement local (`npm run dev`), pas le
  site déployé en production. Une future mise à jour majeure de Vite la
  corrigera ; pas d'action urgente nécessaire.

## Accessibilité & performance

- Contrastes texte/fond vérifiés, focus visibles au clavier sur tous les
  boutons et liens.
- Animations désactivées automatiquement si l'utilisateur a activé "réduire
  les animations" dans son système (`prefers-reduced-motion`).
- Images compressées (JPEG qualité ~76-90%) pour un chargement rapide.

## Design

- Polices : **Fraunces** (titres), **Work Sans** (texte courant), **Telma**
  (accents, via Fontshare) — chargées dans `index.html`.
- Palette et polices centralisées dans `tailwind.config.js`.
