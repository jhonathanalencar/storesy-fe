import Image from 'next/image';

import { formatPrice } from '@shared/modules/utils/format.utils';
import type { TProduct } from '@shared/modules/types/product.type';

import { ProductAvailability } from '../components/product-availability.component';
import { QuantitySelect } from '../components/quantity-select.component';
import { ProductRating } from '../components/product-rating.component';

interface ProductDetailsInterfaceProps {
  product: TProduct;
}

export function ProductDetailsInterface({
  product,
}: ProductDetailsInterfaceProps) {
  const discount = (product.price / 100) * product.discount_percent;
  const price = product.price / 100 - discount;

  return (
    <section className="mx-auto w-full max-w-xl px-2 py-4 md:max-w-6xl">
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

          <div className="my-2 h-px w-full bg-slate-700" />

          {product.is_deal ? (
            <span className="w-fit bg-red-700 p-2 text-zinc-100">Deal</span>
          ) : null}
          {product.is_deal ? (
            <>
              <p>
                -{product.discount_percent * 100}%{' '}
                {formatPrice(product.price / 100 - discount)}
              </p>
              <span className="line-through">
                {formatPrice(product.price / 100)}
              </span>
            </>
          ) : null}

          <div className="my-2 h-px w-full bg-slate-700" />

          <h3 className="text-lg font-medium text-zinc-200">
            Product Description
          </h3>
          <p className="text-base tracking-wide text-zinc-400">
            {product.description}
          </p>
        </div>

        <div className="product-actions flex h-fit w-full  flex-col rounded-lg bg-zinc-800 p-2 shadow-md md:file:p-4">
          <span className="text-lg font-black tracking-tight text-zinc-200">
            {formatPrice(price)}
          </span>
          <ProductAvailability
            quantity_available={product.quantity_available}
          />
          <QuantitySelect quantityAvailable={product.quantity_available} />
          <div className="mb-2 mt-4 flex flex-col gap-2">
            <button className="mx-auto w-4/5 rounded bg-violet-700 py-2 font-semibold text-black transition-colors hover:bg-violet-800 md:w-52">
              Add to Cart
            </button>
            <button className="mx-auto w-4/5 rounded bg-yellow-600 py-2 font-semibold text-black transition-colors hover:bg-yellow-700 md:w-52">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="my-2 h-px w-full bg-slate-700" />

      <div className="grid grid-cols-2">
        <div>
          <h2>Customer reviews</h2>
          <span>***** 4.7 out of 5</span>
          <span>{product.ratings.length} ratings</span>
        </div>
        <div>
          {product.ratings.map((rating) => {
            return <p key={rating.rate_id}>{rating.content}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
