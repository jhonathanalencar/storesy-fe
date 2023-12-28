import Link from 'next/link';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

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
        'absolute left-0 top-12 h-full w-full transition-transform duration-200',
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
        'absolute left-0 top-12 h-full w-full transition-transform duration-200',
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
    <li className={`${className}`}>
      <button onClick={callback}>{children}</button>
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
    <li className={`${className}`}>
      <Link href={href}>{children}</Link>
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
    <li className={`${className}`}>
      <MenuArrowLeft />
      <button onClick={callback}>{children}</button>
      <MenuSeparator />
    </li>
  );
}

interface MenuTitleProps {
  children: ReactNode;
  className?: string;
}

function MenuTitle({ children, className = '' }: MenuTitleProps) {
  return (
    <li className={`${className}`}>
      <span className={`${className}`}>{children}</span>
    </li>
  );
}

interface MenuSeparatorProps {
  className?: string;
}

function MenuSeparator({ className = '' }: MenuSeparatorProps) {
  return <li className={`h-2 w-full bg-zinc-500 ${className}`} />;
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
  return <ChevronLeftIcon className={`h-6 w-6 text-green-500 ${className}`} />;
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
