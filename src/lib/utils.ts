import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Extend `cn` with Magic UI or custom enhancements
export function cn(...inputs: ClassValue[]) {
  // Add any preprocessing or logic here if needed
  return twMerge(clsx(inputs));
}
