# BenDjo — Site vitrine & commande WhatsApp

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

Le projet est prêt pour **Netlify** ou **Vercel** :

- Netlify : glissez-déposez le dossier `dist/` après `npm run build`, ou
  connectez le dépôt Git (build command `npm run build`, publish directory
  `dist`). Le fichier `public/_redirects` gère déjà le routing des pages.
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
2. **Logo** — `src/assets/logo.jpg` est le monogramme utilisé comme photo
   de profil officielle sur Facebook. Une version PNG transparente en plus
   haute résolution donnerait un rendu encore plus net si vous l'avez.
3. **Domaine réel** — remplacez `https://www.bendjo.bj` dans
   `index.html`, `public/robots.txt` et `public/sitemap.xml` par le vrai
   nom de domaine une fois le site déployé.

## Sécurité

- **HTTPS** : automatique et gratuit sur Vercel et Netlify (certificat
  Let's Encrypt généré et renouvelé tout seul), y compris avec un nom de
  domaine personnalisé. Rien à configurer dans le code.
- **Aucune donnée n'est envoyée à un serveur.** Le formulaire de contact et
  le panier n'utilisent aucune API ni base de données : tout reste dans le
  navigateur, et la "commande" ouvre simplement WhatsApp avec un message
  pré-rempli. Il n'y a donc aucune donnée personnelle stockée ni de risque
  de fuite côté serveur.
- Pas de dépendance obscure : uniquement des paquets npm largement utilisés
  (React, React Router, Framer Motion, Lucide, Tailwind).
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
