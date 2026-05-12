"use client";

import { ThemeProvider } from "next-themes";

import { ThemeColorMeta } from "@/components/theme/theme-color-meta";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      storageKey="hashton-theme"
    >
      <ThemeColorMeta />
      <TooltipProvider delayDuration={250}>
        {children}
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}
