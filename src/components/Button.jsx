import {forwardRef} from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

const buttonVariants = ({ variant = "default", size = "default", className = "" }) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-0 [&_svg]:shrink-0";

  const variantClasses = {
    default: "bg-[#2d59b1] text-primary-foreground hover:bg-violet-500",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input/10 hover:bg-primary/20 hover:text-accent-foreground text-white",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8 w-full",
    icon: "h-10 w-10 -mx-2",
    md: "h-10 w-10 text-sm px-3 py-2 rounded-md",
    xl: "h-12 px-8 rounded-md",
    xs: "h-8 px-2 rounded-md",
  };

  return clsx(baseClasses, variantClasses[variant], sizeClasses[size], className);
};

// Button component
const Button = forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Component = asChild ? Slot : "button"; 
  return (
    <Component
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";
export { Button };