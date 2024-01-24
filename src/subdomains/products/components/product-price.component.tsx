import {
  calculateProductDiscount,
  formatPrice,
} from '@shared/modules/utils/format.utils';

interface ProductPrice {
  isDeal: boolean;
  productPrice: number;
  discountPercent: number;
}

export function ProductPrice({
  isDeal,
  productPrice,
  discountPercent,
}: ProductPrice) {
  const price = calculateProductDiscount(productPrice, discountPercent);
  const content = isDeal ? (
    <div className="mt-1 flex w-fit flex-col">
      <p className="flex gap-1 text-xl text-zinc-200">
        <span className="text-base text-red-400">
          -{discountPercent * 100}%
        </span>
        <span>{formatPrice(price)}</span>
      </p>
      <span className="self-end text-sm text-zinc-400 line-through">
        {formatPrice(productPrice / 100)}
      </span>
    </div>
  ) : (
    <p className="text-xl text-zinc-200">{formatPrice(price)}</p>
  );

  return content;
}
