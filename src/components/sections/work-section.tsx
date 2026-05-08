import Link from "next/link";

import { SectionLabel } from "@/components/sections/section-label";
import { Reveal } from "@/components/motion/reveal";
import { shellClass } from "@/lib/layout-shell";
import { getWorkMetaList } from "@/lib/work";

export async function WorkSection() {
  const items = getWorkMetaList();

  return (
    <section id="work" className="scroll-mt-28 w-full min-w-0 border-b border-ink/10 bg-paper py-14 md:py-24 lg:py-28">
      <div className={shellClass}>
        <Reveal>
          <SectionLabel label="Selected work" />
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-sans text-[2.5rem] font-bold leading-none tracking-tight text-ink md:text-[3rem]">
              Proof in production.
            </h2>
            <p className="caption-mono max-w-md text-ink-600">
              Case studies are narrative wrappers around constraints — accessibility, architecture, and taste under pressure.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {items.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.05}>
              <article className="group flex h-full flex-col rounded-xl border border-ink/10 bg-surface shadow-card transition-shadow duration-200 hover:shadow-card-hover">
                <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-6 py-5">
                  <div>
                    <p className="caption-mono text-ink-500">{w.year}</p>
                    <h3 className="mt-3 font-sans text-2xl font-bold tracking-tight text-ink md:text-[2rem]">
                      {w.title}
                    </h3>
                  </div>
                  <span className="caption-mono rounded-md border border-ink/10 bg-muted px-2 py-1 text-ink">{w.role}</span>
                </div>
                <div className="flex flex-1 flex-col px-6 py-6">
                  <p className="caption-mono text-accent">{w.stack}</p>
                  <p className="mt-4 flex-1 text-[1.125rem] leading-relaxed text-ink-800">{w.excerpt}</p>
                  <Link
                    href={`/work/${w.slug}`}
                    className="caption-mono mt-8 inline-flex w-fit rounded-lg border border-ink/15 bg-transparent px-4 py-3 text-ink transition-colors group-hover:bg-ink group-hover:text-paper"
                  >
                    Read case study →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
