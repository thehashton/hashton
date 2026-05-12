import Link from "next/link";

import { FooterSitemap } from "@/components/layout/footer-sitemap";
import { SocialBrandIcon } from "@/components/social/social-brand-icon";
import { shellClass } from "@/lib/layout-shell";
import { socialPlatforms } from "@/lib/social-platforms";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="w-full border-t border-ink/10 bg-paper">
      <div className={cn(shellClass, "grid gap-10 py-12 md:gap-12 md:py-16 md:grid-cols-[1.2fr_1fr]")}>
        <div>
          <p className="caption-mono text-ink-600">© {new Date().getFullYear()} Harry Ashton</p>
          <p className="mt-4 max-w-md font-sans text-[2rem] font-bold leading-none tracking-tight text-ink">
            Frontend leadership. Systems thinking. Delivery you can ship and measure.
          </p>
          <p className="caption-mono mt-6 text-ink-500">
            Built with Next.js 15 + Tailwind CSS v4 — warm minimal by intent.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="caption-mono mb-4 text-ink-600">Sitemap</p>
            <FooterSitemap />
          </div>
          <div>
            <p className="caption-mono mb-4 text-ink-600">Elsewhere</p>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 font-mono text-caption tracking-[0.14em] uppercase">
              {socialPlatforms.map((s) => (
                <li key={s.id} className="min-w-0">
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label || "X"}
                    className={cn(
                      "inline-flex w-full min-w-0 items-center gap-2 overflow-hidden rounded-full border border-ink/10 bg-muted px-2.5 py-2 transition-colors hover:bg-strong hover:text-on-strong max-sm:justify-center sm:gap-3 sm:px-3",
                      s.label ? "sm:justify-start" : "justify-center gap-0 px-3 sm:gap-0",
                    )}
                  >
                    <SocialBrandIcon brand={s.brand} className="size-4 shrink-0" />
                    {s.label ? <span className="min-w-0 truncate">{s.label}</span> : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
