import Image from 'next/image';

type Props = {
  className?: string;
  /** Conservé pour compatibilité */
  light?: boolean;
  /** Fond blanc derrière le logo (ex. footer) */
  onWhite?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const heights = {
  sm: 36,
  md: 58,
  lg: 56,
} as const;

export function LogoMark({ className = '', onWhite = false, size = 'md' }: Props) {
  const h = heights[size];

  return (
    <span
      className={`inline-flex items-center ${
        onWhite ? 'rounded-xl bg-white px-3 py-1.5 shadow-soft' : ''
      } ${className}`}
    >
      <Image
        src="/images/hero/logo-mark.png"
        alt="Nejmti"
        width={Math.round(h * 3.4)}
        height={h}
        className="object-contain"
        style={{ height: h, width: 'auto' }}
        priority
      />
    </span>
  );
}
