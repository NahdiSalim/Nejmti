# Nejmti

Plateforme SaaS de cartes de fidélité numériques pour commerces locaux (Apple Wallet / Google Wallet), sans application client. Abonnement mensuel.

Marché : Maghreb francophone / arabophone. Interface **français** par défaut, i18n prête pour arabe (RTL) et anglais.

> **Phase actuelle : 1** — Architecture, schéma Prisma, design system, maquettes UI.  
> Pas encore d’API métier ni de wallets réels (mode mock prévu dès la Phase 3).

## Structure monorepo

```
apps/web          Next.js — marketing, commerçant, admin, page client, maquettes
apps/api          NestJS — stub Phase 1 (implémentation Phase 2+)
packages/shared   Tokens design, constantes, validations Zod
packages/database Prisma schema + migrations
infra/            Docker Compose, scripts
docs/             Architecture, ADR, inventaire des écrans
```

## Prérequis

- Node.js ≥ 20
- pnpm 9+
- Docker (PostgreSQL / Redis) pour les phases suivantes

## Installation rapide (Phase 1)

```bash
pnpm install
cp .env.example .env
pnpm --filter @nejmti/web dev
```

Ouvrir :

- http://localhost:3000 — site marketing + hero
- http://localhost:3000/login — connexion (démo)
- http://localhost:3000/preview — maquettes internes

## Déploiement Vercel

Le frontend Next.js (`apps/web`) est prêt pour Vercel.

1. Importer le repo [NahdiSalim/Nejmti](https://github.com/NahdiSalim/Nejmti) sur [vercel.com](https://vercel.com)
2. Framework : **Next.js** (détecté via `vercel.json`)
3. Install : `pnpm install` · Build : `pnpm --filter @nejmti/web build`
4. **Root Directory** : laisser la racine du monorepo (`.`)
5. Déployer

Les pages sont pré-rendues en **statique** (`/`, `/login`, `/preview/*`) : un refresh ne provoque pas de 404.

Build local de vérif :

```bash
pnpm build
pnpm start:web
```

## Design system

Tokens dans `packages/shared/src/design-tokens.ts` et CSS `apps/web/src/app/globals.css`.

| Token | Hex | Usage |
|-------|-----|--------|
| night | `#0E2A47` | Titres, texte |
| lagoon | `#1F5AA6` | Boutons, actions |
| sky | `#5B9BD5` | Survols |
| mist | `#EAF2FB` | Fonds de sections |
| hazelnut | `#8B5E3C` | Accents (≤ 10 %) |
| sand | `#F3E9DD` | Fonds chauds |

Typo : **Plus Jakarta Sans** (titres), **Inter** (corps).

## Schéma de données

Fichier : `packages/database/prisma/schema.prisma`.

Génération client (nécessite `DATABASE_URL`) :

```bash
# démarrer Postgres
docker compose -f infra/docker-compose.yml up -d postgres
pnpm db:generate
# migrations : Phase 2
```

## Documentation

- [Architecture](docs/architecture.md)
- [Décisions (ADR)](docs/decisions.md)
- [Écrans / maquettes](docs/screens.md)

## Phases suivantes

2. Backend auth, commerces, plans, QR/PDF  
3. Page client + WalletProvider mock + PWA  
4. Scanner, tampons, anti-fraude, dashboard  
5. Apple & Google Wallet réels  
6. Promos, relances, crédits, avis Google  
7. Facturation, passerelle, super-admin  
8. Marketing final, E2E, sécurité, déploiement  

## Licence

Propriétaire — Nejmti. Tous droits réservés.
