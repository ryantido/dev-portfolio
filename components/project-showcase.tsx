"use client";

import { filterProjectsByCategory } from "@/lib/utils";
import { CategoryTabs } from "./category";
import { ShowcaseCard } from "./showcase-card";
import { useProjectsStore } from "@/store";
import { useShallow } from "zustand/shallow";
import { FaFolderOpen } from "react-icons/fa";

export const ProjectShowcase = () => {
  const { projects, category } = useProjectsStore(
    useShallow((state) => {
      return {
        projects: state.projects,
        category: state.category,
      };
    }),
  );
  const filteredProjects = filterProjectsByCategory(projects, category);

  return (
    <section aria-label="section content" className="space-y-8">
      <CategoryTabs />
      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        aria-label="section grid"
      >
        {filteredProjects.length ? (
          filteredProjects.map((projects) => (
            <ShowcaseCard key={projects.id} {...projects} />
          ))
        ) : (
          <div className="grid place-content-center col-span-full h-64 [&_svg]:mx-auto space-y-0.5 text-muted-foreground text-center">
            <FaFolderOpen size={20} /> <p>This category has no projects yet.</p>
          </div>
        )}
      </section>
    </section>
  );
};
