import Link from "next/link";
import { ArrowRight, Briefcase, Mail } from "lucide-react";

import { HeroSkills } from "@/components/sections/hero-skills";
import { HeroVideo } from "@/components/video/hero-video";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { shellClass } from "@/lib/layout-shell";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Shared sizing for hero CTAs — one scale so the cluster reads as one system. */
const heroCtaClass =
  "w-full justify-center rounded-xl !text-lg !font-semibold !min-h-14 px-6 py-4 !shadow-md sm:!min-h-16 sm:!text-xl sm:px-7 sm:py-4";

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-28 w-full min-w-0 overflow-x-clip border-b border-ink/10 bg-paper">
      <div
        className={cn(
          shellClass,
          "flex w-full flex-col gap-y-8 pt-12 pb-8 md:gap-y-12 md:pt-16 md:pb-10",
          "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-[auto_auto_auto] lg:items-start lg:gap-x-12 lg:gap-y-12 lg:pt-24 lg:pb-7",
        )}
      >
        <Reveal className="min-w-0 lg:col-start-1 lg:row-start-1">
          <div className="space-y-3">
            <h1 className="display-text max-w-[18ch] text-ink lg:text-[5rem] lg:leading-[0.98]">Harry Ashton</h1>
          </div>
        </Reveal>

        <Reveal className="min-w-0 lg:col-start-1 lg:row-start-2">
          <p className="max-w-xl text-[1.125rem] leading-relaxed text-ink/70 md:text-[1.25rem]">
            Contract and consulting frontend work — design systems, component architecture, and production UI for teams that need senior judgment without the overhead. Founder of Frontend Now.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:self-start">
          <div>
            <HeroVideo
              kind="mux"
              playbackId="KuB2l83CxQCAaUCp9F8H00vhNtrTX011d8K3WiPzpfmjs"
              thumbnailTime={1}
            />
            <HeroSkills />
          </div>
        </Reveal>

        <Reveal className="min-w-0 lg:col-start-1 lg:row-start-3">
          <p className="caption-mono border-y border-ink/10 py-4 text-[0.8125rem] leading-relaxed text-ink-600 md:text-caption lg:mt-0">
            {site.location}. {site.stats.yearsExperience} years shipping ui. Open to contract, consulting, or lead/senior roles.
          </p>

          <div className="mt-8 md:mt-10">
            <div
              className={cn(
                "grid w-full min-w-0 max-w-full grid-cols-1 gap-3.5 rounded-2xl border border-ink/10 bg-muted p-4 sm:grid-cols-2 sm:gap-3 sm:p-4",
              )}
            >
              <Button variant="accent" className={heroCtaClass} asChild>
                <Link href="/contact" className="inline-flex items-center justify-center gap-3">
                  <Mail className="size-6 shrink-0" aria-hidden />
                  Hire me
                </Link>
              </Button>
              <Button className={heroCtaClass} asChild>
                <Link href="/contact" className="inline-flex items-center justify-center gap-3">
                  <Briefcase className="size-6 shrink-0" aria-hidden />
                  Contract & consulting
                </Link>
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  heroCtaClass,
                  "border-2 border-ink/15 bg-paper/90 !shadow-sm sm:col-span-2 sm:border-ink/10 sm:bg-paper",
                )}
                asChild
              >
                <Link href="/work" className="inline-flex items-center justify-center gap-3">
                  <ArrowRight className="animate-cta-arrow size-6 shrink-0 origin-left" aria-hidden />
                  See my work
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
