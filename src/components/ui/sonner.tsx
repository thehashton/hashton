"use client";

import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "rounded-xl border border-ink/10 bg-surface font-mono text-caption tracking-[0.12em] text-ink uppercase shadow-card",
          description: "font-sans normal-case tracking-normal text-ink-700",
        },
      }}
    />
  );
}
