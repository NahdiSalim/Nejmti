type Props = {
  shopName: string;
  reward: string;
  stamps: number;
  required: number;
  primaryColor?: string;
  accentColor?: string;
  className?: string;
};

export function WalletCardPreview({
  shopName,
  reward,
  stamps,
  required,
  primaryColor = '#0E2A47',
  accentColor = '#8B5E3C',
  className = '',
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] p-5 text-white shadow-lift ${className}`}
      style={{ background: `linear-gradient(145deg, ${primaryColor} 0%, #1F5AA6 100%)` }}
      aria-label={`Aperçu carte ${shopName}`}
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full border-4 border-white/10" />
      <div className="pointer-events-none absolute bottom-8 right-4 h-16 w-16 rounded-full border-4 border-white/10" />

      <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/70">
        Fidélité
      </p>
      <h3 className="font-display mt-1 text-xl font-bold">{shopName}</h3>
      <p className="mt-1 text-sm text-white/80">{reward}</p>

      <div className="mt-6 flex flex-wrap gap-2" role="list" aria-label="Tampons">
        {Array.from({ length: required }).map((_, i) => {
          const filled = i < stamps;
          return (
            <span
              key={i}
              role="listitem"
              className={`h-8 w-8 rounded-full border-2 ${filled ? 'animate-stamp-pop' : ''}`}
              style={{
                backgroundColor: filled ? accentColor : 'transparent',
                borderColor: filled ? accentColor : 'rgba(255,255,255,0.45)',
              }}
              aria-label={filled ? `Tampon ${i + 1} obtenu` : `Tampon ${i + 1} vide`}
            />
          );
        })}
      </div>

      <p className="mt-5 font-mono text-sm tabular-nums text-white/90">
        {stamps}/{required}
      </p>
    </div>
  );
}
