'use client';

import { useState } from 'react';
import { PreviewShell } from '@/components/preview/PreviewShell';
import { WalletCardPreview } from '@/components/wallet/WalletCardPreview';
import { Button } from '@/components/ui/Button';

export default function CardEditorPreview() {
  const [name, setName] = useState('Salon Amira');
  const [reward, setReward] = useState('Coupe offerte');
  const [required, setRequired] = useState(8);
  const [primary, setPrimary] = useState('#0E2A47');
  const [accent, setAccent] = useState('#8B5E3C');

  return (
    <PreviewShell
      title="Personnalisation carte"
      subtitle="Aperçu live Apple / Google (maquette)"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <form
          className="space-y-4 rounded-[var(--nejmti-radius-md)] bg-white p-6 shadow-soft"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="text-sm font-medium text-night" htmlFor="shopName">
              Nom du commerce
            </label>
            <input
              id="shopName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-[12px] border border-mist px-3 py-2.5 text-sm outline-none focus:border-lagoon focus:ring-2 focus:ring-sky/40"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-night" htmlFor="reward">
              Récompense
            </label>
            <input
              id="reward"
              value={reward}
              onChange={(e) => setReward(e.target.value)}
              className="mt-1 w-full rounded-[12px] border border-mist px-3 py-2.5 text-sm outline-none focus:border-lagoon focus:ring-2 focus:ring-sky/40"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-night" htmlFor="stamps">
              Tampons requis : {required}
            </label>
            <input
              id="stamps"
              type="range"
              min={3}
              max={15}
              value={required}
              onChange={(e) => setRequired(Number(e.target.value))}
              className="mt-2 w-full accent-lagoon"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-night" htmlFor="primary">
                Couleur principale
              </label>
              <input
                id="primary"
                type="color"
                value={primary}
                onChange={(e) => setPrimary(e.target.value)}
                className="mt-1 h-10 w-full cursor-pointer rounded-[12px] border border-mist"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-night" htmlFor="accent">
                Accent tampons
              </label>
              <input
                id="accent"
                type="color"
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                className="mt-1 h-10 w-full cursor-pointer rounded-[12px] border border-mist"
              />
            </div>
          </div>
          <Button type="button" className="w-full">
            Enregistrer (maquette)
          </Button>
        </form>

        <div className="space-y-4">
          <p className="text-sm font-semibold text-slate">Aperçu Wallet</p>
          <WalletCardPreview
            shopName={name || 'Votre commerce'}
            reward={reward || 'Récompense'}
            stamps={3}
            required={required}
            primaryColor={primary}
            accentColor={accent}
          />
          <div className="rounded-[var(--nejmti-radius-md)] bg-sand/80 p-4 text-sm text-night">
            <p className="font-semibold text-hazelnut">Note Phase 1</p>
            <p className="mt-1 text-slate">
              L’export .pkpass / JWT Google arrivera en Phase 5. Ici : aperçu fidèle pour valider
              la charte.
            </p>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}
