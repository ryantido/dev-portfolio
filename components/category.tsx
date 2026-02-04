"use client";

import { categories } from "@/constants";
import { cn } from "@/lib/utils";
import { useProjectsStore } from "@/store";
import { motion } from "motion/react";
import { useShallow } from "zustand/shallow";

export function CategoryTabs() {
  const { active, setActive } = useProjectsStore(
    useShallow((state) => {
      return {
        active: state.category,
        setActive: state.setCategory,
      };
    }),
  );

  return (
    <div
      className="relative flex flex-wrap gap-x-4 md:gap-x-8 md:border-b border-neutral-800"
      aria-label="section categories"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          onClick={() => setActive(cat)}
          aria-selected={active === cat}
          tabIndex={active === cat ? 0 : -1}
          className="relative pb-3 text-sm font-medium text-neutral-400 hover:text-white transition cursor-pointer"
        >
          <span className={cn(active === cat && "text-white")}>{cat}</span>

          {active === cat && (
            <motion.div
              layoutId="active-tab"
              className="absolute left-0 right-0 md:-bottom-px h-0.5 bg-blue-500 rounded-full"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
