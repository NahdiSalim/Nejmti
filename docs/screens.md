# Maquettes des écrans principaux — Phase 1

Les maquettes interactives sont dans `apps/web` sous `/preview/*` (mode design, données fictives).

## Charte visuelle (rappel)

- Fond dominant blanc / bleu brume `#EAF2FB`
- Actions bleu lagon `#1F5AA6` → survol bleu nuit `#0E2A47`
- Accent marron noisette `#8B5E3C` (5–10 %)
- Titres : Plus Jakarta Sans ; corps : Inter
- Coins 12–20 px, ombres douces, motif tampons (cercles)

## Inventaire

### Marketing
| Écran | Route maquette | Contenu |
|-------|----------------|---------|
| Accueil | `/preview/marketing` | Hero marque Nejmti, 1 phrase bénéfice, CTA « Voir la démo » / « Demander un accès » |
| Tarifs | (section sur marketing) | 3 plans mensuels |
| FAQ / Contact | liens footer | stubs |

### Client (QR)
| Écran | Route | Contenu |
|-------|-------|---------|
| Enroll | `/preview/client` | Aperçu carte, formulaire minimal, consentements, boutons Apple / Google / Web |

### Commerçant
| Écran | Route | Contenu |
|-------|-------|---------|
| Dashboard | `/preview/dashboard` | KPI + graphiques simples |
| Personnalisation carte | `/preview/card-editor` | Logo, couleurs, règle tampons, aperçu live |
| Scanner | `/preview/scan` | Caméra mock, PIN, feedback tampon |

### Admin
| Écran | Route | Contenu |
|-------|-------|---------|
| Vue globale | `/preview/admin` | MRR, churn, commerces, impayés |

## Parcours de validation visuelle

1. `pnpm --filter @nejmti/web dev`
2. Ouvrir http://localhost:3000/preview
3. Parcourir chaque maquette mobile (DevTools 390×844) et desktop
4. Vérifier contraste AA, focus clavier, `prefers-reduced-motion`
