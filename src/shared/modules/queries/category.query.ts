import type { TCategory } from '../types/category.type';

export async function getCategories(): Promise<TCategory[]> {
  const response = await fetch(`${process.env.CATALOG_API_URL}/category`);
  return response.json();
}
