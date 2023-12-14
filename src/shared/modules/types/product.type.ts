export type TProduct = {
  product_id: string;
  name: string;
  slug: string;
  description: string;
  summary: string;
  price: number;
  categories: string[];
  image_url: string;
  is_deal: boolean;
  discount_percent: number;
  quantity_available: number;
  created_at: Date;
  updated_at: Date;
  released_date?: Date;
};
