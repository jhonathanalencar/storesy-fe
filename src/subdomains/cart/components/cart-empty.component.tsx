import Image from 'next/image';

import breakfast from '@assets/images/undraw-breakfast.svg';

export function CartEmpty() {
  return (
    <div className="grid grid-cols-1 gap-4 pb-2 pt-6 md:grid-cols-[40%_1fr]">
      <Image
        alt="breakfast"
        src={breakfast}
        width="0"
        height="0"
        sizes="100vw"
        priority
        className="mx-auto w-full max-w-[400px] rounded object-cover"
      />
      <p className="text-center text-xl font-semibold tracking-wide text-zinc-100 md:text-left md:text-2xl">
        Your cart is empty
      </p>
    </div>
  );
}
