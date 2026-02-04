import { BreadcrumbHeader } from "@/components/breadcrumb";
import { Fallback } from "@/components/fallback";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArticleArray } from "@/constants";
import { cn } from "@/lib/utils";
import { FaQuoteLeft, FaQuoteRight, FaRegCalendar } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";

export default async function SinglePost({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const singlePost = ArticleArray.find((post) => post.id === id);
  return (
    <section
      aria-label={`Blog Post: ${singlePost?.title}`}
      className="py-2 md:py-6 space-y-8"
    >
      <header
        aria-label="Section header"
        className="space-y-0.5 border-b border-border pb-4"
      >
        <BreadcrumbHeader path={singlePost?.title} className="mb-4" />
        <span className="flex flex-wrap gap-2 mb-2" aria-label="tags">
          {singlePost?.technologies.map((technology, i) => (
            <span
              key={i}
              className={cn(
                "bg-primary/10 text-primary text-xs uppercase tracking-wider px-2 py-0.5 rounded-sm select-none",
                i !== 0 && "bg-[#282e39] text-[#9ca6ba]",
              )}
            >
              {technology}
            </span>
          ))}
        </span>
        <h1 className="font-bold text-2xl md:text-4xl">{singlePost?.title}</h1>
        <span
          className="inline-flex items-center gap-2 mt-2 text-xs font-sora text-muted-foreground *:inline-flex *:items-center *:gap-2"
          aria-label="release and duretion"
        >
          <span>
            <FaRegCalendar /> {singlePost?.date.toDateString()}
          </span>
          <span className="font-bold text-lg text-muted-foreground">·</span>
          <span>
            <GoClockFill /> {singlePost?.timeToRead} min read
          </span>
        </span>
      </header>
      <section
        aria-label="Post figure"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <figure className="relative overflow-hidden rounded-xl aspect-video">
          <Fallback
            image={singlePost?.image as string}
            title={singlePost?.title as string}
          />
        </figure>
        <section>
          <p>
            Rendering performance is critical in large-scale React applications.
            As your component tree grows, understanding how and when React
            updates the DOM becomes essential for maintaining a silky-smooth
            user experience.
            <span className="my-2 block" />
            <span className="text-muted-foreground block">
              In this deep dive, we'll explore advanced patterns like
              virtualization, state colocation, and the proper use of{" "}
              <code className="font-sora text-xs font-semibold bg-slate-200/10 text-slate-200 px-2 inline-flex items-center py-0.5 rounded-sm">
                useMemo
              </code>{" "}
              and{" "}
              <code className="font-sora text-xs font-semibold bg-slate-200/10 text-slate-200 px-2 inline-flex items-center py-0.5 rounded-sm">
                useCallback
              </code>{" "}
              to prevent unnecessary re-renders that can bog down your
              application.
            </span>
          </p>
          <h3 className="font-bold text-xl md:text-2xl my-2">
            The Cost of Re-rendering
          </h3>
          <p>
            React is fast by default, but it's not magic. Every time a
            component's state or props change, React runs the render function.
            If that function is expensive, or if it trigger a cascade of child
            re-renders, the main thread can become blocked, leading to janky UIs
            and a poor user experience.
          </p>
          <blockquote className="mt-4 border-l-4 max-w-xl rounded-l rounded-r-lg border-primary p-4 bg-primary/10 text-blue-50/65 italic">
            <FaQuoteLeft className="inline-block size-3 mr-2" />
            Premature optimization is the root of all evil, but performance
            death by a thousand cuts is a very real danger in modern SPAs.
            <FaQuoteRight className="inline-block size-3 ml-2" />
          </blockquote>
        </section>
      </section>
      <section aria-label="Main content" className="space-y-2.5 [&_h4]:mb-2">
        <h4 className="font-bold text-lg md:text-xl">
          Identifying Bottlenecks
        </h4>
        <p className="text-slate-200/75">
          Before fixing anything, you must measure. React DevTools profiler is
          your best friend here. Look for:
        </p>
        <ul className="list-disc list-inside my-4">
          <li>Components that render when they shouldn't</li>
          <li>Commits that take longer than 16ms</li>
          <li>Large lists rendering off-screen elements</li>
        </ul>
        <Card className="p-0 *:not-last:p-0 gap-0">
          <CardHeader>
            <header className="flex items-center p-2 bg-border rounded-t-xl gap-3 text-sm text-muted-foreground">
              <span className="inline-flex gap-1">
                {Array.from({ length: 3 }, (_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "size-2.5 rounded-full",
                      i === 0
                        ? "bg-red-500"
                        : i === 1
                          ? "bg-yellow-500"
                          : "bg-green-500",
                    )}
                  />
                ))}
              </span>
              ExpressiveCartComponent.tsx
            </header>
          </CardHeader>
          <CardContent className="pb-4">
            <TextEmphasis variant="destructive">import</TextEmphasis> React,
            &#123; memo &#125; from <TextEmphasis>"react"</TextEmphasis>; <br />
            <TextEmphasis variant="ghost">
              // Wrap component with memo to prevent re-renders if props haven't
              changed
            </TextEmphasis>
          </CardContent>
        </Card>
      </section>
      <section aria-label="Conclusion" className="space-y-3">
        <h4 className="font-bold text-lg md:text-xl">Conclusion</h4>
        <p>
          Performance tuning is an iterative process. Start with the obvious
          bottlenecks, measure the impact, and then move to granular
          optimizations. By keeping state close to where it's used and memoizing
          expensive computations, you can keep your React apps snappy even as
          they scale.
        </p>
      </section>
    </section>
  );
}

const TextEmphasis = ({
  variant = "default",
  children,
}: {
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "muted"
    | "ghost"
    | "violet";
  children: React.ReactNode;
}) => {
  const color =
    variant === "destructive"
      ? "text-red-500"
      : variant === "secondary"
        ? "text-emerald-500"
        : variant === "ghost"
          ? "text-muted-foreground"
          : variant === "muted"
            ? "text-muted"
            : variant === "violet"
              ? "text-violet-500"
              : "text-sky-400";
  return (
    <span className={cn("font-semibold text-sm font-sora", color)}>
      {children}
    </span>
  );
};
