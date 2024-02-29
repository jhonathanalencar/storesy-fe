import Link from 'next/link';
import type { ReactNode } from 'react';

interface RecommendationBoxProps {
  title: string;
  linkTo: string;
  children: ReactNode;
}

export function RecommendationBox({
  title,
  linkTo,
  children,
}: RecommendationBoxProps) {
  return (
    <div className="mb-6 flex flex-col gap-2 rounded-md bg-zinc-700 p-2 shadow-md shadow-zinc-950">
      <Link
        href={linkTo}
        className="text-xl font-bold tracking-wide text-zinc-200"
      >
        {title}
      </Link>
      {children}
    </div>
  );
}
