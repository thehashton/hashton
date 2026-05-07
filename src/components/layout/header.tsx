"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { IconGithub, IconLinkedIn } from "@/components/icons/brands";
import { sectionNav } from "@/lib/nav";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function NavLinks({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className={cn("flex flex-col gap-1 font-mono text-caption tracking-[0.14em] uppercase lg:flex-row lg:items-center lg:gap-6", className)}>
      {sectionNav.map((item) => (
        <Link
          key={item.id}
          href={`#${item.id}`}
          className="border border-transparent px-2 py-2 text-ink hover:border-ink hover:bg-ink hover:text-paper lg:py-1"
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
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[min(1400px,calc(100vw-2rem))] items-center justify-between gap-4 py-4">
        <Link href="#hero" className="group flex items-center gap-3">
          <span className="flex size-11 items-center justify-center border-2 border-ink bg-ink font-mono text-sm font-bold text-paper shadow-[4px_4px_0_0_#0a0a0a] transition-colors group-hover:bg-accent">
            HA
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-sans text-lg font-bold tracking-tight text-ink">
              Harry Ashton
            </span>
            <span className="caption-mono text-ink-500">{site.nickname}</span>
          </span>
        </Link>

        <NavLinks className="hidden lg:flex" />

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="invert-hover border-2 border-ink p-2"
            aria-label="GitHub"
          >
            <IconGithub className="size-5" />
          </Link>
          <Link
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="invert-hover border-2 border-ink p-2"
            aria-label="LinkedIn"
          >
            <IconLinkedIn className="size-5" />
          </Link>
          <Button variant="accent" asChild>
            <Link href="#contact">Hire me</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="border-2 border-ink px-3 shadow-[4px_4px_0_0_#0a0a0a] lg:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="gap-8">
            <div className="flex flex-col gap-2 border-b-2 border-ink pb-6">
              <p className="font-sans text-2xl font-bold tracking-tight">Harry Ashton</p>
              <p className="caption-mono text-ink-600">Navigation</p>
            </div>
            <NavLinks onNavigate={() => setOpen(false)} />
            <div className="mt-auto flex flex-wrap gap-3 border-t-2 border-ink pt-6">
              <SheetClose asChild>
                <Button asChild variant="accent">
                  <Link href="#contact">Contact</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild>
                  <Link href={site.links.github}>GitHub</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
