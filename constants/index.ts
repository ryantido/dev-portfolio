import type {
  Article,
  BackendCard,
  CurriculumCardProps,
  CVData,
  FrontendCard,
  Goal,
  Project,
} from "@/type";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import {
  SiExpress,
  SiFastapi,
  SiFigma,
  SiGit,
  SiGraphql,
  SiJest,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { RiRobot3Fill, RiTeamFill } from "react-icons/ri";
import { IoCalendarNumber } from "react-icons/io5";
import { LuPackage2 } from "react-icons/lu";
import { GiGraduateCap } from "react-icons/gi";

export const links = [
  {
    label: "About",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Skills & Tools",
    href: "/skills",
  },
  {
    label: "Incoming",
    href: "/incoming",
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const social_links = [
  { name: "Github", link: "https://github.com/ryantido" },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/ryan-tido-29450633a",
  },
  { name: "Twitter", link: "https://x.com/ryantido34" },
] as const;

export const TechStack = [
  { icon: FaReact, label: "React" },
  { icon: FaNodeJs, label: "Node.js" },
  { icon: TbBrandNextjs, label: "Next" },
  { icon: SiFigma, label: "Figma" },
  { icon: BiLogoTypescript, label: "TypeScript" },
] as const;

export const categories = [
  "All Projects",
  "Fullstack",
  "Frontend",
  "Backend",
  "Mobile",
] as const;

export const ProjectArray: Project[] = [
  {
    id: "1",
    title: "E-Commerce Titan",
    description:
      "Une plateforme de vente en ligne complète avec gestion de panier et paiements sécurisés.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
    category: "Fullstack",
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    link: "https://github.com/votre-compte/ecommerce-titan",
  },
  {
    id: "2",
    title: "Portfolio Minimaliste",
    description:
      "Un site vitrine ultra-rapide axé sur la performance et les animations fluides.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    category: "Frontend",
    technologies: ["React", "Framer Motion", "Three.js"],
    link: "https://github.com/votre-compte/minimal-portfolio",
  },
  {
    id: "3",
    title: "Task Master API",
    description:
      "API REST robuste gérant l'authentification JWT et la synchronisation de données en temps réel.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1600&auto=format&fit=crop",
    category: "Backend",
    technologies: ["Node.js", "Express", "MongoDB", "Redis"],
    link: "https://github.com/votre-compte/task-master-api",
  },
  {
    id: "4",
    title: "Social Connect",
    description:
      "Réseau social permettant le partage de photos et les discussions en direct via WebSockets.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    category: "Fullstack",
    technologies: ["Vue.js", "Firebase", "Socket.io"],
    link: "https://github.com/votre-compte/social-connect",
  },
  {
    id: "5",
    title: "Crypto Dashboard",
    description:
      "Tableau de bord de suivi de cryptomonnaies avec graphiques dynamiques et données en direct.",
    image:
      "https://images.unsplash.com/photo-1642790103517-18129f1e883d?q=80&w=1600&auto=format&fit=crop",
    category: "Frontend",
    technologies: ["TypeScript", "Chart.js", "TanStack Query"],
    link: "https://github.com/votre-compte/crypto-dash",
  },
  {
    id: "6",
    title: "E-Commerce Titan",
    description:
      "Une plateforme de vente en ligne complète avec gestion de panier et paiements sécurisés.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
    category: "Fullstack",
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    link: "https://github.com/votre-compte/ecommerce-titan",
  },
  {
    id: "7",
    title: "Portfolio Minimaliste",
    description:
      "Un site vitrine ultra-rapide axé sur la performance et les animations fluides.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    category: "Frontend",
    technologies: ["React", "Framer Motion", "Three.js"],
    link: "https://github.com/votre-compte/minimal-portfolio",
  },
  {
    id: "8",
    title: "Task Master API",
    description:
      "API REST robuste gérant l'authentification JWT et la synchronisation de données en temps réel.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1600&auto=format&fit=crop",
    category: "Backend",
    technologies: ["Node.js", "Express", "MongoDB", "Redis"],
    link: "https://github.com/votre-compte/task-master-api",
  },
  {
    id: "9",
    title: "Social Connect",
    description:
      "Réseau social permettant le partage de photos et les discussions en direct via WebSockets.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    category: "Fullstack",
    technologies: ["Vue.js", "Firebase", "Socket.io"],
    link: "https://github.com/votre-compte/social-connect",
  },
  {
    id: "10",
    title: "Crypto Dashboard",
    description:
      "Tableau de bord de suivi de cryptomonnaies avec graphiques dynamiques et données en direct.",
    image:
      "https://images.unsplash.com/photo-1642790103517-18129f1e883d?q=80&w=1600&auto=format&fit=crop",
    category: "Frontend",
    technologies: ["TypeScript", "Chart.js", "TanStack Query"],
    link: "https://github.com/votre-compte/crypto-dash",
  },
  {
    id: "11",
    title: "E-Commerce Titan",
    description:
      "Une plateforme de vente en ligne complète avec gestion de panier et paiements sécurisés.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
    category: "Fullstack",
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    link: "https://github.com/votre-compte/ecommerce-titan",
  },
  {
    id: "12",
    title: "Portfolio Minimaliste",
    description:
      "Un site vitrine ultra-rapide axé sur la performance et les animations fluides.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    category: "Frontend",
    technologies: ["React", "Framer Motion", "Three.js"],
    link: "https://github.com/votre-compte/minimal-portfolio",
  },
] as const;

export const SkillsTint = {
  "node.js": "bg-green-100 text-green-500",
  express: "bg-yellow-100 text-yellow-500",
  "react/next.js": "bg-primary/10 text-primary",
  "react native": "bg-primary/10 text-primary",
  typescript: "bg-primary text-blue-50",
  tailwind: "bg-sky-100 text-sky-500",
  nest: "bg-rose-100 text-rose-500",
  graphql: "bg-pink-100 text-pink-500",
  postgresql: "bg-indigo-100 text-indigo-500",
  figma: "bg-purple-500 text-purple-100",
  supabase: "bg-green-100 text-green-500",
  mongodb: "bg-green-100 text-green-500",
  fastapi: "bg-emerald-100 text-emerald-500",
  "next.js": "bg-gray-100 text-gray-500",
} as Record<string, string>;

export const FrontendSkills: FrontendCard[] = [
  {
    title: "React/Next.js",
    icon: FaReact,
    description: "Component based architecture, SSR, SSG, ISR, Hooks",
    experience: "Expert",
    range: 100,
  },
  {
    title: "React Native",
    icon: TbBrandReactNative,
    description: "Cross-platform mobile app development, hooks, navigation",
    experience: "Proficient",
    range: 80,
  },
  {
    title: "TypeScript",
    icon: TbBrandTypescript,
    description: "Static typing, type inference, interfaces, enums, generics",
    experience: "Proficient",
    range: 95,
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Utility-first CSS framework, responsive design, dark mode",
    experience: "Expert",
    range: 100,
  },
] as const;

export const BackendSkills: BackendCard[] = [
  {
    title: "Node.js",
    icon: FaNodeJs,
    description: "Advanced",
  },
  {
    title: "Express",
    icon: SiExpress,
    description: "Advanced",
  },
  {
    title: "Nest",
    icon: SiNestjs,
    description: "Intermediate",
  },
  {
    title: "PostgreSQL",
    icon: SiPostgresql,
    description: "Intermediate",
  },
] as const;

export const ToolsSkills = [
  {
    title: "Figma",
    icon: SiFigma,
  },
  {
    title: "Git",
    icon: SiGit,
  },
  {
    title: "Jest",
    icon: SiJest,
  },
  {
    title: "Bash",
    icon: VscTerminalBash,
  },
  // {
  //   title: "Prisma",
  //   icon: SiPrisma,
  // },
  // {
  //   title: "Vercel",
  //   icon: SiVercel,
  // },
] as const;

export const IncomingSkills = [
  {
    icon: RiRobot3Fill,
    title: "AI/ML",
  },
  {
    icon: SiFastapi,
    title: "FastAPI",
  },
  {
    icon: SiGraphql,
    title: "GraphQL",
  },
] as const;

export const ArticleArray: Article[] = [
  {
    id: "1",
    title: "E-Commerce Titan",
    description:
      "Une plateforme de vente en ligne complète avec gestion de panier et paiements sécurisés.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
    category: "Fullstack",
    date: new Date(),
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    timeToRead: Math.round(Math.random() * 9),
  },
  {
    id: "2",
    title: "Portfolio Minimaliste",
    description:
      "Un site vitrine ultra-rapide axé sur la performance et les animations fluides.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    category: "Frontend",
    date: new Date(),
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    timeToRead: Math.round(Math.random() * 9),
  },
  {
    id: "3",
    title: "Task Master API",
    description:
      "API REST robuste gérant l'authentification JWT et la synchronisation de données en temps réel.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1600&auto=format&fit=crop",
    category: "Backend",
    date: new Date(),
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    timeToRead: Math.round(Math.random() * 9),
  },
  {
    id: "4",
    title: "Social Connect",
    description:
      "Réseau social permettant le partage de photos et les discussions en direct via WebSockets.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    category: "Fullstack",
    date: new Date(),
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    timeToRead: Math.round(Math.random() * 9),
  },
  {
    id: "5",
    title: "Crypto Dashboard",
    description:
      "Tableau de bord de suivi de cryptomonnaies avec graphiques dynamiques et données en direct.",
    image:
      "https://images.unsplash.com/photo-1642790103517-18129f1e883d?q=80&w=1600&auto=format&fit=crop",
    category: "Frontend",
    date: new Date(),
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    timeToRead: Math.round(Math.random() * 9),
  },
  {
    id: "6",
    title: "E-Commerce Titan",
    description:
      "Une plateforme de vente en ligne complète avec gestion de panier et paiements sécurisés.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
    category: "Fullstack",
    date: new Date(),
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    timeToRead: Math.round(Math.random() * 9),
  },
  {
    id: "7",
    title: "Portfolio Minimaliste",
    description:
      "Un site vitrine ultra-rapide axé sur la performance et les animations fluides.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    category: "Frontend",
    date: new Date(),
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    timeToRead: Math.round(Math.random() * 9),
  },
  {
    id: "8",
    title: "Task Master API",
    description:
      "API REST robuste gérant l'authentification JWT et la synchronisation de données en temps réel.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1600&auto=format&fit=crop",
    category: "Backend",
    date: new Date(),
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    timeToRead: Math.round(Math.random() * 9),
  },
  {
    id: "9",
    title: "Social Connect",
    description:
      "Réseau social permettant le partage de photos et les discussions en direct via WebSockets.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    category: "Fullstack",
    date: new Date(),
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    timeToRead: Math.round(Math.random() * 9),
  },
  {
    id: "10",
    title: "Crypto Dashboard",
    description:
      "Tableau de bord de suivi de cryptomonnaies avec graphiques dynamiques et données en direct.",
    image:
      "https://images.unsplash.com/photo-1642790103517-18129f1e883d?q=80&w=1600&auto=format&fit=crop",
    category: "Frontend",
    date: new Date(),
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    timeToRead: Math.round(Math.random() * 9),
  },
  {
    id: "11",
    title: "E-Commerce Titan",
    description:
      "Une plateforme de vente en ligne complète avec gestion de panier et paiements sécurisés.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
    category: "Fullstack",
    date: new Date(),
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    timeToRead: Math.round(Math.random() * 9),
  },
  {
    id: "12",
    title: "Portfolio Minimaliste",
    description:
      "Un site vitrine ultra-rapide axé sur la performance et les animations fluides.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    category: "Frontend",
    date: new Date(),
    technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    timeToRead: Math.round(Math.random() * 9),
  },
] as const;

export const HeavyRotation = [
  {
    title: "Next.js",
    icon: TbBrandNextjs,
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
  },
  {
    title: "Figma",
    icon: SiFigma,
  },
  {
    title: "Supabase",
    icon: SiSupabase,
  },
] as const;

export const goals: Goal[] = [
  {
    id: "1",
    title: "Contribute to Open Source",
    description: "Merged 3 PRs into popular UI libraries.",
    status: "done",
    badge: "Done",
  },
  {
    id: "2",
    title: "Publish Tech Blog",
    description: "Writing a deep dive on Next.js 14 server actions.",
    status: "draft",
    badge: "Drafting",
  },
  {
    id: "3",
    title: "Speek at Local Meetup",
    description: "Submit a talk proposal to a local meetup.",
    status: "planned",
    badge: "Planned",
  },
  {
    id: "4",
    title: "Launch AI Chatbot",
    description: "Build a chatbot using OpenAI and deploy it to Vercel.",
    status: "planned",
    badge: "Planned",
  },
  {
    id: "5",
    title: "Launch SaaS MMP",
    description:
      "Build a SaaS MMP platform using Next.js and deploy it to Vercel.",
    status: "planned",
    badge: "Planned",
  },
] as const;

export const CurriculumCards: CurriculumCardProps[] = [
  {
    title: "4+",
    icon: IoCalendarNumber,
    description: "Years of experience",
  },
  {
    title: "15+",
    icon: LuPackage2,
    description: "Projects completed",
  },
  {
    title: "20+",
    icon: RiTeamFill,
    description: "Contributions to open source",
  },
  {
    title: "M.S.",
    icon: GiGraduateCap,
    description: "Bachelor of software engineering",
  },
] as const;

export const fallbackCV: CVData = {
  fullName: "Your Name",
  title: "Full Stack Developer",
  location: "Your City",
  email: "your@email.com",
  website: "yourportfolio.dev",
  github: "github.com/username",
  experience: [
    {
      role: "Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      highlights: [
        "Built modern UI using React and Tailwind",
        "Improved performance by 35%",
        "Worked closely with designers & backend team",
      ],
    },
  ],
  education: [
    {
      degree: "BSc Computer Science",
      school: "Your University",
      year: "2020",
    },
  ],
  skills: ["React", "Node.js", "TypeScript", "Docker"],
  languages: [{ name: "English", level: "Fluent" }],
} as const;

export const TechIcon = {
  react: FaReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  next: TbBrandNextjs,
  nestjs: SiNestjs,
  git: SiGit,
  native: TbBrandReactNative,
  node: FaNodeJs,
  express: SiExpress,
  postgresql: SiPostgresql,
  figma: SiFigma,
  jest: SiJest,
  bash: VscTerminalBash,
  prisma: SiPrisma,
  fastapi: SiFastapi,
  graphql: SiGraphql,
  supabase: SiSupabase,
} as const;
