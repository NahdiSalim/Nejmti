# Décisions d’architecture (ADR) — Phase 1

## ADR-001 — Monorepo pnpm

**Décision** : monorepo `pnpm` workspaces (`apps/*`, `packages/*`).

**Pourquoi** : partage des schémas Zod et tokens de design ; un seul CI ; versions alignées.

## ADR-002 — Prisma comme source de vérité du schéma

**Décision** : schéma Prisma dans `packages/database`, migrations versionnées.

**Pourquoi** : typage fort partagé API/jobs ; historique de migrations clair.

## ADR-003 — WalletProvider + mode mock

**Décision** : interface unique + implémentation Mock obligatoire pour le dev local.

**Pourquoi** : livrer et tester sans compte Apple/Google Developer dès le jour 1.

## ADR-004 — Abonnement mensuel, pas de paiement unique

**Décision** : `Plan` + `Subscription` avec cycle trial → active → past_due → suspended → cancelled.

**Pourquoi** : modèle SaaS demandé ; période de grâce configurable.

## ADR-005 — PaymentGateway abstrait

**Décision** : interface `PaymentGateway` avec au minimum :
1. `ManualPaymentGateway` (virement/espèces, validation admin)
2. Stub `LocalGateway` prêt pour Konnect / Paymee / ClicToPay

**Pays / passerelle** : **à confirmer** (défaut proposé : Tunisie + Konnect).

## ADR-006 — Crédits de messages séparés de l’abonnement

**Décision** : `CreditWallet` + `CreditTransaction` ; les plans allouent un quota mensuel ; top-up possible.

**Pourquoi** : flexibilité promotions / relances sans changer le plan.

## ADR-007 — StampEvent immuable

**Décision** : aucun UPDATE/DELETE métier sur `StampEvent`. Annulation = nouvel événement `adjustment` lié + motif.

**Pourquoi** : anti-fraude et auditabilité.

## ADR-008 — i18n fr / ar / en dès le départ

**Décision** : `next-intl`, messages JSON, layout RTL pour `ar`. Contenu Phase 1 en français.

## ADR-009 — Devise et prix

**Statut** : **en attente validation**.

Valeurs par défaut proposées (Tunisie) :
| Plan | Prix / mois | Messages inclus |
|------|-------------|-----------------|
| Starter | 49 TND | 100 |
| Growth | 99 TND | 500 |
| Multi-branches | 179 TND | 1500 |

Essai : 14 jours. Grâce impayés : 7 jours.

## ADR-010 — Domaine public

**Statut** : **en attente**. Défaut technique : `nejmti.local` en local, `APP_URL` / `PUBLIC_DOMAIN` en prod. QR = `https://{PUBLIC_DOMAIN}/s/{slug}`.
