import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center, relative",
  {
    variants: {
      variant: {
        default:
          "bg-white py-2 px-4 text-[var(--color-primary-950)] border border-gray-300 hover:bg-teal-100 hover:text-white transition-colors font-semibold",
        outline:
          "border border-gray-300 bg-transparent text-gray-800 hover:bg-teal-100 transition-colors",
        ghost: "text-gray-800 hover:bg-teal-100 transition-colors",
        link: "text-teal-800 underline hover:text-teal-600",
      },
      size: {
        default: "px-16 py-8 xl:text-4xl",
        sm: "h-8 px-3 text-xs rounded-md",
        lg: "h-10 px-6 text-base rounded-md",
        icon: "h-9 w-9 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
