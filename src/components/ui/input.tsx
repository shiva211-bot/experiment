import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { label, hint, error, id, className, ...rest },
  ref
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const describedBy = [hint && `${inputId}-hint`, error && `${inputId}-err`]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label
          htmlFor={inputId}
          className="label-technical text-text-secondary"
        >
          {label}
        </label>
      ) : null}
      <input
        ref={ref}
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={describedBy || undefined}
        className={cn(
          "h-10 rounded-md border bg-night/60 px-3 text-sm text-text-primary",
          "placeholder:text-text-dim",
          "transition-colors duration-fast",
          "focus:outline-none focus:border-cyanGlow/60 focus:ring-1 focus:ring-cyanGlow/30",
          error
            ? "border-danger/50"
            : "border-line/15 hover:border-line/25",
          className
        )}
        {...rest}
      />
      {hint && !error ? (
        <p id={`${inputId}-hint`} className="text-xs text-text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${inputId}-err`} className="text-xs text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
});
