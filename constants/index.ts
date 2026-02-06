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
  {
    label: "Git",
    icon: SiGit,
  },
  {
    label: "Jest",
    icon: SiJest,
  },
  {
    label: "Bash",
    icon: VscTerminalBash,
  },
  {
    label: "Prisma",
    icon: SiPrisma,
  },
  {
    label: "Express",
    icon: SiExpress,
  },
  {
    label: "Nest",
    icon: SiNestjs,
  },
  {
    label: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    label: "React Native",
    icon: TbBrandReactNative,
  },
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
    title: "Velora",
    repoName: "travel-planner",
    description:
      "Une plateforme de vente en ligne complète avec gestion de panier et paiements sécurisés.",
    image:
      "https://travelsplaner.vercel.app/favicon",
    category: "Fullstack",
    technologies: ["Next.js", "Prisma", "Tailwind CSS", "LocationIQ", "NextAuth", "PostgreSQL", "Typescript"],
    link: "https://travelsplaner.vercel.app",
  },
  {
    id: "2",
    title: "CV Pro Builder",
    repoName: "cv-builder",
    description:
      "CV Pro Builder est un générateur de CV professionnel en ligne, conçu par Ryan Tido pour créer des CV lisibles, modernes et prêts à être exportés en PDF.",
    image:
      "https://cv-builder-rust-alpha.vercel.app/favicon",
    category: "Fullstack",
    technologies: ["Next.js", "Tailwind CSS", "Puppeeter", "Typescript"],
    link: "https://cv-builder-rust-alpha.vercel.app",
  },
  {
    id: "3",
    title: "AI Chatbot",
    repoName: "ai-chatbot",
    description:
      "Next.js chatbot using the AI SDK.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1600&auto=format&fit=crop",
    category: "Fullstack",
    technologies: ["Next.js", "AI SDK", "Typescript", "Tailwind CSS", "PostgreSQL", "Redis", "Neon serverless"],
    link: "https://ai-chatbot-omega-peach-26.vercel.app/",
  },
  {
    id: "4",
    title: "Awards",
    repoName: "awards",
    description:
      "Awards is an immersive, interactive multiversal experience built with Next.js, GSAP, and modern design — where gaming, storytelling, and innovation converge.",
    image:
      "https://awaaaards.vercel.app/favicon.ico",
    category: "Frontend",
    technologies: ["Next.js", "GSAP", "Typescript", "Tailwind CSS"],
    link: "https://awaaaards.vercel.app",
  },
  {
    id: "5",
    title: "Nike Landing",
    repoName: "nike-landing",
    description:
      "A stunning Nike landing page",
    image:
      "https://rnike.vercel.app/favicon",
    category: "Frontend",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://rnike.vercel.app",
  },
  {
    id: "6",
    title: "Linx Ai",
    repoName: "lynx-ui-temp",
    description:
      "Lynx AI - The AI Chatbot for your business",
    image:
      "https://lynx-ui-temp.vercel.app/favicon.ico",
    category: "Frontend",
    technologies: ["Next.js", "Tailwind CSS", "Motion", "Typescript"],
    link: "https://lynx-ui-temp.vercel.app",
  },
  {
    id: "7",
    title: "Habit Coach",
    repoName: "habit-coach",
    description:
      "Habit Coach is a habit tracking app that helps you build good habits and break bad ones.",
    image:
      "https://habit-coach-six.vercel.app/favicon.ico",
    category: "Frontend",
    technologies: ["React", "Motion", "Tailwind CSS", "Typescript"],
    link: "https://habit-coach-six.vercel.app",
  },
  {
    id: "8",
    title: "Weather",
    repoName: "weather",
    description:
      "Consultez la météo en temps réel, les prévisions horaires et à 5 jours pour votre ville. Ajoutez des favoris et explorez les conditions détaillées (vent, humidité, pression, lever/coucher du soleil).",
    image:
      "https://weather-plum-mu.vercel.app/favicon",
    category: "Frontend",
    technologies: ["Next.js", "Tailwind CSS", "Typescript", "OpenWeatherMap", "Recharts", "date-fns"],
    link: "https://weather-plum-mu.vercel.app/i",
  },
  {
    id: "9",
    title: "Hello Store",
    repoName: "pern-store-ui",
    description:
      "Discover amazing products at Hello Store - Your one-stop shop for all your needs. Fast shipping, great prices, and excellent customer service.",
    image:
      "https://hello-store-eta.vercel.app/favicon",
    category: "Frontend",
    technologies: ["Next.js", "Tailwind CSS", "Typescript", "PostgreSQL", "Prisma"],
    link: "https://hello-store-eta.vercel.app",
  },
  {
    id: "10",
    title: "Wallet Backend",
    repoName: "wallet-backend",
    description:
      "Wallet Backend is a backend service for a wallet application.",
    image:
      "https://wallet-backend-dun.vercel.app/favicon.ico",
    category: "Backend",
    technologies: ["Express", "PostgreSQL", "Redis", "Upstash", "Neon serverless"],
    link: "https://wallet-backend-dun.vercel.app",
  },
  {
    id: "11",
    title: "Hello Store Backend",
    repoName: "pern-store-logic",
    description:
      "Hello Store Backend is a backend service for a Hello Store",
    image:
      "https://pern-store-logic.vercel.app/favicon.ico",
    category: "Backend",
    technologies: ["Express", "Neon serverless", "Stripe", "Arcjet", "PostgreSQL"],
    link: "https://pern-store-logic.vercel.app",
  },
  {
    id: "12",
    title: "Skynesys",
    repoName: "skynesys-website",
    description:
      "Skynesys is a website for a company that provides IT services.",
    image:
      "https://skynesys.com/favicon.ico",
    category: "Frontend",
    technologies: ["React", "Tailwind CSS", "Typescript", "Motion"],
    link: "https://skynesys.com",
  },
  {
    id: "13",
    title: "Skynesys Backend",
    repoName: "skynesys-website-backend",
    description:
      "Skynesys Backend is a backend service for the Skynesys website.",
    image:
      "https://skynesys.com/favicon.ico",
    category: "Backend",
    technologies: ["Express", "PostgreSQL", "Neon serverless"],
    link: "https://skynesys-website-backend.vercel.app",
  },
  {
    id: "14",
    title: "Hanma",
    repoName: "HanmaV2",
    description:
      "Trouvez le mentor idéal ou devenez un guide pour la nouvelle génération. Hanma connecte les professionnels ambitieux avec des experts pour un développement de carrière sur-mesure. Inscription gratuite.",
    image:
      "https://hanma-v2.vercel.app/favicon.ico",
    category: "Fullstack",
    technologies: ["React", "NestJs", "PostgreSQL", "Tailwind CSS", "Typescript"],
    link: "https://hanma-v2.vercel.app",
  },
  {
    id: "15",
    title: "Orchidee",
    repoName: "orchidee",
    description:
      `Le Complexe Scolaire Bilingue L'Orchidée (souvent appelé Collège Bilingue L'Orchidée) est un établissement privé laïc situé à Douala, au Cameroun, offrant un cycle complet de la maternelle au secondaire. Pour l'année académique 2025-2026, l'établissement a affiché un taux de réussite "plus que satisfaisant" aux derniers examens officiels et a ouvert ses inscriptions dès août 2025.`,
    image:
      "https://orchidee.vercel.app/assets/hero-image.jpeg",
    category: "Frontend",
    technologies: ["HTML5", "CSS3"],
    link: "https://orchidee.vercel.app",
  },
  {
    id: "16",
    title: "Scoop-ufade Landing",
    repoName: "scoop-ufade",
    description:
      "Scoop Ufade Landing Page",
    image:
      "https://scoop-ufade.vercel.app/favicon.ico",
    category: "Frontend",
    technologies: ["HTML5", "CSS3", "Javascript"],
    link: "https://scoop-ufade.vercel.app",
  },
  {
    id: "17",
    title: "Expense Manager",
    repoName: "expense-manager",
    description:
      "Expense Manager is a mobile application built with React Native",
    image:
      "https://expense-manager.vercel.app/favicon.ico",
    category: "Mobile",
    technologies: ["React Native", "Typescript", "Nativewind V4", "Expo", "Expo Router"],
    link: "https://expense-manager.vercel.app",
  },
  {
    id: "18",
    title: "Wallet",
    repoName: "wallet",
    description:
      "Wallet is a wallet mobile native application built with React Native",
    image:
      "https://wallet.vercel.app/favicon.ico",
    category: "Mobile",
    technologies: ["React Native", "Typescript", "Nativewind V4", "Expo", "Expo Router", "Express"],
    link: "https://wallet.vercel.app",
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
    title: (new Date().getFullYear() - 2023).toString() + "+",
    icon: IoCalendarNumber,
    description: "Years of experience",
  },
  {
    title: ProjectArray.length.toString(),
    icon: LuPackage2,
    description: "Projects completed",
  },
  {
    title: "860+",
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
  fullName: "Ryan Tido",
  title: "Full Stack Developer",
  location: "Douala, Cameroon",
  email: "ryantido34@gmail.com",
  website: "ryantido.vercel.app",
  github: "github.com/ryantido",
  experience: [
    {
      role: "Backend Developer",
      company: "Skynesys",
      period: "Dec, 2025",
      highlights: [
        "Improved performance by 35%",
        "Worked closely with designers & backend team",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Software Engineering",
      school: "Universitary Institute of Technology",
      year: "2025",
    },
    {
      degree: "Universitary Diploma in Technology",
      school: "Universitary Institute of Technology",
      year: "2024",
    },
    {
      degree: "Responsive Web Design Certificate",
      school: "FreeCodeCamp",
      year: "2024",
    },
  ],
  skills: [
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Prisma ORM",
    "Nest.Js",
    "Git",
    "Figma",
    "express",
    "React Native",
    "Bash",
    "PostgreSQL",
    "Supabase",
    "Jest",
    "Fullstack Development",
    "Web Application",
    "Teamwork",
    "Problem Solving",
    "Responsive Design",
    "Scalable Solutions",
    "Effective Communication",
  ],
  languages: [
    { name: "English", level: "Conversational" },
    { name: "French", level: "Native" },
  ],
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
