import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';

import { ReactNode } from 'react';

interface ShoppingCartButtonProps {
  children: ReactNode;
  className?: string;
}

export function ShoppingCartButton({
  children,
  className = '',
}: ShoppingCartButtonProps) {
  return (
    <Link
      title="Cart"
      href="/cart"
      className={twMerge(
        'flex h-full items-center rounded-sm px-2 text-lg text-zinc-200 outline-1 hover:outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2',
        className
      )}
    >
      <ShoppingCartIcon className="h-6 w-6 text-green-500" />
      {children}
    </Link>
  );
}
