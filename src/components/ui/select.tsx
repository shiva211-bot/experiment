import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

type Option = { value: string; label: string };

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: Option[];
  error?: string;
};

export const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { label, options, error, id, className, ...rest },
  ref
) {
  const autoId = useId();
  const selectId = id ?? autoId;

  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label htmlFor={selectId} className="label-technical text-text-secondary">
          {label}
        </label>
      ) : null}
      <select
        ref={ref}
        id={selectId}
        aria-invalid={!!error}
        className={cn(
          "h-10 rounded-md border bg-night/60 px-3 text-sm text-text-primary",
          "transition-colors duration-fast",
          "focus:outline-none focus:border-cyanGlow/60 focus:ring-1 focus:ring-cyanGlow/30",
          error ? "border-danger/50" : "border-line/15 hover:border-line/25",
          className
        )}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-night">
            {o.label}
          </option>
        ))}
      </select>
      {error ? <p className="text-xs text-danger">{error}</p> : null}
    </div>
  );
});
