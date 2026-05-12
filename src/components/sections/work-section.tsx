import Image from "next/image";
import Link from "next/link";

import { SectionLabel } from "@/components/sections/section-label";
import { Reveal } from "@/components/motion/reveal";
import { shellClass } from "@/lib/layout-shell";
import { getWorkMetaList } from "@/lib/work";
import { cn } from "@/lib/utils";

export async function WorkSection() {
  const items = getWorkMetaList();

  return (
    <section id="work" className="scroll-mt-28 w-full min-w-0 border-b border-ink/10 bg-paper pt-8 pb-10 md:pt-10 md:pb-16 lg:pt-10 lg:pb-16">
      <div className={shellClass}>
        <Reveal>
          <SectionLabel label="Selected work" />
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-sans text-[2.5rem] font-bold leading-none tracking-tight text-ink md:text-[3rem]">
              Proof in production.
            </h2>
            <p className="caption-mono max-w-md text-ink-600">
              Case studies are narrative wrappers around constraints — accessibility, architecture, and taste under
              pressure.
            </p>
          </div>
        </Reveal>

        <ul className="mx-auto mt-14 flex max-w-3xl flex-col lg:mt-16 lg:max-w-4xl">
          {items.map((w, i) => (
            <li
              key={w.slug}
              className="mb-8 last:mb-0 sm:mb-10 md:mb-12"
            >
              <Reveal delay={i * 0.05} className="flex w-full min-w-0 flex-1 gap-5 md:gap-6">
                <div className="flex w-9 shrink-0 flex-col items-center self-stretch sm:w-10">
                  <div className="flex justify-center pt-3">
                    <span className="size-2.5 shrink-0 rounded-full border-2 border-ink/20 bg-accent shadow-[0_0_0_3px_var(--color-paper)]" />
                  </div>
                  {i < items.length - 1 ? (
                    <div className="mx-auto mt-2 min-h-8 w-0 flex-1 border-l border-dashed border-ink/25" />
                  ) : null}
                </div>

                <article
                  className={cn(
                    "group relative flex min-w-0 flex-1 flex-col gap-5 rounded-2xl border border-ink/10 bg-surface shadow-card transition-shadow duration-200 hover:shadow-card-hover sm:flex-row sm:items-stretch sm:gap-6 md:gap-7",
                    "p-6 md:p-8",
                  )}
                >
                  <Link
                    href={w.cardHref ?? `/work/${w.slug}`}
                    aria-label={
                      w.cardHref
                        ? `${w.cardLabel?.replace(/\s*→\s*$/, "").trim() ?? "Visit site"} (${w.title})`
                        : `Read case study: ${w.title}`
                    }
                    className="absolute inset-0 z-[1] rounded-2xl outline-none ring-offset-2 ring-offset-white focus-visible:ring-2 focus-visible:ring-ink/30"
                    {...(w.cardHref ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  />

                  {w.logo ? (
                    <div
                      className={cn(
                        "relative z-0 h-20 w-24 shrink-0 overflow-hidden rounded-xl border shadow-sm sm:h-[5.5rem] sm:w-[6.5rem]",
                        w.slug === "inkwarden"
                          ? "border-zinc-800/90 bg-zinc-950"
                          : "border-ink/10 bg-paper",
                      )}
                    >
                      <Image
                        src={w.logo}
                        alt=""
                        role="presentation"
                        fill
                        className={cn(
                          "object-contain",
                          w.slug === "inkwarden" ? "rounded-xl p-2.5" : "rounded-xl p-2",
                        )}
                        sizes="104px"
                      />
                    </div>
                  ) : null}

                  <div className="relative z-0 flex min-w-0 flex-1 flex-col">
                    <div className="flex flex-col gap-4 border-b border-ink/10 pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div className="min-w-0">
                        <p className="caption-mono text-ink-500">{w.year}</p>
                        <h3 className="mt-3 font-sans text-2xl font-bold tracking-tight text-ink md:text-[2rem]">
                          {w.title}
                        </h3>
                      </div>
                      <span className="caption-mono w-fit shrink-0 rounded-md border border-ink/10 bg-muted px-2 py-1 text-ink">
                        {w.role}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col pt-6">
                      <p className="caption-mono text-accent">{w.stack}</p>
                      <p className="mt-4 flex-1 text-[1.125rem] leading-relaxed text-ink-800">{w.excerpt}</p>

                      <div className="relative z-[2] mt-8 flex flex-wrap items-center justify-start gap-3">
                        {w.cardHref ? (
                          <Link
                            href={w.cardHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="caption-mono inline-flex w-fit rounded-lg border border-transparent bg-strong px-4 py-3 text-on-strong transition-colors hover:bg-strong/90"
                          >
                            {w.cardLabel ?? "Visit site →"}
                          </Link>
                        ) : null}
                        <Link
                          href={`/work/${w.slug}`}
                          className={cn(
                            "caption-mono inline-flex w-fit rounded-lg border px-4 py-3 transition-colors",
                            w.cardHref
                              ? "border-transparent text-ink underline decoration-accent/50 underline-offset-4 hover:text-accent-600"
                              : "border-ink/15 bg-transparent text-ink group-hover:bg-strong group-hover:text-on-strong",
                          )}
                        >
                          {w.cardHref ? "Read overview →" : "Read case study →"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
