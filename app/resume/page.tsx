"use client";

import { CurriculumCard } from "@/components/curriculum-card";
import CVPreview from "@/components/cv-preview";
import { Button } from "@/components/ui/button";
import { CurriculumCards, TechStack } from "@/constants";
import { cn } from "@/lib/utils";
import { BiSolidPrinter } from "react-icons/bi";
import { MdEmail, MdOutlineFileDownload } from "react-icons/md";

export default function Resume() {
  return (
    <section aria-label="Resume section" className="py-2 md:py-6">
      <section
        aria-label="section content"
        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8"
      >
        <div className="space-y-5 md:space-y-8">
          <header aria-label="Resume header" className="space-y-2">
            <h1 className="font-bold text-2xl md:text-4xl font-">
              Curriculum Vitæ
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">
              A detailed account of my professional journey, highlighting my
              skills, experiences, and achievements.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {CurriculumCards.map(({ title, icon, description }, index) => (
              <CurriculumCard
                key={title}
                icon={icon}
                title={title}
                description={description}
                delay={index * 0.25}
              />
            ))}
          </div>
          <div className="space-y-3">
            <Button size="lg" className="w-full h-12">
              <MdOutlineFileDownload className="size-6" />
              <span className="flex flex-col gap-px items-start">
                <span className="font-semibold font-outfit text-base">
                  Download Resume
                </span>
                <span className="text-[10px] text-blue-50/65 font-sora">
                  PDF Format (2.4 MB)
                </span>
              </span>
            </Button>
            <div className="max-md:hidden flex flex-col md:flex-row gap-3 *:flex-1 *:bg-background *:border *:border-border *:has-[svg]:size-10 *:hover:bg-muted-foreground/10">
              <Button size="lg">
                <BiSolidPrinter className="size-4" />
                Print
              </Button>
              <Button size="lg">
                <MdEmail className="size-4" />
                Email
              </Button>
            </div>
          </div>
          <section aria-label="Tech Stack" className="space-y-4">
            <h4 className="text-md md:text-lg font-semibold text-gray-400 uppercase">
              Tech Stack
            </h4>

            <ul className="flex flex-wrap gap-2">
              {TechStack.map(({ label, icon: Icon }) => (
                <li
                  className="flex h-9 items-center gap-2 rounded-md bg-background border border-border px-3"
                  key={label}
                >
                  <span aria-hidden className="text-lg">
                    <Icon className={cn(label.match(/next/i) && "size-5")} />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <CVPreview />
      </section>
    </section>
  );
}
