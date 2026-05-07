"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useCallback, useState } from "react";

export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const move = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduce) return;
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setOffset({
        x: (e.clientX - cx) * strength,
        y: (e.clientY - cy) * strength,
      });
    },
    [reduce, strength],
  );

  const reset = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      className={className}
      animate={{ x: reduce ? 0 : offset.x, y: reduce ? 0 : offset.y }}
      transition={
        reduce ? { duration: 0 } : { type: "spring", stiffness: 450, damping: 28, mass: 0.4 }
      }
      onMouseMove={move}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}
