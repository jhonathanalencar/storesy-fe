import { twMerge } from 'tailwind-merge';

interface ProductAvailabilityProps {
  quantityAvailable: number;
}

export function ProductAvailability({
  quantityAvailable,
}: ProductAvailabilityProps) {
  const isAvailable = quantityAvailable > 0;
  const text = isAvailable ? 'In Stock' : 'Sold Out';
  return (
    <span
      className={twMerge(
        'text-lg font-medium tracking-wider',
        isAvailable ? 'text-green-500' : 'text-red-500'
      )}
    >
      {text}
    </span>
  );
}
