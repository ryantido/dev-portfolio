import { ProjectShowcase } from "@/components/project-showcase";

export default function Projects() {
  return (
    <section aria-label="Projects section" className="py-2 md:py-6 space-y-8">
      <header aria-label="Section header" className="space-y-0.5">
        <h1 className="font-bold text-2xl md:text-4xl font-">Selected Works</h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl">
          A collection of projects showcasing my expertise in fromtend, backend,
          and fullstack development.
        </p>
      </header>
      <ProjectShowcase />
    </section>
  );
}
