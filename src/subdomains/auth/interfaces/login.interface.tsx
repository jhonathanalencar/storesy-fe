'use client';

import { signIn } from 'next-auth/react';

import { Section } from '@shared/modules/components/section.component';

interface LoginInterfaceProps {
  redirectTo: string;
}

export function LoginInterface({ redirectTo }: LoginInterfaceProps) {
  async function handleLogin() {
    signIn('google', { redirect: true, callbackUrl: redirectTo });
  }

  return (
    <Section>
      <button onClick={handleLogin}>Sign in with google</button>
    </Section>
  );
}
