"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

export function Toaster() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const theme = !mounted ? "light" : resolvedTheme === "dark" ? "dark" : "light";

  return (
    <Sonner
      theme={theme}
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
