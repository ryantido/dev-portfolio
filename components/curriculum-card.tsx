"use client";

import type { CurriculumCardProps } from "@/type";
import { motion } from "motion/react";

export const CurriculumCard = ({
  title,
  icon: Icon,
  description,
  delay,
}: CurriculumCardProps) => {
  return (
    <motion.div
      className="space-y-1 gap-x-3 flex items-center md:flex-col md:items-start border border-border shadow-sm p-4 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Icon className="text-blue-500 size-7.5 md:size-7" />
      <div className="space-y-1">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-muted-foreground font-sora uppercase text-xs tracking-wide text-shadow-2xs line-clamp-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
