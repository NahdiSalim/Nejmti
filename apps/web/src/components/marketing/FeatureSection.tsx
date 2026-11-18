import Link from 'next/link';
import { Wallet, QrCode, Bell, Star, Check, Sparkles } from 'lucide-react';
import { FeatureDeviceMock } from './PhoneMockups';
import { DEFAULT_PLANS } from '@nejmti/shared';

const features = [
  {
    icon: Wallet,
    title: 'Dans le Wallet',
    text: 'Apple ou Google — vos clients ajoutent la carte en quelques secondes.',
    accent: 'from-teal/20 to-mist',
  },
  {
    icon: QrCode,
    title: 'Scan & tampons',
    text: 'Un QR sur le comptoir, un PIN employé, un retour visuel immédiat.',
    accent: 'from-sky/25 to-mist',
  },
  {
    icon: Bell,
    title: 'Relances douces',
    text: 'Rappelez les clients inactifs sans les harceler — crédits inclus.',
    accent: 'from-teal/15 to-sand',
  },
  {
    icon: Star,
    title: 'Avis Google',
    text: 'Après une récompense, invitez naturellement à laisser un avis.',
    accent: 'from-sky/20 to-sand',
  },
];

const steps = [
  { n: '01', title: 'Scannez le stand', desc: 'Le client ouvre la page du commerce.' },
  { n: '02', title: 'Ajoutez au Wallet', desc: 'Apple, Google, ou carte web de secours.' },
  { n: '03', title: 'Tamponnez', desc: 'Le personnel scanne — la carte se met à jour.' },
];

export function FeatureSection() {
  return (
    <>
      <section id="fonctionnement" className="section-blob relative overflow-hidden bg-white px-4 pb-24 pt-6 sm:px-6">
        <div
          className="pointer-events-none absolute right-[-8%] top-24 h-64 w-64 rounded-full bg-teal/10 blur-3xl animate-pulse-soft"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-14 text-center lg:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-teal-deep">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Comment ça marche
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight text-night sm:text-4xl lg:text-5xl">
              « Scannez — et la fidélité suit. »
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
              Nejmti remplace les cartes papier par une expérience moderne : progression dans le
              Wallet, tableau de bord clair pour vous.
            </p>
          </div>

          <div className="mb-16 grid gap-4 sm:grid-cols-3">
            {steps.map((s, i) => (
              <article
                key={s.n}
                className="lift-card relative overflow-hidden rounded-[24px] border border-mist bg-white p-6 shadow-soft"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="font-display text-4xl font-extrabold text-teal/25">{s.n}</span>
                <h3 className="font-display mt-2 text-lg font-bold text-night">{s.title}</h3>
                <p className="mt-1 text-sm text-slate">{s.desc}</p>
                <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-mist" aria-hidden />
              </article>
            ))}
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-8 rounded-full bg-teal/15 blur-2xl animate-drift"
                aria-hidden
              />
              <FeatureDeviceMock />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <article
                  key={f.title}
                  className={`lift-card group rounded-[24px] border border-transparent bg-gradient-to-br ${f.accent} p-5 shadow-soft hover:border-teal/20`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-teal-deep shadow-soft transition group-hover:scale-110 group-hover:bg-teal group-hover:text-white">
                    <f.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-display mt-4 text-base font-bold text-night">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate">{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tarifs" className="relative overflow-hidden bg-sand px-4 py-24 sm:px-6">
        <div
          className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-teal/10 blur-3xl animate-drift-delayed"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-teal-deep shadow-soft">
              Abonnement mensuel
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold text-night sm:text-4xl lg:text-5xl">
              Des tarifs simples, sans surprise
            </h2>
            <p className="mt-3 text-base text-slate sm:text-lg">
              Essai 14 jours. Sans engagement. Prix indicatifs pour démarrer.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {DEFAULT_PLANS.map((plan, i) => {
              const featured = i === 1;
              return (
                <article
                  key={plan.code}
                  className={`lift-card relative flex flex-col rounded-[28px] p-7 ${
                    featured
                      ? 'bg-gradient-to-br from-teal to-teal-deep text-white shadow-lift md:-translate-y-3'
                      : 'border border-white bg-white text-night shadow-soft'
                  }`}
                >
                  {featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold text-teal-deep shadow-soft">
                      Populaire
                    </span>
                  ) : null}
                  <p
                    className={`text-sm font-semibold ${featured ? 'text-white/85' : 'text-teal-deep'}`}
                  >
                    {plan.name}
                  </p>
                  <p className="font-display mt-4 text-5xl font-extrabold tabular-nums">
                    {plan.monthlyPrice}
                    <span
                      className={`text-base font-medium ${featured ? 'text-white/75' : 'text-slate'}`}
                    >
                      {' '}
                      {plan.currency}/mois
                    </span>
                  </p>
                  <ul
                    className={`mt-6 flex-1 space-y-3 text-sm ${featured ? 'text-white/90' : 'text-slate'}`}
                  >
                    {[
                      `${plan.messageQuota} messages / mois`,
                      `Jusqu’à ${plan.maxLocations} localisation(s)`,
                      `${plan.maxStaff} comptes personnel`,
                      'Support QR + PDF stand',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? 'text-white' : 'text-teal'}`}
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/login"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                      featured
                        ? 'bg-white text-teal-deep hover:bg-white/90'
                        : 'bg-teal text-white hover:bg-teal-deep'
                    }`}
                  >
                    Commencer
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
