import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light' | 'success';

const variants: Record<Variant, string> = {
  primary:
    'bg-teal text-white hover:bg-teal-deep focus-visible:ring-teal shadow-soft rounded-full',
  secondary:
    'bg-white text-night border border-mist hover:border-sky focus-visible:ring-sky rounded-full',
  ghost: 'bg-transparent text-teal-deep hover:bg-mist focus-visible:ring-sky rounded-full',
  'outline-light':
    'bg-white/15 text-white border border-white/50 hover:bg-white/25 focus-visible:ring-white rounded-full backdrop-blur-sm',
  success: 'bg-success text-white hover:bg-teal-deep focus-visible:ring-success rounded-full',
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: Props) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
