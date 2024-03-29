import type { ReactNode } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { ChevronRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

interface MenuRootProps {
  children: ReactNode;
  className?: string;
}

function MenuRoot({ children, className = '' }: MenuRootProps) {
  return (
    <div id="menu-content" className={`overflow-x-hidden ${className}`}>
      {children}
    </div>
  );
}

interface MenuMainProps {
  activeMenuId: string;
  children: ReactNode;
  className?: string;
}

function MenuMain({ activeMenuId, children, className = '' }: MenuMainProps) {
  return (
    <ul
      data-menu-id="1"
      className={twMerge(
        'absolute left-0 top-12 h-full w-full transition-transform duration-300',
        className,
        activeMenuId === '1'
          ? 'visible translate-x-0'
          : 'invisible -translate-x-full '
      )}
    >
      {children}
    </ul>
  );
}

interface MenuSubmenuProps {
  menuId: string;
  activeMenuId: string;
  children: ReactNode;
  className?: string;
}

function MenuSubmenu({
  menuId,
  activeMenuId,
  children,
  className = '',
}: MenuSubmenuProps) {
  return (
    <ul
      data-menu-id={menuId}
      className={twMerge(
        'absolute left-0 top-12 h-full w-full transition-transform duration-300',
        className,
        activeMenuId === menuId
          ? 'visible translate-x-0'
          : 'invisible translate-x-full '
      )}
    >
      {children}
    </ul>
  );
}

interface MenuItemProps {
  callback: () => void;
  children: ReactNode;
  className?: string;
}

function MenuItem({ callback, children, className = '' }: MenuItemProps) {
  return (
    <li className={`bg-zinc-600 px-2 py-1 hover:bg-zinc-500 ${className}`}>
      <button
        onClick={callback}
        className="flex w-full items-center justify-between rounded py-2 pl-4 font-light text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
      >
        {children}
      </button>
    </li>
  );
}

interface MenuItemLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

function MenuItemLink({ href, children, className = '' }: MenuItemLinkProps) {
  return (
    <li className={`bg-zinc-600 px-2 py-1 hover:bg-zinc-500 ${className}`}>
      <Link
        href={href}
        className="inline-block w-full rounded py-2 pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
      >
        <span className="font-light text-zinc-200">{children}</span>
      </Link>
    </li>
  );
}

interface MenuBackButtonProps {
  callback: () => void;
  children: ReactNode;
  className?: string;
}

function MenuBackButton({
  callback,
  children,
  className = '',
}: MenuBackButtonProps) {
  return (
    <>
      <li
        className={`cursor-pointer bg-zinc-600 px-2 py-1 transition-colors hover:bg-zinc-500 ${className}`}
      >
        <button
          onClick={callback}
          className="flex h-full w-full items-center gap-2 rounded py-3 pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        >
          <MenuArrowLeft />
          <span className="font-medium uppercase tracking-wide text-zinc-200">
            {children}
          </span>
        </button>
      </li>
      <MenuSeparator />
    </>
  );
}

interface MenuTitleProps {
  children: ReactNode;
  className?: string;
}

function MenuTitle({ children, className = '' }: MenuTitleProps) {
  return (
    <li className={`px-2 py-1 ${className}`}>
      <span
        className={`py-3 pl-4 text-lg font-semibold tracking-wide text-zinc-100 ${className}`}
      >
        {children}
      </span>
    </li>
  );
}

interface MenuSeparatorProps {
  className?: string;
}

function MenuSeparator({ className = '' }: MenuSeparatorProps) {
  return <li className={`h-px w-full bg-zinc-400 ${className}`} />;
}

interface MenuArrowRightProps {
  className?: string;
}

function MenuArrowRight({ className = '' }: MenuArrowRightProps) {
  return <ChevronRightIcon className={`h-6 w-6 text-green-500 ${className}`} />;
}

interface MenuArrowLeftProps {
  className?: string;
}

function MenuArrowLeft({ className = '' }: MenuArrowLeftProps) {
  return <ArrowLeftIcon className={`h-6 w-6 text-green-500 ${className}`} />;
}

export const Menu = {
  Root: MenuRoot,
  Main: MenuMain,
  Submenu: MenuSubmenu,
  Item: MenuItem,
  Link: MenuItemLink,
  Back: MenuBackButton,
  Title: MenuTitle,
  Separator: MenuSeparator,
  ArrowRight: MenuArrowRight,
  ArrowLeft: MenuArrowLeft,
};
