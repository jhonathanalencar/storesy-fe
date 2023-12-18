import { ReactNode } from 'react';

import '@assets/styles/globals.css';

interface RootInfrastructureProps {
  children: ReactNode;
}

export function RootInfrastructure({ children }: RootInfrastructureProps) {
  return <>{children}</>;
}
