import { signIn, useSession } from 'next-auth/react';
import * as Dialog from '@radix-ui/react-dialog';
import { XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid';

import type { TCategory } from '../../types/category.type';

import { NavbarMenu } from './navbar-menu.component';

interface SidebarProps {
  categories: TCategory[];
}

export function Sidebar({ categories }: SidebarProps) {
  const { data } = useSession();

  function handleLogin() {
    signIn('google');
  }

  const content = data?.user ? (
    <span className="text-zinc-300">
      Hello, {data.user.name?.split(' ')?.[0]}
    </span>
  ) : (
    <button onClick={handleLogin} className="text-zinc-300">
      Hello, sign in
    </button>
  );

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-30 bg-black/70 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade" />
      <Dialog.Content className="fixed left-0 top-0 z-30 h-full w-11/12 max-w-xs overflow-hidden bg-zinc-600 data-[state=closed]:animate-right-slide-out data-[state=open]:animate-right-slide-in">
        <div className="flex h-12 w-full  items-center gap-1 bg-zinc-700 px-2 py-3 pl-6">
          <UserCircleIcon className="h-8 w-8 text-green-500" />
          <span className="text-zinc-300">{content}</span>
          <Dialog.Close className="ml-auto rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500">
            <XMarkIcon className="h-8 w-8 text-green-500" />
          </Dialog.Close>
        </div>
        <NavbarMenu categories={categories} />
      </Dialog.Content>
    </Dialog.Portal>
  );
}
