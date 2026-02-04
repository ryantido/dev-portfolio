import { goalDotVariants, goalBadgeVariants } from "@/lib/goal-variants";
import type { Goal, GoalListProps } from "@/type";
import React, { forwardRef, memo } from "react";
import { cn } from "@/lib/utils";
import { BiSolidFlagAlt } from "react-icons/bi";

interface GoalItemProps extends React.HTMLAttributes<HTMLLIElement> {
  goal: Goal;
  actions?: React.ReactNode;
}

export const GoalItem = memo(
  forwardRef<HTMLLIElement, GoalItemProps>(
    ({ goal, actions, className, ...props }, ref) => {
      const { title, description, status = "planned", badge, icon } = goal;

      return (
        <li
          ref={ref}
          role="listitem"
          aria-label={`${title} – ${status}`}
          className={cn(
            "group flex gap-4 rounded-xl p-4 transition-all",
            "hover:bg-muted/50 focus-within:ring-2 focus-within:ring-primary/40",
            className,
          )}
          {...props}
        >
          <span aria-hidden className={goalDotVariants({ status })} />

          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              {icon && <span className="text-muted-foreground">{icon}</span>}

              <h3 className="text-sm font-semibold leading-none tracking-tight font-outfit">
                {title}
              </h3>

              {badge && (
                <span className={goalBadgeVariants({ status })}>{badge}</span>
              )}
            </div>

            {description && (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {actions && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              {actions}
            </div>
          )}
        </li>
      );
    },
  ),
);

GoalItem.displayName = "GoalItem";

export function GoalList({
  goals,
  renderActions,
  title = "Q4 Goals",
}: GoalListProps & { title?: string }) {
  return (
    <section aria-labelledby="goals-heading">
      <h2 id="goals-heading" className="font-semibold mb-4 text-lg md:text-xl">
        <BiSolidFlagAlt className="inline text-primary mr-2 size-6" />
        {title}
      </h2>

      <ul role="list" className="space-y-1">
        {goals.map((goal) => (
          <GoalItem key={goal.id} goal={goal} actions={renderActions?.(goal)} />
        ))}
      </ul>
    </section>
  );
}
