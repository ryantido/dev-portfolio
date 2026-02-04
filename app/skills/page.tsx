import {
  BackendCard,
  FrontendCard,
  SkillsHeader,
  ToolsCard,
} from "@/components/skills-comp";
import {
  BackendSkills,
  FrontendSkills,
  IncomingSkills,
  SkillsTint,
  ToolsSkills,
} from "@/constants";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SkillsPage() {
  return (
    <section
      aria-label="Skills & Tools sections"
      className="py-2 md:py-6 space-y-8"
    >
      <header aria-label="skills header" className="space-y-2">
        <h1 className="font-bold text-2xl md:text-4xl font-">
          Technical Arsenal
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl">
          Building scalable solutions with modern architecture and cutting-edge
          tools. I focus on clean code, performance, and user-centric design.
        </p>
      </header>
      <section
        aria-label="frontend engineering section"
        className="space-y-8 mb-12"
      >
        <SkillsHeader title="Frontend Engineering" icon={FaReact} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {FrontendSkills.map((skill, i) => (
            <FrontendCard key={skill.title} delay={i * 0.25} {...skill} />
          ))}
        </div>
      </section>
      <section
        aria-label="backend engineering section"
        className="space-y-8 mb-12"
      >
        <SkillsHeader title="Backend Engineering" icon={FaNodeJs} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {BackendSkills.map((skill) => (
            <BackendCard key={skill.title} {...skill} />
          ))}
        </div>
      </section>
      <section aria-label="tools section" className="space-y-8">
        <SkillsHeader title="DevOps & Tools" icon={BsTools} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {ToolsSkills.map((skill) => (
            <ToolsCard key={skill.title} {...skill} />
          ))}
        </div>
      </section>
      <Link href="/skills/incoming">
        <section aria-label="Incoming skills section">
          <figure className="p-6 md:px-8 md:py-12 relative">
            <div className="absolute inset-0 bg-black/65 rounded-xl -z-10" />
            <Image
              src="/incoming.jpg"
              alt="Incoming skills banner"
              className="object-cover -z-20 rounded-xl"
              fill
            />
            <figcaption className="flex justify-between items-center flex-wrap gap-y-2 z-20">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3">
                  Currently Learning
                </h3>
                <p className="text-base text-slate-200/80 font-medium max-w-lg">
                  I'm always looking to expand my skillset and stay up-to-date
                  with the latest technologies. AI/ML, FastAPI, and GraphQL are
                  my current focus.
                </p>
              </div>

              <div className="inline-flex items-center gap-2.5">
                {IncomingSkills.map(({ title, icon: Icon }) => (
                  <div
                    key={title}
                    className={cn(
                      "flex flex-col p-4 size-22 sm:size-24 shrink-0 rounded-lg gap-2",
                      "bg-purple-100 text-purple-500 items-center justify-center",
                      SkillsTint[title.toLowerCase()],
                      "max-lg:mt-3",
                    )}
                  >
                    <Icon size={28} /> <span>{title}</span>
                  </div>
                ))}
              </div>
            </figcaption>
          </figure>
        </section>
      </Link>
    </section>
  );
}
