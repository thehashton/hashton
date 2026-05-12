"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      suppressHydrationWarning
      className={cn(
        "size-11 min-h-11 min-w-11 shrink-0 rounded-md border border-ink/10 shadow-sm",
        className,
      )}
      aria-pressed={isDark}
      aria-label="Toggle light or dark appearance"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {/* Icons follow `html.dark` (next-themes inline script) via class-based `dark:` — never an empty mount placeholder. */}
      <Moon className="size-5 dark:hidden" aria-hidden />
      <Sun className="hidden size-5 dark:inline" aria-hidden />
    </Button>
  );
}

export function MatchSystemThemeButton({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const { setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      suppressHydrationWarning
      className={cn(
        "caption-mono min-h-11 w-full justify-center gap-2 rounded-md border border-ink/10 py-3 text-ink-600 hover:bg-ink/5 hover:text-ink",
        className,
      )}
      onClick={() => {
        setTheme("system");
        onNavigate?.();
      }}
    >
      <Monitor className="size-4 shrink-0" aria-hidden />
      Match system
    </Button>
  );
}
