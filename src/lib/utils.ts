// Imports
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/*
 * Utility function: Merges conditional class names with Tailwind conflict resolution.
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
