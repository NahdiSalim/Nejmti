import { PreviewShell } from '@/components/preview/PreviewShell';
import { Badge } from '@/components/ui/Badge';

const metrics = [
  { label: 'MRR', value: '4 851 TND', hint: '+6 % vs mois précédent' },
  { label: 'Commerces actifs', value: '37', hint: '12 en essai' },
  { label: 'Churn (30 j)', value: '2,1 %', hint: '1 résiliation' },
  { label: 'Passes créés', value: '6 402', hint: '+214 cette semaine' },
];

const shops = [
  { name: 'Café des Oliviers', city: 'Tunis', status: 'Essai', tone: 'sand' as const },
  { name: 'Pâtisserie Lumière', city: 'Sfax', status: 'Actif', tone: 'success' as const },
  { name: 'Salon Amira', city: 'Sousse', status: 'Impayé', tone: 'warning' as const },
];

export default function AdminPreview() {
  return (
    <PreviewShell title="Super-admin" subtitle="Indicateurs globaux — maquette">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => (
          <article
            key={m.label}
            className="rounded-[var(--nejmti-radius-md)] bg-white p-5 shadow-soft"
          >
            <p className="text-sm text-slate">{m.label}</p>
            <p className="font-display mt-2 text-2xl font-extrabold tabular-nums text-night">
              {m.value}
            </p>
            <p className="mt-1 text-xs text-lagoon">{m.hint}</p>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-[var(--nejmti-radius-md)] bg-white shadow-soft">
        <div className="border-b border-mist px-5 py-4">
          <h3 className="font-display font-bold text-night">Commerces récents</h3>
        </div>
        <ul className="divide-y divide-mist">
          {shops.map((s) => (
            <li
              key={s.name}
              className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
            >
              <div>
                <p className="font-semibold text-night">{s.name}</p>
                <p className="text-sm text-slate">{s.city}</p>
              </div>
              <Badge tone={s.tone}>{s.status}</Badge>
            </li>
          ))}
        </ul>
      </section>
    </PreviewShell>
  );
}
