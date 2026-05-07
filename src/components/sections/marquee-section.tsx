import { MarqueeStrip } from "@/components/motion/marquee";

export function MarqueeSection() {
  return (
    <section id="marquee" className="scroll-mt-28" aria-label="Companies and collaborators">
      <MarqueeStrip />
    </section>
  );
}
