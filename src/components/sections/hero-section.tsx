import Link from "next/link";

import { HeroVideo } from "@/components/video/hero-video";
import { SectionLabel } from "@/components/sections/section-label";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-28 border-b-2 border-ink bg-paper">
      <div className="mx-auto grid max-w-[min(1400px,calc(100vw-2rem))] gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:py-24">
        <Reveal>
          <SectionLabel label="§00 · Intro" />
          <h1 className="display-text max-w-[14ch] text-ink">
            Harry{" "}
            <span className="relative whitespace-nowrap">
              Ashton
              <span className="caption-mono absolute -bottom-8 left-0 hidden text-accent md:inline">
                ({site.nickname})
              </span>
            </span>
          </h1>
          <p className="mt-10 max-w-xl font-mono text-sm leading-relaxed tracking-[0.08em] text-ink-700 uppercase md:max-w-lg md:text-[0.78rem]">
            Ex-lead frontend · Design systems · Accessibility · Micro-frontends · Coaching/consulting
          </p>
          <p className="mt-6 max-w-xl text-[1.15rem] leading-relaxed text-ink-800">{site.tagline}</p>

          <div className="caption-mono mt-10 flex flex-wrap gap-x-4 gap-y-2 border-y border-ink py-4 text-ink-600">
            <span>{site.location}</span>
            <span className="text-ink-300">/</span>
            <span>{site.stats.yearsExperience} yrs shipping UI</span>
            <span className="text-ink-300">/</span>
            <span>Open to senior IC / lead paths</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="accent" asChild>
              <Link href="#contact">Hire me</Link>
            </Button>
            <Button asChild>
              <Link href={site.links.coaching}>Coach with me</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#work">Selected work</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <HeroVideo
            src={{ mp4: "/video/hero.mp4", webm: "/video/hero.webm" }}
            poster="/video/hero-poster.jpg"
            durationLabel="01:00"
            caption="A minute with Harry"
          />
        </Reveal>
      </div>
    </section>
  );
}
