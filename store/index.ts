import { ProjectArray } from "@/constants";
import { FallbackStore, type ProjectStore } from "@/type";
import { create } from "zustand";

export const useProjectsStore = create<ProjectStore>((set) => ({
  projects: ProjectArray,
  category: "All Projects",
  setProjects: (projects) => set({ projects }),
  setCategory: (category) => set({ category }),
  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),
}));

export const useFallbackStore = create<FallbackStore>((set) => ({
  error: new Set(),
  setError: (value) => {
    set((state) => {
      if (state.error.has(value)) return state;

      const newSet = new Set(state.error);
      newSet.add(value);
      return { error: newSet };
    });
  },
}));
