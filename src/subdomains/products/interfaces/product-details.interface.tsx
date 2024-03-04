import Image from 'next/image';

import type {
  GetProductBySlugResponse,
  GetProductRatingsResponse,
} from '@shared/modules/queries/product.query';

import { ProductRating } from '../components/product-rating.component';
import { ProductPrice } from '../components/product-price.component';
import { Separator } from '@shared/modules/components/separator.component';
import { CustomerReviews } from '../components/customer-reviews.component';
import { Section } from '@shared/modules/components/section.component';
import { ProductActions } from '../components/product-actions.component';

interface ProductDetailsInterfaceProps {
  product: GetProductBySlugResponse;
  ratings: GetProductRatingsResponse['ratings'];
  currentPage: number;
  totalPages: number;
}

export function ProductDetailsInterface({
  product,
  ratings,
  currentPage,
  totalPages,
}: ProductDetailsInterfaceProps) {
  const discount = product.price * (product.discountPercent / 100);
  const price = product.price - discount;

  return (
    <Section className="max-w-xl md:max-w-6xl">
      <div className="product-content-grid grid gap-4">
        <div className="product-image">
          <Image
            alt={product.name}
            src={product.imageUrl}
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
          <ProductRating
            ratings={[]}
            rateAmount={product.rateAmount}
            totalScore={product.totalScore}
          />

          <Separator />

          {product.active ? (
            <span className="w-fit rounded bg-red-700 px-3 py-1 text-zinc-100">
              Deal
            </span>
          ) : null}

          <ProductPrice
            isDeal={product.active}
            productPrice={product.price}
            discountPercent={product.discountPercent}
          />

          <Separator />

          <h3 className="text-lg font-medium text-zinc-200">
            Product description
          </h3>
          <p className="text-sm leading-normal tracking-wide text-zinc-300">
            {product.description}
          </p>
        </div>

        <ProductActions product={product} price={price} />
      </div>

      <Separator className="my-4" />

      <CustomerReviews
        ratings={ratings}
        slug={product.slug}
        currentPage={currentPage}
        totalPages={totalPages}
        rateAmount={product.rateAmount}
        totalScore={product.totalScore}
      />
    </Section>
  );
}
