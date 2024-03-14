import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { StarIcon as StarSolid } from '@heroicons/react/20/solid';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';

interface ReviewStarRatingRootProps {
  children: ReactNode;
}

function ReviewStarRatingRoot({ children }: ReviewStarRatingRootProps) {
  return <div className="flex items-center">{children}</div>;
}

function ReviewStarRatingFill({
  amount,
  className = '',
}: {
  amount: number;
  className?: string;
}) {
  const content: JSX.Element[] = [];
  let k = 0;
  while (amount > k) {
    content.push(
      <StarSolid
        key={`${amount}-${k}`}
        className={twMerge('h-5 w-5 text-green-500', className)}
      />
    );
    k++;
  }

  return content;
}
function ReviewStarRatingEmpty({
  amount,
  className = '',
}: {
  amount: number;
  className?: string;
}) {
  const content: JSX.Element[] = [];
  let k = 0;
  while (amount > k) {
    content.push(
      <StarOutline
        key={`${amount}-${k}`}
        className={twMerge('h-5 w-5 text-green-500', className)}
      />
    );
    k++;
  }

  return content;
}

function ReviewStarRatingStar({
  fill,
  amount = 1,
  className = '',
}: {
  fill: boolean;
  amount?: number;
  className?: string;
}) {
  const content = fill ? (
    <ReviewStarRatingFill amount={amount} className={className} />
  ) : (
    <ReviewStarRatingEmpty amount={amount} className={className} />
  );
  return content;
}

export const ReviewStarRating = {
  Root: ReviewStarRatingRoot,
  Fill: ReviewStarRatingFill,
  Empty: ReviewStarRatingEmpty,
  Star: ReviewStarRatingStar,
};
