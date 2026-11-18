import { PreviewShell } from '@/components/preview/PreviewShell';
import { Badge } from '@/components/ui/Badge';
import { Users, Stamp, Gift, UserMinus } from 'lucide-react';

const kpis = [
  { label: 'Clients', value: '248', icon: Users, delta: '+12 cette semaine' },
  { label: 'Tampons (7 j)', value: '186', icon: Stamp, delta: '+8 %' },
  { label: 'Récompenses', value: '23', icon: Gift, delta: 'cette semaine' },
  { label: 'Inactifs > 15 j', value: '41', icon: UserMinus, delta: 'à relancer' },
];

const week = [42, 55, 38, 61, 48, 72, 58];
const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const max = Math.max(...week);

export default function DashboardPreview() {
  return (
    <PreviewShell title="Espace commerçant" subtitle="Tableau de bord — données fictives">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl font-bold text-night">Café des Oliviers</h2>
          <p className="text-sm text-slate">Essai · 9 jours restants</p>
        </div>
        <Badge tone="sand">Plan Starter</Badge>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <article
            key={k.label}
            className="rounded-[var(--nejmti-radius-md)] bg-white p-5 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate">{k.label}</p>
              <k.icon className="h-4 w-4 text-hazelnut" aria-hidden />
            </div>
            <p className="font-display mt-2 text-3xl font-extrabold tabular-nums text-night">
              {k.value}
            </p>
            <p className="mt-1 text-xs text-lagoon">{k.delta}</p>
          </article>
        ))}
      </div>

      <section className="mt-6 rounded-[var(--nejmti-radius-md)] bg-white p-6 shadow-soft">
        <h3 className="font-display text-lg font-bold text-night">Visites cette semaine</h3>
        <div
          className="mt-6 flex h-40 items-end gap-3"
          role="img"
          aria-label="Graphique des visites quotidiennes"
        >
          {week.map((v, i) => (
            <div key={days[i]} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full rounded-t-lg bg-lagoon/80 transition-all"
                style={{ height: `${(v / max) * 100}%` }}
                title={`${v} visites`}
              />
              <span className="text-xs font-medium text-slate">{days[i]}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate">
          Taux de retour estimé : <strong className="tabular-nums text-night">34 %</strong>
        </p>
      </section>
    </PreviewShell>
  );
}
