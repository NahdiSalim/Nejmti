/** Coordonnées publiques Nejmti — à remplacer par les vraies infos de prod. */
export const company = {
  name: 'Nejmti',
  tagline: 'Fidélité Wallet pour commerces locaux',
  email: 'bonjour@nejmti.com',
  supportEmail: 'support@nejmti.com',
  phone: '+216 70 000 000',
  phoneDisplay: '+216 70 000 000',
  whatsapp: '+21670000000',
  address: 'Avenue Habib Bourguiba',
  city: 'Tunis',
  country: 'Tunisie',
  hours: 'Lun – Ven · 9h – 18h',
  hoursWeekend: 'Sam · 10h – 14h',
} as const;

export const companyFullAddress = `${company.address}, ${company.city}, ${company.country}`;
