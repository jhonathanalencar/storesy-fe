'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';

interface ReviewDescription {
  description: string;
}

export function ReviewDescription({ description }: ReviewDescription) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isTextLong = description.length > 1000;

  const content = isTextLong ? (
    isExpanded ? (
      <div className="group">
        <p className="text-sm font-medium leading-normal text-zinc-300">
          {description}
        </p>
        <button
          className="flex items-center gap-1"
          onClick={() => setIsExpanded(false)}
        >
          <ChevronUpIcon className="h-4 w-4 text-zinc-100" />
          <span className="text-sm font-light text-green-400 group-hover:underline">
            Read less
          </span>
        </button>
      </div>
    ) : (
      <div className="group">
        <div className="relative before:absolute before:bottom-0 before:left-0 before:h-4 before:w-full before:bg-gradient-to-b before:from-transparent before:to-[#141414]">
          <p className="text-sm font-medium leading-normal text-zinc-300">
            {description.substring(0, 1000)} ...
          </p>
        </div>
        <button
          className="flex items-center gap-1"
          onClick={() => setIsExpanded(true)}
        >
          <ChevronDownIcon className="h-4 w-4 text-zinc-100" />
          <span className="text-sm font-light text-green-400 group-hover:underline">
            Read more
          </span>
        </button>
      </div>
    )
  ) : (
    <p className="text-sm font-medium leading-normal text-zinc-300">
      {description}
    </p>
  );

  return content;
}
