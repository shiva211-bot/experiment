import { cn } from "@/lib/utils";

export function LoadingState({
  label = "Loading",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex flex-col items-center justify-center gap-3 py-12",
        className
      )}
    >
      <div className="relative h-8 w-8">
        <span className="absolute inset-0 animate-spin rounded-full border border-cyanGlow/20 border-t-cyanGlow" />
      </div>
      <span className="label-technical">{label}</span>
    </div>
  );
}
