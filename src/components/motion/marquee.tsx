"use client";

const ITEMS = [
  "EO Charging",
  "THRIVE LXP",
  "JH",
  "Roller Agency",
  "Muscle Foods",
  "Front End Now",
];

export function MarqueeStrip() {
  const sequence = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="border-y-2 border-ink bg-paper py-4">
      <div className="overflow-hidden">
        <div
          className="flex w-max gap-12 animate-marquee whitespace-nowrap px-4 font-mono text-caption font-semibold tracking-[0.22em] text-ink uppercase"
          aria-hidden
        >
          {sequence.map((label, i) => (
            <span key={`${label}-${i}`} className="flex items-center gap-12">
              <span>{label}</span>
              <span className="text-ink-400">—</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
