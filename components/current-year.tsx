'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

/**
 * The page is prerendered, so a plain `new Date()` would freeze at build time.
 * This renders the build year for the static HTML, then the visitor's year.
 */
export function CurrentYear({ buildYear }: { buildYear: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => buildYear,
  );
  return <>{year}</>;
}
