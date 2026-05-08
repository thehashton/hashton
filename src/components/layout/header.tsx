"use client";

import Link from "next/link";
import { Mail, Menu } from "lucide-react";
import { useState } from "react";

import { IconGithub, IconLinkedIn } from "@/components/icons/brands";
import { shellClass } from "@/lib/layout-shell";
import { sectionNav } from "@/lib/nav";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function NavLinks({
  className,
  onNavigate,
  variant = "rail",
}: {
  className?: string;
  onNavigate?: () => void;
  /** `rail` = compact strip in header; `drawer` = mobile sheet — larger type & tap targets */
  variant?: "rail" | "drawer";
}) {
  const railNav =
    "flex flex-col items-center gap-1 text-center font-mono text-[14px] font-semibold tracking-[0.12em] uppercase sm:text-[0.9375rem] sm:tracking-[0.14em] lg:flex-row lg:flex-nowrap lg:items-center lg:justify-center lg:gap-x-3 lg:gap-y-0 xl:gap-x-4";

  const drawerNav =
    "flex flex-col items-center gap-0.5 text-center font-mono text-[1.25rem] font-semibold uppercase leading-snug tracking-[0.1em] sm:text-[1.375rem]";

  const railLink =
    "shrink-0 whitespace-nowrap rounded-md border border-transparent px-1 py-2 text-ink transition-colors hover:border-ink/10 hover:bg-ink/5 lg:py-1 lg:pl-1 lg:pr-1 xl:px-1.5";

  const drawerLink =
    "flex min-h-[3rem] w-full items-center justify-center rounded-md border border-transparent px-2 py-3 text-ink transition-colors hover:border-ink/10 hover:bg-ink/5 active:bg-ink/10 sm:min-h-[3.25rem] sm:py-3.5";

  return (
    <nav className={cn(variant === "drawer" ? drawerNav : railNav, className)}>
      {sectionNav.map((item) => (
        <Link
          key={item.id}
          href={`#${item.id}`}
          className={variant === "drawer" ? drawerLink : railLink}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
      <Sheet open={open} onOpenChange={setOpen}>
        <div
          className={cn(
            shellClass,
            "flex items-center justify-between gap-3 py-3 md:gap-4 md:py-4 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-x-4 xl:gap-x-6",
          )}
        >
          <Link
            href="#hero"
            className="group relative z-[1] flex min-w-0 shrink-0 items-center gap-2.5 whitespace-nowrap bg-paper md:gap-3"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-ink/15 bg-ink font-mono text-sm font-bold text-paper shadow-sm transition-colors group-hover:bg-accent md:size-12">
              HA
            </span>
            <span className="flex min-w-0 items-baseline gap-1.5 leading-none md:gap-2">
              <span className="font-sans text-base font-bold tracking-tight whitespace-nowrap text-ink md:text-lg">
                Harry Ashton
              </span>
              <span className="caption-mono hidden text-ink-500 md:inline">{site.nickname}</span>
            </span>
          </Link>

          <div className="hidden min-h-11 min-w-0 lg:block">
            <NavLinks className="flex max-h-11 max-w-full justify-center py-1" />
          </div>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <Link
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden size-11 items-center justify-center rounded-md border border-ink/10 transition-colors hover:bg-ink/5 lg:flex"
              aria-label="GitHub"
            >
              <IconGithub className="size-7" />
            </Link>
            <Link
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden size-11 items-center justify-center rounded-md border border-ink/10 transition-colors hover:bg-ink/5 lg:flex"
              aria-label="LinkedIn"
            >
              <IconLinkedIn className="size-7" />
            </Link>
            <Button variant="accent" className="hidden shrink-0 lg:inline-flex" asChild>
              <Link href="#contact" className="inline-flex items-center gap-2">
                <Mail className="size-4" aria-hidden />
                Hire me
              </Link>
            </Button>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="rounded-md border border-ink/10 px-3 shadow-sm lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
          </div>
        </div>

        <SheetContent className="gap-6 p-6 sm:gap-8 sm:p-8">
          <div className="flex flex-col gap-2 border-b border-ink/10 pb-6">
            <p className="font-sans text-3xl font-bold tracking-tight sm:text-[2rem]">Harry Ashton</p>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink-600 sm:text-[0.8125rem]">
              Navigation
            </p>
          </div>
          <NavLinks variant="drawer" onNavigate={() => setOpen(false)} />
          <div className="mt-auto flex flex-wrap gap-3 border-t border-ink/10 pt-6">
            <SheetClose asChild>
              <Button asChild variant="accent">
                <Link href="#contact">Contact</Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button asChild>
                <Link href={site.links.github} className="inline-flex items-center gap-2">
                  <IconGithub className="size-4 shrink-0" />
                  GitHub
                </Link>
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
