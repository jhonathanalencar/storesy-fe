'use client';

import { ReactNode } from 'react';
import { useHasMounted } from '../hooks/use-has-mounted.hook';

export function ClientOnly({ children }: { children: ReactNode }) {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return children;
}
