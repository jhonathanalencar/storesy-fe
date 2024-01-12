import type { TCartProduct } from '@/shared/modules/types/cart.type';

import { Section } from '@shared/modules/components/section.component';
import { Separator } from '@shared/modules/components/separator.component';
import { SavedProductsList } from '../components/saved-products-list.component';
import { ClientOnly } from '@/shared/modules/components/client-only';

interface CartInterfaceProps {
  products: TCartProduct[];
}

export function CartInterface({ products }: CartInterfaceProps) {
  return (
    <Section>
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-[1fr_auto]">
        <div className="w-full bg-zinc-600 p-4">
          <h1 className="text-2xl text-zinc-100">Shopping Cart</h1>
          <p className="text-sm font-light tracking-wide text-zinc-300">
            Deselect all items
          </p>
          <Separator className="bg-zinc-800" />
          <ClientOnly>
            <SavedProductsList products={products} />
          </ClientOnly>
          <p className="ml-auto w-fit text-lg font-light text-zinc-100">
            Subtotal: <span className="font-bold">$63.23</span>
          </p>
        </div>

        <div className="row-start-1 w-fit bg-zinc-600 p-4 shadow-md lg:row-auto">
          <p>No items selected</p>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </Section>
  );
}
