import { LucideProps } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import SkillsRange from "./skills-client";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "./ui/item";
import { cn } from "@/lib/utils";
import { SkillsTint } from "@/constants";
import type {
  FrontendCard as FrontendCardType,
  BackendCard as BackendCardType,
} from "@/type";

export const SkillsHeader = ({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ComponentType<LucideProps>;
}) => {
  return (
    <header className="inline-flex items-center gap-2 md:gap-4 w-full">
      <Button
        size="icon-lg"
        className="bg-primary/10 text-primary pointer-events-none"
      >
        <Icon />
      </Button>
      <h2 className="font-bold text-2xl md:text-3xl font-outfit whitespace-nowrap">
        {title}
      </h2>
      <Separator className="max-xl:hidden" />
    </header>
  );
};

export const FrontendCard = ({
  title,
  icon: Icon,
  experience,
  range,
  description,
  delay,
}: FrontendCardType & { delay?: number }) => {
  return (
    <Card className="gap-1 bg-background">
      <CardHeader>
        <div className="inline-flex items-center justify-between w-full">
          <Button className="pointer-events-none cursor-default" size="icon-lg">
            <Icon />
          </Button>
          <span className="bg-primary/10 text-primary text-xs uppercase tracking-wider px-3 py-1 rounded-sm">
            {experience}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-bold text-xl md:text-2xl font-outfit mb-2">
          {title}
        </h3>
        <CardDescription className="font-sora mb-4">
          {description}
        </CardDescription>
        <SkillsRange range={range} delay={delay} />
      </CardContent>
    </Card>
  );
};

export const BackendCard = ({
  title,
  icon: Icon,
  description,
}: BackendCardType) => {
  return (
    <Item variant="outline">
      <ItemActions>
        <Button
          className={cn(
            "pointer-events-none cursor-default rounded-full",
            SkillsTint[title.toLowerCase()],
          )}
          size="icon-lg"
        >
          <Icon />
        </Button>
      </ItemActions>
      <ItemContent className="gap-px font-sora">
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemContent>
    </Item>
  );
};

export const ToolsCard = ({
  title,
  icon: Icon,
  className,
}: {
  title: string;
  icon: React.ComponentType<LucideProps>;
  className?: string;
}) => {
  return (
    <Card className={cn("gap-2 bg-background py-8", className)}>
      <CardHeader>
        <Button
          size="icon-sm"
          className="bg-transparent pointer-events-none cursor-default mx-auto"
        >
          <Icon className="size-8 text-slate-300" />
        </Button>
      </CardHeader>
      <CardContent>
        <h3 className="font-bold text-xl md:text-2xl font-outfit text-center">
          {title}
        </h3>
      </CardContent>
    </Card>
  );
};
