interface SeparatorProps {
  className?: string;
}

export function Separator({ className }: SeparatorProps) {
  return <div className={`my-2 h-px w-full bg-slate-700 ${className}`} />;
}
