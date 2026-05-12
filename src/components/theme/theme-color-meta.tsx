"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

const LIGHT = "#faf7f1";
const DARK = "#0e0d0b";

/** Syncs `meta[name="theme-color"]` with resolved theme (viewport export is media-based only). */
export function ThemeColorMeta() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;
    const content = resolvedTheme === "dark" ? DARK : LIGHT;
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }, [resolvedTheme]);

  return null;
}
