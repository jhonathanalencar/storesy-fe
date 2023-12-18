import { ProductCard } from '@shared/modules/components/product-card.component';
import { TProduct } from '@shared/modules/types/product.type';

interface RecommendationsInterfaceProps {
  products: TProduct[];
}

export function RecommendationsInterface({
  products,
}: RecommendationsInterfaceProps) {
  return (
    <section className="mx-auto w-full max-w-5xl">
      <h3 className="text-lg font-bold text-zinc-200">Deals</h3>
      <div className="flex gap-2 ">
        {products.map((product) => {
          return <ProductCard key={product.product_id} product={product} />;
        })}
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
