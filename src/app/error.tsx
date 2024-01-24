'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import serverDown from '@assets/images/undraw-server-down.svg';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-full bg-storesy-gray-900 text-storesy-gray-200">
      <section className="container mx-auto grid h-full grid-cols-1 place-content-center gap-2 p-2 md:grid-cols-2">
        <div className="mx-auto w-3/4 sm:w-2/3 md:w-full">
          <Image alt="Server Down" src={serverDown} priority />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 pt-6 md:items-start md:place-self-center md:pt-0">
          <h1 className="text-2xl font-black tracking-wide md:text-4xl">
            Oops!
          </h1>
          <h2 className="text-xl font-semibold tracking-wide text-[#00BFA6] md:text-2xl">
            Something went wrong!
          </h2>
          <button
            onClick={() => reset()}
            className="h-12 w-36 rounded bg-yellow-400 text-lg  font-black capitalize text-zinc-800 transition-colors hover:bg-yellow-500 focus-visible:bg-yellow-500 md:h-16 md:w-48 md:text-xl"
          >
            Try again
          </button>
        </div>
      </section>
    </main>
  );
}
