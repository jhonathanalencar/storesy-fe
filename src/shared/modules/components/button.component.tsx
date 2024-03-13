import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
}

export function Button({ children, className = '', ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'rounded bg-yellow-500 py-2 font-semibold text-black transition-colors hover:bg-yellow-600 disabled:cursor-not-allowed disabled:bg-yellow-700',
        className
      )}
    >
      {children}
    </button>
  );
}
