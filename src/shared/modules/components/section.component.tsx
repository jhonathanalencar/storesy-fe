import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section
      className={twMerge('mx-auto w-full max-w-5xl px-2 pb-16 pt-4', className)}
    >
      {children}
    </section>
  );
}
