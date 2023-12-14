import { TProduct } from '@/shared/modules/types/product.type';

interface RecommendationsInterfaceProps {
  products: TProduct[];
}

export function RecommendationsInterface({
  products,
}: RecommendationsInterfaceProps) {
  return (
    <section className="mx-auto w-full max-w-5xl bg-red-100">
      <h3>Deals</h3>
      <ul>
        {products.map((product) => {
          return <li key={product.product_id + 'Deals'}>{product.name}</li>;
        })}
      </ul>
      <h3>Gaming accessories</h3>
      <ul>
        {products.map((product) => {
          return <li key={product.product_id + 'Gaming'}>{product.name}</li>;
        })}
      </ul>
      <h3>New arrivals</h3>
      <ul>
        {products.map((product) => {
          return <li key={product.product_id + 'New'}>{product.name}</li>;
        })}
      </ul>
      <h3>Best Sellers</h3>
      <ul>
        {products.map((product) => {
          return <li key={product.product_id + 'Best'}>{product.name}</li>;
        })}
      </ul>
    </section>
  );
}
