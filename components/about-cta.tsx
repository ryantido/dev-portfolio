"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdCode } from "react-icons/md";

export const AboutCta = () => {
  const router = useRouter();
  return (
    <nav className="flex flex-col sm:flex-row items-center w-full md:w-fit gap-3 pt-4">
      <Button
        size="lg"
        className="h-12 text-base rounded-xl lg:rounded-lg text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition max-md:w-full max-w-11/12"
        onClick={() => router.push("/projects")}
      >
        View Projects
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="h-12 text-base rounded-xl lg:rounded-lg border border-gray-300 dark:border-[#282e39] font-bold hover:bg-gray-100 dark:hover:bg-[#282e39] transition max-md:w-full max-w-11/12"
        onClick={() => router.push("/contact")}
      >
        Contact Me
      </Button>
    </nav>
  );
};

export const ProjectCta = ({
  liveLink,
  repoName,
}: {
  liveLink: string;
  repoName: string;
}) => {
  return (
    <nav className="flex flex-col sm:flex-row items-center w-full md:w-fit gap-3 pt-4">
      <Button
        size="lg"
        className="h-11 text-base rounded-xl lg:rounded-lg text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition max-md:w-full max-w-11/12"
        onClick={() => window.open(liveLink, "_blank")}
      >
        View Live Project
        <FaExternalLinkAlt className="size-3" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="h-11 text-base rounded-xl lg:rounded-lg border border-gray-300 dark:border-[#282e39] font-bold hover:bg-gray-100 dark:hover:bg-[#282e39] transition max-md:w-full max-w-11/12"
        onClick={() =>
          window.open(`https://github.com/ryantido/${repoName}`, "_blank")
        }
      >
        View Repository
        <MdCode className="size-4" />
      </Button>
    </nav>
  );
};
