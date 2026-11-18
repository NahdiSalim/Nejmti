import Link from 'next/link';
import type { ReactNode } from 'react';

const links = [
  { href: '/preview', label: 'Index' },
  { href: '/preview/marketing', label: 'Marketing' },
  { href: '/preview/client', label: 'Client QR' },
  { href: '/preview/dashboard', label: 'Dashboard' },
  { href: '/preview/card-editor', label: 'Carte' },
  { href: '/preview/scan', label: 'Scanner' },
  { href: '/preview/admin', label: 'Admin' },
];

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function PreviewShell({ title, subtitle, children }: Props) {
  return (
    <div className="min-h-screen bg-mist">
      <header className="border-b border-sky/30 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div>
            <p className="font-display text-sm font-bold text-lagoon">Nejmti · Phase 1</p>
            <h1 className="font-display text-lg font-bold text-night">{title}</h1>
            {subtitle ? <p className="text-sm text-slate">{subtitle}</p> : null}
          </div>
          <nav className="flex flex-wrap gap-1" aria-label="Maquettes">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-xs font-semibold text-lagoon hover:bg-mist"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
