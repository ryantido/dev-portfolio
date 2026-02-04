import { cva } from "class-variance-authority";

export const goalDotVariants = cva("h-2.5 w-2.5 rounded-full mt-2", {
  variants: {
    status: {
      planned: "bg-slate-400",
      "in-progress": "bg-blue-500 animate-pulse",
      done: "bg-emerald-500",
      draft: "bg-amber-500",
      blocked: "bg-red-500",
    },
  },
  defaultVariants: {
    status: "planned",
  },
});

export const goalBadgeVariants = cva(
  "text-xs px-2 py-1 rounded font-medium font-sora ml-auto",
  {
    variants: {
      status: {
        planned: "bg-slate-700 text-slate-300",
        "in-progress": "bg-blue-900 text-blue-300",
        done: "bg-emerald-900 text-emerald-300",
        draft: "bg-amber-900 text-amber-300",
        blocked: "bg-red-900 text-red-300",
      },
    },
  },
);
