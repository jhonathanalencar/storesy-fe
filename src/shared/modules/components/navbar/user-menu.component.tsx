import { signOut } from 'next-auth/react';
import type { Session } from 'next-auth';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import {
  ArrowLeftStartOnRectangleIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';

interface UserMenuProps {
  user: Session['user'];
}

export function UserMenu({ user }: UserMenuProps) {
  function handleSignOut() {
    signOut();
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="inline-flex h-full items-center rounded-sm px-2 text-lg text-zinc-200 outline-1 hover:outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
          <span className="text-xs">Hello, {user?.name?.split(' ')[0]}</span>
          <ChevronDownIcon className="h-5 w-5 text-zinc-200" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[220px] rounded-md border border-gray-700 bg-gray-800 text-gray-100 shadow data-[side=bottom]:animate-slide-up-and-fade">
          <div className="flex max-w-[280px] gap-2 p-2">
            <Avatar.Root className="h-12 w-12  select-none overflow-hidden rounded-full">
              <Avatar.Image
                src={user?.image ?? ''}
                alt={user?.name ?? 'user profile picture'}
                className="h-full w-full"
              />
              <Avatar.Fallback className="flex min-h-full min-w-full items-center justify-center bg-gray-700 leading-none">
                {user?.name?.split(' ')?.[0]?.[0]}
                {user?.name?.split(' ')?.[1]?.[0]}
              </Avatar.Fallback>
            </Avatar.Root>
            <span>{user?.name}</span>
          </div>

          <DropdownMenu.Separator className="h-px w-full bg-gray-600" />

          <DropdownMenu.Item className="flex cursor-pointer items-center gap-2 rounded p-2 outline-none hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-green-500">
            <ShoppingBagIcon className="h-6 w-6 text-green-500" />
            <span>Orders</span>
          </DropdownMenu.Item>

          <DropdownMenu.Item
            onClick={handleSignOut}
            className="flex cursor-pointer items-center gap-2 rounded p-2 outline-none hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-green-500"
          >
            <ArrowLeftStartOnRectangleIcon className="h-6 w-6 text-green-500" />
            <span>Sign Out</span>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="fill-gray-700" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
