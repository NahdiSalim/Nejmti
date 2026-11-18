'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { leadSchema } from '@nejmti/shared';

export function ContactForm() {
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const parsed = leadSchema.safeParse({
      businessName: businessName.trim(),
      contactName: contactName.trim() || undefined,
      email: email.trim(),
      phone: phone.trim() || undefined,
      city: city.trim() || undefined,
      message: message.trim() || undefined,
    });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Vérifiez les champs du formulaire.');
      return;
    }

    setLoading(true);
    // Phase 1 : simulation d’envoi (API leads en Phase 2)
    await new Promise((r) => setTimeout(r, 500));
    try {
      sessionStorage.setItem('nejmti.lastLead', JSON.stringify(parsed.data));
    } catch {
      /* ignore */
    }
    setLoading(false);
    setSent(true);
    setBusinessName('');
    setContactName('');
    setEmail('');
    setPhone('');
    setCity('');
    setMessage('');
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[24px] bg-mist px-6 py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-teal" aria-hidden />
        <h3 className="font-display mt-4 text-xl font-bold text-night">Message envoyé</h3>
        <p className="mt-2 max-w-sm text-sm text-slate">
          Merci ! Notre équipe vous répondra sous 24–48 h ouvrées. (Mode démo — enregistrement
          local pour l’instant.)
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-deep"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="businessName" className="text-sm font-medium text-night">
            Nom du commerce <span className="text-danger">*</span>
          </label>
          <input
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Café des Oliviers"
            className="mt-1.5 w-full rounded-2xl border border-mist bg-sand/50 px-4 py-3 text-sm outline-none transition focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/25"
            required
          />
        </div>
        <div>
          <label htmlFor="contactName" className="text-sm font-medium text-night">
            Votre nom
          </label>
          <input
            id="contactName"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder="Amira Ben Ali"
            className="mt-1.5 w-full rounded-2xl border border-mist bg-sand/50 px-4 py-3 text-sm outline-none transition focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/25"
          />
        </div>
        <div>
          <label htmlFor="city" className="text-sm font-medium text-night">
            Ville
          </label>
          <input
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Tunis"
            className="mt-1.5 w-full rounded-2xl border border-mist bg-sand/50 px-4 py-3 text-sm outline-none transition focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/25"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-night">
            Email <span className="text-danger">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vous@commerce.com"
            className="mt-1.5 w-full rounded-2xl border border-mist bg-sand/50 px-4 py-3 text-sm outline-none transition focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/25"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-night">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+216 …"
            className="mt-1.5 w-full rounded-2xl border border-mist bg-sand/50 px-4 py-3 text-sm outline-none transition focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/25"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-night">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Parlez-nous de votre commerce et de ce dont vous avez besoin…"
            className="mt-1.5 w-full resize-y rounded-2xl border border-mist bg-sand/50 px-4 py-3 text-sm outline-none transition focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/25"
          />
        </div>
      </div>

      {error ? (
        <p className="rounded-xl bg-danger/10 px-3 py-2 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-teal-deep disabled:opacity-70 sm:w-auto"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Envoi…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            Envoyer ma demande
          </>
        )}
      </button>
    </form>
  );
}
