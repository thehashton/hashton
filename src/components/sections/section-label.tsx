import { cn } from "@/lib/utils";

export function SectionLabel({
  id,
  label,
  className,
}: {
  id?: string;
  label: string;
  className?: string;
}) {
  return (
    <p
      id={id}
      className={cn(
        "caption-mono mb-6 inline-flex border border-ink bg-paper px-3 py-1 text-ink shadow-[4px_4px_0_0_#0a0a0a]",
        className,
      )}
    >
      {label}
    </p>
  );
}
