import Image from 'next/image';
import Link from 'next/link';

import { AppLayout } from '@shared/modules/layouts/app.layout';

import pageNotFound from '@assets/images/undraw-page-not-found.svg';

export default function NotFoundPage() {
  return (
    <AppLayout>
      <section className="container mx-auto grid h-full grid-cols-1 place-content-center gap-2 p-2 md:grid-cols-2 ">
        <div className="mx-auto w-3/4 sm:w-2/3 md:w-full">
          <Image alt="Server Down" src={pageNotFound} priority />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 pt-6 md:items-start md:place-self-center md:pt-0">
          <h1 className="text-2xl font-black tracking-wide md:text-4xl">404</h1>
          <h2 className="text-xl font-semibold tracking-wide text-[#00BFA6] md:text-2xl">
            Page Not Found
          </h2>
          <Link
            href={'/'}
            className="rounded bg-yellow-400 px-4 py-3  text-lg font-black capitalize text-zinc-800 transition-colors hover:bg-yellow-500 focus-visible:bg-yellow-500 md:text-xl"
          >
            Go Back Home
          </Link>
        </div>
      </section>
    </AppLayout>
  );
}
