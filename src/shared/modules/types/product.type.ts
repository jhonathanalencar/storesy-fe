import type { TRate } from './rate.type';

export type TProduct = {
  productId: string;
  name: string;
  slug: string;
  description: string;
  summary: string;
  price: number;
  categories: string[];
  imageUrl: string;
  active: boolean;
  discountPercent: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  releasedDate?: Date;
  ratings: TRate[];
};
