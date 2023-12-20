export const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function formatPrice(price: number): string {
  return priceFormatter.format(Math.floor(price * 100) / 100);
}
