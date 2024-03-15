import { useTransition, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { toast } from 'sonner';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

import { createReviewAction } from '../actions';

import { Separator } from '@shared/modules/components/separator.component';
import { ReviewStarRating } from './review-star-rating.component';
import { Button } from '@shared/modules/components/button.component';

export function WriteReviewDialog() {
  const [score, setScore] = useState(0);
  const [isPending, startTransition] = useTransition();
  const params = useParams<{ slug: string }>();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-30 bg-black/70 pr-4 pt-6 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade">
        <Dialog.Content className="mx-auto flex w-full max-w-lg items-center justify-center p-2">
          <div className="h-fit w-full max-w-lg gap-1 rounded bg-zinc-700 p-4 shadow-md">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-xl font-semibold text-zinc-100">
                Create Review
              </Dialog.Title>
              <Dialog.Close className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500">
                <XMarkIcon className="h-8 w-8 text-green-500 hover:text-green-600" />
              </Dialog.Close>
            </div>

            <Separator className="bg-zinc-600" />

            <form
              ref={formRef}
              action={(formData) => {
                startTransition(async () => {
                  const data = await createReviewAction(formData, params.slug);
                  if (data?.error) {
                    toast(data.error.message, {
                      icon: (
                        <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                      ),
                    });
                    return;
                  }
                  setScore(0);
                  formRef.current?.reset();
                  toast('Review created successfully', {
                    icon: (
                      <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    ),
                  });
                });
              }}
              className="flex w-full flex-col"
            >
              <span className="block text-lg text-zinc-100">Rating</span>
              <RadioGroup.Root
                defaultValue="0"
                aria-label="Product rating"
                onValueChange={(value) => setScore(parseInt(value))}
                value={String(score)}
                className="flex gap-1"
                name="score"
                required
              >
                <RadioGroup.Item
                  value="1"
                  className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-700"
                >
                  <ReviewStarRating.Star
                    fill={score >= 1}
                    className="h-6 w-6"
                  />
                </RadioGroup.Item>
                <RadioGroup.Item
                  value="2"
                  className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-700"
                >
                  <ReviewStarRating.Star
                    fill={score >= 2}
                    className="h-6 w-6"
                  />
                </RadioGroup.Item>
                <RadioGroup.Item
                  value="3"
                  className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-700"
                >
                  <ReviewStarRating.Star
                    fill={score >= 3}
                    className="h-6 w-6"
                  />
                </RadioGroup.Item>
                <RadioGroup.Item
                  value="4"
                  className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-700"
                >
                  <ReviewStarRating.Star
                    fill={score >= 4}
                    className="h-6 w-6"
                  />
                </RadioGroup.Item>
                <RadioGroup.Item
                  value="5"
                  className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-700"
                >
                  <ReviewStarRating.Star
                    fill={score === 5}
                    className="h-6 w-6"
                  />
                </RadioGroup.Item>
              </RadioGroup.Root>

              <Separator className="bg-zinc-600" />

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="description"
                  className="w-fit text-lg text-zinc-100"
                >
                  Write your review
                </label>
                <textarea
                  name="description"
                  id="description"
                  required
                  className="h-28 resize-none rounded border border-zinc-600 bg-zinc-800 p-2 text-sm text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-700"
                />
              </div>

              <Separator className="bg-zinc-600" />

              <div className="ml-auto">
                <Button type="submit" disabled={isPending} className="w-40">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
