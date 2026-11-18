import Link from 'next/link';
import { QrCode, Bell, Star, Wallet } from 'lucide-react';
import { PreviewShell } from '@/components/preview/PreviewShell';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { DEFAULT_PLANS } from '@nejmti/shared';

const benefits = [
  {
    icon: Wallet,
    title: 'Dans le Wallet, pas une app',
    text: 'Vos clients ajoutent la carte en quelques secondes. Pas de téléchargement.',
  },
  {
    icon: QrCode,
    title: 'Un stand, un scan',
    text: 'QR (et NFC optionnel) sur le comptoir. Le personnel tamponne en un geste.',
  },
  {
    icon: Bell,
    title: 'Relances et promotions',
    text: 'Rappelez les clients inactifs et annoncez une offre, sans spam inutile.',
  },
  {
    icon: Star,
    title: 'Plus d’avis Google',
    text: 'Après une récompense, invitez naturellement à laisser un avis.',
  },
];

export default function MarketingPreview() {
  return (
    <PreviewShell title="Marketing" subtitle="Ton chaleureux, bénéfices commerçant">
      {/* Hero — une composition, marque dominante */}
      <section className="stamp-motif relative overflow-hidden rounded-[var(--nejmti-radius-lg)] bg-white shadow-soft">
        <div className="absolute inset-0 bg-gradient-to-br from-mist via-white to-sand/60" />
        <div className="relative grid gap-10 px-6 py-14 lg:grid-cols-2 lg:px-12 lg:py-20">
          <div className="animate-fade-up flex flex-col justify-center">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-hazelnut">
              Nejmti
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold leading-tight text-night sm:text-5xl">
              La fidélité de vos clients, dans leur Wallet
            </h2>
            <p className="mt-4 max-w-md text-base text-slate">
              Proposez des tampons numériques sans application à installer. Abonnement mensuel,
              sans engagement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button>Demander un accès</Button>
              <Link href="/preview/client">
                <Button variant="secondary">Voir la démo carte</Button>
              </Link>
            </div>
          </div>
          <div className="animate-fade-up relative flex items-end justify-center" style={{ animationDelay: '80ms' }}>
            <div className="absolute inset-8 rounded-full bg-lagoon/10 blur-2xl" aria-hidden />
            <div className="relative w-full max-w-sm rounded-[24px] border border-white/60 bg-night p-6 text-white shadow-lift">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hazelnut text-lg font-bold">
                  C
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Carte fidélité</p>
                  <p className="font-display text-lg font-bold">Café des Oliviers</p>
                </div>
              </div>
              <div className="mt-8 flex gap-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-7 w-7 rounded-full border-2"
                    style={{
                      background: i < 5 ? '#8B5E3C' : 'transparent',
                      borderColor: i < 5 ? '#8B5E3C' : 'rgba(255,255,255,0.4)',
                    }}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm text-white/80">5 / 8 — café offert bientôt</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="font-display text-2xl font-bold text-night">Pourquoi Nejmti</h3>
        <p className="mt-2 max-w-xl text-slate">
          Conçu pour les cafés, salons, pâtisseries et boutiques qui veulent du retour client, pas
          une autre application.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="rounded-[var(--nejmti-radius-md)] bg-white p-5 shadow-soft"
            >
              <b.icon className="h-5 w-5 text-hazelnut" aria-hidden />
              <h4 className="font-display mt-3 font-bold text-night">{b.title}</h4>
              <p className="mt-1 text-sm text-slate">{b.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12" id="tarifs">
        <h3 className="font-display text-2xl font-bold text-night">Tarifs mensuels</h3>
        <p className="mt-2 text-slate">
          Prix indicatifs Phase 1 (TND) — à valider. Essai 14 jours.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {DEFAULT_PLANS.map((plan, i) => (
            <article
              key={plan.code}
              className={`rounded-[var(--nejmti-radius-md)] p-6 shadow-soft ${
                i === 1 ? 'bg-night text-white' : 'bg-white'
              }`}
            >
              {i === 1 ? <Badge tone="sand">Populaire</Badge> : null}
              <h4 className="font-display mt-2 text-xl font-bold">{plan.name}</h4>
              <p className={`mt-3 font-display text-3xl font-extrabold tabular-nums ${i === 1 ? '' : 'text-night'}`}>
                {plan.monthlyPrice}
                <span className="text-base font-medium opacity-70"> {plan.currency}/mois</span>
              </p>
              <ul className={`mt-4 space-y-2 text-sm ${i === 1 ? 'text-white/80' : 'text-slate'}`}>
                <li>{plan.messageQuota} messages / mois</li>
                <li>Jusqu’à {plan.maxLocations} localisation(s)</li>
                <li>{plan.maxStaff} comptes personnel</li>
              </ul>
              <Button
                className="mt-6 w-full"
                variant={i === 1 ? 'secondary' : 'primary'}
              >
                Choisir {plan.name}
              </Button>
            </article>
          ))}
        </div>
      </section>
    </PreviewShell>
  );
}
