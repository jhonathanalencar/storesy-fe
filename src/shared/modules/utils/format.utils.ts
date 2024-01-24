export const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function formatPrice(price: number): string {
  return priceFormatter.format(Math.floor(price * 100) / 100);
}

export function calculateProductDiscount(
  productPrice: number,
  discountPercent: number
) {
  const discount = (productPrice / 100) * discountPercent;
  const priceWithDiscount = productPrice / 100 - discount;
  return priceWithDiscount;
}
