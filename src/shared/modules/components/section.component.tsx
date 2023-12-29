import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`mx-auto mt-4 w-full max-w-5xl p-2 ${className}`}>
      {children}
    </section>
  );
}
