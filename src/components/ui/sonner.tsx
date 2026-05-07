"use client";

import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "rounded-none border-2 border-ink bg-paper font-mono text-caption tracking-[0.12em] text-ink uppercase shadow-brutal",
          description: "font-sans normal-case tracking-normal text-ink-700",
        },
      }}
    />
  );
}
