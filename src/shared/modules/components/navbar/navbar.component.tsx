import { getCart } from '@subdomains/cart/utils';

import { NavbarBottom } from './navbar-bottom.component';
import { NavbarTop } from './navbar-top.component';

export async function Navbar() {
  const cart = await getCart();
  return (
    <header className="bg-zinc-950 shadow-md">
      <NavbarTop cart={cart} />
      <NavbarBottom cart={cart} />
    </header>
  );
}
