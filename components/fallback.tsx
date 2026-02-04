"use client";

import { useShallow } from "zustand/shallow";
import { useFallbackStore } from "@/store";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Fallback = ({
  image,
  title,
  className,
}: {
  image: string;
  title: string;
  className?: string;
}) => {
  const { isFailed, setError } = useFallbackStore(
    useShallow((state) => ({
      isFailed: state.error.has(title),
      setError: state.setError,
    })),
  );
  // console.log(isFailed);
  return (
    <Image
      className={cn(
        "object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300",
        className,
      )}
      src={isFailed ? "/placeholder.svg" : image}
      onError={() => setError(title)}
      alt={title}
      fill
    />
  );
};
