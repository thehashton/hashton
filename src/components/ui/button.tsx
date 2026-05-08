import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-5 py-2.5 font-sans text-sm font-semibold tracking-tight shadow-sm transition-[background-color,box-shadow,color] duration-150 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-transparent bg-ink text-paper hover:bg-ink/90 hover:shadow-md",
        accent:
          "min-h-11 min-w-[9rem] border border-transparent bg-accent text-accent-foreground hover:bg-accent-600 hover:shadow-md",
        outline:
          "border border-ink/15 bg-transparent text-ink shadow-none hover:bg-ink/5 hover:shadow-sm",
        ghost: "border border-transparent bg-transparent text-ink shadow-none hover:bg-ink/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
