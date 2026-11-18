import Link from 'next/link';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  return (
    <section className="hero-teal hero-dots relative overflow-hidden pt-28 text-white sm:pt-32">
      <div className="pointer-events-none absolute -left-20 top-32 h-64 w-64 rounded-full bg-white/10 blur-2xl animate-pulse-soft" />
      <div className="pointer-events-none absolute -right-16 bottom-24 h-72 w-72 rounded-full bg-teal-deep/30 blur-3xl animate-drift" />
      <div
        className="pointer-events-none absolute left-[18%] top-28 h-3 w-3 rounded-full bg-white/60 animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[22%] top-40 h-2 w-2 rounded-full bg-white/40 animate-float-delayed"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-8 sm:px-6 lg:grid-cols-[0.95fr_1.15fr] lg:gap-6 lg:pb-4">
        <div className="animate-fade-up max-w-xl">
          <p className="font-display text-5xl font-extrabold tracking-tight drop-shadow-sm sm:text-6xl lg:text-7xl">
            Nejmti
          </p>
          <p className="mt-4 text-lg font-medium text-white/95 sm:text-xl lg:text-2xl">
            La fidélité de vos clients, directement dans leur Wallet
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
            Cartes numériques pour cafés, salons et boutiques — sans application à installer.
            Abonnement mensuel, simple et rassurant.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/login"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-teal-deep shadow-lift transition hover:scale-[1.03] hover:bg-white/95"
            >
              Connexion
            </Link>
            <Link
              href="/#fonctionnement"
              className="rounded-full border border-white/50 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Voir comment ça marche
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2 text-sm text-white/90">
            {['Client', 'Wallet', 'Commerce'].map((label, i) => (
              <span key={label} className="flex items-center gap-2">
                {i > 0 ? <span className="text-white/45">×</span> : null}
                <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-white/45 bg-white/5 px-4 font-medium backdrop-blur-sm transition hover:bg-white/15">
                  {label}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="animate-fade-up relative" style={{ animationDelay: '80ms' }}>
          <HeroVisual />
        </div>
      </div>

      <svg
        className="wave-divider text-white"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,48 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  );
}
