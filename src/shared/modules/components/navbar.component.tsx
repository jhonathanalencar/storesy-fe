'use client';

import Link from 'next/link';
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/solid';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

export function Navbar() {
  const [activeMenuId, setActiveMenuId] = useState('1');

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
          <Dialog.Root>
            <Dialog.Trigger>
              <Bars3Icon className="h-8 w-8 text-green-500" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/70" />
              <Dialog.Content className="fixed left-0 top-0 h-full w-11/12 max-w-xs overflow-hidden bg-zinc-600">
                <div className="flex h-12 w-full items-center gap-1 bg-zinc-700">
                  <UserCircleIcon className="h-8 w-8 text-green-500" />
                  <span className="text-zinc-300">Hello, sign in</span>
                  <Dialog.Close className="ml-auto">
                    <XMarkIcon className="h-8 w-8 text-green-500" />
                  </Dialog.Close>
                </div>
                <div id="menu-content" className="overflow-x-hidden">
                  <ul
                    data-menu-id="1"
                    className={`absolute left-0 top-12 h-full w-full transition-transform  duration-200 ${
                      activeMenuId === '1'
                        ? 'visible translate-x-0'
                        : 'invisible -translate-x-full '
                    }`}
                  >
                    <li>Shop By Department</li>
                    <li className="flex items-center justify-between">
                      <button onClick={() => setActiveMenuId('2')}>
                        <span>Electronics</span>
                        <ChevronRightIcon className="h-6 w-6 text-green-500" />
                      </button>
                    </li>
                  </ul>
                  <ul
                    data-menu-id="2"
                    className={`absolute left-0 top-12 h-full w-full transition-transform duration-200 ${
                      activeMenuId === '2'
                        ? 'visible translate-x-0'
                        : 'invisible translate-x-full '
                    }`}
                  >
                    <li>
                      <button onClick={() => setActiveMenuId('1')}>
                        <ChevronLeftIcon className="h-6 w-6 text-green-500" />
                        <span>Main menu</span>
                      </button>
                    </li>
                    <li>Electronics</li>
                    <li className="flex items-center justify-between">
                      <Link href="/products/accessories">
                        Accessories & Supplies
                      </Link>
                    </li>
                  </ul>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
