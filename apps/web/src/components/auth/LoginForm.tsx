'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, LayoutDashboard, Loader2, Shield } from 'lucide-react';

type Role = 'merchant' | 'admin';

const destinations: Record<Role, string> = {
  merchant: '/preview/dashboard',
  admin: '/preview/admin',
};

export function LoginForm() {
  const router = useRouter();
  const [role, setRole] = useState<Role>('merchant');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError('Indiquez votre email et votre mot de passe.');
      return;
    }
    if (!email.includes('@')) {
      setError('Adresse email invalide.');
      return;
    }
    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    setLoading(true);
    // Demo UX — auth réelle en Phase 2
    await new Promise((r) => setTimeout(r, 350));
    if (remember) {
      try {
        sessionStorage.setItem('nejmti.demoRole', role);
        sessionStorage.setItem('nejmti.demoEmail', email.trim());
      } catch {
        /* ignore */
      }
    }
    router.push(destinations[role]);
  }

  function fillDemo(next: Role) {
    setRole(next);
    setError(null);
    if (next === 'merchant') {
      setEmail('cafe@oliviers.demo');
      setPassword('demo1234');
    } else {
      setEmail('admin@nejmti.demo');
      setPassword('admin123');
    }
  }

  return (
    <div className="w-full">
      <div
        className="grid grid-cols-2 gap-1 rounded-2xl bg-mist p-1"
        role="tablist"
        aria-label="Type de compte"
      >
        <button
          type="button"
          role="tab"
          aria-selected={role === 'merchant'}
          onClick={() => setRole('merchant')}
          className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
            role === 'merchant'
              ? 'bg-white text-teal-deep shadow-soft'
              : 'text-slate hover:text-night'
          }`}
        >
          <LayoutDashboard className="h-4 w-4" aria-hidden />
          Commerçant
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={role === 'admin'}
          onClick={() => setRole('admin')}
          className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
            role === 'admin'
              ? 'bg-white text-teal-deep shadow-soft'
              : 'text-slate hover:text-night'
          }`}
        >
          <Shield className="h-4 w-4" aria-hidden />
          Super-admin
        </button>
      </div>

      <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-night">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={role === 'admin' ? 'admin@nejmti.com' : 'vous@commerce.com'}
            className="mt-1.5 w-full rounded-2xl border border-mist bg-sand/60 px-4 py-3 text-sm text-night outline-none transition focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/25"
          />
        </div>

        <div>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="password" className="text-sm font-medium text-night">
              Mot de passe
            </label>
            <button
              type="button"
              className="text-xs font-semibold text-teal-deep hover:underline"
              onClick={() =>
                setError('La réinitialisation sera disponible avec l’API (Phase 2).')
              }
            >
              Mot de passe oublié ?
            </button>
          </div>
          <div className="relative mt-1.5">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-2xl border border-mist bg-sand/60 px-4 py-3 pr-12 text-sm text-night outline-none transition focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/25"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate hover:bg-mist hover:text-night"
              aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <label className="flex items-center gap-2.5 text-sm text-slate">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 rounded accent-teal"
          />
          Se souvenir de moi sur cet appareil
        </label>

        {error ? (
          <p className="rounded-xl bg-danger/10 px-3 py-2 text-sm text-danger" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-5 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-teal-deep disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Connexion…
            </>
          ) : role === 'admin' ? (
            'Entrer dans l’admin'
          ) : (
            'Entrer dans mon espace'
          )}
        </button>
      </form>

      <div className="mt-6 rounded-2xl border border-dashed border-teal/30 bg-mist/70 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-deep">
          Mode démo (Phase 1)
        </p>
        <p className="mt-1 text-sm text-slate">
          Remplissez un compte démo puis connectez-vous — aucun serveur d’auth pour l’instant.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => fillDemo('merchant')}
            className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-teal-deep shadow-soft hover:bg-sand"
          >
            Compte commerçant
          </button>
          <button
            type="button"
            onClick={() => fillDemo('admin')}
            className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-teal-deep shadow-soft hover:bg-sand"
          >
            Compte admin
          </button>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-slate">
        Pas encore de compte ?{' '}
        <Link href="/#contact" className="font-semibold text-teal-deep hover:underline">
          Demander un accès
        </Link>
      </p>
    </div>
  );
}
