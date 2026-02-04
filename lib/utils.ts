import { TechIcon } from "@/constants";
import type { Project, Category } from "@/type";

import { clsx, type ClassValue } from "clsx";
import { HelpCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterProjectsByCategory(
  projects: Project[],
  category: Category,
) {
  if (category === "All Projects") {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function renderIcon(string: string) {
  const keys = Object.keys(TechIcon) as Array<keyof typeof TechIcon>;
  const key = keys.find((k) => string.toLowerCase().includes(k.toLowerCase()));

  return key ? TechIcon[key] : HelpCircle;
}
