import Link from 'next/link';
import Image from 'next/image';

import type { TProduct } from '../types/product.type';

interface ProductCardProps {
  product: TProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="flex w-fit animate-fade-in flex-col gap-1 rounded bg-zinc-800 p-2 shadow-lg">
        <div className="h-56 w-48 animate-shimmer bg-shimmer">
          <Image
            src={product.image_url}
            alt={product.name}
            width="0"
            height="0"
            sizes="100vw"
            priority
            className="h-56 w-48 rounded object-cover transition-all hover:brightness-50"
          />
        </div>
        <span
          title={product.name}
          className="line-clamp-1 w-48 text-base font-medium text-zinc-200"
        >
          {product.name}
        </span>
      </div>
    </Link>
  );
}
