import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border-2 border-ink bg-paper px-5 py-3 font-mono text-caption font-semibold tracking-[0.16em] uppercase shadow-brutal-sm transition-[transform,box-shadow,background-color,color] duration-150 hover:-translate-x-px hover:-translate-y-px hover:bg-ink hover:text-paper active:translate-x-[3px] active:translate-y-[3px] active:shadow-none disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        default: "",
        accent:
          "min-h-12 min-w-[9rem] bg-accent px-6 py-3.5 text-paper hover:bg-ink hover:text-paper border-ink shadow-[8px_8px_0_0_#0a0a0a]",
        ghost:
          "border-transparent bg-transparent shadow-none hover:translate-x-0 hover:translate-y-0 hover:bg-ink/5 hover:text-ink hover:shadow-none active:translate-x-0 active:translate-y-0",
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
