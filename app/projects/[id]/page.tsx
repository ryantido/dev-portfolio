import { AboutCta, ProjectCta } from "@/components/about-cta";
import { Fallback } from "@/components/fallback";
import { ToolsCard } from "@/components/skills-comp";
import { ProjectArray } from "@/constants";
import { renderIcon } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import Image from "next/image";

export default async function ProjectDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const project = ProjectArray.find((p) => p.id === id);

  return (
    <section aria-label="Projects section" className="py-2 md:py-6">
      <section
        aria-label="Section header"
        className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 mt-4"
      >
        <section
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 order-2 lg:order-1"
          aria-label="project headline"
        >
          <div
            role="status"
            className="hidden lg:inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
              Case study
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-black tracking-tight leading-[1.15] text-[#111318] dark:text-white text-[32px] lg:text-6xl"
          >
            {project?.title}
          </h1>

          <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-[32ch] lg:max-w-xl">
            {project?.description}
          </p>

          <ProjectCta liveLink={project?.link!} repoName={project?.title!} />
        </section>
        <figure className="relative aspect-video overflow-hidden rounded-lg order-1 lg:order-2">
          <Fallback image={project?.image!} title={project?.title!} />
        </figure>
      </section>
      <section aria-label="project description" className="space-y-8 mt-6">
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold">Overview</h3>
          <div
            className="flex flex-col *:flex-1 *:py-4 md:flex-row gap-3 justify-between border border-border rounded-xl px-4 items-center divide-x divide-border"
            aria-label="overview block"
          >
            <div className="sppace-y-2.5">
              <h5 className="text-muted-foreground text-sm font-thin">Role</h5>
              <span className="font-semibold text-base">
                Fullstack Enginner
              </span>
            </div>
            <div className="sppace-y-2.5">
              <h5 className="text-muted-foreground text-sm font-thin">
                Timeline
              </h5>
              <span className="font-semibold text-base">3 weeks (Agile)</span>
            </div>
            <div className="sppace-y-2.5">
              <h5 className="text-muted-foreground text-sm font-thin">
                Team Size
              </h5>
              <span className="font-semibold text-base">
                1 (dev & designer)
              </span>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold">The Challenge</h3>
          <p className="text-muted-foreground w-full max-md:text-center indent-6">
            Not provided
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold">
            Tech Stack & Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {project?.technologies.map((t) => (
              <ToolsCard
                key={t}
                icon={renderIcon(t) as React.ComponentType<LucideProps>}
                title={t}
                className="py-6"
              />
            ))}
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold">
            Development & Solutions
          </h3>
          <p className="text-muted-foreground w-full max-md:text-center indent-6">
            Not provided
          </p>
        </section>
      </section>
    </section>
  );
}
