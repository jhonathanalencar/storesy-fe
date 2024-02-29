'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
}

export function PaginationBar({ currentPage, totalPages }: PaginationBarProps) {
  const query = useSearchParams().get('query');
  const maxPage = Math.min(totalPages, currentPage + 2);
  const minPage = Math.max(1, currentPage - 2);
  const numberedPageItems: JSX.Element[] = [];
  for (let page = minPage; page <= maxPage; page++) {
    numberedPageItems.push(
      <Link
        href={`search?query=${query}&page=${page}`}
        key={page}
        aria-disabled
        className={twMerge(
          'hidden h-12 w-12 items-center justify-center bg-zinc-700 text-sm hover:bg-zinc-600 sm:flex',
          currentPage === page &&
            'pointer-events-none flex select-auto border border-zinc-200 hover:bg-zinc-700'
        )}
      >
        {page}
      </Link>
    );
  }

  return (
    <div className="mt-12 flex justify-center">
      <div className="flex items-center rounded border border-zinc-500">
        <Link
          href={`search?query=${query}&page=${currentPage - 1}`}
          className={twMerge(
            'flex h-full items-center gap-1 px-3 text-zinc-100',
            currentPage === 1 && 'pointer-events-none text-zinc-400'
          )}
        >
          <ChevronLeftIcon className="h-5 w-5" />
          <span className="hidden text-sm sm:block">Previous</span>
        </Link>

        {minPage > 1 ? (
          <div className="hidden h-full sm:flex">
            <Link
              href={`search?query=${query}`}
              className="flex h-12 w-12 items-center justify-center bg-zinc-700 text-sm hover:bg-zinc-600"
            >
              1
            </Link>
            <div className="flex h-full items-center justify-center bg-zinc-700 p-3">
              <span className="h-full text-sm">...</span>
            </div>
          </div>
        ) : null}

        {numberedPageItems}

        {maxPage < totalPages ? (
          <div className="hidden h-full sm:flex">
            <div className="flex h-full items-center justify-center bg-zinc-700 p-3">
              <span className="h-full text-sm">...</span>
            </div>
            <Link
              href={`search?query=${query}&page=${totalPages}`}
              className="flex h-12 w-12 items-center justify-center bg-zinc-700 text-sm hover:bg-zinc-600"
            >
              {totalPages}
            </Link>
          </div>
        ) : null}

        <Link
          href={`search?query=${query}&page=${currentPage + 1}`}
          className={twMerge(
            'flex h-full items-center gap-1 px-3 text-zinc-100',
            currentPage + 1 > totalPages && 'pointer-events-none text-zinc-400'
          )}
        >
          <span className="hidden text-sm sm:block">Next</span>
          <ChevronRightIcon className="h-5 w-5 text-zinc-100" />
        </Link>
      </div>
    </div>
  );
}
