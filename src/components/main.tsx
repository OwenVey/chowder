import { cn } from '@/lib/utils';

interface MainProps extends React.HTMLAttributes<HTMLElement> {}

export function Main({ className, children }: MainProps) {
  return <main className={cn('flex-1 overflow-y-auto p-4', className)}>{children}</main>;
}
