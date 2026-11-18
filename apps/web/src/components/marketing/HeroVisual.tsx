import { HeroPhone } from './HeroPhone';

/** Hero : téléphone seul */
export function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-[320px] items-center justify-center">
      <div
        className="pointer-events-none absolute inset-8 rounded-full bg-white/15 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10">
        <HeroPhone />
      </div>
    </div>
  );
}
