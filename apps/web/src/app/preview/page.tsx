import Link from 'next/link';
import { PreviewShell } from '@/components/preview/PreviewShell';

const screens = [
  {
    href: '/preview/marketing',
    title: 'Site marketing',
    desc: 'Accueil, bénéfices, tarifs mensuels, CTA inscription.',
  },
  {
    href: '/preview/client',
    title: 'Page client (QR)',
    desc: 'Aperçu carte, consentements, boutons Wallet / web.',
  },
  {
    href: '/preview/dashboard',
    title: 'Tableau de bord commerçant',
    desc: 'KPI, visites, clients inactifs.',
  },
  {
    href: '/preview/card-editor',
    title: 'Personnalisation carte',
    desc: 'Couleurs, règle de fidélité, aperçu live.',
  },
  {
    href: '/preview/scan',
    title: 'Scanner personnel',
    desc: 'PIN, tampon, feedback succès.',
  },
  {
    href: '/preview/admin',
    title: 'Super-admin',
    desc: 'MRR, commerces, impayés.',
  },
];

export default function PreviewIndex() {
  return (
    <PreviewShell
      title="Maquettes principales"
      subtitle="Données fictives — aucun backend requis"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {screens.map((s, i) => (
          <Link
            key={s.href}
            href={s.href}
            className="animate-fade-up rounded-[var(--nejmti-radius-md)] bg-white p-5 shadow-soft transition hover:shadow-lift"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <h2 className="font-display text-lg font-bold text-night">{s.title}</h2>
            <p className="mt-1 text-sm text-slate">{s.desc}</p>
          </Link>
        ))}
      </div>
    </PreviewShell>
  );
}
