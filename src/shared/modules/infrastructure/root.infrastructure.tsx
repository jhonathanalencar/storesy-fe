import { ReactNode } from 'react';
import { Toaster } from 'sonner';

import '@assets/styles/globals.css';
import 'keen-slider/keen-slider.min.css';

interface RootInfrastructureProps {
  children: ReactNode;
}

export function RootInfrastructure({ children }: RootInfrastructureProps) {
  return (
    <>
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
    </>
  );
}
