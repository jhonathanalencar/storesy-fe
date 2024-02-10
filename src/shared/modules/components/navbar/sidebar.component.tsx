import * as Dialog from '@radix-ui/react-dialog';
import { XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid';

import { NavbarMenu } from './navbar-menu.component';

export function Sidebar() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-fade data-[state=closed]:animate-fade-out fixed inset-0 bg-black/70" />
      <Dialog.Content className="data-[state=open]:animate-right-slide-in data-[state=closed]:animate-right-slide-out fixed left-0 top-0 h-full w-11/12 max-w-xs overflow-hidden bg-zinc-600">
        <div className="flex h-12 w-full  items-center gap-1 bg-zinc-700 px-2 py-3 pl-6">
          <UserCircleIcon className="h-8 w-8 text-green-500" />
          <span className="text-zinc-300">Hello, sign in</span>
          <Dialog.Close className="ml-auto rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500">
            <XMarkIcon className="h-8 w-8 text-green-500" />
          </Dialog.Close>
        </div>
        <NavbarMenu />
      </Dialog.Content>
    </Dialog.Portal>
  );
}
