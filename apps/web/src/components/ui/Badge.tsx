import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tone?: 'mist' | 'sand' | 'success' | 'warning' | 'danger';
};

const tones = {
  mist: 'bg-mist text-teal-deep',
  sand: 'bg-sand text-teal-deep',
  success: 'bg-success/15 text-success',
  warning: 'bg-warning/15 text-warning',
  danger: 'bg-danger/15 text-danger',
};

export function Badge({ children, tone = 'mist' }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
