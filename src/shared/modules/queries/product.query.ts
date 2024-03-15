import type { TProduct } from '../types/product.type';
import { TRate } from '../types/rate.type';

export async function getProducts(): Promise<TProduct[]> {
  const response = await fetch(`${process.env.CATALOG_API_URL}/products`);
  return response.json();
}

export type GetProductBySlugResponse = TProduct & {
  rateAmount: number;
  totalScore: number;
};

export async function getProductBySlug(
  slug: string
): Promise<GetProductBySlugResponse> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/slug/${slug}/products`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export type GetProductsByCategoryResponse = {
  total: number;
  products: (TProduct & { rateAmount: number; totalScore: number })[];
};

export async function getProductsByCategory(
  categorySlug: string,
  page: number,
  limit: number
): Promise<GetProductsByCategoryResponse> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/category/${categorySlug}/products?page=${page}&limit=${limit}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export type GetProductsDealsResponse = {
  total: number;
  products: (TProduct & { rateAmount: number; totalScore: number })[];
};

export async function getProductDeals(
  page: number,
  limit: number
): Promise<GetProductsDealsResponse> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/deals?page=${page}&limit=${limit}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export type GetNewArrivalsResponse = {
  total: number;
  products: (TProduct & { rateAmount: number; totalScore: number })[];
};

export async function getNewArrivals(
  page: number,
  limit: number
): Promise<GetNewArrivalsResponse> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/new-arrivals?page=${page}&limit=${limit}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export type GetBestSellersResponse = {
  total: number;
  products: (TProduct & { rateAmount: number; totalScore: number })[];
};

export async function getBestSellers(
  page: number,
  limit: number
): Promise<GetBestSellersResponse> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/best-sellers?page=${page}&limit=${limit}`,
    {
      next: {
        revalidate: 60,
      },
    }
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

export type GetProductRatingsResponse = {
  total: number;
  ratings: TRate[];
};

export async function getProductRatings(
  slug: string,
  page: number,
  limit: number
): Promise<GetProductRatingsResponse> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/slug/${slug}/ratings?page=${page}&limit=${limit}`
  );
  return response.json();
}

export async function updateProductQuantity(
  productId: string,
  quantity: number
): Promise<void> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/products/${productId}/decrease`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity,
      }),
    }
  );
  return response.json();
}

export type createReviewResponse =
  | {
      message: string;
      isError: boolean;
    }
  | { rateId: string };

export async function createReview(
  productId: string,
  userId: string,
  score: number,
  description: string
): Promise<createReviewResponse> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/products/${productId}/rating`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${userId}`,
      },
      body: JSON.stringify({ score, description }),
    }
  );
  return response.json();
}
