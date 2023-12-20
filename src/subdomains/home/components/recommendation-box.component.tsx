import type { ReactNode } from 'react';

interface RecommendationBoxProps {
  title: string;
  children: ReactNode;
}

export function RecommendationBox({ title, children }: RecommendationBoxProps) {
  return (
    <div className="mb-6 flex flex-col gap-2 rounded-md bg-zinc-700 p-2 shadow-md shadow-zinc-950">
      <h3 className="text-xl font-bold tracking-wide text-zinc-200">{title}</h3>
      {children}
    </div>
  );
}
