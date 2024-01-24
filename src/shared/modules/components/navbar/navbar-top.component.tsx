import Link from 'next/link';
import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/solid';

import { Cart } from '@subdomains/cart/entities';

import { ShoppingCartButton } from './shopping-cart-button.component';

interface NavbarTopProps {
  cart: Cart | null;
}

export function NavbarTop({ cart }: NavbarTopProps) {
  return (
    <div className="navbar-content-grid mx-auto grid h-16 w-full max-w-5xl items-center gap-2 px-4 py-2">
      <div className="navbar-logo h-full">
        <Link
          href="/"
          className="inline-flex h-full items-center rounded-sm p-1 outline-1 transition-colors hover:outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          <span className="text-2xl font-black tracking-tight text-green-400">
            Storesy
          </span>
        </Link>
      </div>

      <div className="navbar-search h-full">
        <form className="ml-auto flex h-full w-fit rounded bg-zinc-800 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950 sm:ml-0 sm:w-full">
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="hidden h-full w-full bg-transparent p-2 text-zinc-400 outline-none sm:block"
          />
          <button
            type="submit"
            className="flex w-12 items-center justify-center rounded bg-green-500 transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 sm:rounded-bl-none sm:rounded-br sm:rounded-tl-none sm:rounded-tr"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-zinc-900" />
          </button>
        </form>
      </div>

      <nav className="navbar-nav flex h-full gap-2">
        <Link
          href="/signin"
          className="inline-flex h-full items-center rounded-sm px-2 text-lg text-zinc-200 outline-1 hover:outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          <UserIcon className="h-6 w-6 text-green-500" />
          <span className="self-end text-sm">Sign in</span>
        </Link>
        <ShoppingCartButton className="focus-visible:ring-offset-zinc-950">
          <div className="flex flex-col self-end">
            <span className="self-start text-base font-bold text-yellow-500">
              {cart?.getSize() ?? 0}
            </span>
            <span className="text-sm">Cart</span>
          </div>
        </ShoppingCartButton>
      </nav>
    </div>
  );
}
