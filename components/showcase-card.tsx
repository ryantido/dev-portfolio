import { Card, CardContent, CardFooter } from "./ui/card";
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
  category
}: Project) => {
  return (
    <Card className="bg-black/10 flex flex-col h-full py-0 gap-2">
      <CardContent className="px-0 flex flex-col flex-1">
        <figure
          className="relative aspect-4/3 w-full overflow-hidden"
          aria-label="project image"
        >
          <Fallback image={image} title={title} />
        </figure>
        <div
          className="p-4 flex flex-col justify-between gap-y-5 flex-1"
          aria-label="project description"
        >
          <article aria-label="project content">
            <span
              className="flex flex-wrap gap-2 mb-3"
              aria-label="tags"
            >
              {technologies.map((technology, i) => (
                <span
                  key={i}
                  className={cn(
                    "text-xs uppercase tracking-wider px-3 py-1 rounded-sm",
                    i === 0
                      ? "bg-primary/10 text-primary"
                      : "bg-[#282e39] text-[#9ca6ba]"
                  )}
                >
                  {technology}
                </span>
              ))}
            </span>

            <h2
              className="font-bold text-lg sm:text-xl md:text-2xl font-outfit mb-2"
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
      <CardFooter className="mt-auto flex flex-col sm:flex-row gap-3 px-4 pb-4">
        <a
          href={category === "Mobile" || category === "Backend" ? "#not-allowed" : link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1"
        >
          <Button className="w-full gap-2 disabled:cursor-not-allowed" disabled={category === "Mobile" || category === "Backend"}>
            <IoEye />
            <span>Live Demo</span>
          </Button>
        </a>

        <Link href={`/projects/${id}`} className="w-full sm:w-auto">
          <Button
            variant="outline"
            size="icon"
            className="w-full sm:w-10"
          >
            <IoCode />
          </Button>
        </Link>
      </CardFooter>
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
