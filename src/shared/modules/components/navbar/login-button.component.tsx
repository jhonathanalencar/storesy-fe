'use client';

import { UserIcon } from '@heroicons/react/24/solid';
import { DefaultSession } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';

interface LoginButtonProps {
  user: DefaultSession['user'];
}

export function LoginButton({ user }: LoginButtonProps) {
  function handleSignIn() {
    signIn('google');
  }

  function handleSignOut() {
    signOut();
  }

  const content = user ? (
    <button
      onClick={handleSignOut}
      className="inline-flex h-full items-center rounded-sm px-2 text-lg text-zinc-200 outline-1 hover:outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    >
      <UserIcon className="h-6 w-6 text-green-500" />
      <span className="self-end text-sm">{user.name}</span>
    </button>
  ) : (
    <button
      onClick={handleSignIn}
      className="inline-flex h-full items-center rounded-sm px-2 text-lg text-zinc-200 outline-1 hover:outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    >
      <UserIcon className="h-6 w-6 text-green-500" />
      <span className="self-end text-sm">Sign In</span>
    </button>
  );

  return content;
}
