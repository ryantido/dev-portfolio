"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

export const LinkComponent = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "text-xs font-sora text-gray-300 hover:text-gray-200 hover:font-semibold transition-colors",
        pathname === href && "text-gray-200 font-semibold",
      )}
      href={href}
    >
      {label}
    </Link>
  );
};

export const ResumeLink = () => {
  const router = useRouter();
  return (
    <Button
      className="text-blue-50 font-semibold"
      onClick={() => router.push("/resume")}
    >
      Resume
    </Button>
  );
};
