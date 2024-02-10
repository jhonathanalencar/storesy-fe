'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';

import '@assets/styles/globals.css';
import 'keen-slider/keen-slider.min.css';

interface RootInfrastructureProps {
  children: ReactNode;
}

export function RootInfrastructure({ children }: RootInfrastructureProps) {
  return (
    <SessionProvider>
      {children}
      <Toaster
        richColors
        position="top-right"
        duration={3000}
        toastOptions={{
          style: {
            fontSize: '1rem',
          },
        }}
      />
    </SessionProvider>
  );
}
