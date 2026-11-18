import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { LogoMark } from './LogoMark';
import { company, companyFullAddress } from '@/lib/company';

const productLinks = [
  { href: '/#fonctionnement', label: 'Fonctionnement' },
  { href: '/#tarifs', label: 'Tarifs' },
  { href: '/#contact', label: 'Demander un accès' },
  { href: '/login', label: 'Connexion' },
];

const resourceLinks = [
  { href: '/preview/client', label: 'Démo carte client' },
  { href: '/preview/dashboard', label: 'Espace commerçant' },
  { href: '/preview/admin', label: 'Super-admin' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Wave into footer */}
      <svg
        className="relative z-10 -mb-px block w-full text-[#4DB6AC]"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,48 C240,90 480,10 720,40 C960,70 1200,90 1440,28 L1440,90 L0,90 Z"
        />
      </svg>

      <div className="footer-mesh relative">
        <div
          className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-pulse-soft"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-teal-deep/40 blur-3xl animate-drift"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8">
          {/* Top CTA band */}
          <div className="mb-14 flex flex-col items-start justify-between gap-6 rounded-[28px] border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:p-8">
            <div className="max-w-xl">
              <p className="font-display text-2xl font-extrabold sm:text-3xl">
                Donnez une carte Wallet à votre commerce
              </p>
              <p className="mt-2 text-sm text-white/80 sm:text-base">
                Moins de papier, plus de retours clients — en quelques minutes.
              </p>
            </div>
            <Link
              href="/login"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-teal-deep shadow-lift transition hover:scale-[1.02] hover:bg-white/95"
            >
              Ouvrir Nejmti
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <LogoMark onWhite size="lg" />
              <p className="mt-5 max-w-sm text-base leading-relaxed text-white/80">
                Nejmti aide les commerces locaux à fidéliser sans application à installer —
                Apple Wallet, Google Wallet, et une carte web en secours.
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/75">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-white" aria-hidden />
                  {company.email}
                </a>
                <a
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-white" aria-hidden />
                  {company.phoneDisplay}
                </a>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-white" aria-hidden />
                  {companyFullAddress}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white/60">
                  Produit
                </p>
                <ul className="mt-4 space-y-3">
                  {productLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-base font-medium text-white/90 transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white/60">
                  Explorer
                </p>
                <ul className="mt-4 space-y-3">
                  {resourceLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-base font-medium text-white/90 transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white/60">
                  Pourquoi Nejmti
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                  <li>Aucune app client</li>
                  <li>Stand QR prêt à imprimer</li>
                  <li>Abonnement mensuel clair</li>
                  <li>Relances & avis Google</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-white/65">
              © {new Date().getFullYear()} Nejmti. Tous droits réservés.
            </p>
            <p className="text-sm text-white/65">
              Conçu pour les commerces de proximité.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
