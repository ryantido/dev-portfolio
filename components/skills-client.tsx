"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function SkillsRange({
  range,
  delay = 0.5,
  className,
}: {
  range: number;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={cn("h-1 bg-primary/10 rounded-full", className)}>
      <motion.div
        className="h-full bg-primary rounded-full"
        animate={{ width: `${range}%` }}
        initial={{ width: 0 }}
        transition={{
          delay: delay,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      />
    </div>
  );
}
