"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { sectionNav } from "@/lib/nav";
import { sectionHref } from "@/lib/nav-href";

export function FooterSitemap() {
  const pathname = usePathname();

  return (
    <ul className="space-y-2 font-mono text-caption tracking-[0.14em] text-ink uppercase">
      {sectionNav.map((item) => (
        <li key={item.id}>
          <Link
            href={sectionHref(pathname, item.id)}
            className="rounded-md px-1 py-0.5 transition-colors hover:bg-ink/5"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
