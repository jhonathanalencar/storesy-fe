import { TProduct } from '../types/product.type';

export async function getProducts(): Promise<TProduct[]> {
  const response = await fetch('http://localhost:8000/products');
  return response.json();
}
