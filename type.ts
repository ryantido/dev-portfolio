import { LucideProps } from "lucide-react";

export type Category =
  | "All Projects"
  | "Frontend"
  | "Backend"
  | "Fullstack"
  | "Mobile";

export type GoalStatus =
  | "planned"
  | "in-progress"
  | "done"
  | "draft"
  | "blocked";

export type Props = {
  cv?: CVData | null;
};

export interface Goal {
  id: string;
  title: string;
  description?: string;
  status?: GoalStatus;
  badge?: string;
  icon?: React.ReactNode;
}

export interface GoalListProps {
  goals: Goal[];
  renderActions?: (goal: Goal) => React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: Category;
  technologies: string[];
  link: string;
}

export interface Article extends Omit<Project, "link"> {
  date: Date;
  timeToRead: number;
}

export interface ProjectStore {
  projects: Project[];
  category: Category;

  setProjects: (projects: Project[]) => void;
  setCategory: (category: Category) => void;
  addProject: (project: Project) => void;
}

export interface FallbackStore {
  error: Set<string>;
  setError: (value: string) => void;
}

export interface FrontendCard {
  title: string;
  icon: React.ComponentType<LucideProps>;
  experience: string;
  range: number;
  description: string;
}

export interface BackendCard {
  title: string;
  icon: React.ComponentType<LucideProps>;
  description: string;
}

export interface CVData {
  fullName: string;
  title: string;
  location?: string;
  email?: string;
  website?: string;
  github?: string;

  experience: {
    role: string;
    company: string;
    period: string;
    highlights: string[];
  }[];

  education: {
    degree: string;
    school: string;
    year: string;
  }[];

  skills: string[];
  languages: { name: string; level: string }[];
}

export interface CurriculumCardProps extends BackendCard {
  delay?: number;
}
