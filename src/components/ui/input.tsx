import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  trailingLabel?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, trailingLabel, type, ...props }, ref) => {
  return (
    <div className="relative">
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-destructive data-[invalid]:text-destructive data-[invalid]:placeholder-destructive/75 data-[invalid]:ring-destructive',
          className,
        )}
        ref={ref}
        {...props}
      />
      {trailingLabel && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-sm text-muted-foreground">{trailingLabel}</span>
        </div>
      )}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
