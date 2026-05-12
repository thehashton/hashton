"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { IconGithub, IconInstagram, IconLinkedIn, IconX, IconYoutube } from "@/components/icons/brands";
import { headerShellClass } from "@/lib/layout-shell";
import { sectionNav } from "@/lib/nav";
import { contactHref, logoHref, sectionHref } from "@/lib/nav-href";
import { site } from "@/lib/site";
import { MatchSystemThemeButton, ThemeToggle } from "@/components/theme/theme-controls";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function NavLinks({
  className,
  onNavigate,
  pathname,
  variant = "rail",
}: {
  className?: string;
  onNavigate?: () => void;
  pathname: string;
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
          href={sectionHref(pathname, item.id)}
          className={variant === "drawer" ? drawerLink : railLink}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

const HEADER_SOCIAL = [
  { href: site.links.x, label: "X", Icon: IconX, iconClassName: "scale-[1.12]" },
  { href: site.links.github, label: "GitHub", Icon: IconGithub, iconClassName: "scale-[0.84]" },
  { href: site.links.linkedin, label: "LinkedIn", Icon: IconLinkedIn, iconClassName: "scale-[0.9]" },
  { href: site.links.instagram, label: "Instagram", Icon: IconInstagram, iconClassName: "scale-[0.97]" },
  { href: site.links.youtube, label: "YouTube", Icon: IconYoutube, iconClassName: "scale-[1.14]" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
      <Sheet open={open} onOpenChange={setOpen}>
        <div
          className={cn(
            headerShellClass,
            "flex items-center justify-between gap-3 py-3 md:gap-4 md:py-4 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-x-4 xl:gap-x-6",
          )}
        >
          <Link
            href={logoHref(pathname)}
            aria-label={`${site.name} — home`}
            className="group relative z-[1] flex min-w-0 shrink-0 items-center rounded-md bg-transparent transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/35 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <Image
              src="/images/logos/hashton-logo.png"
              alt="Hashton"
              width={841}
              height={267}
              priority
              className="h-14 w-auto max-w-[min(34rem,90vw)] object-contain object-left sm:h-20 md:h-24 lg:h-[6.5rem]"
            />
          </Link>

          <div className="hidden min-h-11 min-w-0 lg:block">
            <NavLinks pathname={pathname} className="flex max-h-11 max-w-full justify-center py-1" />
          </div>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            {HEADER_SOCIAL.map(({ href, label, Icon, iconClassName }) => (
              <Tooltip key={href}>
                <TooltipTrigger asChild>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden size-11 items-center justify-center rounded-md border border-ink/10 transition-colors hover:bg-ink/5 lg:flex"
                    aria-label={label}
                  >
                    <Icon className={cn("size-6 shrink-0 origin-center", iconClassName)} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom" sideOffset={8}>
                  {label}
                </TooltipContent>
              </Tooltip>
            ))}
            <Button variant="accent" className="hidden shrink-0 lg:inline-flex" asChild>
              <Link href={contactHref(pathname)} className="inline-flex items-center gap-2">
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
          <NavLinks pathname={pathname} variant="drawer" onNavigate={() => setOpen(false)} />
          <div className="mt-6 flex flex-col gap-3 border-t border-ink/10 pt-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink-600">Appearance</p>
            <div className="flex flex-wrap items-center gap-3">
              <ThemeToggle className="lg:hidden" />
              <MatchSystemThemeButton onNavigate={() => setOpen(false)} />
            </div>
          </div>
          <div className="mt-auto flex flex-wrap gap-3 border-t border-ink/10 pt-6">
            <SheetClose asChild>
              <Button asChild variant="accent">
                <Link href={contactHref(pathname)}>Contact</Link>
              </Button>
            </SheetClose>
            {HEADER_SOCIAL.map(({ href, label, Icon, iconClassName }) => (
              <SheetClose key={href} asChild>
                <Button asChild>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                    aria-label={label}
                  >
                    <Icon className={cn("size-4 shrink-0 origin-center", iconClassName)} />
                    {label === "X" ? null : label}
                  </Link>
                </Button>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
