import { StarIcon as StarSolid } from '@heroicons/react/20/solid';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import type { ReactNode } from 'react';

interface ReviewStarRatingRootProps {
  children: ReactNode;
}

function ReviewStarRatingRoot({ children }: ReviewStarRatingRootProps) {
  return <div className="flex items-center">{children}</div>;
}

function ReviewStarRatingFill({ amount }: { amount: number }) {
  const content: JSX.Element[] = [];
  let k = 0;
  while (amount > k) {
    content.push(<StarSolid className=" h-5 w-5 text-green-500" />);
    k++;
  }

  return content;
}
function ReviewStarRatingEmpty({ amount }: { amount: number }) {
  const content: JSX.Element[] = [];
  let k = 0;
  while (amount > k) {
    content.push(<StarOutline className=" h-5 w-5 text-green-500" />);
    k++;
  }

  return content;
}

export const ReviewStarRating = {
  Root: ReviewStarRatingRoot,
  Fill: ReviewStarRatingFill,
  Empty: ReviewStarRatingEmpty,
};
