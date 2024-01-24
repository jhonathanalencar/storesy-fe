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

  addItem(
    itemId: string,
    quantity: number,
    productId: string,
    name: string,
    slug: string,
    price: number,
    imageUrl: string,
    quantityAvailable: number
  ) {
    this.items.push(
      new CartItem(
        itemId,
        quantity,
        productId,
        name,
        slug,
        price,
        imageUrl,
        quantityAvailable
      )
    );
  }

  static create(cart_id: string, user_id: string | null) {
    return new Cart(cart_id, 0, 0, user_id);
  }
}
