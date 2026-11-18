/**
 * Règles de fidélité pures — testables sans DB.
 */

export type LoyaltyState = {
  stampCount: number;
  stampsRequired: number;
};

export type StampResult =
  | { ok: true; stampCount: number; rewardReady: boolean }
  | { ok: false; reason: 'REWARD_PENDING' | 'ALREADY_COMPLETE' };

/** Ajoute un tampon. Si le cycle est complet, rewardReady=true (tampons non remis à 0 ici). */
export function applyStamp(state: LoyaltyState): StampResult {
  if (state.stampCount >= state.stampsRequired) {
    return { ok: false, reason: 'REWARD_PENDING' };
  }
  const stampCount = state.stampCount + 1;
  return {
    ok: true,
    stampCount,
    rewardReady: stampCount >= state.stampsRequired,
  };
}

/** Après validation récompense : remet le compteur à 0. */
export function redeemReward(state: LoyaltyState): LoyaltyState {
  if (state.stampCount < state.stampsRequired) {
    return state;
  }
  return { ...state, stampCount: 0 };
}

export type FraudCheckInput = {
  lastStampAt: Date | null;
  stampsToday: number;
  now: Date;
  minIntervalMinutes: number;
  maxStampsPerDay: number;
};

export type FraudCheckResult =
  | { ok: true }
  | { ok: false; reason: 'TOO_SOON' | 'DAILY_LIMIT' };

export function checkStampFraud(input: FraudCheckInput): FraudCheckResult {
  if (input.maxStampsPerDay > 0 && input.stampsToday >= input.maxStampsPerDay) {
    return { ok: false, reason: 'DAILY_LIMIT' };
  }
  if (input.lastStampAt && input.minIntervalMinutes > 0) {
    const elapsedMs = input.now.getTime() - input.lastStampAt.getTime();
    const minMs = input.minIntervalMinutes * 60_000;
    if (elapsedMs < minMs) {
      return { ok: false, reason: 'TOO_SOON' };
    }
  }
  return { ok: true };
}
