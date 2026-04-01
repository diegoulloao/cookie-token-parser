// Imports
import { cn } from "@/lib/utils";

import type { ComponentProps, FC } from "react";

// Types
type CardProps = ComponentProps<"div"> & { size?: "default" | "sm" };

/*
 * Component: Provides a flexible card container with composable subcomponents.
 */
const Card: FC<CardProps> = ({ className, size = "default", ...props }) => {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className,
      )}
      {...props}
    />
  );
};

/*
 * Component: Card header wrapper for title and description content.
 */
const CardHeader: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className,
      )}
      {...props}
    />
  );
};

/*
 * Component: Card title text slot.
 */
const CardTitle: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className,
      )}
      {...props}
    />
  );
};

/*
 * Component: Card description text slot.
 */
const CardDescription: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
};

/*
 * Component: Card action slot aligned to the header side.
 */
const CardAction: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  );
};

/*
 * Component: Main card body content wrapper.
 */
const CardContent: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  );
};

/*
 * Component: Card footer section with top border styling.
 */
const CardFooter: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className,
      )}
      {...props}
    />
  );
};

// Exports
export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
