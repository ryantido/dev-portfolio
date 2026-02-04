import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { IoCode, IoEye } from "react-icons/io5";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Article, Project } from "@/type";
import { Fallback } from "./fallback";

export const ShowcaseCard = ({
  id,
  title,
  description,
  image,
  technologies,
  link,
}: Project) => {
  return (
    <Card className="py-0 bg-black/10">
      <CardContent className="px-0 flex flex-col">
        <figure className="relative aspect-4/3" aria-label="project image">
          <Fallback image={image} title={title} />
        </figure>
        <div
          className="p-4 flex flex-col justify-between gap-y-6 flex-1"
          aria-label="project description"
        >
          <article aria-label="project content">
            <span className="flex flex-wrap gap-2 mb-2" aria-label="tags">
              {technologies.map((technology, i) => (
                <span
                  key={i}
                  className={cn(
                    "bg-primary/10 text-primary text-xs uppercase tracking-wider px-3 py-1 rounded-sm",
                    i !== 0 && "bg-[#282e39] text-[#9ca6ba]",
                  )}
                >
                  {technology}
                </span>
              ))}
            </span>
            <h2
              className="font-bold text-xl md:text-2xl font-outfit mb-3"
              aria-label="project title"
            >
              {title}
            </h2>
            <p
              className="text-sm text-muted-foreground line-clamp-3 font-sora"
              aria-label="project description"
            >
              {description}
            </p>
          </article>
          <div className="flex items-center gap-3 mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full">
                <IoEye /> <span>Live Demo</span>
              </Button>
            </a>
            <Link href={`/projects/${id}`}>
              <Button variant="outline" size="icon">
                <IoCode />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const ShowcaseArticle = ({
  id,
  title,
  description,
  image,
  category,
  date,
  timeToRead,
}: Article) => {
  return (
    <Link href={`/blog/${id}`}>
      <Card className="py-0 bg-black/10 group">
        <CardContent className="px-0 flex flex-col">
          <figure
            className="relative aspect-4/3 overflow-hidden rounded-t-xl"
            aria-label="project image"
          >
            <Fallback image={image} title={title} />
            <figcaption className="z-10 px-2 py-px bg-black/60 font-medium rounded absolute left-3 top-3 capitalize border-border text-slate-200">
              {category}
            </figcaption>
          </figure>
          <div
            className="p-4 flex flex-col justify-between gap-y-6 flex-1"
            aria-label="project description"
          >
            <article aria-label="project content">
              <span
                className="flex justify-between items-center gap-2 mb-2 text-muted-foreground"
                aria-label="release and duretion"
              >
                <span>{date.toDateString()}</span>
                <span>{timeToRead} min read</span>
              </span>
              <h2
                className="font-bold text-xl md:text-2xl font-outfit mb-3"
                aria-label="project title"
              >
                {title}
              </h2>
              <p
                className="text-sm text-muted-foreground line-clamp-3 font-sora"
                aria-label="project description"
              >
                {description}
              </p>
            </article>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
