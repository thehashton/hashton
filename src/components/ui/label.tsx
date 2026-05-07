import * as React from "react";

import { cn } from "@/lib/utils";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "mb-2 block font-mono text-caption font-semibold tracking-[0.16em] text-ink uppercase",
      className,
    )}
    {...props}
  />
));
Label.displayName = "Label";

export { Label };
