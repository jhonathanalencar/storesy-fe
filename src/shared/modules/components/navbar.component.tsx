import Link from 'next/link';
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/solid';

import { MenuButton } from './menu-button.component';

export function Navbar() {
  return (
    <header className=" bg-zinc-950 shadow-md">
      <div className="navbar-content-grid mx-auto grid h-16 w-full max-w-5xl items-center gap-2 px-4 py-2">
        <div className="navbar-logo h-full">
          <Link
            href="/"
            className="inline-flex h-full items-center rounded-sm p-1 outline-1 transition-colors hover:outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <span className="text-2xl font-black tracking-tight text-green-400">
              Storesy
            </span>
          </Link>
        </div>

        <div className="navbar-search h-full">
          <form className="flex h-full rounded bg-zinc-800 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950">
            <input
              type="text"
              placeholder="Search"
              className="block h-full w-full bg-transparent p-2 text-zinc-400 outline-none"
            />
            <button
              type="submit"
              className="flex w-12 items-center justify-center rounded-br rounded-tr bg-green-500 transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-zinc-900" />
            </button>
          </form>
        </div>

        <nav className="navbar-nav flex h-full gap-2">
          <Link
            href="/signin"
            className="inline-flex h-full items-center rounded-sm px-2 text-lg text-zinc-200 outline-1 hover:outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <UserIcon className="h-6 w-6 text-green-500" />
            <span className="self-end text-sm">Sign in</span>
          </Link>
          <Link
            href="/cart"
            className="inline-flex h-full items-center rounded-sm px-2 text-lg text-zinc-200 outline-1 hover:outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <ShoppingCartIcon className="h-6 w-6 text-green-500" />
            <span className="self-end text-sm">Cart</span>
          </Link>
        </nav>
      </div>
      <div className="w-full bg-zinc-700 py-1">
        <div className="mx-auto grid w-full max-w-5xl">
          <MenuButton />
        </div>
      </div>
    </header>
  );
}
