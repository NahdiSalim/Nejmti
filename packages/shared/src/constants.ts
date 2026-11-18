/** Valeurs par défaut — à confirmer (pays, devise, domaine, passerelle). */

export const DEFAULT_LOCALE = 'fr' as const;
export const SUPPORTED_LOCALES = ['fr', 'ar', 'en'] as const;
export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_CURRENCY = 'TND';
export const DEFAULT_TRIAL_DAYS = 14;
export const DEFAULT_GRACE_DAYS = 7;
export const DEFAULT_INACTIVE_RELANCE_DAYS = 15;
export const DEFAULT_STAMPS_REQUIRED = 10;
export const DEFAULT_MIN_STAMP_INTERVAL_MIN = 120;
export const DEFAULT_MAX_STAMPS_PER_DAY = 1;
export const MAX_SHOP_LOCATIONS = 10;

/** Entropy minimale du qrToken (bits) */
export const QR_TOKEN_MIN_BITS = 128;

export const DEFAULT_PLANS = [
  {
    code: 'starter',
    name: 'Starter',
    monthlyPrice: 49,
    currency: DEFAULT_CURRENCY,
    messageQuota: 100,
    maxLocations: 1,
    maxStaff: 3,
  },
  {
    code: 'growth',
    name: 'Growth',
    monthlyPrice: 99,
    currency: DEFAULT_CURRENCY,
    messageQuota: 500,
    maxLocations: 3,
    maxStaff: 10,
  },
  {
    code: 'multi',
    name: 'Multi-branches',
    monthlyPrice: 179,
    currency: DEFAULT_CURRENCY,
    messageQuota: 1500,
    maxLocations: 10,
    maxStaff: 30,
  },
] as const;
