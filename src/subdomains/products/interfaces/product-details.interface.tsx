import type { TProduct } from '@shared/modules/types/product.type';

interface ProductDetailsInterfaceProps {
  product: TProduct;
}

export function ProductDetailsInterface({
  product,
}: ProductDetailsInterfaceProps) {
  return (
    <section className="mx-auto w-full max-w-5xl p-2">
      <h1>{product.name}</h1>
    </section>
  );
}
