'use client';

import { useState } from 'react';
import { Camera, Check } from 'lucide-react';
import { PreviewShell } from '@/components/preview/PreviewShell';
import { Button } from '@/components/ui/Button';
import { WalletCardPreview } from '@/components/wallet/WalletCardPreview';

export default function ScanPreview() {
  const [pin, setPin] = useState('');
  const [stamps, setStamps] = useState(4);
  const [success, setSuccess] = useState(false);

  function addStamp() {
    if (pin.length < 4) return;
    setStamps((s) => Math.min(s + 1, 8));
    setSuccess(true);
    window.setTimeout(() => setSuccess(false), 1600);
  }

  return (
    <PreviewShell title="Scanner personnel" subtitle="PWA caméra — PIN employé">
      <div className="mx-auto max-w-md space-y-4">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[var(--nejmti-radius-lg)] bg-night shadow-lift">
          <div className="absolute inset-8 rounded-[16px] border-2 border-dashed border-sky/50" />
          <div className="relative z-10 flex flex-col items-center text-white/80">
            <Camera className="h-10 w-10" aria-hidden />
            <p className="mt-2 text-sm">Zone caméra (mock)</p>
            <p className="text-xs text-white/50">QR client simulé</p>
          </div>
          {success ? (
            <div
              className="absolute inset-0 z-20 flex animate-fade-up flex-col items-center justify-center bg-success/95 text-white"
              role="status"
            >
              <Check className="h-14 w-14 animate-stamp-pop" aria-hidden />
              <p className="font-display mt-2 text-xl font-bold">Tampon ajouté</p>
            </div>
          ) : null}
        </div>

        <div className="rounded-[var(--nejmti-radius-md)] bg-white p-5 shadow-soft">
          <label htmlFor="pin" className="text-sm font-medium text-night">
            Code PIN employé
          </label>
          <input
            id="pin"
            inputMode="numeric"
            maxLength={6}
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
            className="mt-1 w-full rounded-[12px] border border-mist px-3 py-3 text-center font-mono text-2xl tracking-[0.4em] outline-none focus:border-lagoon focus:ring-2 focus:ring-sky/40"
            placeholder="••••"
            autoComplete="off"
          />
          <div className="mt-4 flex gap-2">
            <Button type="button" className="flex-1" onClick={addStamp} disabled={pin.length < 4}>
              Ajouter un tampon
            </Button>
            <Button type="button" variant="secondary" className="flex-1">
              Valider récompense
            </Button>
          </div>
        </div>

        <WalletCardPreview
          shopName="Café des Oliviers"
          reward="Café offert"
          stamps={stamps}
          required={8}
        />
      </div>
    </PreviewShell>
  );
}
