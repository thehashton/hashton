import { siInstagram, siX, siYoutube } from "simple-icons";

import { cn } from "@/lib/utils";

export function IconX({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      className={cn("origin-center", className)}
      viewBox="0 0 24 24"
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d={siX.path} />
    </svg>
  );
}

export function IconInstagram({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d={siInstagram.path} />
    </svg>
  );
}

export function IconYoutube({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      className={cn("origin-center", className)}
      viewBox="0 0 24 24"
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d={siYoutube.path} />
    </svg>
  );
}

export function IconGithub({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55 0-.27-.01-1.16-.01-2.1-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.2-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.75.8 1.2 1.83 1.2 3.09 0 4.42-2.7 5.39-5.28 5.67.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );
}

export function IconLinkedIn({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4V23h-4V8Zm7.5 0h3.84v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V23h-4v-6.07c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V23h-4V8Z"
      />
    </svg>
  );
}
