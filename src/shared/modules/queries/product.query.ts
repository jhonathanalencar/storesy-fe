import type { TProduct } from '../types/product.type';

export async function getProducts(): Promise<TProduct[]> {
  const response = await fetch(`${process.env.CATALOG_API_URL}/products`);
  return response.json();
}

export async function getProductBySlug(slug: string): Promise<TProduct> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/slug/${slug}/products`
  );
  return response.json();
}

export async function getProductsByCategory(
  categorySlug: string
): Promise<(TProduct & { rateAmount: number; totalScore: number })[]> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/category/${categorySlug}/products`
  );
  return response.json();
}

export async function getProductDeals(): Promise<TProduct[]> {
  const response = await fetch(`${process.env.CATALOG_API_URL}/deals`);
  return response.json();
}

export async function getNewArrivals(): Promise<TProduct[]> {
  const response = await fetch(`${process.env.CATALOG_API_URL}/new-arrivals`);
  return response.json();
}

export async function getBestSellers(
  start: string,
  stop: string
): Promise<TProduct[]> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/best-sellers?start=${start}&stop=${stop}`
  );
  return response.json();
}

export type SearchProductsResponse = {
  total: number;
  products: (TProduct & { rateAmount: number; totalScore: number })[];
};

export async function searchProducts(
  query: string,
  page: number,
  limit: number
): Promise<SearchProductsResponse> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/search?query=${query}&page=${page}&limit=${limit}`
  );
  return response.json();
}
