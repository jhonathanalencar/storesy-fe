import { redirect } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

import { SearchInput } from './search-input.component';

async function searchProducts(formData: FormData) {
  'use server';
  const searchQuery = formData.get('query')?.toString();
  if (searchQuery) {
    redirect(`/search?query=${searchQuery}`);
  }
  redirect('/');
}

export function SearchBar() {
  return (
    <form
      action={searchProducts}
      className="ml-auto flex h-full w-fit rounded bg-zinc-800 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950 sm:ml-0 sm:w-full"
    >
      <SearchInput />
      <button
        type="submit"
        className="flex w-12 items-center justify-center rounded bg-green-500 transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 sm:rounded-bl-none sm:rounded-br sm:rounded-tl-none sm:rounded-tr"
      >
        <MagnifyingGlassIcon className="h-6 w-6 text-zinc-900" />
      </button>
    </form>
  );
}
