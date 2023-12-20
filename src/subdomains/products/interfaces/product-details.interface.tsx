import Image from 'next/image';

import { formatPrice } from '@shared/modules/utils/format.utils';
import type { TProduct } from '@shared/modules/types/product.type';

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

        <div className="product-details flex flex-col ">
          <h1>{product.name}</h1>
          <div>
            <span>{product.ratings?.[0]?.rate}</span>
            <span>{product.ratings.length} ratings</span>
          </div>
          <div className="h-0.5 w-full bg-slate-900" />
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
          <div className="h-0.5 w-full bg-slate-900" />
          <h3>Product Description</h3>
          <p>{product.description}</p>
        </div>
        <div className="product-actions flex w-full flex-col bg-zinc-800 p-2">
          <span>{formatPrice(price)}</span>
          <span>
            {product.quantity_available > 0 ? 'In Stock' : 'Sold out'}
          </span>
          <label htmlFor="quantity">Qty:</label>
          <select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={'...'}>...</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
          </select>
          <button>add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
      <div className="h-0.5 w-full bg-slate-900" />
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
