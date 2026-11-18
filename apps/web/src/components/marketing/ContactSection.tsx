import { Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { company, companyFullAddress } from '@/lib/company';
import { ContactForm } from './ContactForm';

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: company.phoneDisplay,
    href: `tel:${company.phone.replace(/\s/g, '')}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: company.phoneDisplay,
    href: `https://wa.me/${company.whatsapp.replace('+', '')}`,
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: companyFullAddress,
    href: undefined,
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: `${company.hours} · ${company.hoursWeekend}`,
    href: undefined,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-blob relative overflow-hidden bg-white px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-mist px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-teal-deep">
            Contact
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold text-night sm:text-4xl lg:text-5xl">
            Parlons de votre commerce
          </h2>
          <p className="mt-3 text-base text-slate sm:text-lg">
            Une question, une démo, un abonnement — écrivez-nous, on vous répond rapidement.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.15fr] lg:gap-10">
          {/* Company card */}
          <aside className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-teal to-teal-deep p-7 text-white shadow-lift sm:p-8">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border-[10px] border-white/10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-12 left-8 h-40 w-40 rounded-full bg-white/10 blur-2xl"
              aria-hidden
            />

            <p className="relative font-display text-2xl font-extrabold">{company.name}</p>
            <p className="relative mt-1 text-sm text-white/80">{company.tagline}</p>

            <ul className="relative mt-8 space-y-4">
              {details.map((d) => (
                <li key={d.label} className="flex gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                    <d.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith('http') ? '_blank' : undefined}
                        rel={d.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="mt-0.5 block text-sm font-medium text-white hover:underline"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-white">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <p className="relative mt-10 text-xs text-white/65">
              Support : {company.supportEmail}
            </p>
          </aside>

          {/* Form */}
          <div className="rounded-[32px] border border-mist bg-white p-6 shadow-soft sm:p-8">
            <h3 className="font-display text-xl font-bold text-night">Demande d’inscription</h3>
            <p className="mt-1 text-sm text-slate">
              Remplissez le formulaire — nous créons un lead et vous recontactons.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
