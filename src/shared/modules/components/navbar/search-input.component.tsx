'use client';

import { useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

interface SearchInputProps {
  className?: string;
}

export function SearchInput({ className = '' }: SearchInputProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  return (
    <input
      id="search"
      name="query"
      type="text"
      placeholder="Search"
      autoComplete="off"
      defaultValue={query ?? ''}
      className={twMerge(
        'h-full w-full bg-transparent p-2 text-zinc-400 outline-none',
        className
      )}
    />
  );
}
