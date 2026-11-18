import { describe, expect, it } from 'vitest';
import { applyStamp, checkStampFraud, redeemReward } from './loyalty';

describe('applyStamp', () => {
  it('incrémente et signale rewardReady au seuil', () => {
    const r = applyStamp({ stampCount: 9, stampsRequired: 10 });
    expect(r).toEqual({ ok: true, stampCount: 10, rewardReady: true });
  });

  it('refuse si cycle déjà complet', () => {
    const r = applyStamp({ stampCount: 10, stampsRequired: 10 });
    expect(r).toEqual({ ok: false, reason: 'REWARD_PENDING' });
  });
});

describe('redeemReward', () => {
  it('remet à zéro après récompense', () => {
    expect(redeemReward({ stampCount: 10, stampsRequired: 10 }).stampCount).toBe(0);
  });
});

describe('checkStampFraud', () => {
  const now = new Date('2026-11-18T12:00:00Z');

  it('bloque si trop tôt', () => {
    const r = checkStampFraud({
      lastStampAt: new Date('2026-11-18T11:00:00Z'),
      stampsToday: 0,
      now,
      minIntervalMinutes: 120,
      maxStampsPerDay: 1,
    });
    expect(r).toEqual({ ok: false, reason: 'TOO_SOON' });
  });

  it('bloque la limite quotidienne', () => {
    const r = checkStampFraud({
      lastStampAt: null,
      stampsToday: 1,
      now,
      minIntervalMinutes: 0,
      maxStampsPerDay: 1,
    });
    expect(r).toEqual({ ok: false, reason: 'DAILY_LIMIT' });
  });
});
