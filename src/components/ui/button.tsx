import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap " +
  "transition-all duration-fast ease-out " +
  "disabled:opacity-50 disabled:pointer-events-none " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyanGlow focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyanGlow text-night hover:bg-cyanGlow-soft shadow-glow-sm hover:shadow-glow",
  secondary:
    "glass text-text-primary hover:border-cyanGlow/40 hover:text-cyanGlow",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-white/5",
  danger:
    "border border-danger/40 text-danger hover:bg-danger/10",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs rounded-sm",
  md: "h-10 px-4 text-sm rounded-md",
  lg: "h-12 px-6 text-base rounded-md",
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { className, variant = "primary", size = "md", type = "button", ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    />
  );
});
