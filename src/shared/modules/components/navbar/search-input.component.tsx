'use client';

import { useSearchParams } from 'next/navigation';

export function SearchInput() {
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
      className="hidden h-full w-full bg-transparent p-2 text-zinc-400 outline-none sm:block"
    />
  );
}
