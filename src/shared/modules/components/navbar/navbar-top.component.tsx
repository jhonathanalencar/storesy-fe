import Link from 'next/link';
import { type Session, getServerSession } from 'next-auth';

import { Cart } from '@subdomains/cart/entities';
import { authOptions } from '../../configs/auth.config';

import { ShoppingCartButton } from './shopping-cart-button.component';
import { LoginButton } from './login-button.component';
import { SearchBar } from './search-bar.component';

interface NavbarTopProps {
  cart: Cart | null;
}

export async function NavbarTop({ cart }: NavbarTopProps) {
  const session = await getServerSession(authOptions);

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
        <SearchBar />
      </div>

      <nav className="navbar-nav flex h-full gap-2">
        <LoginButton user={session?.user as Session['user']} />

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
