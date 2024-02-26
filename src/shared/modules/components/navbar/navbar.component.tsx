import { getCart } from '@subdomains/cart/utils';
import { getCategories } from '../../queries/category.query';

import { NavbarBottom } from './navbar-bottom.component';
import { NavbarTop } from './navbar-top.component';

export async function Navbar() {
  const cart = await getCart();
  const categories = await getCategories();
  return (
    <header className="bg-zinc-950 shadow-md">
      <NavbarTop cart={cart} />
      <NavbarBottom cart={cart} categories={categories} />
    </header>
  );
}
