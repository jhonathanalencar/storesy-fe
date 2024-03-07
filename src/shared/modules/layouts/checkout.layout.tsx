import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

import { Logo } from '../components/logo.component';
import { Section } from '../components/section.component';

export function CheckoutLayout({
  children,
  itemsQuantity,
}: {
  children: React.ReactNode;
  itemsQuantity: number;
}) {
  return (
    <main className="min-h-full bg-storesy-gray-900 text-storesy-gray-200">
      <div className="border-b border-zinc-700 bg-zinc-800">
        <Section className="pb-0 pt-0">
          <div className="grid grid-cols-[1fr] items-center py-4 [grid-template-areas:'logo_logo''title_cart'] sm:grid-cols-[auto_1fr_auto] sm:[grid-template-areas:'logo_title_cart']">
            <Link
              href="/"
              className="rounded p-1 [grid-area:logo] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-800"
            >
              <Logo />
            </Link>
            <h1 className="text-center text-xl font-bold text-zinc-100 [grid-area:title]">
              Checkout ({itemsQuantity} {itemsQuantity > 1 ? 'items' : 'item'})
            </h1>
            <Link
              href="/cart"
              className="rounded p-1 [grid-area:cart] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-800"
            >
              <ShoppingCartIcon className="h-6 w-6 text-green-500" />
            </Link>
          </div>
        </Section>
      </div>
      {children}
    </main>
  );
}
