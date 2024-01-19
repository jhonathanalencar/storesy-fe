export type TCartItem = {
  product_id: string;
  product_slug: string;
  subtotal: number;
  product_url: string;
  product_title: string;
  product_quantity: number;
  quantity_available: number;
};

export type TShoppingCart = {
  cart_id: string;
  items: TCartItem[];
  subtotal: number;
  size: number;
};
