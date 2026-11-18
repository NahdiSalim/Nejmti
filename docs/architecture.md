# Architecture Nejmti — Phase 1

## Vision

Nejmti permet aux commerces locaux d’offrir une carte de fidélité numérique dans Apple Wallet ou Google Wallet, sans application client à installer. Le commerçant paie un **abonnement mensuel**.

Marché cible : Maghreb francophone/arabophone. UI français par défaut, i18n prête pour `ar` (RTL) et `en`.

## Monorepo

```
nejmti/
├── apps/
│   ├── web/          # Next.js App Router — marketing, commerçant, admin, page client, scanner
│   └── api/          # NestJS — API REST + PassKit web service + jobs
├── packages/
│   ├── shared/       # Types, schémas Zod, constantes, design tokens
│   └── database/     # Prisma schema, migrations, seeds
├── infra/            # Docker, Caddy, scripts backup
└── docs/             # Architecture, décisions, maquettes
```

## Espaces applicatifs

| Espace | Route indicative | Auth |
|--------|------------------|------|
| Marketing public | `/`, `/tarifs`, `/demo`, … | Non |
| Page client (QR) | `/s/{slug}` | Consentements uniquement |
| Carte web PWA | `/s/{slug}/card/{passId}` | Token pass |
| Scanner personnel | `/scan` | PIN staff + session courte |
| Espace commerçant | `/app/*` | JWT merchant/staff |
| Super-admin | `/admin/*` | JWT admin + 2FA recommandé |

## Diagramme de contexte

```
[Client mobile] --scan QR--> [apps/web /s/{slug}]
       |                              |
       | Add to Wallet                | REST
       v                              v
[Apple/Google Wallet] <---PassKit-- [apps/api]
       ^                              |
       | push / update                | Prisma
[Staff scan PWA] ---------------------+
                                      |
                                   [PostgreSQL]
                                      |
[Redis/BullMQ] <--- jobs: APNs, Google, emails, facturation, relances
[S3] <--- logos, PDF stands, factures PDF
[SMTP] <--- emails transactionnels
[PaymentGateway] <--- webhooks paiement
```

## Couches backend (NestJS)

```
apps/api/src/
├── modules/
│   ├── auth/           # JWT + refresh, Argon2, 2FA admin
│   ├── merchants/      # Comptes commerçants
│   ├── shops/          # Commerces, branding, localisations
│   ├── staff/          # PIN, rôles
│   ├── customers/      # Clients, consentements, export
│   ├── passes/         # Cycle de vie des passes
│   ├── stamps/         # Tampons, anti-fraude, journal
│   ├── rewards/        # Définitions + historique
│   ├── campaigns/      # Promos + relances
│   ├── credits/        # Portefeuille crédits messages
│   ├── billing/        # Plans, abonnements, factures
│   ├── payments/       # PaymentGateway + webhooks
│   ├── stands/         # QR SVG/PNG + PDF chevalet
│   ├── wallet/         # WalletProvider (Apple|Google|Web|Mock)
│   ├── passkit/        # Endpoints Apple web service
│   ├── admin/          # Super-admin
│   ├── audit/          # AuditLog
│   └── leads/          # Leads marketing
├── common/             # Guards, pipes, rate-limit, filters
└── jobs/               # Processors BullMQ
```

## Abstraction Wallet

```typescript
interface WalletProvider {
  createPass(input: CreatePassInput): Promise<PassArtifact>;
  updatePass(passId: string, patch: PassUpdate): Promise<void>;
  revokePass(passId: string): Promise<void>;
  getInstallUrl(passId: string): Promise<string>; // .pkpass | JWT save | web URL
}
```

Implémentations : `AppleWalletProvider`, `GoogleWalletProvider`, `WebWalletProvider`, `MockWalletProvider`.

Variable `WALLET_MODE=mock|live`. En `mock`, toute la plateforme fonctionne sans certificats.

## Flux critiques

### 1. Onboarding commerce

```
Lead / Admin crée Merchant + Shop
  → génère slug, QR (/s/{slug}), PDF stand
  → crée Subscription (trial 14j par défaut)
  → crée Loyalty Class Google (ou mock)
```

### 2. Ajout de carte client

```
GET /s/{slug} → branding + détection OS
POST /api/v1/shops/:slug/enroll (consentements)
  → Customer + Pass (qrToken 128+ bits)
  → WalletProvider.createPass
  → redirect / download Apple | JWT Google | carte web
```

### 3. Tampon

```
Staff scanne QR client → saisit PIN
POST /api/v1/stamps { qrToken, pin, type }
  → règles anti-fraude
  → StampEvent immuable
  → incrément Pass.stampCount / reward claim
  → job: update Apple (APNs) + Google Object
```

### 4. Facturation mensuelle

```
Cron mensuel → Invoice + email lien paiement
  → payé: Subscription.active
  → impayé: grace → past_due → suspended
  → PaymentGateway (manuel | Konnect/…)
  → webhook idempotent
```

## Frontend (Next.js)

- `next-intl` : locales `fr` (défaut), `ar`, `en` ; middleware RTL pour `ar`.
- Tailwind + tokens CSS Nejmti (voir `packages/shared/src/design-tokens.ts`).
- Composants accessibles (Radix) pour dialogs, selects, tabs.
- Maquettes Phase 1 sous `/preview/*` (sans backend).

## Sécurité (socle)

- Secrets uniquement via `.env` / montages Docker.
- Rate-limit strict sur `/s/*`, enroll, scan, auth.
- `qrToken` cryptographiquement aléatoire (≥ 128 bits), jamais d’ID séquentiel public.
- Audit sur impersonation, paiements, suspensions, suppressions client.

## Déploiement cible

- `docker-compose` : api, web, postgres, redis, caddy, worker.
- HTTPS via Caddy.
- Backups PostgreSQL planifiés (`infra/scripts/backup.sh`).

## Hors Phase 1

Implémentation API, wallets réels, facturation live, E2E — phases 2 à 8.
