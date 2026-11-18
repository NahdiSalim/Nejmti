'use client';

import { useState } from 'react';
import { PreviewShell } from '@/components/preview/PreviewShell';
import { WalletCardPreview } from '@/components/wallet/WalletCardPreview';
import { Button } from '@/components/ui/Button';

export default function ClientPreview() {
  const [notif, setNotif] = useState(true);
  const [geo, setGeo] = useState(false);

  return (
    <PreviewShell
      title="Page client"
      subtitle="Ouverte par le QR — mobile-first, < 2 s cible"
    >
      <div className="mx-auto max-w-md animate-fade-up">
        <WalletCardPreview
          shopName="Pâtisserie Lumière"
          reward="1 pâtisserie offerte après 10 visites"
          stamps={0}
          required={10}
          primaryColor="#0E2A47"
          accentColor="#8B5E3C"
        />

        <form
          className="mt-6 space-y-4 rounded-[var(--nejmti-radius-md)] bg-white p-5 shadow-soft"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="firstName" className="text-sm font-medium text-night">
              Prénom <span className="text-slate">(optionnel)</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              className="mt-1 w-full rounded-[12px] border border-mist px-3 py-2.5 text-sm outline-none focus:border-lagoon focus:ring-2 focus:ring-sky/40"
              placeholder="Sara"
              autoComplete="given-name"
            />
          </div>
          <div>
            <label htmlFor="contact" className="text-sm font-medium text-night">
              Téléphone ou email <span className="text-slate">(optionnel)</span>
            </label>
            <input
              id="contact"
              name="contact"
              className="mt-1 w-full rounded-[12px] border border-mist px-3 py-2.5 text-sm outline-none focus:border-lagoon focus:ring-2 focus:ring-sky/40"
              placeholder="+216 … ou vous@email.com"
            />
          </div>

          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-night">Consentements</legend>
            <label className="flex items-start gap-3 text-sm text-slate">
              <input
                type="checkbox"
                checked={notif}
                onChange={(e) => setNotif(e.target.checked)}
                className="mt-1 h-4 w-4 accent-lagoon"
              />
              Recevoir les offres et rappels de ce commerce
            </label>
            <label className="flex items-start gap-3 text-sm text-slate">
              <input
                type="checkbox"
                checked={geo}
                onChange={(e) => setGeo(e.target.checked)}
                className="mt-1 h-4 w-4 accent-lagoon"
              />
              Afficher la carte près du commerce (écran de verrouillage)
            </label>
          </fieldset>

          <div className="flex flex-col gap-2 pt-2">
            <Button type="button" className="w-full">
              Ajouter à Apple Wallet
            </Button>
            <Button type="button" variant="secondary" className="w-full">
              Ajouter à Google Wallet
            </Button>
            <Button type="button" variant="ghost" className="w-full">
              Continuer avec la carte web
            </Button>
          </div>
        </form>
      </div>
    </PreviewShell>
  );
}
