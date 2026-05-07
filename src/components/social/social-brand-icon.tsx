import type { SimpleIcon } from "simple-icons";

import { IconLinkedIn } from "@/components/icons/brands";
import { cn } from "@/lib/utils";

import type { SocialBrand } from "@/lib/social-platforms";

type Props = {
  brand: SocialBrand;
  className?: string;
  title?: string;
};

export function SocialBrandIcon({ brand, className, title }: Props) {
  if (brand === "linkedin") {
    return <IconLinkedIn className={className} title={title} />;
  }

  return (
    <svg
      className={cn(className)}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d={(brand as SimpleIcon).path} />
    </svg>
  );
}
