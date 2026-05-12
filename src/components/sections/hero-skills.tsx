"use client";

import {
  siCss,
  siFigma,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siReact,
  siStorybook,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const skills = [
  { icon: siReact, label: "React" },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siNextdotjs, label: "Next.js" },
  { icon: siJavascript, label: "JavaScript" },
  { icon: siTailwindcss, label: "Tailwind CSS" },
  { icon: siHtml5, label: "HTML" },
  { icon: siCss, label: "CSS" },
  { icon: siStorybook, label: "Storybook" },
  { icon: siFigma, label: "Figma" },
] as const;

export function HeroSkills() {
  return (
    <div className="border-t border-ink/10 pt-5 max-sm:pt-6 md:pt-6">
      <p className="caption-mono text-ink-600 max-sm:text-center sm:text-left">Stack</p>
      <ul className="mt-4 grid w-full grid-cols-3 gap-x-2.5 gap-y-2.5 max-sm:mt-5 sm:mt-4 sm:grid-cols-5 sm:gap-3 md:grid-cols-9">
        {skills.map((s) => (
          <li key={s.label} className="min-w-0">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  style={{ ["--brand" as never]: `#${s.icon.hex}` }}
                  className="group inline-flex aspect-square w-full items-center justify-center rounded-lg border border-ink/10 bg-surface p-[0.15rem] text-[var(--brand)] shadow-sm transition-[transform,box-shadow,border-color,background-color] duration-200 hover:scale-[1.02] hover:[border-color:var(--brand)] hover:[box-shadow:0_14px_34px_-18px_var(--brand)] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:rounded-xl sm:hover:scale-[1.04] sm:active:scale-[1.01] md:p-[0.2rem]"
                  aria-label={s.label}
                >
                  <svg
                    className="size-10 shrink-0 transition-transform duration-200 group-hover:rotate-[-4deg] sm:size-7 md:size-7"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path fill="currentColor" d={s.icon.path} />
                  </svg>
                </button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>{s.label}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
}
