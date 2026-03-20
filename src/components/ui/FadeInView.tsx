"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}

export default function FadeInView({
  children,
  className,
  delay = 0,
  as = "div",
}: FadeInViewProps) {
  const Component = motion.create(as);

  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
