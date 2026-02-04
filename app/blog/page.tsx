import { Fallback } from "@/components/fallback";
import { ShowcaseArticle } from "@/components/showcase-card";
import { Button } from "@/components/ui/button";
import { ArticleArray } from "@/constants";
import Link from "next/link";
import { FaArrowRight, FaFolderOpen } from "react-icons/fa";

export default function BlogPage() {
  return (
    <section aria-label="Blog section" className="py-2 md:py-6 space-y-8">
      <header aria-label="Blog header" className="space-y-0.5">
        <h1 className="font-bold text-2xl md:text-4xl font-">
          Writing & Thoughts
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl">
          Technical deep dives, tutorials, and career advice from the
          perspective of a Mid-level Engineer. Focused on scalability, clean
          code, and developer experience.
        </p>
      </header>
      <section
        className="grid grid-cols-1 md:grid-cols-[1.85fr_1fr] border border-border rounded-lg"
        aria-label="Blog headline"
      >
        <figure className="relative aspect-4/3 md:aspect-16/7">
          <Fallback
            image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop"
            className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            title="headline"
          />
        </figure>
        <div className="px-4 md:px-8 py-6 md:py-12 flex flex-col justify-center">
          <span className="inline-flex items-center gap-4 mb-4 pointer-events-none">
            <Button size="sm" className="bg-primary/10 text-primary">
              Featured
            </Button>
            <span className="text-muted-foreground text-sm">
              Oct 24, 2023 · 8 min read
            </span>
          </span>
          <header aria-label="Blog header" className="space-y-2">
            <h2 className="font-bold text-xl md:text-2xl">
              Scaling Next.js with Server Components
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              A deep dive into the architecture and performance benefits of
              using Server Components in Next.js, including how to migrate an
              existing application and best practices for implementation.
            </p>
          </header>
          <Link
            href="/blog/1"
            className="mt-4 w-fit relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-blue-500  gap-2 font-semibold inline-flex items-center"
          >
            Read full article <FaArrowRight size={14} />
          </Link>
        </div>
      </section>
      <section aria-label="blog content" className="space-y-8">
        <h3 className="text-lg md:text-xl font-bold">Latest Articles</h3>
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          aria-label="section grid"
        >
          {ArticleArray.length ? (
            ArticleArray.map((article) => (
              <ShowcaseArticle key={article.id} {...article} />
            ))
          ) : (
            <div className="grid place-content-center col-span-full h-64 [&_svg]:mx-auto space-y-0.5 text-muted-foreground text-center">
              <FaFolderOpen size={20} /> <p>There is no blog available yet.</p>
            </div>
          )}
        </section>
      </section>
    </section>
  );
}
