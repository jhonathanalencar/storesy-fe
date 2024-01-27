import { CartItem } from '../entities';

import { CartProduct } from './cart-product.component';
import { Separator } from '@shared/modules/components/separator.component';

interface SavedProductsProps {
  products: CartItem[];
}

export function SavedProducts({ products }: SavedProductsProps) {
  const content = products.map((product) => {
    return (
      <div key={product.product_id}>
        <CartProduct product={product} />
        <Separator className="bg-zinc-800" />
      </div>
    );
  });
  return <div className="flex w-full flex-col">{content}</div>;
}
