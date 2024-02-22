import { TProduct } from '../types/product.type';

export async function getProducts(): Promise<TProduct[]> {
  const response = await fetch(`${process.env.CATALOG_API_URL}/products`);
  return response.json();
}

export async function getProductBySlug(slug: string): Promise<TProduct> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/products/slug/${slug}`
  );
  return response.json();
}
