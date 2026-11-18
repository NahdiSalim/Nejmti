'use client';

import { useEffect } from 'react';

/** Smooth-scroll to hash on load (e.g. /#tarifs) without a full remount lag. */
export function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  return null;
}
