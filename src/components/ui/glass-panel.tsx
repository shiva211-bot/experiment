import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  strong?: boolean;
};

export function GlassPanel({
  label,
  strong,
  className,
  children,
  ...rest
}: Props) {
  return (
    <div
      className={cn(
        "relative rounded-lg p-6",
        strong ? "glass-strong" : "glass",
        className
      )}
      {...rest}
    >
      {label ? (
        <span className="label-technical absolute -top-2 left-4 bg-night px-2">
          {label}
        </span>
      ) : null}
      {children}
    </div>
  );
}
