'use client';

import Image from 'next/image';

/** Image découpée (appareil seul, sans fond) */
const STAND_IMAGE = '/images/hero/stand-device.png';

export function StandBanner() {
  return (
    <div className="stand-float relative w-[100px] sm:w-[112px]">
      <Image
        src={STAND_IMAGE}
        alt="Chevalet Café Lumina — NFC + QR Nejmti"
        width={311}
        height={500}
        className="h-auto w-full select-none drop-shadow-[0_14px_28px_rgba(0,0,0,0.28)]"
        priority
      />
    </div>
  );
}
