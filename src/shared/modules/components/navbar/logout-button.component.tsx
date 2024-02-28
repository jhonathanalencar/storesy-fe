'use client';

import { signOut } from 'next-auth/react';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid';

export function LogoutButton() {
  function handleSignOut() {
    signOut();
  }

  return (
    <button
      title="Sign Out"
      onClick={handleSignOut}
      className="flex h-full items-center rounded-sm px-2 text-lg text-zinc-200 outline-1 hover:outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-700"
    >
      <ArrowLeftStartOnRectangleIcon className="h-6 w-6 text-green-500" />
    </button>
  );
}
