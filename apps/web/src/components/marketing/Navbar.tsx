'use client';

import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { LogoMark } from './LogoMark';

const sectionLinks = [
  { id: 'fonctionnement', label: 'Fonctionnement' },
  { id: 'tarifs', label: 'Tarifs' },
  { id: 'contact', label: 'Contact' },
] as const;

export function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prefetch routes so Connexion feels instant
  useEffect(() => {
    router.prefetch('/login');
    router.prefetch('/preview/dashboard');
    router.prefetch('/preview/admin');
  }, [router]);

  const goToSection = useCallback(
    (id: string) => {
      setOpen(false);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', `#${id}`);
        return;
      }
      router.push(`/#${id}`);
    },
    [router],
  );

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-200 ${
        solid
          ? 'border-b border-black/5 bg-white/95 shadow-soft backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <Link
          href="/"
          className="relative z-10 flex items-center overflow-visible"
          onClick={() => setOpen(false)}
          prefetch
        >
          <LogoMark light={!solid} size="md" className="-my-2" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {sectionLinks.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => goToSection(l.id)}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                solid ? 'text-slate hover:bg-mist hover:text-teal-deep' : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
          <Link
            href="/login"
            prefetch
            className={`ml-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              solid
                ? 'bg-teal text-white shadow-soft hover:bg-teal-deep'
                : 'bg-white text-teal-deep hover:bg-white/90'
            }`}
          >
            Connexion
          </Link>
        </nav>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
            solid ? 'text-night' : 'text-white'
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-black/5 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {sectionLinks.map((l) => (
              <button
                key={l.id}
                type="button"
                className="rounded-xl px-3 py-3 text-left text-sm font-medium text-night hover:bg-mist"
                onClick={() => goToSection(l.id)}
              >
                {l.label}
              </button>
            ))}
            <Link
              href="/login"
              prefetch
              className="mt-2 rounded-full bg-teal px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Connexion
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
