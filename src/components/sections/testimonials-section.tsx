import Link from "next/link";

import { SectionLabel } from "@/components/sections/section-label";
import { Reveal } from "@/components/motion/reveal";
import { shellClass } from "@/lib/layout-shell";
import { testimonials } from "@/lib/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-28 w-full min-w-0 border-b border-ink/10 bg-paper py-14 md:py-24 lg:py-28">
      <div className={shellClass}>
        <Reveal>
          <SectionLabel label="Proof" />
          <h2 className="font-sans text-[2.5rem] font-bold tracking-tight text-ink md:text-[3rem]">
            Mentorship outcomes.
          </h2>
          <p className="caption-mono mt-6 max-w-2xl text-ink-600">
            Verbatim LinkedIn recommendations — lightly formatted for readability.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-xl border border-ink/10 bg-surface p-8 shadow-card transition-shadow hover:shadow-card-hover">
                <blockquote className="flex-1 whitespace-pre-line text-[1.05rem] leading-relaxed text-ink-800">
                  {t.body.trim()}
                </blockquote>
                <figcaption className="caption-mono mt-8 border-t border-ink/10 pt-6 text-ink-700">
                  <Link
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-ink underline decoration-transparent underline-offset-2 transition-colors hover:text-accent-600 hover:decoration-accent/40"
                  >
                    {t.author}
                  </Link>
                  <span className="mt-2 block normal-case tracking-normal text-ink-600">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
