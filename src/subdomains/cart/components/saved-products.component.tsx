import { CartProduct } from './cart-product.component';
import { CartItem } from '../entities';

interface SavedProductsProps {
  products: CartItem[];
}

export function SavedProducts({ products }: SavedProductsProps) {
  const content = products.map((product) => {
    return (
      <CartProduct
        key={product.product_id}
        productId={product.product_id}
        productSlug={product.slug}
        productUrl={product.image_url}
        productTitle={product.name}
        productQuantity={product.quantity}
        quantityAvailable={product.quantity_available}
        subtotal={product.price}
      />
    );
  });
  return <div className="flex w-full flex-col">{content}</div>;
}
