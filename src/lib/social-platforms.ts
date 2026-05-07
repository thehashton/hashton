import type { SimpleIcon } from "simple-icons";
import {
  siGithub,
  siInstagram,
  siTiktok,
  siX,
  siYoutube,
} from "simple-icons";

import { site } from "@/lib/site";

/** LinkedIn uses the hand-tuned SVG in `brands.tsx` (simple-icons export naming varies). */
export type SocialBrand = SimpleIcon | "linkedin";

export type SocialPlatform = {
  id: string;
  label: string;
  href: string;
  brand: SocialBrand;
};

export const socialPlatforms: SocialPlatform[] = [
  { id: "youtube", label: "YouTube", href: site.links.youtube, brand: siYoutube },
  { id: "tiktok", label: "TikTok", href: site.links.tiktok, brand: siTiktok },
  { id: "instagram", label: "Instagram", href: site.links.instagram, brand: siInstagram },
  { id: "x", label: "X", href: site.links.x, brand: siX },
  { id: "linkedin", label: "LinkedIn", href: site.links.linkedin, brand: "linkedin" },
  { id: "github", label: "GitHub", href: site.links.github, brand: siGithub },
];
