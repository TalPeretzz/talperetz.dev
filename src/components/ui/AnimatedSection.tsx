"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

type AnimatedSectionProps = ComponentPropsWithoutRef<"section">;

export default function AnimatedSection(props: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      {...props}
    />
  );
}
