'use client';

import Link from 'next/link';

import { Logo } from './logo.component';
import { Section } from './section.component';

function scrollToTop() {
  if (typeof window === 'undefined') return;
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export function Footer() {
  return (
    <footer className="bg-zinc-800">
      <div className="flex justify-center bg-zinc-700 drop-shadow-sm transition-colors hover:bg-zinc-600">
        <button onClick={scrollToTop} className="w-full py-3">
          <span className="text-base font-semibold text-zinc-100">
            Back to top
          </span>
        </button>
      </div>
      <Section className="pb-8 pt-8">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Logo />
          </Link>
          <span className="flex self-end text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} Storesy
          </span>
        </div>
      </Section>
    </footer>
  );
}
