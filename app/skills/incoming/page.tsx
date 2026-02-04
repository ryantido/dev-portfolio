import SkillsRange from "@/components/skills-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BiTerminal } from "react-icons/bi";
import { FaPlayCircle, FaStar, FaUserGraduate } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PiBookOpenTextFill } from "react-icons/pi";
import { GiHeavyHelm } from "react-icons/gi";
import { TbHistory } from "react-icons/tb";
import { goals, HeavyRotation, SkillsTint } from "@/constants";
import { Separator } from "@/components/ui/separator";
import { GoalList } from "@/components/goals";

export default function IncomingSkills() {
  return (
    <section
      aria-label="Incoming skills and rojects section"
      className="py-2 md:py-6 space-y-8"
    >
      <header
        aria-label="Section header"
        className="space-y-0.5 border-b border-border pb-6"
      >
        <span className="inline-flex items-center gap-1 uppercase font-medium text-muted-foreground [&_svg]:text-blue-600 mb-2">
          <TbHistory size={20} /> Now/Goals
        </span>
        <h1 className="font-bold text-2xl md:text-4xl font-">
          What I'm Doing Now
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl">
          Last updated:{" "}
          <strong className="text-slate-200">January 24, 2026</strong>. A live
          sanpshot of my current focus, side-projects, an professional goals.
        </p>
      </header>
      <section
        aria-label="section content"
        className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 md:*:col-span-2 gap-4">
          <Card>
            <CardContent className="flex flex-wrap gap-4">
              <figure className="relative overflow-hidden bg-amber-600 w-full md:size-62 rounded-xl aspect-square">
                <Image
                  src="/placeholder.svg"
                  alt="placeholder"
                  className="object-cover"
                  fill
                />
              </figure>
              <article className="space-y-4 flex-2 max-md:mt-4">
                <header aria-label="article header" className="space-y-0.5">
                  <span className="flex items-center gap-2 justify-between font-medium text-muted-foreground mb-2">
                    <span className="inline-flex items-center uppercase gap-2">
                      <BiTerminal size={24} /> side project
                    </span>
                    <span className="bg-yellow-500/10 text-yellow-500 px-2 py-1 font-sora capitalize text-xs rounded">
                      pending build
                    </span>
                  </span>
                  <h1 className="font-bold text-2xl md:text-4xl mb-3">
                    Project Helios
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground max-w-xl">
                    Developing a comprehensive crypto analytics dashboard using
                    Next.js 16 and Tailwind CSS. Focising on real-time WebSocket
                    data integration and advanced charting librairies.
                  </p>
                </header>
                <footer aria-label="article footer">
                  <span className="flex flex-wrap gap-2 mb-2" aria-label="tags">
                    {["next.js", "tailwindcss", "websockets"].map(
                      (technology, i) => (
                        <span
                          className="border border-border text-xs uppercase tracking-wider px-3 py-2 rounded-sm"
                          key={i}
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </span>
                  <span className="max-[415px]:inline-flex mt-2 gap-x-px -translate-x-2">
                    {[
                      { name: "View Repo", link: "#" },
                      { name: "Live Demo", link: "#" },
                    ].map(({ name, link }) => (
                      <a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="link"
                          size="sm"
                          className={cn(
                            "text-muted-foreground",
                            name.match(/repo/i) && "text-primary",
                          )}
                        >
                          {name}
                          {name.match(/repo/i) ? (
                            <MdOutlineArrowOutward />
                          ) : (
                            <FaPlayCircle className="size-3" />
                          )}
                        </Button>
                      </a>
                    ))}
                  </span>
                </footer>
              </article>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="space-y-2">
                <Item className="p-0">
                  <ItemMedia>
                    <Button
                      size="icon-lg"
                      className="bg-amber-500/10 [&_svg]:fill-amber-500 pointer-events-none"
                    >
                      <FaUserGraduate />
                    </Button>
                  </ItemMedia>
                  <ItemContent className="gap-px justify-center">
                    <ItemTitle className="uppercase font-bold font-outfit">
                      Deep Dive
                    </ItemTitle>
                    <ItemDescription className="font-sora">
                      Current Study
                    </ItemDescription>
                  </ItemContent>
                </Item>
                <h3 className="font-bold text-xl my-2.5 flex items-center justify-between">
                  Mastering Next.js 16{" "}
                  <span className="text-sm text-primary">35%</span>
                </h3>
                <p className="text-sm md:text-base text-muted-foreground max-w-xl">
                  Learning the ins and outs of Next.js 16, including its new
                  features and best practices.
                </p>
                <SkillsRange range={35} className="h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <Item className="p-0">
                  <ItemMedia>
                    <Button
                      size="icon-lg"
                      className="bg-violet-500/10 [&_svg]:fill-violet-500 pointer-events-none"
                    >
                      <PiBookOpenTextFill />
                    </Button>
                  </ItemMedia>
                  <ItemContent className="gap-px justify-center">
                    <ItemTitle className="uppercase font-bold font-outfit">
                      Reading
                    </ItemTitle>
                    <ItemDescription className="font-sora">
                      Book of the month
                    </ItemDescription>
                  </ItemContent>
                </Item>
                <figure className="relative overflow-hidden rounded aspect-auto flex items-center gap-4">
                  <Image
                    className="object-cover w-20 h-24 rounded"
                    alt="Robert C. Martin book"
                    src="/placeholder.svg"
                    height={96}
                    width={80}
                  />
                  <figcaption className="font-sora">
                    <h4 className="font-bold text-lg">Clean Architecture</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Robert C. Martin
                    </p>
                    <span className="inline-flex gap-1 5 text-muted *:not-last:fill-yellow-500">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar key={i} />
                      ))}
                    </span>
                  </figcaption>
                </figure>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardContent>
              <h5 className="text-base font-bold gap-2 inline-flex items-center">
                <GiHeavyHelm className="text-primary" />
                <span>Heavy Rotation</span>
              </h5>
              <div className="flex max-md:flex-col gap-4 mt-2">
                {HeavyRotation.map(({ title, icon: Icon }) => (
                  <Item key={title}>
                    <ItemMedia>
                      <Button
                        size="icon"
                        className={cn(
                          SkillsTint[title.toLowerCase()],
                          "pointer-events-none rounded",
                        )}
                      >
                        <Icon
                          className={cn(
                            title.match(/next/i) && "size-4.5",
                            title.match(/type/i) && "size-3",
                          )}
                        />
                      </Button>
                    </ItemMedia>
                    <ItemContent className="p-0">
                      <ItemTitle className="font-sora font-medium capitalize">
                        {title}
                      </ItemTitle>
                    </ItemContent>
                  </Item>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="border border-border p-4 rounded-xl">
          <GoalList title={`Q${goals.length} Goals`} goals={goals} />
          <Separator className="mt-1 mb-4" />
          <p className="flex justify-between items-center text-sm text-muted-foreground uppercase mb-3">
            <span>Quaterly Progress</span>
            <span className="font-bold text-white">40%</span>
          </p>
          <SkillsRange
            range={40}
            className="h-1.5 [&_div]:bg-linear-to-r [&_div]:from-sky-500 [&_div]:via-sky-300 [&_div]:to-sky-100"
          />
        </div>
      </section>
    </section>
  );
}
