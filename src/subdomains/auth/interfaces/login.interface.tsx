'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';

import { Section } from '@shared/modules/components/section.component';
import { Logo } from '@shared/modules/components/logo';

interface LoginInterfaceProps {
  redirectTo: string;
}

export function LoginInterface({ redirectTo }: LoginInterfaceProps) {
  async function handleLogin() {
    signIn('google', { redirect: true, callbackUrl: redirectTo });
  }

  return (
    <Section>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex w-full max-w-[338px] flex-col gap-2 rounded border border-zinc-700 px-3 py-2">
          <span className="text-2xl font-semibold text-zinc-100">Sign in</span>
          <button
            onClick={handleLogin}
            className="h-12 w-full max-w-xs rounded bg-green-500 px-3 shadow-sm transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-storesy-gray-900"
          >
            <span className="font-bold text-green-950">
              Sign in with Google
            </span>
          </button>
        </div>
      </div>
    </Section>
  );
}
