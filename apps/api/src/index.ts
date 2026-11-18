/**
 * Point d'entrée API — stub Phase 1.
 * La structure NestJS complète arrive en Phase 2.
 */
export const API_PHASE = 1 as const;

export const plannedModules = [
  'auth',
  'merchants',
  'shops',
  'staff',
  'customers',
  'passes',
  'stamps',
  'rewards',
  'campaigns',
  'credits',
  'billing',
  'payments',
  'stands',
  'wallet',
  'passkit',
  'admin',
  'audit',
  'leads',
] as const;
