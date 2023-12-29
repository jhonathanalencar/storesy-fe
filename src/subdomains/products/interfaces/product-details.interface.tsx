import Image from 'next/image';

import type { TProduct } from '@shared/modules/types/product.type';

import { ProductRating } from '../components/product-rating.component';
import { ProductPrice } from '../components/product-price.component';
import { Separator } from '@shared/modules/components/separator.component';
import { CustomerReviews } from '../components/customer-reviews.component';
import { Section } from '@shared/modules/components/section.component';
import { ProductActions } from '../components/product-actions.component';

interface ProductDetailsInterfaceProps {
  product: TProduct;
}

export function ProductDetailsInterface({
  product,
}: ProductDetailsInterfaceProps) {
  const discount = (product.price / 100) * product.discount_percent;
  const price = product.price / 100 - discount;

  return (
    <Section className="max-w-xl md:max-w-6xl">
      <div className="product-content-grid grid gap-4">
        <div className="product-image">
          <Image
            alt={product.name}
            src={product.image_url}
            width="0"
            height="0"
            sizes="100vw"
            priority
            className="aspect-video h-fit w-full rounded object-cover"
          />
        </div>

        <div className="product-details flex flex-col">
          <h1 className="text-xl font-semibold tracking-wide text-zinc-100">
            {product.name}
          </h1>
          <ProductRating ratings={product.ratings} />

          <Separator />

          {product.is_deal ? (
            <span className="w-fit rounded bg-red-700 px-3 py-1 text-zinc-100">
              Deal
            </span>
          ) : null}

          <ProductPrice
            isDeal={product.is_deal}
            productPrice={product.price}
            discountPercent={product.discount_percent}
          />

          <Separator />

          <h3 className="text-lg font-medium text-zinc-200">
            Product description
          </h3>
          <p className="text-base tracking-wide text-zinc-400">
            {product.description}
          </p>
        </div>

        <ProductActions product={product} price={price} />
      </div>

      <Separator />

      <CustomerReviews ratings={product.ratings} />
    </Section>
  );
}
