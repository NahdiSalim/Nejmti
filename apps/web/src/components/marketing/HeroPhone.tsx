'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Camera, Flashlight, Sparkles, Wallet } from 'lucide-react';

type Stage = 'lock' | 'unlocking' | 'loyalty';

export function HeroPhone() {
  const [stage, setStage] = useState<Stage>('lock');
  const [stamps, setStamps] = useState(0);
  const [notifVisible, setNotifVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reduced) {
      setStage('loyalty');
      setStamps(5);
      setNotifVisible(true);
      return;
    }

    let cancelled = false;
    const timeouts: number[] = [];
    let fillInterval: number | undefined;

    const clearAll = () => {
      timeouts.forEach((t) => window.clearTimeout(t));
      timeouts.length = 0;
      if (fillInterval !== undefined) {
        window.clearInterval(fillInterval);
        fillInterval = undefined;
      }
    };

    const runCycle = () => {
      if (cancelled) return;
      clearAll();
      setStage('lock');
      setStamps(0);
      setNotifVisible(false);

      timeouts.push(
        window.setTimeout(() => {
          if (!cancelled) setNotifVisible(true);
        }, 550),
      );

      timeouts.push(
        window.setTimeout(() => {
          if (!cancelled) setStage('unlocking');
        }, 2800),
      );

      timeouts.push(
        window.setTimeout(() => {
          if (cancelled) return;
          setStage('loyalty');
          let n = 0;
          fillInterval = window.setInterval(() => {
            n += 1;
            setStamps(n);
            if (n >= 5 && fillInterval !== undefined) {
              window.clearInterval(fillInterval);
              fillInterval = undefined;
            }
          }, 220);
        }, 3200),
      );

      timeouts.push(
        window.setTimeout(() => {
          if (!cancelled) runCycle();
        }, 9800),
      );
    };

    runCycle();
    return () => {
      cancelled = true;
      clearAll();
    };
  }, [reduced]);

  return (
    <div className="hero-phone-scene relative flex h-[400px] w-[220px] items-center justify-center overflow-visible sm:h-[460px] sm:w-[240px]">
      <div
        className="pointer-events-none absolute bottom-4 left-1/2 h-8 w-36 -translate-x-1/2 rounded-full bg-black/25 blur-xl"
        aria-hidden
      />

      <div className={`hero-phone-orbit ${reduced ? '' : 'is-animated'}`}>
        <div className={`hero-phone-jump ${reduced ? '' : 'is-animated'}`}>
          <div
            className="hero-phone-device relative w-[188px] sm:w-[210px]"
            style={{ transform: 'rotateX(4deg) rotateY(-8deg)' }}
            aria-label="Aperçu téléphone — carte de fidélité Nejmti"
          >
            <span className="absolute -left-[3px] top-[92px] h-7 w-[3px] rounded-l-sm bg-[#5a4a6a] sm:top-[105px]" />
            <span className="absolute -left-[3px] top-[128px] h-12 w-[3px] rounded-l-sm bg-[#5a4a6a] sm:top-[145px]" />
            <span className="absolute -right-[3px] top-[118px] h-16 w-[3px] rounded-r-sm bg-[#5a4a6a] sm:top-[134px]" />

            <div className="relative overflow-hidden rounded-[38px] border-[5px] border-[#2a2433] bg-[#1a1520] shadow-phone ring-1 ring-white/10 sm:rounded-[42px] sm:border-[6px]">
              <div className="relative aspect-[9/19.5] overflow-hidden bg-black">
                <div className="absolute left-1/2 top-3 z-30 h-[20px] w-[84px] -translate-x-1/2 rounded-full bg-black sm:h-[22px] sm:w-[96px]" />

                {/* LOCK SCREEN */}
                <div
                  className={`absolute inset-0 z-10 overflow-hidden transition-all duration-700 ${
                    stage === 'lock'
                      ? 'translate-y-0 opacity-100'
                      : stage === 'unlocking'
                        ? '-translate-y-6 opacity-50'
                        : 'pointer-events-none -translate-y-full opacity-0'
                  }`}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(circle at 30% 25%, #7c3aed 0%, transparent 45%), radial-gradient(circle at 70% 55%, #0f766e 0%, transparent 50%), linear-gradient(180deg, #4c1d95 0%, #1e293b 55%, #94a3b8 100%)',
                    }}
                  />
                  <div className="relative flex h-full min-h-0 flex-col px-3 pb-5 pt-11 text-white">
                    <p className="shrink-0 text-center text-[10px] font-medium text-white/90">
                      Lundi 18 novembre
                    </p>
                    <p className="mt-0.5 shrink-0 text-center font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                      9:41
                    </p>

                    <div
                      className={`mt-3 flex min-h-0 flex-1 flex-col gap-2.5 transition-all duration-500 ease-out ${
                        notifVisible
                          ? 'translate-y-0 scale-100 opacity-100'
                          : '-translate-y-2 scale-95 opacity-0'
                      }`}
                    >
                      <div className="shrink-0 rounded-2xl border border-white/25 bg-white/18 p-2 backdrop-blur-xl">
                        <div className="flex items-start gap-2">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal to-teal-deep">
                            <Sparkles className="h-3.5 w-3.5 text-white" aria-hidden />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <p className="truncate text-[10px] font-bold text-white">NEJMTI</p>
                              <p className="shrink-0 text-[8px] text-white/65">maintenant</p>
                            </div>
                            <p className="mt-0.5 text-[10px] font-semibold leading-snug text-white">
                              +1 tampon · Café Lumina
                            </p>
                            <p className="mt-0.5 truncate text-[9px] text-white/75">
                              Plus que 3 visites pour un café offert
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* QR sous notification — petit, comme la référence */}
                      <div className="mx-auto w-[92px] shrink-0 sm:w-[102px]">
                        <Image
                          src="/images/hero/lock-qr.png"
                          alt="QR Nejmti"
                          width={204}
                          height={204}
                          className="h-auto w-full rounded-sm shadow-[0_8px_18px_rgba(0,0,0,0.28)]"
                          priority
                        />
                      </div>
                    </div>

                    <div className="mt-2 flex shrink-0 flex-col items-center gap-3">
                      <p className="text-[9px] text-white/80">
                        {stage === 'unlocking' ? 'Ouverture…' : 'Glisser pour ouvrir'}
                      </p>
                      <div className="flex w-full items-center justify-between px-1">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                          <Flashlight className="h-3.5 w-3.5" aria-hidden />
                        </span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                          <Camera className="h-3.5 w-3.5" aria-hidden />
                        </span>
                      </div>
                      <div className="h-1 w-24 rounded-full bg-white/80" />
                    </div>
                  </div>
                </div>

                {/* LOYALTY — compact, no overflow */}
                <div
                  className={`absolute inset-0 z-20 flex min-h-0 flex-col overflow-hidden transition-all duration-700 ${
                    stage === 'loyalty'
                      ? 'translate-y-0 opacity-100'
                      : 'pointer-events-none translate-y-8 opacity-0'
                  }`}
                  style={{
                    background: 'linear-gradient(165deg, #ecfdf8 0%, #f0fdfa 40%, #e2e8f0 100%)',
                  }}
                >
                  <div className="flex shrink-0 items-center justify-between px-3 pb-1 pt-10">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-wider text-teal-deep">
                        Nejmti
                      </p>
                      <p className="font-display text-xs font-bold text-night">Ma carte</p>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-soft">
                      <Wallet className="h-3 w-3 text-teal-deep" aria-hidden />
                    </span>
                  </div>

                  <div className="relative mx-2.5 min-h-0 flex-1 overflow-hidden rounded-[18px] p-px shadow-lift">
                    <div
                      className="absolute inset-0 rounded-[18px]"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.65), rgba(77,182,172,0.55), rgba(42,154,143,0.85))',
                      }}
                    />
                    <div
                      className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[17px] px-3 py-3 text-white"
                      style={{
                        background:
                          'radial-gradient(circle at 90% 8%, rgba(255,255,255,0.2), transparent 40%), linear-gradient(145deg, #5ec4b8 0%, #4db6ac 45%, #2a9a8f 100%)',
                      }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-[9px] uppercase tracking-wider text-white/75">Fidélité</p>
                          <p className="font-display truncate text-sm font-extrabold">Café Lumina</p>
                        </div>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-white/20">
                          <Sparkles className="h-3.5 w-3.5" aria-hidden />
                        </span>
                      </div>

                      <p className="mt-1 text-[10px] text-white/85">Café offert · 8 visites</p>

                      <div className="mt-3 grid grid-cols-4 gap-1.5">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <span
                            key={i}
                            className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                              i < stamps
                                ? 'border-white bg-white animate-stamp-pop'
                                : 'border-white/35 bg-white/5'
                            }`}
                          >
                            {i < stamps ? (
                              <span className="h-1.5 w-1.5 rounded-full bg-teal-deep" />
                            ) : null}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex items-end justify-between pt-3">
                        <p className="font-mono text-xs font-bold tabular-nums">
                          {Math.min(stamps, 8)}
                          <span className="text-white/70"> / 8</span>
                        </p>
                        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-semibold">
                          Wallet
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mx-2.5 mt-2 shrink-0 rounded-xl bg-white px-2.5 py-2 shadow-soft">
                    <p className="text-[9px] text-slate">Dernière visite</p>
                    <p className="text-[10px] font-bold text-night">Aujourd’hui · +1 tampon</p>
                  </div>

                  <div className="shrink-0 px-3 pb-2.5 pt-2">
                    <div className="mx-auto h-1 w-20 rounded-full bg-night/15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
