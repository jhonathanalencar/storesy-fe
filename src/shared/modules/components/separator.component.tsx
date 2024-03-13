import { twMerge } from 'tailwind-merge';

interface SeparatorProps {
  className?: string;
}

export function Separator({ className }: SeparatorProps) {
  return <div className={twMerge('my-2 h-px w-full bg-zinc-700', className)} />;
}
