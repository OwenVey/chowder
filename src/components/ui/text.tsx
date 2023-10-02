import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import React from 'react';

const textVariants = cva('', {
  variants: {
    variant: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      default: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    },
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface TextProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLDivElement, TextProps>(
  ({ className, variant, size, weight, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return <Comp className={cn(textVariants({ variant, size, weight, className }))} ref={ref} {...props} />;
  },
);
Text.displayName = 'Text';

export { Text, textVariants };
