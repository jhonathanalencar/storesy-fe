'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

import { SearchInput } from './search-input.component';

interface SearchInputProps {
  searchProducts: (formData: FormData) => Promise<void>;
}

export function SearchButton({ searchProducts }: SearchInputProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <form
          action={searchProducts}
          className="ml-auto flex h-full w-fit rounded bg-zinc-800 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950 sm:ml-0 sm:hidden sm:w-full"
        >
          <div className="absolute left-0 top-0 z-30 flex h-16 w-full bg-zinc-950 p-2 ">
            <button
              className="mr-2"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <ArrowLeftIcon className="h-6 w-6 text-zinc-100" />
            </button>
            <div className="w-full">
              <SearchInput className="rounded-bl rounded-tl bg-zinc-800" />
            </div>
            <button
              type="submit"
              className="flex w-12 items-center justify-center rounded rounded-bl-none rounded-br rounded-tl-none rounded-tr bg-green-500 transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-zinc-900" />
            </button>
          </div>
        </form>
      ) : null}
      <form
        action={searchProducts}
        className="ml-auto flex h-full w-fit rounded bg-zinc-800 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950 sm:ml-0 sm:w-full"
      >
        <div className="hidden w-full sm:block">
          <SearchInput />
        </div>
        <button
          type="submit"
          onClick={() => setIsOpen(false)}
          className="hidden w-12 items-center justify-center rounded rounded-bl-none rounded-br rounded-tl-none rounded-tr bg-green-500 transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 sm:flex"
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-zinc-900" />
        </button>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex w-12 items-center justify-center rounded bg-green-500 transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 sm:hidden"
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-zinc-900" />
        </button>
      </form>
    </>
  );
}
