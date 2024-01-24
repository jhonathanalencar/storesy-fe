export class CartItem {
  constructor(
    readonly item_id: string,
    readonly quantity: number,
    readonly product_id: string,
    readonly name: string,
    readonly slug: string,
    readonly price: number,
    readonly image_url: string,
    readonly quantity_available: number
  ) {}
}

export class Cart {
  items: CartItem[] = [];

  constructor(
    readonly cart_id: string,
    private size: number,
    private subtotal: number,
    readonly user_id: string | null
  ) {}

  getSize() {
    return this.size;
  }

  getSubtotal() {
    return this.subtotal;
  }

  setItems(items: CartItem[]) {
    this.items = items;
  }

  static create(cart_id: string, user_id: string | null) {
    return new Cart(cart_id, 0, 0, user_id);
  }
}
