import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

import { Cart } from '@subdomains/cart/entities';
import type { TCategory } from '../../types/category.type';
import { authOptions } from '../../configs/auth.config';

import { MenuButton } from './menu-button.component';
import { ShoppingCartButton } from './shopping-cart-button.component';
import { LogoutButton } from './logout-button.component';

interface NavbarBottomProps {
  cart: Cart | null;
  categories: TCategory[];
}

export async function NavbarBottom({ cart, categories }: NavbarBottomProps) {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full bg-zinc-700 px-4 py-1">
      <div className="mx-auto flex w-full max-w-5xl items-stretch gap-2">
        <div className="flex h-full w-fit rounded-sm outline-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-zinc-700 hover:outline">
          <MenuButton categories={categories} />
        </div>
        <div className="w-fit sm:hidden">
          {session?.user ? (
            <div className="flex h-full items-center justify-center">
              <Link
                title="Orders"
                href="/orders"
                className="flex h-full items-center rounded-sm px-2 text-lg text-zinc-200 outline-1 hover:outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-700"
              >
                <ShoppingBagIcon className="h-6 w-6 text-green-500" />
              </Link>
              <LogoutButton />
            </div>
          ) : (
            <Link
              title="Sign in"
              href="/login"
              className="flex h-full items-center rounded-sm px-2 text-lg text-zinc-200 outline-1 hover:outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-700"
            >
              <UserIcon className="h-6 w-6 text-green-500" />
            </Link>
          )}
        </div>
        <div className="w-fit sm:hidden">
          <ShoppingCartButton className="focus-visible:ring-offset-zinc-700">
            <span className="self-start text-base font-bold text-yellow-500">
              {cart?.getSize() ?? 0}
            </span>
          </ShoppingCartButton>
        </div>
      </div>
    </div>
  );
}
