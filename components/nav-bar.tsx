import { AppBrand } from "./logo";

import { Button } from "./ui/button";
import { links } from "@/constants";
import { LinkComponent, ResumeLink } from "./link";
import { FaBars } from "react-icons/fa";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

export const NavBar = () => {
  return (
    <header className="h-14 bg-background/20 backdrop-blur-md shadow-xs shadow-ring/10 sticky top-0 z-50  px-4">
      <div className="container mx-auto h-full flex items-center justify-between relative">
        <AppBrand />
        <nav className="hidden md:inline-flex items-center gap-x-6">
          {links.map((link) => (
            <LinkComponent key={link.label} {...link} />
          ))}
          <ResumeLink />
        </nav>

        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" variant="ghost" className="md:hidden">
              <FaBars />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-65">
            <nav className="flex flex-col gap-y-4">
              {links.map((link) => (
                <LinkComponent key={link.label} {...link} />
              ))}
              <ResumeLink />
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
