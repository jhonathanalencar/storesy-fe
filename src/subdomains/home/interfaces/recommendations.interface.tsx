import type { TProduct } from '@shared/modules/types/product.type';

import { ProductSlider } from '../components/product-slider';

interface RecommendationsInterfaceProps {
  products: TProduct[];
}

export function RecommendationsInterface({
  products,
}: RecommendationsInterfaceProps) {
  return (
    <section className="mx-auto w-full max-w-5xl p-2">
      <div className="flex flex-col gap-2 rounded-md bg-zinc-950 p-2 shadow-lg drop-shadow-md">
        <h3 className="text-xl font-bold text-zinc-200">Deals</h3>
        <ProductSlider products={products} />
      </div>
      <h3 className="text-lg font-bold text-zinc-200">Gaming accessories</h3>
      <ul>
        {products.map((product) => {
          return <li key={product.product_id}>{product.name}</li>;
        })}
      </ul>
      <h3 className="text-lg font-bold text-zinc-200">New arrivals</h3>
      <ul>
        {products.map((product) => {
          return <li key={product.product_id}>{product.name}</li>;
        })}
      </ul>
      <h3 className="text-lg font-bold text-zinc-200">Best Sellers</h3>
      <ul>
        {products.map((product) => {
          return <li key={product.product_id}>{product.name}</li>;
        })}
      </ul>
    </section>
  );
}
