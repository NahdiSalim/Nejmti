/**
 * Design tokens Nejmti — soft teal / confiance locale
 * Palette inspirée d’un style soft-tech (teal + blanc), contenu 100 % Nejmti.
 */

export const nejmtiColors = {
  /** Texte principal */
  night: '#1F2A2E',
  /** Teal primaire (actions) */
  lagoon: '#4DB6AC',
  /** Teal clair (survols, accents) */
  sky: '#66C2B2',
  /** Fonds doux teintés */
  mist: '#E8F6F4',
  white: '#FFFFFF',
  /** Teal profond */
  hazelnut: '#2A9A8F',
  /** Fond crème-vert très léger */
  sand: '#F7FAF9',
  /** Texte secondaire */
  slate: '#6B7C85',
  success: '#2E9D6B',
  warning: '#D98E04',
  danger: '#C8443A',
  /** Alias explicites */
  teal: '#4DB6AC',
  tealDeep: '#2A9A8F',
  tealSoft: '#66C2B2',
  ink: '#1F2A2E',
  soft: '#F7FAF9',
} as const;

export type NejmtiColor = keyof typeof nejmtiColors;

export const nejmtiRadii = {
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  full: '9999px',
} as const;

export const nejmtiShadows = {
  soft: '0 8px 30px rgba(31, 42, 46, 0.08)',
  lift: '0 18px 50px rgba(45, 154, 143, 0.22)',
  phone: '0 25px 60px rgba(31, 42, 46, 0.18)',
} as const;

export const nejmtiFonts = {
  display: '"Plus Jakarta Sans", system-ui, sans-serif',
  body: 'Inter, system-ui, sans-serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
} as const;

export const nejmtiMotion = {
  enter: '220ms ease-out',
  spring: '420ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  float: '6s ease-in-out infinite',
} as const;

/** CSS custom properties block for :root */
export function nejmtiCssVariables(): string {
  return `
:root {
  --nejmti-night: ${nejmtiColors.night};
  --nejmti-lagoon: ${nejmtiColors.lagoon};
  --nejmti-sky: ${nejmtiColors.sky};
  --nejmti-mist: ${nejmtiColors.mist};
  --nejmti-white: ${nejmtiColors.white};
  --nejmti-hazelnut: ${nejmtiColors.hazelnut};
  --nejmti-sand: ${nejmtiColors.sand};
  --nejmti-slate: ${nejmtiColors.slate};
  --nejmti-success: ${nejmtiColors.success};
  --nejmti-warning: ${nejmtiColors.warning};
  --nejmti-danger: ${nejmtiColors.danger};
  --nejmti-teal: ${nejmtiColors.teal};
  --nejmti-teal-deep: ${nejmtiColors.tealDeep};
  --nejmti-radius-sm: ${nejmtiRadii.sm};
  --nejmti-radius-md: ${nejmtiRadii.md};
  --nejmti-radius-lg: ${nejmtiRadii.lg};
  --nejmti-shadow-soft: ${nejmtiShadows.soft};
  --nejmti-shadow-lift: ${nejmtiShadows.lift};
  --nejmti-font-display: ${nejmtiFonts.display};
  --nejmti-font-body: ${nejmtiFonts.body};
}
`.trim();
}

/** Extension Tailwind (theme.extend.colors) */
export const nejmtiTailwindColors = {
  night: nejmtiColors.night,
  lagoon: nejmtiColors.lagoon,
  sky: nejmtiColors.sky,
  mist: nejmtiColors.mist,
  hazelnut: nejmtiColors.hazelnut,
  sand: nejmtiColors.sand,
  slate: nejmtiColors.slate,
  success: nejmtiColors.success,
  warning: nejmtiColors.warning,
  danger: nejmtiColors.danger,
  teal: nejmtiColors.teal,
  'teal-deep': nejmtiColors.tealDeep,
  'teal-soft': nejmtiColors.tealSoft,
  ink: nejmtiColors.ink,
  soft: nejmtiColors.soft,
} as const;
