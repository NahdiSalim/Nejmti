function PhoneFrame({
  children,
  className = '',
  rotate = '-6deg',
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: string;
}) {
  return (
    <div
      className={`relative w-[148px] shrink-0 overflow-hidden rounded-[28px] border-[6px] border-[#1F2A2E] bg-white shadow-phone sm:w-[168px] ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-[#1F2A2E]" />
      <div className="aspect-[9/19] overflow-hidden bg-sand pt-6">{children}</div>
    </div>
  );
}

function StampDots({ filled, total }: { filled: number; total: number }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-5 w-5 rounded-full ${
            i < filled ? 'bg-teal' : 'border-2 border-teal/30 bg-transparent'
          }`}
        />
      ))}
    </div>
  );
}

export function PhoneMockups() {
  return (
    <div className="relative mx-auto flex h-[380px] w-full max-w-lg items-end justify-center sm:h-[440px]">
      {/* decorative rings */}
      <div
        className="pointer-events-none absolute right-4 top-8 h-24 w-24 rounded-full border-2 border-white/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-6 top-20 h-3 w-3 rounded-full bg-white/50"
        aria-hidden
      />

      <PhoneFrame className="animate-float absolute left-0 top-10 z-10 opacity-95" rotate="-12deg">
        <div className="flex h-full flex-col p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-teal-deep">
            Aujourd’hui
          </p>
          <p className="font-display mt-1 text-sm font-bold text-night">12 visites</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {['Tampons', 'Clients', 'Offres', 'Avis'].map((label, i) => (
              <div
                key={label}
                className={`rounded-2xl p-2.5 ${i % 2 === 0 ? 'bg-teal/15' : 'bg-white shadow-soft'}`}
              >
                <div className="mb-2 h-6 w-6 rounded-full bg-teal/30" />
                <p className="text-[10px] font-semibold text-night">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </PhoneFrame>

      <PhoneFrame className="animate-float-delayed absolute left-[18%] top-0 z-20" rotate="-4deg">
        <div className="flex h-full flex-col bg-gradient-to-b from-teal to-teal-deep p-3 text-white">
          <p className="text-[10px] uppercase tracking-wider text-white/70">Carte fidélité</p>
          <p className="font-display mt-1 text-base font-bold">Café Lumina</p>
          <div className="mt-6">
            <StampDots filled={5} total={8} />
          </div>
          <p className="mt-3 text-[11px] text-white/85">5 / 8 — bientôt offert</p>
          <div className="mt-auto rounded-2xl bg-white/15 p-3 backdrop-blur-sm">
            <p className="text-[10px] text-white/80">Prochaine récompense</p>
            <p className="text-xs font-semibold">1 café offert</p>
          </div>
        </div>
      </PhoneFrame>

      <PhoneFrame className="animate-float absolute right-[14%] top-6 z-30" rotate="5deg">
        <div className="flex h-full flex-col items-center justify-center gap-3 bg-white p-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mist">
            <span className="font-display text-xl font-bold text-teal-deep">+</span>
          </div>
          <p className="font-display text-sm font-bold text-night">Bienvenue</p>
          <p className="text-[11px] leading-relaxed text-slate">
            Scannez, ajoutez la carte à votre Wallet, collectez des tampons.
          </p>
          <div className="mt-2 w-full rounded-full bg-teal py-2 text-[11px] font-semibold text-white">
            Ajouter au Wallet
          </div>
        </div>
      </PhoneFrame>

      <PhoneFrame className="animate-float-delayed absolute right-0 top-16 z-10 opacity-95" rotate="12deg">
        <div className="flex h-full flex-col p-3">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-teal/20" />
            <div>
              <p className="text-[11px] font-bold text-night">Sara M.</p>
              <p className="text-[10px] text-slate">Cliente fidèle</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {[
              { label: 'Tampons', value: '7' },
              { label: 'Visites', value: '14' },
              { label: 'Récompenses', value: '1' },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-xl bg-sand px-3 py-2"
              >
                <span className="text-[10px] text-slate">{row.label}</span>
                <span className="font-mono text-xs font-bold tabular-nums text-night">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

export function FeatureDeviceMock() {
  return (
    <div className="relative mx-auto flex w-full max-w-md items-end justify-center gap-4">
      <div className="relative w-[200px] overflow-hidden rounded-[32px] border-[7px] border-night bg-white shadow-phone sm:w-[220px]">
        <div className="absolute left-1/2 top-2.5 z-10 h-4 w-24 -translate-x-1/2 rounded-full bg-night" />
        <div className="aspect-[9/19] bg-sand px-4 pb-4 pt-8">
          <p className="text-xs font-semibold text-teal-deep">Progression</p>
          <p className="font-display mt-1 text-lg font-bold text-night">Salon Amira</p>
          <div className="mt-6 space-y-3">
            {[
              { t: '09:00', label: 'Tampon validé', c: 'bg-teal' },
              { t: '12:30', label: 'Visite enregistrée', c: 'bg-sky' },
              { t: '18:00', label: 'Récompense prête', c: 'bg-teal-deep' },
            ].map((row) => (
              <div key={row.t} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-soft">
                <span className={`h-2.5 w-2.5 rounded-full ${row.c}`} />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-night">{row.label}</p>
                  <p className="font-mono text-[10px] text-slate">{row.t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8 hidden h-[120px] w-[100px] flex-col items-center justify-center rounded-[28px] border-[6px] border-night bg-white shadow-lift sm:flex">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mist">
          <span className="h-5 w-5 rounded-full border-[3px] border-teal" />
        </div>
        <p className="mt-2 text-[10px] font-semibold text-night">+1 tampon</p>
      </div>
    </div>
  );
}
