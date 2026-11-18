import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, QrCode, Wallet, ShieldCheck } from 'lucide-react';
import { LogoMark } from '@/components/marketing/LogoMark';
import { LoginForm } from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Connexion — Nejmti',
  description: 'Accédez à votre espace commerçant ou à l’administration Nejmti.',
};

const highlights = [
  {
    icon: Wallet,
    title: 'Cartes Wallet',
    text: 'Apple & Google, mises à jour en direct.',
  },
  {
    icon: QrCode,
    title: 'Stand QR',
    text: 'Tampons simples, anti-fraude intégré.',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurisé',
    text: 'Accès séparé commerçant / admin.',
  },
];

export default function LoginPage() {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      {/* Brand panel */}
      <aside className="relative hidden overflow-hidden hero-teal hero-dots text-white lg:flex lg:flex-col lg:justify-between lg:p-10 xl:p-14">
        <div
          className="pointer-events-none absolute -left-16 bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 top-24 h-48 w-48 rounded-full bg-teal-deep/40 blur-2xl"
          aria-hidden
        />

        <div className="relative">
          <Link href="/" className="inline-block">
            <LogoMark light />
          </Link>
          <h1 className="font-display mt-14 max-w-md text-4xl font-extrabold leading-tight xl:text-5xl">
            Bienvenue sur votre espace Nejmti
          </h1>
          <p className="mt-4 max-w-sm text-base text-white/80">
            Gérez la fidélité, les tampons et les abonnements — sans application client à installer.
          </p>
        </div>

        <ul className="relative mt-12 space-y-4">
          {highlights.map((h) => (
            <li
              key={h.title}
              className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <h.icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-display font-bold">{h.title}</p>
                <p className="mt-0.5 text-sm text-white/75">{h.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="relative mt-10 text-sm text-white/60">
          © {new Date().getFullYear()} Nejmti — confiance locale.
        </p>
      </aside>

      {/* Form panel */}
      <main className="relative flex min-h-screen flex-col bg-sand px-4 py-8 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-8 flex items-center justify-between lg:mb-10">
          <Link
            href="/"
            prefetch
            className="inline-flex items-center gap-2 text-sm font-medium text-slate transition hover:text-teal-deep"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Accueil
          </Link>
          <div className="lg:hidden">
            <LogoMark />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
          <div className="rounded-[28px] border border-white bg-white p-6 shadow-lift sm:p-8">
            <h2 className="font-display text-2xl font-extrabold text-night sm:text-3xl">
              Connexion
            </h2>
            <p className="mt-2 text-sm text-slate">
              Accédez à l’espace commerçant ou à l’administration.
            </p>
            <div className="mt-6">
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
