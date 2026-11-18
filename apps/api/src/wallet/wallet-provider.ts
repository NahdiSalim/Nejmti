/**
 * Contrat WalletProvider — implémentations Phase 3 (mock/web) et Phase 5 (Apple/Google).
 */

export type PassPlatform = 'APPLE' | 'GOOGLE' | 'WEB';

export type CreatePassInput = {
  passId: string;
  serialNumber: string;
  authToken: string;
  qrToken: string;
  shop: {
    name: string;
    logoUrl?: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    stampsRequired: number;
    rewardDescription: string;
    locations: Array<{
      latitude: number;
      longitude: number;
      maxDistance: number;
      relevantText?: string;
    }>;
  };
  customer: {
    firstName?: string;
  };
  stampCount: number;
  platform: PassPlatform;
};

export type PassUpdate = {
  stampCount?: number;
  message?: string;
  state?: 'ACTIVE' | 'DELETED' | 'EXPIRED';
};

export type PassArtifact = {
  platform: PassPlatform;
  /** URL .pkpass, JWT save-to-google, ou URL carte web */
  installUrl: string;
  googleObjectId?: string;
};

export interface WalletProvider {
  createPass(input: CreatePassInput): Promise<PassArtifact>;
  updatePass(passId: string, patch: PassUpdate): Promise<void>;
  revokePass(passId: string): Promise<void>;
  getInstallUrl(passId: string): Promise<string>;
}
