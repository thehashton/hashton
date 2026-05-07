import type { MetadataRoute } from "next";

import { getWorkSlugs } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://hashton.vercel.app";

  const work = getWorkSlugs().map((slug) => ({
    url: `${base}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...work,
  ];
}
