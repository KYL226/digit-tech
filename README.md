# Digit Tech Group - Site Vitrine

Site vitrine développé avec Next.js pour présenter les services de Digit Tech Group : création de site web, applications web et mobile, graphisme, montage vidéo, customisation sur mesure, formation numérique et intelligence artificielle.

## Stack technique

- `Next.js` + `React` + `TypeScript`
- `Tailwind CSS`
- `shadcn/ui` (composants UI)
- `lucide-react` (icônes)

## Identité de marque

- **Nom de l'agence** : Digit Tech Group
- **Slogan** : Avec Digit Tech Group, chaque création part d'une vision.

## Fonctionnalités implémentées

- Navigation interne entre pages (`Accueil`, `Services`, `FAQ`, `Contact`)
- Header responsive avec menu mobile
- Hero principal et sections marketing
- Grille de services avec visuels, catégories et bénéfices
- Filtres par onglets sur la page Services (`Tous`, `Développement`, `Création`, `Innovation`)
- Section `Portfolio projets` avec cas concrets (objectif, livrables, impact)
- FAQ filtrable par catégories avec accordéon
- Section contact complète (coordonnées, horaires, emails, téléphones)
- Formulaire de contact côté front (soumission locale)
- Intégration WhatsApp Business en CTA rapide
- Footer détaillé avec liens sociaux et rappel des domaines clés

## Architecture actuelle (refactorisée)

La page principale a été découpée pour faciliter la maintenance :

- `src/app/page.tsx` : orchestrateur principal
- `src/components/sections/types.ts` : types partagés
- `src/components/sections/data.ts` : données métiers (services, FAQ, stats)
- `src/components/sections/header.tsx` : en-tête + navigation
- `src/components/sections/footer.tsx` : pied de page
- `src/components/sections/home-page.tsx` : vue Accueil
- `src/components/sections/services-page.tsx` : vue Services
- `src/components/sections/faq-page.tsx` : vue FAQ
- `src/components/sections/contact-page.tsx` : vue Contact

## Démarrage local

```bash
npm install
npm run dev
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000).

## Scripts utiles

- `npm run dev` : lancer le mode développement
- `npm run build` : build de production
- `npm run start` : lancer le build en local
- `npm run lint` : vérifier la qualité du code

## Suggestions d'amélioration (prochaines évolutions)

- Brancher le formulaire de contact à un backend (API route Next.js + envoi email)
- Ajouter une validation forte (`zod` + messages d'erreurs UX)
- Remplacer l'état local de navigation par un vrai routing Next.js (`/services`, `/faq`, `/contact`)
- Ajouter le SEO avancé (meta dynamiques, Open Graph, JSON-LD, sitemap)
- Mettre en place i18n (`fr`, `en`) avec `next-intl`
- Ajouter analytics et suivi conversion (CTA WhatsApp / formulaire)
- Remplacer les liens sociaux `#` par les URLs définitives
- Ajouter tests UI / E2E sur les parcours critiques

## Domaines d'expertise

- Création de site web
- Applications web et mobile modernes et performantes
- Graphisme
- Montage vidéo
- Customisation sur mesure pour valoriser vos appareils et accessoires
- Formation sur le numérique
- Intelligence artificielle

## Idées de modifications UX rapides

- Ajouter un bouton flottant WhatsApp sur mobile
- Ajouter des témoignages clients et logos partenaires
- Ajouter un bloc "Processus en 4 étapes" pour les projets digitaux
- Ajouter un call-to-action sticky sur la page Services
- Ajouter des pages légales réelles (mentions légales, politique de confidentialité)

