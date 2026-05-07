import Link from "next/link";

import { sectionNav } from "@/lib/nav";
import { site } from "@/lib/site";

const socials = [
  { label: "YouTube", href: site.links.youtube },
  { label: "TikTok", href: site.links.tiktok },
  { label: "Instagram", href: site.links.instagram },
  { label: "X", href: site.links.x },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-paper">
      <div className="mx-auto grid max-w-[min(1400px,calc(100vw-2rem))] gap-12 py-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="caption-mono text-ink-600">© {new Date().getFullYear()} Harry Ashton</p>
          <p className="mt-4 max-w-md font-sans text-[2rem] font-bold leading-none tracking-tight text-ink">
            Frontend leadership. Systems thinking. Teaching that respects reality.
          </p>
          <p className="caption-mono mt-6 text-ink-500">
            Built with Next.js 15 + Tailwind CSS v4 — brutalist by intent.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="caption-mono mb-4 text-ink-600">Sitemap</p>
            <ul className="space-y-2 font-mono text-caption tracking-[0.14em] text-ink uppercase">
              {sectionNav.map((item) => (
                <li key={item.id}>
                  <Link href={`#${item.id}`} className="hover:bg-ink hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="caption-mono mb-4 text-ink-600">Elsewhere</p>
            <ul className="grid gap-2 font-mono text-caption tracking-[0.14em] uppercase">
              {socials.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="invert-hover inline-flex border-2 border-ink px-3 py-2"
                  >
                    {s.label}
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
