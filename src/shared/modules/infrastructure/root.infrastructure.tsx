import { ReactNode } from 'react';

import '@assets/styles/globals.css';
import 'keen-slider/keen-slider.min.css';

interface RootInfrastructureProps {
  children: ReactNode;
}

export function RootInfrastructure({ children }: RootInfrastructureProps) {
  return <>{children}</>;
}
