import { WriteReviewButton } from './write-review-button.component';

export function WriteReview() {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <h2 className="text-lg font-medium text-zinc-200">Review this product</h2>
      <p className="text-sm text-zinc-400">
        Share your thoughts with other customers
      </p>
      <WriteReviewButton />
    </div>
  );
}
