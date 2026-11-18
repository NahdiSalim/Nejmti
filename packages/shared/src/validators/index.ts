import { z } from 'zod';

export const shopCategorySchema = z.enum([
  'CAFE',
  'RESTAURANT',
  'BAKERY',
  'HAIR_SALON',
  'PHARMACY',
  'RETAIL',
  'OTHER',
]);

export const slugSchema = z
  .string()
  .min(2)
  .max(64)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug invalide');

export const hexColorSchema = z
  .string()
  .regex(/^#[0-9A-Fa-f]{6}$/, 'Couleur hex invalide');

export const createShopSchema = z.object({
  name: z.string().min(2).max(120),
  slug: slugSchema.optional(),
  category: shopCategorySchema.default('OTHER'),
  city: z.string().max(80).optional(),
  address: z.string().max(240).optional(),
  stampsRequired: z.number().int().min(3).max(50).default(10),
  rewardDescription: z.string().min(2).max(200).default('Une consommation offerte'),
  primaryColor: hexColorSchema.default('#0E2A47'),
  secondaryColor: hexColorSchema.default('#1F5AA6'),
  accentColor: hexColorSchema.default('#8B5E3C'),
});

export const enrollCustomerSchema = z
  .object({
    firstName: z.string().max(80).optional(),
    phone: z.string().max(32).optional(),
    email: z.string().email().max(160).optional(),
    consentNotifications: z.boolean(),
    consentGeolocation: z.boolean(),
    platform: z.enum(['APPLE', 'GOOGLE', 'WEB']),
  })
  .refine((d) => !d.consentNotifications || Boolean(d.phone || d.email), {
    message: 'Téléphone ou email requis pour les notifications',
    path: ['phone'],
  });

export const stampRequestSchema = z.object({
  qrToken: z.string().min(22).max(128),
  staffPin: z.string().regex(/^\d{4,8}$/),
  type: z.enum(['STAMP', 'REWARD_REDEEMED']).default('STAMP'),
  note: z.string().max(240).optional(),
});

export const createCampaignSchema = z.object({
  message: z.string().min(5).max(500),
  target: z.enum(['ALL', 'INACTIVE_DAYS']).default('ALL'),
  inactiveDays: z.number().int().min(1).max(365).optional(),
  scheduledAt: z.string().datetime().optional(),
});

export const leadSchema = z.object({
  businessName: z.string().min(2).max(120),
  contactName: z.string().max(120).optional(),
  email: z.string().email(),
  phone: z.string().max(32).optional(),
  city: z.string().max(80).optional(),
  message: z.string().max(1000).optional(),
});

export const planCodeSchema = z.enum(['starter', 'growth', 'multi']);

export type CreateShopInput = z.infer<typeof createShopSchema>;
export type EnrollCustomerInput = z.infer<typeof enrollCustomerSchema>;
export type StampRequestInput = z.infer<typeof stampRequestSchema>;
export type CreateCampaignInput = z.infer<typeof createCampaignSchema>;
export type LeadInput = z.infer<typeof leadSchema>;
