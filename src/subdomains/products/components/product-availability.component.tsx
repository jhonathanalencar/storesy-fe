import { twMerge } from 'tailwind-merge';

interface ProductAvailabilityProps {
  quantity_available: number;
}

export function ProductAvailability({
  quantity_available,
}: ProductAvailabilityProps) {
  const isAvailable = quantity_available > 0;
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
