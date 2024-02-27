import Link from 'next/link';
import Image from 'next/image';

import type { TProduct } from '@shared/modules/types/product.type';
import {
  calculateProductDiscount,
  formatPrice,
} from '@shared/modules/utils/format.utils';

import { ProductRating } from './product-rating.component';

interface ProductDetailsCardProps {
  product: TProduct & {
    rateAmount: number;
    totalScore: number;
  };
}

export function ProductDetailsCard({ product }: ProductDetailsCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="w-fit">
      <div className="relative flex h-full w-64 animate-fade-in flex-col gap-1 rounded bg-zinc-800 p-2 shadow-xl shadow-zinc-900">
        {product.active ? (
          <div className="absolute left-2 top-2 z-10 rounded-br bg-red-600 px-3 py-1">
            <span className="text-sm font-bold text-zinc-100">Deal</span>
          </div>
        ) : null}
        <div className="h-56 w-full animate-shimmer bg-shimmer">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width="0"
            height="0"
            sizes="100vw"
            priority
            className="h-full w-full rounded object-cover transition-all hover:brightness-50"
          />
        </div>
        <span
          title={product.name}
          className="line-clamp-4 w-full text-base font-medium text-zinc-200"
        >
          {product.name}
        </span>
        <ProductRating
          ratings={[]}
          rateAmount={product.rateAmount}
          totalScore={product.totalScore}
        />
        {product.active ? (
          <div className="flex items-end gap-1">
            <strong className="text-xl font-bold text-zinc-200">
              {formatPrice(
                calculateProductDiscount(product.price, product.discountPercent)
              )}
            </strong>
            <span className="text-sm text-zinc-400 line-through">
              {formatPrice(product.price)}
            </span>
          </div>
        ) : (
          <strong className="text-xl font-bold text-zinc-200">
            {formatPrice(product.price)}
          </strong>
        )}
      </div>
    </Link>
  );
}
